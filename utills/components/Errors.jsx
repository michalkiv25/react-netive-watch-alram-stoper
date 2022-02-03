import {  StyleSheet, View, Text } from 'react-native';

function Errors({props,modalFormat}){
  return(
    <View >
        <Text style={styles.errors}>{ props.touched.hours && props.errors.hours}</Text>
        <Text style={styles.errors}>{ props.touched.minute && props.errors.minute}</Text>
        <Text style={styles.errors}>{props.touched.second && props.errors.second}</Text>

        {modalFormat == false &&(
            <Text style={styles.errors}>{ props.touched.date && props.errors.date}</Text>
        )}
  </View>
  )
}

const styles = StyleSheet.create({
    errors:{
        fontSize:10,
        color: 'red',
        fontWeight: 'bold',
        marginTop:6,
        marginBottom: 10
      }
});


export default Errors;