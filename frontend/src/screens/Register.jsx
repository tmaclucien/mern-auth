import React, { useState } from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import FormContainer from '../components/FormContainer.jsx' 

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
    }
  return (
    <FormContainer>
        <h1>Sign Up</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit" className='mt-3'>
                Sign Up
            </Button>

            <Row className='py-3'>
                <Col>
                    Have an account?
                    <LinkContainer to='/login'>
                        <Button variant='link'>Sign In</Button>
                    </LinkContainer>
                </Col>
            </Row>
        </Form>
    </FormContainer>
  )
}

export default Register