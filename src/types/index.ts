export enum ToDo_State {
  Pending,
  In_Progress,
  Done,
  Cancelled,
}

interface _ToDo {
  title: string;
  state: ToDo_State;
  createdAt: number;
}

export interface ToDo extends _ToDo {
  modifiedAt?: number;
}

export interface Modified_ToDo extends _ToDo {
  modifiedAt: number;
}

export * from './reduxTypes';
// export * from './apiTypes';
