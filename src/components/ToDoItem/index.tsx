import React, {useState, useRef} from 'react';
import {View, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import {removeToDo, UpdateToDo} from '../../redux/actionCreators';
import {ToDo, ToDo_State, Modified_ToDo} from '../../types';
import styles from './styles';

type Props = typeof mapDispatchToProps & {
  todo: ToDo;
};

const ToDoItem: React.FC<Props> = props => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedtitle, updateUpdatedTitle] = useState(props.todo.title);
  const inputRef = useRef(null);

  const removeHandler = (): void => {
    props.removeToDo(props.todo);
  };

  const updateHandler = (): void => {
    if (updatedtitle) {
      const modifiedToDo: Modified_ToDo = {
        ...props.todo,
        title: updatedtitle,
        modifiedAt: Date.now(),
      };

      props.UpdateToDo(modifiedToDo);
      setIsUpdating(false);
    }
  };

  const updateBtnHandler = (): void => {
    if (isUpdating) {
      updateHandler();
      return;
    }

    setIsUpdating(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  };

  return (
    <TouchableWithoutFeedback onPress={() => setIsUpdating(false)}>
      <View style={styles.container}>
        {isUpdating ? (
          <TextInput
            ref={inputRef}
            style={styles.titleInput}
            placeholder="Enter new title"
            value={updatedtitle}
            onChangeText={updateUpdatedTitle}
          />
        ) : (
          <Text>Title: {props.todo.title}</Text>
        )}
        <Text>State: {ToDo_State[props.todo.state]}</Text>
        <Text>CA: {new Date(props.todo.createdAt).toString()}</Text>
        {props.todo.modifiedAt && (
          <Text>
            MA: {new Date(props.todo.modifiedAt as number).toString()}
          </Text>
        )}
        <View style={styles.buttonsWrapper}>
          <Text style={styles.updateButton} onPress={updateBtnHandler}>
            {isUpdating ? '✓' : '✎'}
          </Text>
          {!isUpdating && (
            <Text style={styles.removeButton} onPress={removeHandler}>
              ✘
            </Text>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const mapDispatchToProps = {removeToDo, UpdateToDo};

export default connect(null, mapDispatchToProps)(ToDoItem);
