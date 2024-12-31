import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskInput } from './dto/create-task.input';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllTasks() {
    return this.prisma.task.findMany();
  }

  async createTask(input: CreateTaskInput) {
    return this.prisma.task.create({
      data: input,
    });
  }

  async updateTaskStatus(id: number, isCompleted: boolean) {
    return this.prisma.task.update({
      where: { id },
      data: { isCompleted },
    });
  }
}
