import { Body, Controller, Delete, Post, Patch, Param, BadRequestException, UseGuards } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @UseGuards(JwtAuthGuard) // Aplicar la guardia de acceso JWT
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    if (!createTaskDto.userId) {
      throw new BadRequestException('userId cannot be null');
    }
  
    return this.tasksService.createTask(createTaskDto);
  }
  

  @Patch(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() task: UpdateTaskDto,
  ): Promise<Task> {
    return this.tasksService.updateTask(parseInt(id, 10), task);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<void> {
    await this.tasksService.deleteTask(parseInt(id, 10));
  }
}
