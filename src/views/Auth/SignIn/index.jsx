import React from 'react';
import {Button, Container, FloatingLabel, Form, Image} from "react-bootstrap";
import {BiLogIn} from 'react-icons/bi'
import logo from './../../../assets/images/logo.png'

const Index = () => {
    return (
        <>
            <Container className="vh-100 d-flex justify-content-center align-items-center">
                <Container className="sign-in-container col-sm-12 col-md-6 col-lg-5 col-xl-4">
                    <Image src={logo} className="mx-auto d-block mb-2" width={96}/>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com"/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password"/>
                    </FloatingLabel>
                    <Button size="lg" className="w-100 mt-3 text-apple-milk" variant="apple-cyan">
                        <span className="me-1"><BiLogIn/></span>
                        Sign In
                    </Button>
                </Container>
            </Container>
        </>
    );
};

export default Index;