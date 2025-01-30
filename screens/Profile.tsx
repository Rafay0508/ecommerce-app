import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SCREENS} from '../types/screens-enum';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../types/NavigationProp';

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
