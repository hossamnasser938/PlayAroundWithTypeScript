import {
  ToDo,
  Modified_ToDo,
  AddToDoAction,
  RemoveToDoAction,
  UpdateToDoAction,
} from '../../types';
import ActionName from '../actionName';

export const addToDo = (todo: ToDo): AddToDoAction => ({
  type: ActionName.ADD_TODO,
  payload: {todo},
});

export const removeToDo = (todo: ToDo): RemoveToDoAction => ({
  type: ActionName.REMOVE_TODO,
  payload: {todo},
});

export const UpdateToDo = (todo: Modified_ToDo): UpdateToDoAction => ({
  type: ActionName.UPDATE_TODO,
  payload: {todo},
});
