
//uso de fetch


import { Box, ImageList, ImageListItem, ImageListItemBar, Skeleton } from "@mui/material"
import { useFetch } from "../../../Global/hooks/useFetch"
import { Link } from "react-router-dom"


//  urls de acceso a la base de datos..........................................

// creo variable por fuera ,acceso a fakestorapi.com y copio la direccion de /productos
//const url = 'https://fakestoreapi.com/products'

// cuando tengo un json con un array de datos guardados en el proyecto, creo la ruta hacia el 
const url = '/src/assets/data/products.json'

// ...............................................................................

const card = { width:'210px', margin:'0.5em'}





export const Items = () => {

  const { data, loading} = useFetch(url)
  
   
  return (
    <ItemsContainers >
      {loading ? <ItemsLoading />
               : <ItemsList data={data}/>
               }
    </ItemsContainers>
    
  )
}


//creo mas componentes

//items container

const ItemsContainers = ({children}) => 
<Box display="flex"  justifyContent="center">
  {children}
</Box>

//items loading

const ItemsLoading = () =>
  <ImageList cols={3} > 
    {Array.from(new Array(9)).map((_, index) => <ItemLoading key={index} />)}
  </ImageList>







// creo componente itemloading

const ItemLoading = () =>
  
    <ImageListItem sx={card}>
      <Skeleton 
        variant="rectangular"
        width={210}
        height={118}
      />
      <Box sx={{pt:0.5}}>
        <Skeleton width='100%'/>
        <Skeleton width='100%' />

      </Box>
    </ImageListItem>
  











// items list

//creo variabler box con estilos
const box= {
  backgroundColor: 'rgba(0,0,0,20%)',
  borderRadius: '20px',
  padding: '20px',
  
}


// itemS LIST





const ItemsList = ({ data }) =>

  
  <ImageList cols={ 4 }  sx={ box }  >
      { data.map(item => 
          <ItemList 
              key={item.id} 
              {...item} />)}

  </ImageList>








//itemLIST

const ItemList =({id, image, title, price}) =>
  <Link to={ `/productos/${id}` }>
    <ImageListItem sx={ card }>
      <img src={ image } style={{ height:'300px'}}/>
      <ImageListItemBar 
          title={ title }
          subtitle={ price }
      
    />
    </ImageListItem>
  </Link>

export default ItemList;