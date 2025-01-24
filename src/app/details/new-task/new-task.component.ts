import { Input,Component, EventEmitter,inject,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from './new-task.model';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule], /*collection of directives */
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!: string;
  @Output() cancel = new EventEmitter<void>()
  @Output() add = new EventEmitter<NewTaskData>();
  // enteredTitle = signal(''); /*using signal for two way binding */
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  private tasksService= inject(DetailsService) /*alternativve yo construction based approach*/
  
  onCancel() {
    this.cancel.emit();  
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    }, this.userId);
    this.cancel.emit()
  }

}
