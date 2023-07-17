import {Navigate, Route, Routes } from "react-router-dom";
import { LoginLayout } from "../Login/layouts/LoginLayout";
import { Items } from "../Pages/Items/components/Items";

import { Cart } from "../Cart/components/Cart";
import { Form } from "../Pages/Form/components/Form";
import { Item } from "../Pages/Item/components/Item";




export const Router = () => 
  <LoginLayout>
    <Routes>
        <Route path="/" element={<Items />}/>
        <Route path="/productos" element={<Items />}/>
        <Route path="/productos/:id" element={<Item />}/>
        <Route path="/contacto" element={<Form />}/>
        <Route path="/carrito" element={<Cart />}/>
        <Route path="*" element={<Navigate to='/'  />}/>
    </Routes>
  </LoginLayout>

