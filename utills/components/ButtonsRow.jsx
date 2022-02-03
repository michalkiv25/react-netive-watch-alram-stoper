import {  StyleSheet, View } from 'react-native';

function ButtonsRow({children}){
  return(
    <View style={styles.buttonsRow}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  buttonsRow:{
    flexDirection:'row',
    alignSelf:'stretch',
    justifyContent:'space-between',
    marginTop:100,
    marginBottom:30
  }
});

export default ButtonsRow;