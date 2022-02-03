import { StyleSheet, View, Modal} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

// Import components from the project
import ReviewForm from '../../watch/components/ReviewForm';
import ReviewAlarm from '../../alarm/components/ReviewFormAlarm';


function ModalInput({modalOpen,set,save,modalFormat}){
    return(
        <Modal 
            visible={modalOpen} 
            animationType ={'slide'}  
            transparent={true}
            style={styles.modal}>
                <View style={styles.allSetModal}>
                    <AntDesign //Icon close modal
                        name="closecircle" 
                        size={24} 
                        color="black" 
                        onPress={()=>{set()}}/>

                    {modalFormat == true && (
                        <ReviewAlarm save={save} modalFormat={modalFormat} ></ReviewAlarm>
                    )}
                    {modalFormat == false && (
                        <ReviewForm save={save} modalFormat={modalFormat}></ReviewForm>
                    )}
                </View>
       </Modal>
    )
}

const styles = StyleSheet.create({
    allSetModal:{
        margin: 20,
        backgroundColor: "white",
        borderRadius: 40,
        padding: 35,
        width: 200,
        justifyContent:'center'
        },
});

export default ModalInput;