import { useRef} from "react"
import { StyledButton, StyledError, StyledForm, StyledInput } from "../styles/FormStyles"
import { useForm } from "../hooks/useForm"










export const Form = () => {

 

//*creo referencias
  const errorNameRef= useRef()
  const errorEmailRef= useRef()
  const errorAgeRef= useRef()
           // creo array de las tres referencias
  const refs=[errorNameRef, errorEmailRef, errorAgeRef]

  const {form, submitHandleClick, inputHandleChange} = useForm(refs)


  return (
    <StyledForm>

      {/* //boton 1 */}
      <StyledInput 
          name="name"
          type="text"
          value={form.name}
          onChange={inputHandleChange}
          placeholder="Ingrese nombre"/>

      <StyledError
          ref={errorNameRef}
          id="name"
          >          
      </StyledError>



      {/* //boton 2 */}
      <StyledInput 
          name="email"
          type="text"
          value={form.email}
          onChange={inputHandleChange}
          placeholder="Ingrese email"/>

      <StyledError
          ref={errorEmailRef}
          id="email"
          >          
      </StyledError>




      {/* //boton 3 */}
      <StyledInput 
          name="age"
          type="number"
          value={form.age}
          onChange={inputHandleChange}
          placeholder="Ingrese edad"/>

      <StyledError
          ref={errorAgeRef}
          id="age"
          >          
      </StyledError>



      {/* // boton Submit */}

      <StyledButton onClick={submitHandleClick}>
          Enviar
      </StyledButton>

      

    </StyledForm>
  )
}
