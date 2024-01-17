import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to CoffeeShop App</Text>
      <Button title="View Menu" onPress={() => navigation.navigate('Menu')} />
    </View>
  );
}

export default HomeScreen;
