import ActionName from '../actionName';
import {ToDosState, Action} from '../../types';

const initialState: ToDosState = {
  todos: [],
};

export default (
  state: ToDosState = initialState,
  action: Action,
): ToDosState => {
  switch (action.type) {
    case ActionName.ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.payload.todo),
      };

    case ActionName.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(
          item => item.createdAt !== action.payload.todo.createdAt,
        ),
      };

    case ActionName.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(item =>
          item.createdAt === action.payload.todo.createdAt
            ? action.payload.todo
            : item,
        ),
      };

    default:
      return state;
  }
};
