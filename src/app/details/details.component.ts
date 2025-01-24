import { Component, Input} from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './new-task/new-task.model';
import { DetailsService } from './details.service';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input({required:true}) name!: string;
  @Input({required:true}) userId!: string;
  isAddingTask: boolean = false;
  // private tasksService = new DetailsService();

  constructor(private tasksService: DetailsService) {}


  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  // onCompleteTask(id: string) {
  // }

  onAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  // onSubmitAddTask(taskData: NewTaskData) {
  //   this.isAddingTask = false;
  // }

}
