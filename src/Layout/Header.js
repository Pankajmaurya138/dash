import React from 'react';
import { Nav,Navbar,Container,NavDropdown} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
function Header(){
    const history = useHistory();
    let user = JSON.parse(localStorage.getItem("user_info"));
 
    
    async function Logout(){
        localStorage.clear();
        history.push('login');
    }
    return (
        <div>
             
             <Navbar bg="dark" variant="dark">
                <Container>
              
                <Nav className="me-auto nav_bar_wrapper">
                    {
                        localStorage.getItem('user_info')?
                        <>
                            <Link to="/">ProductList</Link>
                            <Link to="/addProduct">AddProduct</Link>
                            <Link to="/updateProduct">UpdateProduct</Link>
                        </>
                        :
                        <>
                            <Link to="/register">Register</Link>
                             <Link to="/login">Login</Link>
                        </>
                    }
                </Nav>
                {
                    localStorage.getItem('user_info')?
                    <>
                        <Nav className="pull-right ">
                        <NavDropdown title={user?user.data.name:"User name"}>
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                            <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
                    
                        </NavDropdown>
                        </Nav>
                    </>
                    :
                    null
                }
                </Container>
            </Navbar>
        </div>
    )
}


export default Header;