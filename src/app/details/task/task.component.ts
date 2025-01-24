import { Component, EventEmitter, Input, Output,inject } from '@angular/core';
import { Task } from './task.model';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() completed = new EventEmitter<string>();
  private tasksService = inject(DetailsService);


  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }


}
