import React from 'react';
import {Button, Container, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {BsSearch} from 'react-icons/bs'

const Index = () => {
    return (
        <>
            <Navbar collapseOnSelect sticky={"top"} bg="white" expand="sm" className="shadow-sm">
                <Container>
                    <Navbar.Brand as={Link} to={"/"}><span className="m-0 p-0 fw-bold">DEV</span></Navbar.Brand>
                    <Container className="search-container">
                        <InputGroup>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="shadow-none border-hover-links search-input rounded"
                                aria-label="Search"
                            />
                            <span className="position-relative d-flex justify-content-center align-content-center">
                                <Button className="search-btn border-0" variant="outline-hover-links">
                                    <BsSearch className="text-black"/>
                                </Button>
                            </span>
                        </InputGroup>
                    </Container>
                    <Navbar.Toggle aria-controls="nav"/>
                    <Navbar.Collapse id="nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Index;