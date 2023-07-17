import { createContext, useEffect, useState } from "react"
import { saveToStorage, updateFromStorage } from "../../Global/utilities/storage";






export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const initialState= updateFromStorage('cart', 'qty')


  // inicio array carrito que viene de storage.js
  const [cart, setCart] = useState(initialState.cart)
 // inicio total carrito que viene de storage.js
  const [total, setTotal] = useState(initialState.total)

  useEffect(() => {
    saveToStorage('cart', cart)
  }, [cart])
  

  //creo metodos CRUD


  // si no encuntra el producto le agregamos a data y con toda la info del carrito le agregamos el valor 
  const newItem =(data, qty)=>{ 
    data.qty=qty
    setCart([...cart, data])

  }

  // para actualizar el item
  const upItem =(item, data, qty)=>{
    item.qty += qty                         // agrego al carrito un item mas
    //iteramos los elementos , si el id no coincide con data.id se lo manda a items. filtra a todos los que no coiciden
    const items = cart.filter(item=> item.id !== data.id)
    setCart([...items, item])              // agregamos al carrito los items que tenemos en el mas el item que agrego

  }

  const addItem =(data, qty)=>{
    console.log('Agrego al carrito '); console.log(qty);
    
    
    setTotal(total + qty)

    //busco si coincide item con algo del array
    const item = cart.find(item=> item.id === data.id)


    //si existe el item lo actualizo y sino lo creo
    item 
        ? upItem(item, data ,qty)
        : newItem(data, qty)

    
        
  }
  console.log({total})  // muestro fuera de la funcion el array de productos agregados


  //borro item del carrito
  const delItem=(id)=>{
    const item= cart.find(item => item.id === id)      // busco en el carrito el id que paso como parametro
    setTotal(total - item.qty)

    const items = cart.filter(item => item.id !== id)
    setCart(items)
  }


  return (
    <CartContext.Provider
        value={{ cart, total, addItem,delItem }}>
          {children}
    </CartContext.Provider>
  )
}

