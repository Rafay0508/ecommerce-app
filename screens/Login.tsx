import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SCREENS} from '../types/screens-enum';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../types/NavigationProp';

const Login = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate(SCREENS.BOTTOM_NAV)}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
