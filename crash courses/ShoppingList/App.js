import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';

import {View, StyleSheet, FlatList, Alert} from 'react-native';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

export default function App() {
  const [items, setItems] = useState([
    {id: uuid(), text: 'milk'},
    {id: uuid(), text: 'eggs'},
    {id: uuid(), text: 'bread'},
    {id: uuid(), text: 'cheese'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{text: 'OK'}]);
    } else {
      setItems(prevItems => {
        return [{id: uuid(), text}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
