import React, {useState} from 'react';
import {Button, Container, FloatingLabel, Form, Image} from "react-bootstrap";
import {BiLogIn} from 'react-icons/bi'
import logo from './../../../assets/images/logo.png'
import AuthServices from "../../../services/auth.services";
import {useNavigate} from 'react-router-dom';

const Index = () => {
    const navigate = useNavigate();
    const [credintials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const authService = async () => {
        await new AuthServices(credintials)
        setTimeout(() => {
            if (!localStorage.getItem('__sign_token')) {
                alert('error')
            }
            if (localStorage.getItem('__sign_token')){
                navigate('/dashboard')
            }
        }, 2000)

    }

    const emailChange = (e) => {
        setCredentials({...credintials, email: e.target.value})
    }

    const passwordChange = (e) => {
        setCredentials({...credintials, password: e.target.value})
    }

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
                        <Form.Control type="email" placeholder="name@example.com" value={credintials.email}
                                      onChange={emailChange}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" value={credintials.password}
                                      onChange={passwordChange}/>
                    </FloatingLabel>
                    <Button
                        size="lg" className="w-100 mt-3 text-apple-milk" variant="apple-cyan" onClick={authService}>
                        <span className="me-1"><BiLogIn/></span>
                        Sign In
                    </Button>
                </Container>
            </Container>
        </>
    );
};

export default Index;