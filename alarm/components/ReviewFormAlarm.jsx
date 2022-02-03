import { View} from 'react-native';
import { Formik } from 'formik';// From
import * as yup from 'yup'; //Import Validation

import Input from '../../utills/components/Input'

// Validation-yup
const schema= yup.object({
  hours: 
    yup.number()
    .required("Must insert hours")
    .test("is hours valid", "Must be between 0 - 24", (val) => (parseInt(val) >= 0 && parseInt(val) < 24)),
  minute: 
    yup.number()
    .required("Must insert minutes")
    .test("is minutes valid", "Must be between 0 - 60", (val) => (parseInt(val) >= 0 && parseInt(val) < 60)),
})

function ReviewForm({save,modalFormat}){
  return (
    <View>
      <Formik 
        validationSchema={schema}
        initialValues={{hours: "",minute:""}} 
        onSubmit={(values,actions)=>{
          actions.resetForm(); //Used to make notes at the end of typing the inputs
          save(values)
          }}
      >
        {(props)=>(
          <Input 
            props={props} 
            save={()=>{save(props.values)}} 
            modalFormat={modalFormat}>
          </Input>
        )}
      </Formik>
   </View>
  )
}

export default ReviewForm;