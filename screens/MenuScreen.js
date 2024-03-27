import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

function MenuScreen() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get('https://api.sampleapis.com/coffee/hot')
      .then(response => setMenuItems(response.data))
      .catch(error => console.error('Error fetching menu:', error));
  }, []);

  return (
    <View>
      <Text>Menu Screen</Text>
      {menuItems.map(item => (
        <Text key={item.id}>{item.name} - ${item.price}</Text>
      ))}
    </View>
  );
}

export default MenuScreen;