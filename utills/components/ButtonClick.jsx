import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function ButtonClick({title, background,onPress,fontSize}){
  return (

    <TouchableOpacity 
      onPress={()=>onPress()} 
      style={[styles.button,{backgroundColor: background}]}>
        <View style={styles.buttonBorder}>
          <Text style={[styles.buttonTitle,{fontSize:fontSize}]}>{title}</Text>
        </View>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  button:{
    width: 80,
    height: 80,
    borderRadius:50
  },
  buttonBorder:{
    width: 78,
    height: 78,
    borderRadius:45,
    borderWidth:3,
    borderColor:'#F5F5F5',
    justifyContent:'center',
    alignContent:'center'
  },
  buttonTitle:{
    color:'white',
    padding: 10
  }
});

export default ButtonClick;
