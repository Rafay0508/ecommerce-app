import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SCREENS } from './screens-enum';

export type NavigationProp = NativeStackNavigationProp<{
  [key in keyof typeof SCREENS]: undefined; // Or specific params if needed
}>;
