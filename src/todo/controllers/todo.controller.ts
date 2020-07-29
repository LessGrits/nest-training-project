import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Todo} from "../entities/todo.entity";
import {CreateDto, UpdateDto} from "./dto";

@Controller('/todo')
export class TodoController {
    @Get()
    getAllAction(): string {
     return 'get all todo'
    }

    @Get(':id')
    getOneAction(@Param('id') id : string): string {
        return `get one todo by id ${id}`
    }

    @Post()
    saveAction(@Body() todo: CreateDto): CreateDto {
        console.log(todo);
        return todo
    }

    @Put(':id')
    updateAction(
        @Param('id') id : string,
        @Body() todo: UpdateDto
    ): UpdateDto {
        console.log(`Search todo by id ${id}`);
        console.log(todo);
        return todo
    }

    @Delete(':id')
    deleteAction(@Param('id') id : string): string {
        return `delete todo by id = ${id}`
    }
}
