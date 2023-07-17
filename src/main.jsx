import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {App} from './App/App'
import { CssBaseline } from '@mui/material'
import { LoginProvider } from './Login/contexts/LoginContext'
import { addProduct, addProductWithId, addProducts, addProductsWithId, deleteProduct, getProductById, getProductByName, getProducts, setProduct, updateProduct } from './Global/firebase/utilities/productosFirebase'



// manipulo la DB de productosFirebase.js
//creo objetos
const a = {id:1, y:'2', z:true, a:'ww'}
const b = {id:2, y:'asas', z:false, c:'churro'}
const c = {id:3, y:1, z:false}



//ejecuto funcion addProduct
//addProduct(a).then(res => console.log(res))


// agrega productos por id
//addProductWithId(a).then(res=> console.log(res))

// agrega documentosss con id propio
//addProductsWithId([a,b,c])

//obtenemos el producto ----getDocs
//getProducts().then(res=> console.log(res))


//buscamos un producto por id
//getProductById(2)

//busco producto por un campo
//getProductByName('asas')

//para configurar un producto
//setProduct({id:2, y:'cambio de nombre', z:true})
//......puedo crear con esta funcion un nuevo produco
//setProduct({id:4, y:'nuevo producto', z:true})
//......para solo modificar un producto y que no me cree otro si uso otro id
//updateProduct({id:4, y:'renombro producto', z:true})

//borra un producto
//deleteProduct(3)


//......ejecuta la funcion para agregar productos
//addProducts([a,b,c])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <CssBaseline/>
    <LoginProvider>
    <App />
    </LoginProvider>
  </React.StrictMode>,
)
