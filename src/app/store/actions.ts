import { createAction, props } from '@ngrx/store';
import { Task } from '../models/task';

export const getAllTaskSuccess = createAction('[Task] Success: Get All Tasks', props<{ tasks: Task[] }>());
export const getAllTaskFailure = createAction('[Task] Fail: Get All Tasks', props<{ error: string }>());
export const removeAllTaskSuccess = createAction('[Task] Success: Remove All Tasks');
export const removeAllTaskFailure = createAction('[Task] Fail: Remove All Tasks', props<{ error: string }>());
export const removeTaskSuccess = createAction('[Task] Success: Remove Task', props<{ task: Task }>());
export const removeTaskFailure = createAction('[Task] Fail: Remove Task', props<{ error: string }>());
export const addTaskSuccess = createAction('[Task] Success: Add Task', props<{ task: Task }>());
export const addTaskFailure = createAction('[Task] Fail: Add Task', props<{ error: string }>());
export const updateTaskSuccess = createAction('[Task] Success: Update Task', props<{ task: Task }>());
export const updateTaskFailure = createAction('[Task] Fail: Update Task', props<{ error: string }>());
export const editTask = createAction('[Task] Edit Task', props<{ task: Task }>());

export const getAllTask = createAction('[Task API] Get All Tasks');
export const addTask = createAction('[Task API] Add Task', props<{ task: Task }>());
export const updateTask = createAction('[Task API] Update Task', props<{ task: Task }>());
export const removeTask = createAction('[Task API] Remove Task', props<{ task: Task }>());
export const removeAllTask = createAction('[Task API] Remove All Tasks', props<{ ids: string[] }>());
