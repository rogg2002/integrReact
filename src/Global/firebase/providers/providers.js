import { GoogleAuthProvider,
         signInWithPopup as popup,
         signInWithEmailAndPassword as signin,
         createUserWithEmailAndPassword as signup} from "firebase/auth";
import { firebaseAuth } from "../config/config";



const googleProvider= new GoogleAuthProvider()

const userProfile = (user) => {
    if(user.displayName){
        const {displayName, isAnonymous, photoURL, email, uid} = user
        return {displayName, isAnonymous, photoURL, email, uid}
    } else {
        const { isAnonymous, photoURL, email, uid} = user
        return { displayName: 'Sin nombre para mostrar', isAnonymous, photoURL, email, uid}
    }
}


export const singInWhitGoogle = async (error) => {
    try{
        const result = await popup(firebaseAuth, googleProvider)
        return userProfile(result.user)

    }

    catch (err){
        error()
        console.log('Error en autenticacion con google ',err)
    }
}

// metodos en provider

export const emailSignup= async (name, pass) => {

    try{
        const result = await signup(firebaseAuth, name, pass)
        return userProfile(result.user)
     }
    catch(err){ 
        console.log('Error en el registro  ', err)
    }
}

export const emailSignin= async (name, pass, error)=>{
    try{ 
        const result = await signin(firebaseAuth, name,pass)
        return userProfile(result.user)
    }
    catch(err){ 
        error()
        console.log('Error en login ',err)    }
}

