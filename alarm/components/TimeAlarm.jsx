import {  StyleSheet, View ,Text } from 'react-native';

function TimeAlarm({minutesValue, hoursValue}){
  return(
    <View >
      <Text style={styles.time}>{hoursValue}:{minutesValue}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  time:{
    color: 'white',
    fontSize:45,
    alignContent:'center',   
  }
});

export default TimeAlarm;