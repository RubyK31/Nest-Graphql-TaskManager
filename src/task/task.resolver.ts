import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './task.model';
import { CreateTaskInput } from './dto/create-task.input';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [Task])
  async tasks() {
    return this.taskService.getAllTasks();
  }

  @Mutation(() => Task)
  async createTask(@Args('input') input: CreateTaskInput) {
    return this.taskService.createTask(input.title, input.description); // Pass title and description separately
  }

  @Mutation(() => Task)
  async updateTaskStatus(
    @Args('id') id: number,
    @Args('isCompleted') isCompleted: boolean,
  ) {
    return this.taskService.updateTaskStatus(id, isCompleted);
  }
}
