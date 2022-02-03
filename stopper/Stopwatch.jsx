import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

// Import components from the project
import Timer from './components/Timer';
import ButtonClick from '../utills/components/ButtonClick';
import ButtonsRow from '../utills/components/ButtonsRow';


const Stopwatch= ()=>{

  const [startTime, setStartTime]= useState(0)
  const [currTime, setCurrTime]= useState(0)
  const [lastLap, setlastLap]= useState(0) //lastTime
  const [timer, setTimer]= useState(0) //setInterval


  // Functions for the buttons
  // Stopwatch boot button
  const start = ()=>{
    const time = new Date().getTime() ////real time
    setStartTime(time)
    setCurrTime(time)

    setTimer(
      setInterval(()=>{ 
        setCurrTime(new Date().getTime())
      },100)
    ) 
  }
  //Stopwatch stop button
  const stop = ()=>{
    const time = new Date().getTime()
    clearInterval(timer)
    setlastLap(lastLap + time - startTime)
    setStartTime(0)
    setCurrTime(0)
  }

  //Stopwatch reset button
  const reset = ()=>{
    clearInterval(timer)
    setStartTime(0)
    setCurrTime(0)
    setlastLap(0)
  }

    return (
      <View style={styles.container}>

      {/* Running stopwatch display*/}
        <Timer 
          interval={lastLap + currTime - startTime} 
          style={styles.bigTimer} >
        </Timer>
        
        {/*Show last stop run*/}
        <Timer 
          interval={lastLap} 
          style={styles.smallTimer}>
        </Timer>
        
        {startTime == 0 && (
          <ButtonsRow>
          <ButtonClick title="Start"  background="#5F9EA0" onPress={start} fontSize={20}></ButtonClick>
          <ButtonClick title="Rest"  background="#5F9EA0" onPress={reset} fontSize={22}></ButtonClick>
        </ButtonsRow>
        )}

        {startTime > 0 && (
        <ButtonsRow>
          <ButtonClick title="Stop"  background="#B0E0E6"  onPress={stop} fontSize={20}></ButtonClick>
          <ButtonClick title="Rest"  background="#5F9EA0" onPress={reset} fontSize={22}></ButtonClick>
        </ButtonsRow>
        )}

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
  bigTimer:{
    color:'white',
    fontSize: 55,
    fontWeight:'100',
    width: '50',
  },
  smallTimer:{
    color:'white',
    fontSize: 20,
    width: '25',
    fontWeight:'300',
  }
});

export default Stopwatch;
