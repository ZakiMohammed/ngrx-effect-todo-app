import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from 'src/app/models/task';
import { editTask, removeTask } from 'src/app/store/actions';
import { TaskStoreState } from 'src/app/store/models';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
})
export class TaskItemComponent {
  @Input() task!: Task;

  constructor(private store: Store<TaskStoreState>) {}

  handleEditTask() {
    this.store.dispatch(editTask({ task: this.task }));
  }

  handleRemoveTask() {
    this.store.dispatch(removeTask({ task: this.task }));
  }
}
