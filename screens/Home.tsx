import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {todos} from '../store/selectors';
import {setTodos} from '../store/slices/Todo';

const Home = () => {
  const todo = useSelector(todos);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Welcome To React Native
      </Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(setTodos(1));
        }}>
        <Text>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
