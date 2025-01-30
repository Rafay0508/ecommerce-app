import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

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
