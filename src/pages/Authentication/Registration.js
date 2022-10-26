import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form"
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Registration = () => {
    const { register, handleSubmit } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const onSubmit = data => {
        data.password.length < 6 ? alert('chottttto hye geche baba!')
            :
            createUser(data.email, data.password)
                .then(res => {
                    updateUserProfile({
                        displayName: data.displayName,
                        photoURL: data.photoURL
                    });
                    if (res.user.email) {
                        navigate(from, { replace: true });
                    }
                    else {
                        toast.error('Something went wrong.')
                    }
                })
                .catch(e => {
                    console.error(e);
                    // setError(e.message);
                });
    };


    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-1" >
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="i!"
                    {...register("displayName", { required: true })}
                />
            </Form.Group>
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
            <Form.Group className="mb-1">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="https://img.png"
                    {...register("photoURL", { required: true })}
                />
            </Form.Group>



            <Button size='sm' variant="primary" type='submit'>Submit</Button>
        </Form>
    );
};

export default Registration;