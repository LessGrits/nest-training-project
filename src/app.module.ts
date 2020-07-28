import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import {TypeOrmModule} from "@nestjs/typeorm";
import {TodoModule} from "./todo/todo.module";

@Module({
  imports: [ TypeOrmModule.forRoot(),
  TodoModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
