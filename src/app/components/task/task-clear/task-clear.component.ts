import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from 'src/app/models/task';
import { removeAllTask } from 'src/app/store/actions';
import { TaskStoreState } from 'src/app/store/models';
import { getTasks, getErrorMessage } from 'src/app/store/selectors';

@Component({
  selector: 'app-task-clear',
  templateUrl: './task-clear.component.html',
})
export class TaskClearComponent {
  tasks: Task[] = [];
  errorMessage: string | null = null;

  constructor(private store: Store<TaskStoreState>) {
    store.select(getTasks).subscribe(tasks => (this.tasks = tasks));
    store.select(getErrorMessage).subscribe(errorMessage => (this.errorMessage = errorMessage));
  }

  handleRemoveTask() {
    if (!confirm('Are you sure you want to clear all tasks?')) {
      return;
    }

    const ids = this.tasks.map(i => i._id);
    this.store.dispatch(removeAllTask({ ids: ids }));
  }
}
