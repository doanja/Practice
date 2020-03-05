import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/Card';

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: 'final fantasy 6', rating: 5, body: 'lorem ipsum', key: 1 },
    { title: 'disgaea', rating: 4, body: 'lorem ipsum', key: 2 },
    { title: 'dragon quest', rating: 3, body: 'lorem ipsum', key: 3 }
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
