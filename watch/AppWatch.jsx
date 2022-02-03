import React, { useState, useEffect } from 'react';
import { StyleSheet, View} from 'react-native';
import moment from "moment";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import components from the project
import ButtonsRow from '../utills/components/ButtonsRow';
import ButtonClick from '../utills/components/ButtonClick';
import DisplayDateClock from './components/DisplayDateClock';
import ModalInput from '../utills/components/ModalInput';

let clockOffset;
let dateOffset;

//async-storage,Retrieving data when closing the app
const retrieveData = async () => {
  try {
    const clock = await AsyncStorage.getItem('clockOffset');
    if (clock !== null) {
      clockOffset = parseInt(clock)
    }
    const date = await AsyncStorage.getItem('dateOffset');
    if (date !== null) {
      dateOffset = parseInt(date)
    }
    console.log("galdebug")
  } catch (error) {
    console.log(error)
  }
};

// async-storage,Saving data when closing the app
const storeData = async () => {
  try {
    await AsyncStorage.setItem(
      'clockOffset',
      clockOffset
    );
    await AsyncStorage.setItem(
      'dateOffset',
      dateOffset
    );
  } catch (error) {
    console.log(error)
  }
};

retrieveData()

 const AppWatch = ()=> {
   const clockNow=new Date() //real time
   
    const [fotmetWatch,setfotmetWatch]= useState('24H') //format-button

    const [clock,setclock]=useState()
    const [clockFormat,setclockFormat]=useState('en-US')//format-watch


    // Modal-pop-up
    const [modalOpen,setmodalOpen]=useState(false)
    const [modalFormat, setmodalFormat] = useState(false)



    useEffect(()=>{
        const interval =setInterval(()=>{
          setclock(clockNow.toLocaleTimeString())
        },1000)

        return ()=>{
          clearInterval(interval)
        }
    })

  // Functions for the buttons
  // Settings button
    const set = ()=>{
      if(modalOpen == false){
        setmodalOpen(true)
      }else{
        setmodalOpen(false)
      }
    }

  //save button
    const save=(values)=>{
      let userTimeInSeconds = parseInt(values.hours) * 60 * 60 +
         parseInt(values.minute) * 60 +
         parseInt(values.second)
      
      let currTimeInSeconds = 
        clockNow.getHours() * 60 * 60 +
        clockNow.getMinutes() * 60 +
        clockNow.getSeconds()
      console.log(values.date)
      clockOffset =(userTimeInSeconds - currTimeInSeconds) * 1000
      dateOffset = new Date(values.date).getTime() + userTimeInSeconds * 1000 - clockNow.getTime()
      storeData()
    }

    //Change button format
    const pormatWatch = ()=>{
      if (clockFormat == 'fr-FR') {
        setclockFormat('en-US')
      } else {
        setclockFormat('fr-FR')
      }  
    }

    return (
      <View style={styles.container} >

        <DisplayDateClock 
          clock={new Date(clockNow.getTime() + clockOffset).toLocaleTimeString(clockFormat)}
          date={moment(new Date(new Date().getTime() + dateOffset)).format('DD/MM/YYYY')}
          fontSize={45}>
        </DisplayDateClock>
      
        {fotmetWatch == 'AM/PM' && (<ButtonsRow>
            <ButtonClick 
                title="Set"  
                background="#5F9EA0"  
                onPress={set} 
                fontSize={22}>
            </ButtonClick>

            <ButtonClick 
                title="AM/PM"  
                background="#5F9EA0" 
                onPress={pormatWatch} 
                fontSize={15}>
            </ButtonClick>
        </ButtonsRow>
        )}

        {fotmetWatch == '24H' && (<ButtonsRow>
            <ButtonClick 
              title="Set"  
              background="#5F9EA0"   
              onPress={set} 
              fontSize={22}>
            </ButtonClick>

            <ButtonClick 
              title="24H"  
              background="#B0E0E6" 
              onPress={pormatWatch} 
              fontSize={25}>
            </ButtonClick>
        </ButtonsRow>
        )}

        {/*Pup-up */}
        <ModalInput 
          modalOpen={modalOpen} 
          set={set} save={save} 
          modalFormat={modalFormat}/>

      </View>
   );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        paddingTop: 100,
        paddingHorizontal:20,
      }
});

export default AppWatch
