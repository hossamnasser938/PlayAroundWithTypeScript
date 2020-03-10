import ActionName from '../../redux/actionName';
import {ToDo} from '../index';

export interface AddToDoAction {
  type: ActionName.ADD_TODO;
  payload: {todo: ToDo};
}

export interface RemoveToDoAction {
  type: ActionName.REMOVE_TODO;
  payload: {todo: ToDo};
}

export interface UpdateToDoAction {
  type: ActionName.UPDATE_TODO;
  payload: {todo: ToDo};
}

export type Action = AddToDoAction | RemoveToDoAction | UpdateToDoAction;
