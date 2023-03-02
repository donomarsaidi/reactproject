
import './App.css';
import {  Route, Routes } from "react-router-dom";
import NotFound from './components/NotFound.js';



import NavBar from './components/NavBar.js';
import { Suspense } from 'react';
import React from 'react';
  const Details_Product = React.lazy(()=> import('./components/Details_Product.js'));
  const Products = React.lazy(()=> import('./components/Products.js'));
  const Add_Product = React.lazy(()=> import('./components/Add_Product.js'));
  const UpdateProd = React.lazy(()=> import('./components/UpdateProd.js'));

function App() {


  return (
    
   <>
   <NavBar />
   <Suspense fallback={<p>stana haw ychargi... </p>}>
   <Routes>
      <Route path='/MYstore' element={''} />
      
      <Route path='/products'>
      <Route index element={<Products/>}/>
      <Route path=':id' element={< Details_Product/>} />
     

        </Route>
     <Route path='/add' element={<Add_Product/>} />
     <Route path='/update/:id' element={<UpdateProd/>} />
      <Route path="*" element={<NotFound />} />
      
    </Routes>
    </Suspense></>
  );
}

export default App;
