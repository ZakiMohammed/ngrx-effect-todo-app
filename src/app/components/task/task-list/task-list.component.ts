import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from 'src/app/models/task';
import { getAllTask } from 'src/app/store/actions';
import { TaskStoreState } from 'src/app/store/models';
import { getTasks } from 'src/app/store/selectors';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private store: Store<TaskStoreState>) {
    store.select(getTasks).subscribe(tasks => (this.tasks = tasks));
  }

  ngOnInit(): void {
    this.store.dispatch(getAllTask());
  }
}
