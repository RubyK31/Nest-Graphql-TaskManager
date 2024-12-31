import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskResolver } from './task.resolver';
import { PrismaModule } from '../prisma/prisma.module'; // Import PrismaModule

@Module({
  imports: [PrismaModule], // Make sure PrismaModule is imported
  providers: [TaskService, TaskResolver], // Add TaskService and TaskResolver to providers
})
export class TaskModule {}
