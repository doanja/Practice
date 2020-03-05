import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation }) {
  const openMenu = () => {
    console.log('hi');
    navigation.openDrawer();
  };

  return (
    <View styles={styles.header}>
      <Text style={styles.headerText}>GameZone</Text>
      <MaterialIcons name='menu' size={30} onPress={() => openMenu()} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
    paddingLeft: 130
  },
  icon: {
    position: 'absolute',
    left: 16,
    elevation: 20
  }
});
