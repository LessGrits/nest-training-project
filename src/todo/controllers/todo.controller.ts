import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {Todo} from "../entities/todo.entity";
import {CreateDto, UpdateDto} from "./dto";
import {TodoService} from "../services/todo.service";

@Controller('/todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {
    }

    @Get()
    getAllAction(): Promise<Todo[]> {
        return this.todoService.findAll()
    }

    @Get(':id')
    async getOneAction(@Param('id') id: string): Promise<Todo> {
        const todo = await this.todoService.findOne(id);
        if (!todo) {
            throw new NotFoundException(`record with id=${id} not found`)
        }
        return this.todoService.findOne(id)
    }

    @Post()
    saveAction(@Body() createDto: CreateDto): Promise<Todo> {
        const todo = new Todo();
        todo.title = createDto.title;
        if (!createDto.isCompleted) {
            todo.isCompleted = createDto.isCompleted
        }
        return this.todoService.create(todo)
    }

    @Put(':id')
    async updateAction(
        @Param('id') id: string,
        @Body() {title, isCompleted = false}: UpdateDto
    ): Promise<Todo> {
        const todo = await this.todoService.findOne(id);
        if (!todo) {
            throw new NotFoundException(`record with id=${id} not found`)
        }
        todo.title = title;
        todo.isCompleted = isCompleted;
        return this.todoService.update(todo);
    }

    @Delete(':id')
    deleteAction(@Param('id') id: string): Promise<void> {
        return this.todoService.remove(id)
    }
}
