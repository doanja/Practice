import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [name, setName] = useState('John');
  const [age, setAge] = useState('10');
  const [people, setPeople] = useState([
    { name: 'shan', key: '1' },
    { name: 'fred', key: '2' },
    { name: 'bob', key: '3' },
    { name: 'lisa', key: '4' },
    { name: 'lisa', key: '6' },
    { name: 'lisa', key: '7' },
    { name: 'lisa', key: '8' }
  ]);

  const clickHandler = () => {
    setName('Maki');
  };

  return (
    // <View style={styles.container}>
    //   <Text>Enter name:</Text>
    //   <TextInput
    //     style={styles.input}
    //     placeholder='e.g. John Doe'
    //     onChangeText={val => setName(val)}
    //   />
    //   <Text>Enter age:</Text>
    //   <TextInput
    //     keyboardType='numeric'
    //     style={styles.input}
    //     placeholder='e.g. 10'
    //     onChangeText={val => setAge(val)}
    //   />
    //   <Text>
    //     My name is {name}, I am {age} years old.
    //   </Text>

    // </View>
    // <ScrollView>
    //   {people.map(item => (
    //     <View key={item.key}>
    //       <Text style={styles.item}>{item.name}</Text>
    //     </View>
    //   ))}
    // </ScrollView>

    <FlatList
      data={people}
      renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
    />
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },
  // buttonContainer: {
  //   marginTop: 20
  // },
  // input: {
  //   borderWidth: 1,
  //   borderColor: '#777',
  //   padding: 8,
  //   margin: 10,
  //   width: 200
  // },
  item: {
    marginTop: 24,
    margin: 10,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
