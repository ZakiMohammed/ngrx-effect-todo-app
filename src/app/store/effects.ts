import { Injectable } from '@angular/core';
import { TaskHttpService } from '../http/task.http.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as actions from './actions';

@Injectable({
  providedIn: 'root',
})
export class TaskEffects {
  constructor(private actions$: Actions, private taskHttpService: TaskHttpService) {}

  getAllTaskEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getAllTask),
      mergeMap(() =>
        this.taskHttpService.getAll().pipe(
          map(tasks => actions.getAllTaskSuccess({ tasks: tasks })),
          catchError(error => of(actions.getAllTaskFailure({ error: error.message })))
        )
      )
    )
  );

  removeAllTaskEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.removeAllTask),
      mergeMap(props =>
        this.taskHttpService.removeAll(props.ids).pipe(
          map(() => actions.removeAllTaskSuccess()),
          catchError(error => of(actions.removeAllTaskFailure({ error: error.message })))
        )
      )
    )
  );

  removeTaskEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.removeTask),
      mergeMap(props =>
        this.taskHttpService.remove(props.task._id).pipe(
          map(() => actions.removeTaskSuccess({ task: props.task })),
          catchError(error => of(actions.removeTaskFailure({ error: error.message })))
        )
      )
    )
  );

  addTaskEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.addTask),
      mergeMap(props =>
        this.taskHttpService.add(props.task).pipe(
          map(() => actions.addTaskSuccess({ task: props.task })),
          catchError(error => of(actions.addTaskFailure({ error: error.message })))
        )
      )
    )
  );

  updateTaskEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.updateTask),
      mergeMap(props =>
        this.taskHttpService.update(props.task._id, props.task).pipe(
          map(() => actions.updateTaskSuccess({ task: props.task })),
          catchError(error => of(actions.updateTaskFailure({ error: error.message })))
        )
      )
    )
  );
}
