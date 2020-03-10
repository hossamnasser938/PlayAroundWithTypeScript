import {ToDo} from '../index';

export interface ToDosState {
  todos: Array<ToDo>;
}

export type GlobalState = ToDosState;
