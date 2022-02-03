import { NavigationContainer } from '@react-navigation/native'; // routs
import { StyleSheet } from 'react-native';

import StackScreen from './routs/StackScreen/StackScreen';


export default function App() {
  return (
    <NavigationContainer >
        <StackScreen ></StackScreen>
    </NavigationContainer>
  );
}


