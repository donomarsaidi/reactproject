import React, { useEffect, useState } from 'react'
import Product from './Product.js'
import { getallProducts} from '../api/api.js'

function Products() {

  const [productsState, setProducts] = useState([]);
  
  useEffect(()=>{
    getProducts();

  },[])
  const getProducts =async ()=>{
    const response= await getallProducts();
    console.log(response);
    setProducts(response.data);
  }
  const deleteFunction = (prod) => {
    const updatedProducts = productsState.map(p => {
      if (p.name === prod.name) {
        return { ...p, quantity: p.quantity - 1 };
      }
      return p;
    });

    setProducts(updatedProducts);
  }

  const [isMessageVisible, setIsMessageVisible] = useState(true);
  setTimeout(function() {
    setIsMessageVisible(false);
  }, 3000);

  return (
    <div>
        <div>         
        {isMessageVisible && (
         
          
            <p style={{ color: "green" }}> hey , welcome to our shop<strong>MYStore </strong></p>
         
       )}</div>  
    <div style={{ display: 'flex', justifyContent:'space-evenly' }}>
     
        {productsState.map((prod, key) => <Product key={key} deleteFunction={() => deleteFunction(prod)} product={prod}></Product>
        )}
      </div>
    </div>  
  )
}

export default Products