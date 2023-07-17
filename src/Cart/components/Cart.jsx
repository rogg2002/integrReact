import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { Button, Chip, Grid, Typography } from "@mui/material"
import { Delete } from "@mui/icons-material"





//const url = (id)=>`https://fakestoreapi.com/products/${id}`
//const url = (id)=>'/src/assets/data/products.json/${id}'

export const Cart = () => {

  //desestructuro el carrito
  const {total, cart, delItem}= useContext(CartContext)

  console.log(total, cart, delItem);


  return (
    //uso componente Grid de mui
    <Grid container sx={{justifyContent:'center'}}>
      {/* .......pregunto si esta cargado el carrito si el tota es > a 0 esta cargado...... */}
      {total > 0 
                 ? <CartList cart={cart} delItem={delItem}/>
           //... si no esta cargado entonces ...
                 :<Chip label='No hay productos en el carrito'/>    
                }
      {total >0 && < Total cart={cart}/>}
    </Grid>
  )
}


const container =(index) =>{

  const par= 'rgba(0,0,0,30%)'
  const impar= 'rgba(0,0,0,15%)'
  
  return {
    backgroundColor: index %2 === 0 ? par : impar,
    padding: '10px',
    alingItems:'center'
  }
}


// componentes CartList y Total

//Carrito
export const CartList = ({cart, delItem}) =>
   cart.map(({ id, image, title, category, price, rating, qty}, index) => 
      <Grid container
      key={id}
      columns={12}
      columnGap={5}
      sx={container(index)}
      >
        


        <Grid item xs={1}>
          <img src={image}
               width={100}
               height={100}
               style={{objectFit: 'contain'}}/>

        </Grid>

        <Grid item xs={6}>
          <Typography variant="h4" color="white" fontFamily="Aclonica">{title}</Typography>
          <Typography variant="p" color="grey">{category}</Typography>
          <Typography variant="body1" color="grey">Cantidad: {qty}</Typography>

        </Grid>

        <Grid item xs={1}>
          <Typography variant="p" color="white">Precio:</Typography>
          <Typography variant="h6" color="grey">{price.toFixed(2)}</Typography>
          <Typography variant="p" color="white">Stock:</Typography>
          <Typography variant="h6"
                      color={rating.count > qty ?'green' : 'red'}>
                        {(rating.count)-qty}
          </Typography>
        </Grid>

        <Grid item xs={1}>
          <Typography variant="p" color="white">Subtotal:</Typography>
          <Typography variant="h6" color="white">{(price * qty).toFixed(2)}</Typography>
        </Grid>

{/* ..........boton para borrar item......... */}
        <Grid item xs={1}>
          <Button color="error" onClick={()=> delItem(id)}>
            <Delete/>
          </Button>
        </Grid>



      </Grid>
   )
    
  


//Total

export const Total = ({cart}) => {

  const total = 
     cart.reduce((accum, item) => 
        accum += item.price * item.qty, 0)

  return (
    <Grid item sx={{width:'100%', textAlign:'end', margin: '0.5em'}}>
        <Typography variant="h5" color="white" sx={{fontWeight:'bold'}}>
          Total : ${total.toFixed(2)}
        </Typography>
    </Grid>
  )
}


