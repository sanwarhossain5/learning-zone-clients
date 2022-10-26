import React from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';



const Login = () => {
    const { signIn, setLoading } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const onSubmit = data => {
        data.password.length < 6 ? alert('chottttto hye geche baba!')
            :
            signIn(data.email, data.password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    // setError('');
                    // if (user.emailVerified) {
                    //     navigate(from, { replace: true });
                    // }
                    // else {
                    //     toast.error('Your email is not verified. Please verify your email address.')
                    // }
                })
                .catch(error => {
                    // console.error(error)
                    // setError(error.message);
                })
                .finally(() => {
                    setLoading(false);
                })
    };


    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-1" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    {...register("email", { required: true })}
                />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                />
            </Form.Group>
            <Button size='sm' variant="primary" type='submit'>Submit</Button>
        </Form>
    );
};

export default Login;