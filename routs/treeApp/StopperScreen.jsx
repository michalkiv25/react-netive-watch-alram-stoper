import { StyleSheet,View } from 'react-native';

import Stopwatch from '../../stopper/Stopwatch';


function StopperScreen() {
    return (
      <View style={styles.container}>
        <Stopwatch></Stopwatch>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor:'black',
    }
  });
  
  export default StopperScreen;