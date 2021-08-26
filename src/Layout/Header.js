
import { Nav,Navbar,Container } from "react-bootstrap";
import {Link} from 'react-router-dom';
function Header(){
    return (
        <div>
             <Navbar bg="dark nav_bar_wrapper" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                <Link to="/addProduct">AddProduct</Link>
                <Link to="/updateProduct">UpdateProduct</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}


export default Header;