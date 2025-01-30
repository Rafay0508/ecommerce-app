import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SCREENS} from '../types/screens-enum';

type NavigationProp = NativeStackNavigationProp<{
  [key in keyof typeof SCREENS]: undefined;
}>;

const Categories: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Categories</Text>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
