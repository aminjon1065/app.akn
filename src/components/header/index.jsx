import React from 'react';
import {Button, Container, Dropdown, FormControl, InputGroup, Navbar,} from "react-bootstrap";
import {Link} from "react-router-dom";
import {BsSearch} from 'react-icons/bs'
import {BiUserCircle} from 'react-icons/bi'

const Index = () => {
    return (
        <>
            <Navbar collapseOnSelect sticky={"top"} bg="white" expand="sm" className="shadow-sm">
                <Container>
                    <Navbar.Brand as={Link} to={"/"} className="m-0">
                        <span
                            className="m-0 p-0 fw-bold fw-lighter bg-dark text-light ps-2 pe-2 pt-1 pb-1 rounded-3 lh-1"
                        >
                            AKN
                        </span>
                    </Navbar.Brand>
                    <Container
                        className="search-container ms-0"
                    >
                        <InputGroup>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="shadow-none border-hover-links search-input rounded"
                                aria-label="Search"
                            />
                            <span
                                className="position-relative d-flex justify-content-center align-content-center"
                            >
                                <Button
                                    className="search-btn border-0"
                                    variant="outline-hover-links"
                                >
                                    <BsSearch
                                        className="text-black"
                                    />
                                </Button>
                            </span>
                        </InputGroup>
                    </Container>
                    <Dropdown role={"menu"}>
                        <Dropdown.Toggle variant="soft-grey" className="profile-dropdown" id="dropdown-basic">
                            <span className="text-center fw-bold"><BiUserCircle/> Name</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Navbar>
        </>
    );
};

export default Index;