import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../types/screens-enum';
import {
  HeartIcon as OutlineHeartIcon,
  HomeIcon as OutlineHomeIcon,
  ShoppingCartIcon as OutlineShoppingCartIcon,
  Squares2X2Icon as OutlineSquaresIcon,
  UserIcon as OutlineUserIcon,
} from 'react-native-heroicons/outline';
import {
  HeartIcon as SolidHeartIcon,
  HomeIcon as SolidHomeIcon,
  ShoppingCartIcon as SolidShoppingCartIcon,
  Squares2X2Icon as SolidSquaresIcon,
  UserIcon as SolidUserIcon,
} from 'react-native-heroicons/solid';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Categories from '../screens/Categories';
import MyCart from '../screens/MyCart';
import Wishlist from '../screens/Wishlist';
import Profile from '../screens/Profile';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import {Text, View} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: 'white',
        },
      }}>
      <Tab.Screen
        name={SCREENS.HOME}
        component={Home}
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <SolidHomeIcon size={size} color={'rgb(7, 193, 62)'} />
            ) : (
              <OutlineHomeIcon size={size} color={color} />
            ),
          tabBarLabel: ({color, focused}) => (
            <Text
              style={{
                fontSize: 12,
                color: focused ? 'black' : color,
              }}>
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.CATEGORIES}
        component={Categories}
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <SolidSquaresIcon size={size} color={'rgb(7, 193, 62)'} />
            ) : (
              <OutlineSquaresIcon size={size} color={color} />
            ),
          tabBarLabel: ({color, focused}) => (
            <Text
              style={{
                fontSize: 12,
                color: focused ? 'black' : color,
              }}>
              Categories
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.MYCART}
        component={MyCart}
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <>
                <SolidShoppingCartIcon size={size} color={'rgb(7, 193, 62)'} />
              </>
            ) : (
              <>
                <OutlineShoppingCartIcon size={size} color={color} />
              </>
            ),
          tabBarLabel: ({color, focused}) => (
            <>
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? 'black' : color,
                }}>
                My Cart
              </Text>
              <View
                style={{
                  position: 'absolute',
                  left: 40,
                  top: 8,
                  width: 8,
                  height: 8,
                  backgroundColor: 'red',
                  borderRadius: 100,
                }}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.WISHLIST}
        component={Wishlist}
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <SolidHeartIcon size={size} color={'rgb(7, 193, 62)'} />
            ) : (
              <OutlineHeartIcon size={size} color={color} />
            ),
          tabBarLabel: ({color, focused}) => (
            <Text
              style={{
                fontSize: 12,
                color: focused ? 'black' : color,
              }}>
              Wishlist
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <SolidUserIcon size={size} color={'rgb(7, 193, 62)'} />
            ) : (
              <OutlineUserIcon size={size} color={color} />
            ),
          tabBarLabel: ({color, focused}) => (
            <Text
              style={{
                fontSize: 12,
                color: focused ? 'black' : color,
              }}>
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function AppNavigation(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={SCREENS.lOGIN}>
      <Stack.Screen name={SCREENS.BOTTOM_NAV} component={BottomNavigation} />
      <Stack.Screen name={SCREENS.SPLASH} component={Splash} />
      <Stack.Screen name={SCREENS.lOGIN} component={Login} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
