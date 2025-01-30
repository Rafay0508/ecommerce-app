import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Welcome To React Natives
      </Text>
      <TouchableOpacity>
        <Text>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
