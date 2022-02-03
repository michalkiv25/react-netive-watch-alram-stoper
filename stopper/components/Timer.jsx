import { StyleSheet, Text,  View } from 'react-native';
import moment from 'moment'; //Date and time design


function Timer({interval,style}){
  //Clock display format
  const pad = (n) => n < 10 ? '0'+n : n
  const duration= moment.duration(interval);
  const centiseconds= Math.floor(duration.milliseconds() / 10)

  return(
    <View style={styles.timeContiner}>
      <Text style={style}>{pad(duration.minutes())}:</Text>
      <Text style={style}>{pad(duration.seconds())}:</Text>
      <Text style={style}>{pad(centiseconds)}</Text>
    </View>
  ) 
}

const styles = StyleSheet.create({
    timeContiner:{
      flexDirection:'row'
    },
  });

export default Timer;