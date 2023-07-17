import { useContext, useState } from "react"
import { CartContext } from "../contexts/CartContext"
import { Box, Button, ButtonGroup } from "@mui/material"





export const CartWidget = ({data}) => {

    const {addItem}= useContext(CartContext)


    const [qty, setQty] = useState(0)


    //funciones para operar botones

    const add=()=> {
      if(qty >= data.rating.count) return;       // sale de la funcion si excede el carrito
      setQty(qty+1)
    }  //sumo al carrito 1 unidad

    const subs=()=> {
      if (qty<=0) return;    // sale de la funcion para que no sea negativo
      setQty(qty-1)
      //if (qty<=0) setQty(0)    //.....opcion para no permitir que baje de 0 pero ejecuta la funcion
    }
  
console.log(qty)


    const buttonHandleClick =()=>addItem(data,qty)

    

  return (
    <Box display='flex' flexDirection='column'>
       <ButtonGroup
        fullWidth
        variant="contained"
        sx={{margin:'5px 0'}} 
       >
          <Button onClick={subs}>-</Button>
          <Button variant="outlined">{qty}</Button>
          <Button onClick={add}>+</Button>

       </ButtonGroup> 

       <Button 
          disabled={qty===0 ? true: false}   // si el carrito esta en cero se desactiva el boton
          variant="contained"
          onClick={buttonHandleClick}
       >
          Agregar al carrito
       </Button>

    </Box>

    
  )
  
}
