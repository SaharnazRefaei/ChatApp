import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import "./Home.css";


function Home() {
  return (
    <Row>
      <Col md={6} className="d-flex flex-direction-column align-items-center justiy-content-center home__mg">
        <div>
             <h1>Dive into the game with your friends</h1>
             <p>MAFIANIGHTS lets you play with the world</p>
             <LinkContainer to="/chat">
             <Button variant="success">Get Started <i className='fa-solid fa-people-group'></i></Button>
             </LinkContainer>
        </div>
      </Col>
      <Col md={6} className="home__bg"></Col>
    </Row>
  );
}

export default Home