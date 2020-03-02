import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

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
    setTodos(prev => {
      return [{ text, key: Math.random().toString() }, ...prev];
    });
  };

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
