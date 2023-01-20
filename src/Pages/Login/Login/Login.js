import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';


const Login = () => {
    useTitle('Login');
    const [error, setError] = useState('');
    const { signIn, setLoading, providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const from = location.state?.from?.pathname || '/';

    const handlGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate(from, { replace: true });
                
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handlGithubLogin = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate(from, { replace: true });
                
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your email is not verified. Please verify your email address.')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto my-5 border rounded border-2 p-4 shadow bg-dark bg-opacity-10 '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>


                <div className='d-flex justify-content-between'>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <Link to='/register'>
                        <button type="button" class="btn btn-outline-primary">Register</button>
                    </Link>


                </div>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <hr />

            </Form>
            <Container className='w-50 mx-auto my-5'>
                <div class="d-grid gap-2 mt-4">
                    <button class="btn btn-warning" type="button" onClick={handlGithubLogin}>Github</button>
                    <button class="btn btn-primary" type="button" onClick={handlGoogleLogin}>Google</button>
                </div>
            </Container>
        </Container>
    );
};

export default Login;