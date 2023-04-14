import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from 'src/app/models/task';
import { addTask, updateTask } from 'src/app/store/actions';
import { TaskStoreState } from 'src/app/store/models';
import { getTask } from 'src/app/store/selectors';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent {
  task: Task | null = null;
  title = '';

  constructor(private store: Store<TaskStoreState>) {
    this.store.select(getTask).subscribe(task => {
      this.task = task ? { ...task } : null;
      this.title = task ? task.title : this.title;
    });
  }

  handleSubmit() {
    if (this.title === '') {
      alert('Please enter title of your task');
      return;
    }

    if (!this.task) {
      const newTask: Task = {
        _id: uuid(),
        title: this.title,
      };
      this.store.dispatch(addTask({ task: newTask }));
    } else {
      this.task.title = this.title;
      this.store.dispatch(updateTask({ task: this.task }));
    }

    this.title = '';
  }
}
