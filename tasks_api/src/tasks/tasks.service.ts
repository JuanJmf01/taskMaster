import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
    private userService: UsersService,
  ) {}

  async createTask(
    createTaskDto: CreateTaskDto,
  ): Promise<Task | HttpException> {
    const { userId, ...taskData } = createTaskDto;

    const user = await this.userService.findById(userId);

    const task = this.taskRepository.create({
      ...taskData,
      user,
    });

    return this.taskRepository.save(task);
  }

  async updateTask(
    taskId: number,
    updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    await this.taskRepository.update({ taskId }, updateTaskDto);
    return this.taskRepository.findOne({ where: { taskId } });
  }

  async deleteTask(taskId: number): Promise<void> {
    await this.taskRepository.delete(taskId);
  }
}
