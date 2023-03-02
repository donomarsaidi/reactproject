import { Button, InputGroup, Form } from 'react-bootstrap';
import React, {  useState } from 'react'
import {addProduct} from '../api/api.js'
import { useNavigate } from "react-router-dom";




import {

  MDBContainer,
  MDBCard,
  MDBCardBody,
  
  MDBRow,
  MDBCol,
  MDBFile,
  
}
from 'mdb-react-ui-kit';


function Add_Product() {
    const navigate = useNavigate();
    const [product, setProduct] = useState({like:0,img:null});
    const [Image,setImage] = useState(null)
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      
      const newproduct = {...product,img:Image};
      console.log(product)
      try {
        const response = await addProduct(newproduct);
        console.log(response.data);
       navigate("/products");
      } catch (error) {
        console.log(error);
      }
      
      
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    };
  
    const choose =(event)=>{
      const file = event.target.files[0];
      console.log(file)
      
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
      

  }
    
    
    
  
  return (
    <MDBContainer fluid className='my-5'>

      <MDBRow className='g-0 align-items-center'>

        <MDBCol col='6'>
        
          
        

          <MDBCard className='my-5 cascading-right' style={{background:'white',  backdropFilter: 'blur(30px)'}}>
            <MDBCardBody className='p-5 shadow-5 text-center'>

              <img src={`/assets/images/product.jpg`} className="w-20 rounded-6 shadow-5"
            alt="" />

              <MDBRow>
                <MDBCol col='6'> 
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                   <Form.Control
                  aria-label="name"
                   aria-describedby="basic-addon1"
                   id="name" 
                     name="name"
                     placeholder="write the product name"
                   value={product.name} 
                   onChange={handleChange}
        />
      </InputGroup>
                </MDBCol>

                <MDBCol col='6'>
                <InputGroup className="mb-3">
                    <InputGroup.Text>price</InputGroup.Text>
                     <Form.Control aria-label="price" 
                     id="price" 
                     placeholder="what is the product price"
                     name="price"
                     value={product.price} 
                     onChange={handleChange}/>
                      <InputGroup.Text>.DT</InputGroup.Text>
      </InputGroup>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol col='6' > 
                <InputGroup>
                 <InputGroup.Text>description</InputGroup.Text>
                    <Form.Control type='text' aria-label="With textarea"
                    id="description" 
                    placeholder="describe your product "
                    name="description"
                    value={product.description} 
                    onChange={handleChange}  />
               </InputGroup>

                </MDBCol>
                <MDBCol col='6'>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Quantity</InputGroup.Text>
                     <Form.Control aria-label="quantity" type='number'
                     value={product.quantity}
                     placeholder="how much Quantity of products you got"
                     id="quantity" 
                    name="quantity"
                      onChange={handleChange} />
                      
      </InputGroup>
                </MDBCol>

             
              </MDBRow>
              
               
               
            
              <MDBRow className='align-items-center pt-4 pb-3' >

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Upload photo</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBFile 
                  
                   onChange={choose} 
                   typeof="file"
                 
                    id="img" 
                    name="img"/>
                </MDBCol>

              </MDBRow>
             

              <Button className='w-100 mb-4' variant="secondary" size='md'  onClick={handleSubmit}>add</Button>


            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        

      </MDBRow>

    </MDBContainer>
  );
}

export default Add_Product