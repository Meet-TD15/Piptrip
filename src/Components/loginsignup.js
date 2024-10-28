import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container className="mt-5 mb-5"> {/* Add mb-5 for bottom margin */}
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>

            {!isLogin && (
              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" required />
              </Form.Group>
            )}

            <Button variant="primary" type="submit">
              {isLogin ? 'Login' : 'Sign Up'}
            </Button>
            <Button variant="link" onClick={handleToggle}>
              {isLogin ? 'Create an account' : 'Already have an account? Login'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginSignup;
