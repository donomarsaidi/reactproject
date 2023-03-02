import React, { useEffect, useState } from 'react'
import {deleteProduct, getallProducts} from '../api/api.js'
import { Card,Button,Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'
function Product(props) {
  const [produit,setProduit] = useState(props.product)
  useEffect(()=>{
    console.log(produit)
  },[produit])
  
  
  const deleteProd = async (id) => {
    const result = window.confirm("berasmi theb tfasa5");
    if (result) {
      await deleteProduct(id);
      window.location.reload();}
    }
  const addFunct =()=>{
    setProduit({...produit,like:produit.like + 1})
    console.log(produit.like)
  }
  return (
    <>
    <Card style={{ width: "18rem" }} className ={(produit.like >4 ) ? "bestProduct" : "normalProduct" }  border="secondary">
    
   <Link to={`/add`}> <Button variant="outline-secondary" >＋</Button> </Link>
    <Card.Header>
      <Card.Img variant="top" src={props.product.img}
       alt="Product Img"
       height={200}
     /> 
        
    
         
    
      </Card.Header>
      <Card.Body>
        
        <Card.Title><Link to={`/products/${props.product.id}`}> {props.product.name} </Link> </Card.Title>  
        

        <Card.Text>Price : {props.product.price} DT</Card.Text>
          <Card.Text>Quantity :{props.product.quantity}</Card.Text>
          <Card.Text>Likes :{produit.like}</Card.Text>
         

          <Row>
        
          <Col md={4}>
            {" "}
        <Button variant="primary" onClick={addFunct}>like</Button>
        </Col>
        
          <Col md={4}>


        <Button variant="info" onClick={props.deleteFunction}>Buy</Button>
        </Col>  
        <Col md={4}>
        <Button variant="danger" onClick={() => deleteProd(props.product.id)}>delete</Button>
        </Col>



        </Row>
       
        
      </Card.Body>
    </Card>
    </>
  )
}

export default Product