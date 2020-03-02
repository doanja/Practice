import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({ addTodo }) {
  const [text, setText] = useState('');

  const changeHandler = text => {
    setText(text);
  };

  const clickHandler = text => {
    addTodo(text);
    setText('');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='new todo...'
        value={text}
        onChangeText={changeHandler}
      />
      <Button onPress={() => clickHandler(text)} title='add todo' color='coral' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
});
