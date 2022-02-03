import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

// Import component from the project
import Errors from './Errors';

function Input({props,modalFormat}){
  return(
    <View>
        <View style={styles.inputRow}>
            <Text>Time</Text>
            <TextInput 
                style={styles.inputWatch} 
                onChangeText={props.handleChange('hours')} 
                placeholder='HH' 
                keyboardType="numeric" 
                value={props.values.hours}
                onBlur={props.handleBlur('hours')}/>
            <TextInput 
              style={styles.inputWatch} 
              onChangeText={props.handleChange('minute')} 
              placeholder='MM' 
              keyboardType="numeric" 
              value={props.values.minute}
              onBlur={props.handleBlur('minute')}/>  

          {modalFormat == false && (
            <TextInput 
              style={styles.inputWatch} 
              onChangeText={props.handleChange('second')} 
              placeholder='SS' 
              keyboardType="numeric" 
              value={props.values.second}
              onBlur={props.handleBlur('second')}/>)
          }
        </View>
          {modalFormat == false && (  
            <View style={styles.inputRow}>   
              <Text>Date</Text>
              <TextInput 
                style={styles.inputDate}  
                onChange={props.handleChange('date')} 
                placeholder='09/01/2021' 
                value={props.values.date}
                onBlur={props.handleBlur('date')}/>
        </View>)
         }
         <View style={styles.save}>
          <Button  
            title="Save" 
            color='#f4511e'
            onPress={props.handleSubmit} >
          </Button>
        </View>

        <Errors props={props} modalFormat={modalFormat} ></Errors>
    </View>
  )
}

const styles = StyleSheet.create({
    inputRow:{
        flexDirection:"row",
        marginTop:10
      },
      inputWatch:{
        width: 35,
        padding: 3,
        marginLeft:3,
        borderWidth:2,
        borderColor:'black',
      },
      inputDate:{
        width: 100,
        height: 35,
        borderBottomColor:'black',
        borderBottomStartRadius:2,
        borderBottomWidth:2,
        marginLeft:3,
        padding: 10,
      },
      save:{
        marginTop:20
      }
});

export default Input;