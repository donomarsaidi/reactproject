
import './Product.css'
import {getallProducts , deleteProduct} from '../api/api.js'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';





function Details_Product() {
   const [product , setProducts] = useState({})
    const {id} = useParams();
    // const product = products.find((product) => product.name ===name);

    useEffect(()=>{
        getProducts();
      },[])
      const getProducts= async () => {
        const response =await getallProducts(id);
        console.log(response);
        setProducts(response.data);
    
    
      }
     
    
    


  return (
    <Container style={{ display: 'flex', justifyContent:'space-evenly' ,  }}>
        {product.id !==undefined ?
          
        <Row>
       
        <Col md={6} >
    <Card style={{ width: "40rem" , height:"30rem" }}  border="secondary">
      <Link to={`/update/${product.id}`}>
            <Button variant="outline-warning" >edit </Button> </Link>
      <Card.Img variant="top" src={product.img}
       alt="Product Img"
       height={200}
     /> 
      <Card.Body>
        <Card.Title>title : {product.name}</Card.Title>
        <Card.Text>Price : {product.price} DT</Card.Text>
        <Card.Text>Likes :{product.like}</Card.Text>
        <Card.Text>quantity :{product.quantity}</Card.Text>
        <Card.Text> description : {product.description}</Card.Text>
       
        </Card.Body>  
        <div  style={{ display: 'flex', justifyContent:'center' }}>
               
            <Link to={"/Products"}>
            <button className="go-back" >Go Back </button> </Link>
            
          </div>
        </Card>
        </Col>
      
       
        </Row> : <h1 style={{color:"white"}}>hahi mafamech</h1> }
      
    </Container>
  )
}


export default Details_Product