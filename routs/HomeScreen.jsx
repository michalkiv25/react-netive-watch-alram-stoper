import {  StyleSheet, View, Button } from 'react-native';

function HomeScreen({ navigation }) {
    return ( //Display Buttons, Home Page
      <View style={styles.container}>
        <View style={styles.containerButton}>
          <Button
            style={styles.button}
            title='Stopper'
            color="#f4511e"
            onPress={() => navigation.navigate('Stopper')}
          />
        </View>
        <View style={styles.containerButton}>
          <Button
            title='Watch'
            color="#f4511e"
            onPress={() => navigation.navigate('Watch')}
          />
        </View>
        <View style={styles.containerButton}>
          <Button
          title='Alarm'
          color="#f4511e"
          onPress={() => navigation.navigate('Alarm')}
        />
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor:'#FFFAF0',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    containerButton:{
      margin: 10
    }
  });
  
  
  export default HomeScreen;