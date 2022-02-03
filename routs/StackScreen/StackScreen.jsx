import { createNativeStackNavigator } from '@react-navigation/native-stack';// routs
import { StyleSheet, View } from 'react-native';

import WatchScreen from '../treeApp/WatchScreen';
import StopperScreen from '../treeApp/StopperScreen';
import HomeScreen from '../HomeScreen';
import AlarmScreen from '../treeApp/AlarmScreen';


const Stack = createNativeStackNavigator();

function StackScreen() {
    return (
      <View style={styles.container} >
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen} 
            options={{ //Header design
              title: 'My home', 
              headerStyle: 
              {backgroundColor: '#f4511e'},
              headerTintColor: '#fff', 
              headerTitleStyle:{fontWeight: 'bold'}
          }}
          />
          <Stack.Screen 
            name="Stopper" 
            component={StopperScreen} //Component StopperScreen
            options={{  //Header design
              title: 'Stopper', 
              headerStyle: 
              {backgroundColor: '#f4511e'},
              headerTintColor: '#fff', 
              headerTitleStyle:{fontWeight: 'bold'}
          }} 
          />
          <Stack.Screen 
            name="Watch" 
            component={WatchScreen} //Component WatchScreen
            options={{  //Header design
              title: 'Watch', 
              headerStyle: 
              {backgroundColor: '#f4511e'},
              headerTintColor: '#fff', 
              headerTitleStyle:{fontWeight: 'bold'}
          }}
          />
          <Stack.Screen 
            name="Alarm" 
            component={AlarmScreen} //Component AlarmScreen
            options={{  //Header design
              title: 'Alarm', 
              headerStyle: 
              {backgroundColor: '#f4511e'},
              headerTintColor: '#fff', 
              headerTitleStyle:{fontWeight: 'bold'}
          }}
          />
        </Stack.Navigator>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
    },
  });
  
  
  export default StackScreen;