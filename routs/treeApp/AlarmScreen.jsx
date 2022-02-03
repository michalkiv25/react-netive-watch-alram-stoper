import { StyleSheet, View} from 'react-native';

import AppAlarm from '../../alarm/AppAlarm';


function AlarmScreen() {
    return (
      <View style={styles.container}>
        <AppAlarm></AppAlarm>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor:'black',
    },
  })

 


  
  
  export default AlarmScreen;