import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {ToDo} from '../../types';
import ToDoItem from '../ToDoItem';

interface Props {
  todos: Array<ToDo>;
}

export const ToDoList: React.FC<Props> = props => {
  const {todos} = props;

  const renderToDo = ({item}: {item: ToDo}): React.ReactElement => (
    <ToDoItem todo={item} />
  );

  const keyExtractor = (item: ToDo) => item.createdAt.toString();

  return (
    <SafeAreaView>
      <FlatList
        data={todos}
        renderItem={renderToDo}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};
