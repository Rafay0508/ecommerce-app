import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SCREENS} from '../types/screens-enum';
import {useNavigation} from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<{
  [key in keyof typeof SCREENS]: undefined;
}>;

const Profile = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View>
      <Text>Profile</Text>
      <Button
        title="Logout"
        onPress={() => navigation.navigate(SCREENS.lOGIN)}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
