import { createReducer, on } from '@ngrx/store';
import * as action from './actions';
import { initialState } from './initial';
import { TaskState } from './models';

export const taskReducer = createReducer<TaskState>(
  initialState,
  on(action.getAllTask, (state): TaskState => {
    return {
      ...state,
      error: null,
      loading: true,
    };
  }),
  on(action.getAllTaskSuccess, (state, action): TaskState => {
    return {
      ...state,
      loading: false,
      tasks: action.tasks,
    };
  }),
  on(action.getAllTaskFailure, (state, action): TaskState => {
    return {
      ...state,
      loading: false,
      error: action.error,
      tasks: [],
    };
  }),
  on(action.addTask, (state): TaskState => {
    return {
      ...state,
      error: null,
      loading: true,
    };
  }),
  on(action.addTaskSuccess, (state, action): TaskState => {
    return {
      ...state,
      loading: false,
      tasks: [...state.tasks, action.task],
    };
  }),
  on(action.addTaskFailure, (state, action): TaskState => {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }),
  on(action.editTask, (state, action): TaskState => {
    return {
      ...state,
      task: action.task,
    };
  }),
  on(action.updateTask, (state): TaskState => {
    return {
      ...state,
      error: null,
      loading: true,
    };
  }),
  on(action.updateTaskSuccess, (state, action): TaskState => {
    return {
      ...state,
      loading: false,
      task: null,
      tasks: state.tasks.map(i => (i._id === action.task._id ? action.task : i)),
    };
  }),
  on(action.updateTaskFailure, (state, action): TaskState => {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }),
  on(action.removeTask, (state): TaskState => {
    return {
      ...state,
      error: null,
      loading: true,
    };
  }),
  on(action.removeTaskSuccess, (state, action): TaskState => {
    return {
      ...state,
      loading: false,
      tasks: state.tasks.filter(i => i._id !== action.task._id),
    };
  }),
  on(action.removeTaskFailure, (state, action): TaskState => {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }),
  on(action.removeAllTask, (state): TaskState => {
    return {
      ...state,
      error: null,
      loading: true,
    };
  }),
  on(action.removeAllTaskSuccess, (state): TaskState => {
    return {
      ...state,
      loading: false,
      tasks: [],
    };
  }),
  on(action.removeAllTaskFailure, (state, action): TaskState => {
    return {
      ...state,
      loading: false,
      error: action.error,
      tasks: [],
    };
  })
);
