import { Grid } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { getTempStorage, setTempStorage } from "../utilities/storage"
import { useEffect } from "react"





export const MainLayout = ({children}) => {

  const navigate= useNavigate()

  const refresh= getTempStorage('actualUrl')

  const refreshSite=()=>
        refresh !== undefined && refresh !== null && refresh !=='/' && navigate(refresh)

  const actualUrl=()=>
        setTempStorage('actualUrl', window.location.pathname)

  useEffect(() => {
    window.addEventListener('click', actualUrl)
    refreshSite()

    return ()=>
          window.removeEventListener('click', actualUrl)
  }, [])
  

  return (
    <Grid container  style={{
      backgroundImage: "url(https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/03/batman-christian-bale-2984310.jpg?tf=1200x)",
      
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover"
    }}
          sx={{
            width: '100%',
            alignContent:'center',
            justifyContent:'center',
            minHeight:'calc(100vh - 64px)',
            backgroundColor:'black'
           
            

          }} 
    >
      {children}
      </Grid>
  )
}
