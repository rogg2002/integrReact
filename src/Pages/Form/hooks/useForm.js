import { useState } from "react";
import { checkForm } from "../utilities/checkForm";
import { setErrorDOM } from "../utilities/setErrorDOM";



//creo estado inicial
const initialState = {
    name:'',
    email:'',
    age:''
  }



//rafc
export const useForm = (refs) => {

     // usestate
  const [form, setForm] = useState(initialState)

  // evento de click
    const submitHandleClick= (e)=>{
      e.preventDefault();

  
      const result = checkForm(form)    //llamo al checkForm.js
      setErrorDOM(result, refs)         // llamo al setErrorDom.js


      console.log('Valores finales :', form);
      console.log(result);

      !result.error && console.log('datos enviados correctamente')
      result.error && console.log('reingrese datos')
      
    }

      
  
  // evento cambio
    const inputHandleChange= (e)=>{
      setForm({...form, [e.target.name]: e.target.value})
    }


  return {form, submitHandleClick, inputHandleChange}
}
