import { BrowserRouter } from 'react-router-dom'
import { Navbar } from '../Global/components/Navbar/Navbar'
import './App.css'
import { MainLayout } from '../Global/layouts/MainLayout'
import { Router } from '../router/router'
import { CartProvider } from '../Cart/contexts/CartContext'





export const App= () => 
    <BrowserRouter>
      <CartProvider> 
        <Navbar/>
        <MainLayout>
            <Router/>
        </MainLayout>
      </CartProvider> 
    </BrowserRouter>



