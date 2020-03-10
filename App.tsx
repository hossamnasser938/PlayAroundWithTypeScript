import React, {useState, useRef} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {ToDoList} from './src/components/ToDoList';
import {connect} from 'react-redux';
import {addToDo} from './src/redux/actionCreators';
import {GlobalState, ToDo, ToDo_State} from './src/types';

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const App: React.FC<Props> = props => {
  const [typing, setTyping] = useState(false);
  const [input, updateInput] = useState('');
  const inputRef = useRef(null);

  const addHandler = (): void => {
    if (input) {
      const todo: ToDo = {
        title: input,
        state: ToDo_State.Pending,
        createdAt: Date.now(),
      };

      props.addToDo(todo);
      updateInput('');
    }
  };

  const mainBtnHandler = (): void => {
    if (typing) {
      addHandler();
      return;
    }

    setTyping(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  };

  return (
    <View style={styles.container}>
      <ToDoList todos={props.todos} />
      {typing && (
        <TextInput
          ref={inputRef}
          style={styles.input}
          value={input}
          placeholder="Enter todo title"
          onChangeText={updateInput}
        />
      )}
      {
        <Text style={styles.addBtn} onPress={mainBtnHandler}>
          {typing ? '✓' : '+'}
        </Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtn: {
    position: 'absolute',
    bottom: 50,
    right: 50,
    fontSize: 48,
    fontWeight: 'bold',
    color: '#bbb',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
  },
  input: {
    position: 'absolute',
    bottom: 50,
    left: 50,
    width: 200,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#bbb',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
  },
});

const mapStateToProps = (state: GlobalState) => ({
  todos: state.todos,
});

const mapDispatchToProps = {addToDo};

export default connect(mapStateToProps, mapDispatchToProps)(App);
