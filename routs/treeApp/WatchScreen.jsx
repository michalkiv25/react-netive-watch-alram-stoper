import { StyleSheet, View } from 'react-native';

import AppWatch from '../../watch/AppWatch';


function WatchScreen() {
    return (
      <View style={styles.container}>
        <AppWatch></AppWatch>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor:'black',
    }
  });

  
  export default WatchScreen;