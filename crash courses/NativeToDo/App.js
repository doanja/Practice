import React, { useState } from 'react';
import {
  StyleSheet,
  Alert,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import Sandbox from './components/Sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'buy coffee', key: '2' },
    { text: 'buy coffee', key: '3' }
  ]);

  const deleteItem = key => {
    setTodos(prev => {
      return prev.filter(todo => todo.key != key);
    });
  };

  const addTodo = text => {
    if (text.length > 3) {
      setTodos(prev => {
        return [{ text, key: Math.random().toString() }, ...prev];
      });
    } else {
      Alert.alert('Ooops', 'Todos must be 3 characters long', [
        { text: 'ok', onPress: () => console.log('alert closed') }
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />

        <View style={styles.content}>
          <AddTodo addTodo={addTodo} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => <TodoItem item={item} deleteItem={deleteItem} />}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    padding: 40
  },
  list: {
    flex: 1,
    marginTop: 20
  }
});
