import React from 'react';
import Me from '../../assets/me.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap';

const About = () => {

 return(
     <div>
                    <Container>
                    <h1>About Me:</h1> 
                    <h2>My name is Tony Rivera and I am a Full-Stack Engineer!</h2>
                            <Row>
                                <Col xs={2} md={2}>
                                <img src={Me} alt="tonyphoto" roundedCircle/>{' '}
                                </Col>
                            </Row>
                    </Container>
</div>
 )
}

export default About;