import React,{ useEffect, useState } from 'react';
import { StyleSheet, Text,View } from 'react-native';
// var Sound = require('react-native-sound');

// Import components from the project
import ButtonsRow from '../utills/components/ButtonsRow';
import ButtonClick from '../utills/components/ButtonClick';
import ModalInput from '../utills/components/ModalInput';
import TimeAlarm from './components/TimeAlarm';
// import AlarmMp3 from '../assets/audio/Alarm.mp3'



export default function AppAlarm() {
    const [enable,setEnable] = useState(false) //stop && start alarm
    const [hoursValue,sethoursValue] = useState("00") //The value of the hour taken from the user
    const [minutesValue,setminutesValue] = useState("00")//The value of the minutes taken from the user

    // Modal-Pop-up
    const [modalOpen,setmodalOpen] = useState(false)
    const [modalFormat, setmodalFormat] = useState(true)

   
    const checkAlarm = ()=>{
        let timrCurr= new Date(); ////real time
        let hourCurr=timrCurr.getHours()//real hour time
        let minutesCurr= timrCurr.getMinutes()//real minutes time

        if(hoursValue== hourCurr && minutesValue == minutesCurr){
            console.log('Put sound and play')
        }
           console.log(hourCurr,minutesCurr)
           console.log(hoursValue,minutesValue)
    }

    useEffect(()=>{
        const interval = setInterval(()=> { 
            //Runs the code in the face of a second, that the time will be up to date
            checkAlarm()
        },1000)

        return ()=> { //componentWillMount
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
    
    // play alarm
    const Enable= ()=>{
        console.log('Put sound and play')
        setEnable(true)
    }
    
    // Stop alaem
    const Disables= ()=>{
        console.log('Pause sound')
        setEnable(false)
    }
    
    // save sate
    const save=(values)=>{
        let hoursNumber = parseInt(values.hours)
        let minuteNumber= parseInt(values.minute)
        sethoursValue(hoursNumber)
        setminutesValue(minuteNumber)
    }


  return (
    <View style={styles.container}>
    {/*Displays the desired time for the alarm clock */}
        <TimeAlarm 
            hoursValue={hoursValue} 
            minutesValue={minutesValue}>
        </TimeAlarm>
        
        {enable == false && (
        <ButtonsRow>
            <ButtonClick title="Set"  background="#5F9EA0" onPress={set} fontSize={22}></ButtonClick>
            <ButtonClick title="Enable"  background="#5F9EA0" onPress={Enable} fontSize={17}></ButtonClick>
        </ButtonsRow>
        )}

        {enable != false && (
        <ButtonsRow>
            <ButtonClick title="Set"  background="#5F9EA0" onPress={set} fontSize={22}></ButtonClick>
            <ButtonClick title="Disables"  background="#5F9EA0" onPress={Disables} fontSize={14}></ButtonClick>
        </ButtonsRow>
        )}
        
        {/*Pup-up */}
        <ModalInput 
            modalOpen={modalOpen} 
            set={set} save={save} 
            modalFormat={modalFormat}
        />

        
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        paddingTop: 130,
      },
  
});