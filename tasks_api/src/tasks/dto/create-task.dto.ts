import { TaskState } from "../task.entity";
import { IsEnum, IsNotEmpty, IsString, MaxLength } from 'class-validator';


export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(55)
  title: string;

  @IsString()
  @MaxLength(505)
  description: string;

  @IsNotEmpty()
  @IsEnum(TaskState)
  state: TaskState;
}
