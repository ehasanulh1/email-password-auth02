import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const LoginReactBootstrap = () => {
    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setSuccess(true)
            })
            .catch(error => console.error(error))
    }

    const handleEmailBlur = event => {
        console.log(event.target)
        const email = event.target.value;
        setUserEmail(email);
        console.log(email)
    }

    const handleForgetPassword = () => {
        if (!userEmail) {
            alert('Please enter your email address.')
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password Reset email sent. Please check your email')
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='w-50 mx-auto'>
            <Form onSubmit={handleSubmit}>
                <h1 className='text-success'>Please Login!</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                {/* <p className='text-danger'>{passwordError}</p> */}
                {success && <p className='text-success'>Log in Successfully.</p>}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p><small>New to this website? Please <Link to='/register'>Register</Link> </small></p>
            <p><small>Forget Password?<button onClick={handleForgetPassword} type='button' className='btn btn-link'>Reset Password</button></small></p>
        </div>
    );
};

export default LoginReactBootstrap;