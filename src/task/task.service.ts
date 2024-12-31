import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Import PrismaService

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {} // Inject PrismaService

  async getAllTasks() {
    return this.prisma.task.findMany(); // Correct usage of the task model
  }

  async createTask(title: string, description: string) {
    return this.prisma.task.create({
      data: {
        title,
        description,
      },
    });
  }

  async updateTaskStatus(id: number, isCompleted: boolean) {
    return this.prisma.task.update({
      where: { id },
      data: { isCompleted },
    });
  }
}
