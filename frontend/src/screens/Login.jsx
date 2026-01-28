import React, { useState } from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import FormContainer from '../components/FormContainer.jsx' 

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
    }
  return (
    <FormContainer>
        <h1>Sign In</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit" className='mt-3'>
                Sign In
            </Button>

            <Row className='py-3'>
                <Col>
                    New Customer?
                    <LinkContainer to='/register'>
                        <Button variant='link'>Register</Button>
                    </LinkContainer>
                </Col>
            </Row>
        </Form>
    </FormContainer>
  )
}

export default Login