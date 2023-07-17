import { useEffect, useState } from "react"


export const useFetch=(url)=>{

//manipulo elelmentos de products
  // creo el hooks para sacar datos de la api
  //usestate
  const [data, setData] = useState([])  // comienza con array vacio
  
  const [loading, setLoading] = useState(true)

  // creo funcion
  const refreshData =()=> setLoading(true)

  //useEffCT
  useEffect(() => {

    if (loading) {
      setTimeout(() => {    // creo funcion 
        (async () => {
          try{
            const res= await fetch(url)
            const json=await res.json()
            setData(json) 
           }
          catch(err){ 
            setData({error: 1})
          }
          finally{ 
            setLoading(false)
          }
        })();

        
      }, 1500);

    }
    
  }, [loading])


  return{loading, data,refreshData}


}


