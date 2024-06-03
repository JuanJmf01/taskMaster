import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async createUser(
    createUserDto: CreateUserDto,
  ): Promise<HttpException | User> {
    const { username, password } = createUserDto;
    const userFound = await this.findOne(username);

    if (userFound) {
      return new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = this.usersRepository.create({
      username,
      password: hashedPassword,
    });
    return this.usersRepository.save(user);
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async findById(userId: number): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { userId } });
    if (!user) {
      throw new NotFoundException('User don\'t exist');
    }
    return user;
  }
}
