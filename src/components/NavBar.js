import { Container, Nav, Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavigationBar () {

return(
   
    
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="">MYStore</Navbar.Brand>
          <Nav className="me-auto">
          <NavLink to="products" style={({ isActive }) =>({ color:isActive ?"red" : "yellow"})}>Products</NavLink>
          <NavLink to="details" style={({ isActive }) =>({ color:isActive ?"red" : "yellow"})}>detail</NavLink>
          
          </Nav>
        </Container>
      </Navbar>
      
   
 
  );

}
export default NavigationBar