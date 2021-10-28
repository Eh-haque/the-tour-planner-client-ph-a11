import React from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase'
const Login = () => {

    const { handleGoogleLogin, handleGithubLogin, handleUserLogin, error, setError } = useFirebase();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // ---------redirect-----------
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    const githubLogin = () => {
        handleGithubLogin()
            .then((result) => {
                history.push(redirect_uri)
                // setUser(result.user);
                console.log(result.user);
                setError("");
            })
    }
    // const [isLogin, setIsLogin] = useState(false);

    const handleEmail = e => {
        setEmail(e.target.value);
    };
    const handlePassword = e => {
        setPassword(e.target.value);
    };
    // console.log(email, password);

    const handleLogin = (event) => {
        handleUserLogin(email, password);
        event.preventDefault();
        // console.log(event);
    }

    return (
        <Container>
            <Row xs={1} md={2} className='align-items-center'>
                <Col className='col-md-5'>
                    <div>
                        <Image
                            className="w-100 p-5"
                            src="https://cdn.pixabay.com/photo/2019/08/30/15/48/lock-4441691_960_720.png"
                            alt=""
                        />
                    </div>
                </Col>
                <Col style={{ textAlign: 'left' }} className='p-5 col-md-7'>
                    <Form>
                        <h2 className='text-primary'>Please Login</h2><hr />
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onBlur={handleEmail} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onBlur={handlePassword} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <div>
                            <Button variant="primary" type="submit" onClick={handleLogin}>
                                Login
                            </Button>
                        </div><hr />
                        <Link to='/register' className='mb-3 rounded p-2 border mt-3'>New User? Click to Register</Link>
                        <div className="login-btn mt-4">
                            <Button variant='primary' onClick={handleGoogleLogin} className="me-2 mb-2">
                                Google sign in
                            </Button>
                            <Button variant='success' onClick={githubLogin} className='mb-2'>
                                Github sign in
                            </Button>
                        </div><hr />
                        <p className='bg-danger text-white p-2 rounded'>{error ? error : 'No Error 😊'}</p>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;