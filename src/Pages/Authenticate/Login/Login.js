import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const Login = () => {

    const { handleGoogleLogin, handleGithubLogin, error, setError } = useAuth();

    // ---------redirect-----------
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    // google login
    const googleLogin = () => {
        handleGoogleLogin()
            .then((result) => {
                history.push(redirect_uri)
                // setUser(result.user);
                console.log(result.user);
                setError("");
            })
            .catch((error) => setError(error.message));
    }
    // github login
    const githubLogin = () => {
        handleGithubLogin()
            .then((result) => {
                history.push(redirect_uri)
                // setUser(result.user);
                console.log(result.user);
                setError("");
            })
            .catch((error) => setError(error.message));
    }


    return (
        <Container>
            <Row className='align-items-center justify-content-center'>
                <Col style={{ textAlign: 'left' }} className='p-5 shadow-lg my-5 rounded' >

                    <div className='w-50 mx-auto'>
                        <h2 className='text-primary text-center'>Please Login</h2><hr />

                        <div className="login-btn mt-4 flex-column d-flex ">
                            <Button variant='primary' onClick={googleLogin} className="mb-2">
                                Sign in with Google
                            </Button>
                            <Button variant='success' onClick={githubLogin} className='mb-2'>
                                Sign in with Github
                            </Button>
                        </div><hr />
                        <p className='bg-danger text-white p-2 rounded'>{error ? error : 'No Error 😊'}</p>
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default Login;