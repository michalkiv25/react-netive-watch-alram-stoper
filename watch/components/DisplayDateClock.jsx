import { StyleSheet, View,Text } from 'react-native';


function DisplayDateClock({clock,date,fontSize}){  
  return(
    <View>
      <Text style={[styles.data,{fontSize: fontSize}]}> {clock} </Text>
      <Text style={styles.data}> {date} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  data:{
    color:'white',
    fontSize: 15,
    fontWeight:'200',
    width: 250,
    textAlign:'center'
  }
});


export default DisplayDateClock;