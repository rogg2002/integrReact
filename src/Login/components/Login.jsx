import { useContext, useState } from "react"
import { LoginContext } from "../contexts/LoginContext"
import { StyledButton, StyledForm, StyledInput, StyledTitle } from "../styles/LoginStyles"
import { loginData } from "../data/loginData"
import { emailSignin, emailSignup, singInWhitGoogle } from "../../Global/firebase/providers/providers"





export const Login = () => {

  const { status, wait, error, changeStatus, loginFirebase: firebase}= useContext(LoginContext)

  //usestate
  const [form, setForm] = useState({name:'', pass:''})

  //creo funciones
  const checkForm = (e) =>{
    e.preventDefault()
    wait()

    const completeForm = form.name !== '' && form.pass !== ''

    !completeForm && alert('complete los campos por favor')
    !completeForm && error()

    if (!completeForm) return


    const user = status.register
      ? emailSignup(form.name, form.pass)
      : emailSignin(form.name, form.pass, error)


    user.then(result => firebase(result))


  }


   






  const googleSignin = async(e) =>{
    e.preventDefault()
    console.log('logeo con google')
    wait()
    const user= await singInWhitGoogle(error)
    firebase (user)
  }

  const handleInputChange = (e) =>{
    setForm({...form, [e.target.name]: e.target.value})
  }





  return (
    <Sign 
      eventOnChange={handleInputChange}
      eventOnClick={checkForm}
      googleSignin={googleSignin}
      waiting={status.waiting}
      register={status.register}
      changeStatus={changeStatus}
    />
  )
}


const Sign=({register, eventOnChange, eventOnClick, changeStatus, googleSignin, waiting})=> 

      <StyledForm register={register} >

        <StyledTitle>
          {register ? loginData.register.title
          : loginData.login.title}
        </StyledTitle>

            {/* inputs-------------------------------- */}
        
        <StyledInput
           name="name"
           type="text"
           onChange={eventOnChange}
           placeholder={register ? loginData.register.inputUser
                                  : loginData.login.inputUser
                            }
        />

        
        <StyledInput
           name="pass"
           type="password"
           onChange={eventOnChange}
           placeholder={register ? loginData.register.inputPass
                                  : loginData.login.inputPass
                            }
        />


             {/* buttons ---------------------------*/}

        <StyledButton
            disable={waiting}
            onClick={eventOnClick}
        >
          {register ? loginData.register.button
                    : loginData.login.button}
        </StyledButton>

        <StyledButton
            changeButton
            disable={waiting}
            onClick={changeStatus}
        >
          {register ? loginData.register.changeStatus
                    : loginData.login.changeStatus}
        </StyledButton>


        <StyledButton
            google
            disable={waiting}
            onClick={googleSignin}
        >
          Logueate con Bati-google
        </StyledButton>

        
      </StyledForm>