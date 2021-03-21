import React, { useContext, useRef, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import './Login.css';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';

const Login = () => {
    const { setLoggedInUser, newUser, setNewUser } = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/destination" } };

    const { register, handleSubmit, watch, errors } = useForm();
    const password = useRef({});
    password.current = watch("password", "");

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });
    setLoggedInUser(user);

    initializeLoginFramework();

    const onSubmit = data => {
        const { name, email, password } = data;
        if (newUser && name && email && password) {
            createUserWithEmailAndPassword(name, email, password)
                .then(res => {
                    res.name = name;
                    setUser(res);
                    history.replace(from);
                })
        }

        if (!newUser && email && password) {
            signInWithEmailAndPassword(email, password)
                .then(res => {
                    setUser(res);
                    history.replace(from);
                })
        }
    }

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setUser(res);
                history.replace(from);
            });
    }

    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                setUser(res);
                history.replace(from);
            });
    }

    return (
        <Container>
            <Row>
                <Col lg="10" xl="9" className="mx-auto">
                    <Card className="card-signin flex-row my-5">
                        <Card.Img variant="left" className="d-none d-md-flex card_img_left">
                        </Card.Img>
                        <Card.Body className="card_body">
                            <Card.Title as={'h1'} className="text-center card_title">{newUser ? 'Sign Up' : 'Sign In'}</Card.Title>
                            <Form noValidate className="form_signin" onSubmit={handleSubmit(onSubmit)}>
                                {newUser &&
                                    <Form.Group controlId="NameValidation" className="form_group">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            name="name"
                                            type="text"
                                            ref={register({ required: true })}
                                            placeholder="Name"
                                            required
                                            isInvalid={errors.name}
                                            autoFocus />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter your name.
                                    </Form.Control.Feedback>
                                    </Form.Group>
                                }

                                <Form.Group controlId="EmailValidation" className="form_group">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        name="email"
                                        type="email"
                                        ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
                                        placeholder="Enter email"
                                        required
                                        isInvalid={errors.email} />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid email.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <hr />
                                <Form.Group controlId="PasswordValidation" className="form_group">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        name="password"
                                        type="password"
                                        ref={register({
                                            required: true,
                                            minLength: {
                                                value: 8,
                                                message: "Password must have at least 8 characters."
                                            }
                                        })}
                                        isInvalid={errors.password}
                                        placeholder="Password"
                                        required />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password?.message ? errors.password.message : "Please enter your password."}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                {newUser &&
                                    <Form.Group controlId="ConfirmPasswordValidation" className="form_group">
                                        <Form.Label>Confirm password</Form.Label>
                                        <Form.Control
                                            name="confirmPassword"
                                            type="password"
                                            ref={register({
                                                validate: value =>
                                                    value === password.current || ""
                                            })}
                                            placeholder="Confirm password"
                                            isInvalid={errors.confirmPassword}
                                            required />
                                        <Form.Control.Feedback type="invalid">
                                            The passwords do not match.
                                    </Form.Control.Feedback>
                                    </Form.Group>
                                }

                                <Button variant="primary" size="lg" className="text-uppercase signin_btn" type="submit" block>
                                    {newUser ? 'Sign Up' : 'Sign In'}
                                </Button>
                                <p className="text-right mt-2" style={{ fontSize: '.9rem' }}>
                                    {newUser ?
                                        "Already have an account?"
                                        : "Don't have an account?"
                                    } <Link
                                        className="text-decoration-none"
                                        onClick={() => setNewUser(!newUser)}>
                                        {newUser ? 'Sign in!' : 'Sign up!'}
                                    </Link>
                                </p>
                            </Form>
                            <h5 className="text-center" style={{
                                borderBottom: "1px solid #9a9b9c",
                                lineHeight: "0.1em",
                                margin: "10px 0 20px"
                            }}>
                                <span style={{
                                    background: "#fff",
                                    padding: "0 10px"
                                }}>Or</span>
                            </h5>
                            <Button
                                variant="danger"
                                onClick={googleSignIn}
                                size="lg"
                                className="btn-google text-uppercase signin_btn"
                                type="submit"
                                block>
                                <i className="bi bi-google mr-2"></i>
                                {newUser ? 'Sign up with Google' : 'Sign in with Google'}
                            </Button>
                            <Button
                                onClick={fbSignIn}
                                size="lg"
                                className="btn-facebook text-uppercase signin_btn"
                                type="submit"
                                block>
                                <i className="bi bi-facebook mr-2"></i>
                                {newUser ? 'Sign up with Facebook' : 'Sign in with Facebook'}
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;