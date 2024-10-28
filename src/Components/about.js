import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import aboutImage from '../assets/images/about.jpg'; // Example image
// import missionImage from '../assets/images/mission.jpg'; // Example image

export default function PipAbout() {
  return (
    <section id="about" className="block about-block">
      <Container>
        <div className="title-holder text-center mb-5">
          <h2>About Us</h2>
          <div className="subtitle">
            Discover who we are and why we care about your travel experience
          </div>
        </div>

        {/* Main About Section */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="mb-4 mb-md-0">
            <Image 
            //   src={aboutImage} 
              fluid 
              rounded 
              alt="About Us"
              className="about-image" 
            />
          </Col>
          <Col md={6}>
            <h3 className="mb-3">Who We Are</h3>
            <p>
              At <strong>PipTrip</strong>, we believe that travel should be 
              accessible, flexible, and fun. Our goal is to connect you with 
              unforgettable destinations while ensuring transparency and trust 
              in every service we offer.
            </p>
            <p>
              Whether you are a solo traveler seeking adventure, or a group 
              planning a dream vacation, PipTrip provides personalized itineraries, 
              flexible payment options, and expert travel suggestions tailored 
              to your needs.
            </p>
          </Col>
        </Row>

        {/* Mission Section */}
        <Row className="align-items-center">
          <Col md={6}>
            <h3 className="mb-3">Our Mission</h3>
            <p>
              Our mission is to remove barriers to travel by offering transparent pricing, 
              convenient EMI-based payment plans, and curated travel experiences 
              for every kind of explorer. We aim to help travelers uncover hidden 
              gems and connect with like-minded individuals.
            </p>
            <p>
              With PipTrip, your next adventure is just a step away, whether you're 
              planning ahead or exploring new ideas on the go.
            </p>
          </Col>
          <Col md={6} className="mb-4 mb-md-0">
            <Image 
            //   src={missionImage} 
              fluid 
              rounded 
              alt="Our Mission"
              className="mission-image" 
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
