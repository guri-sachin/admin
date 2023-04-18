import {Form,Button,Container} from 'react-bootstrap';
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Route, Link,Router,Routes} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';
import Admin from './My/Admin';
import Add from './My/Add';
import Products from './My/Products';
import Register from './My/Register';
import Categories from './My/Categories';
import Sub from './My/Sub';
import Listcate from './My/Listcate';
import Listsub from './My/Listsub';
import Shop from './My/Shop';
import Orders from './My/Orders';
import Coupns from './My/Coupns';
import Edit from './My/Edit';

import Color from './My/Color';
import './App.css';



function Home()
{
   

   return(
    

 <div>
    
    

     <Routes>
            <Route exact path="/" element={<Admin/>}></Route>
            <Route exact path="/Products" element={<Products/>}></Route>
            <Route exact path="/Add" element={<Add/>}></Route>
            <Route exact path="/Register" element={<Register/>}></Route>
            <Route exact path="/Categories" element={<Categories/>}></Route>
            <Route exact path="/Sub" element={<Sub/>}></Route>
            <Route exact path="/Listcate" element={<Listcate/>}></Route>
            <Route exact path="/Listsub" element={<Listsub/>}></Route>
            <Route exact path="/Shop" element={<Shop/>}></Route>
            <Route exact path="/Orders" element={<Orders/>}></Route>
            <Route exact path="/Coupns" element={<Coupns/>}></Route>
            <Route exact path="/Edit" element={<Edit/>}></Route>
         
            <Route exact path="/Color" element={<Color/>}></Route>
</Routes>

 </div>

  
       
   );

}
export default Home;