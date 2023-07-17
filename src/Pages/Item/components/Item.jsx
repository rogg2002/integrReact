import { useParams } from "react-router-dom"
import { Box, CircularProgress, Grid, Typography } from "@mui/material"
import AlertDialog from "../../../Global/components/AlertDialog"
import { useFetch } from "../../../Global/hooks/useFetch"
import { CartWidget } from "../../../Cart/components/CartWidget"




const url = (id)=>`https://fakestoreapi.com/products/${id}`


//const url=(id)=>`assets/data/products.json/${id}`;


export const Item = () => {

  //hook use Paramsns
  const {id}= useParams();

  const {loading, data}= useFetch(url(id));
  console.log(data)

  return (
    <Box
      padding='auto'
      display='flex'
      margin='auto auto'
      alignItems='center'
      justifyContent='center'
      minHeight='inherit'
      color='white'
    >
      {loading ? <CircularProgress color="primary"/> 
               : data.error ? <AlertDialog 
                               tittle='Error con la api' 
                               text='No se encuentra el producto solicitado'/>
                            : <Card data={data}/>
      
    }
    
    </Box>
    
  )
}


// creo componente Card

//estilos de la Card
const container={
  width:'inherit',
  minHeight:'inherit'
}

const imageStyle={
  width:'100%',
  height:'100%',
  padding:'5em',
  objectFit:'contain'
}


const descriptionStyle={
  height:'inherit',
  textAling:'justify',
  backgroundColor:'rgba(0,0,0,10%)'
}







const Card = ({ data }) =>{

  //desestructuro los datos de la card
  const { image, title, price, description, category, rating} = data
  
  return(
    <Grid container
          columns={12}
          columnSpacing={5}
          sx={container}>

   {/* Grid de IMAGEN */}
          <Grid item
                xs={12}
                md={6}
                sx={{height:'inherit'}}
          >
                <img src={image}
                     style={imageStyle}/>
   
          </Grid>

    {/* Grid de  DESCRIPCION*/}

          <Grid item
                xs={12}
                md={6}
                sx={{...imageStyle, ...descriptionStyle}}>


            {/* Grid de contenido de la DESCRIPCION */}
            <Grid container spacing={3} direction='column'>

              <Grid item>
                <Typography variant="h4" fontFamily='Aclonica'>{title}</Typography>
              </Grid>

              <Grid item>
                <Typography variant="h5">{category}</Typography>
              </Grid>

              <Grid item>
                <Typography variant="subtitle1">(stock: {rating.count} u.)</Typography>
              </Grid>

              <Grid item>
                <Typography variant="p" paragraph>{description}</Typography>
              </Grid>

              <Grid item sx={{margin:'0 auto', textAlign:'center'}}>
                <Typography variant="h3">$ {price} </Typography>
                <CartWidget data={data}/>
              </Grid>




            </Grid>

          </Grid>

    </Grid>
  
  )

}


