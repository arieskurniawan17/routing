import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';


function Header(){
    return(
        <div>
           <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">My Website</Navbar.Brand>
            <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Data</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            </Nav>
            </Container>
            </Navbar>
        </div>
    )
}

export default Header;