import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// Import images
import imgHero1 from '../assets/images/img-hero1.jpg';
import imgHero2 from '../assets/images/img-hero2.jpg';
import imgHero3 from '../assets/images/img-hero3.jpg';
import imgHero4 from '../assets/images/img-hero4.jpg';

const PipPlan = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handlePlanTripClick = () => {
    navigate('/plan-trip'); // Navigate to the plan-trip page
  };

  return (
    <section id="plan" className="plan-section">
      <Carousel>
        <Carousel.Item>
          <div
            className="carousel-background"
            style={{
              backgroundImage: `url(${imgHero1})`, // Use imported image
              height: '400px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Carousel.Caption>
              <h3>Discover New Destinations</h3>
              <p>Find the perfect getaway to relax and recharge.</p>
              <Button variant="primary" onClick={handlePlanTripClick}>
                Plan Your Trip
              </Button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="carousel-background"
            style={{
              backgroundImage: `url(${imgHero2})`, // Use imported image
              height: '400px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Carousel.Caption>
              <h3>Adventure Awaits</h3>
              <p>Embark on thrilling adventures tailored just for you.</p>
              <Button variant="primary" onClick={handlePlanTripClick}>
                Plan Your Trip
              </Button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="carousel-background"
            style={{
              backgroundImage: `url(${imgHero3})`, // Use imported image
              height: '400px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Carousel.Caption>
              <h3>Relax and Unwind</h3>
              <p>Choose from serene locations to recharge your spirit.</p>
              <Button variant="primary" onClick={handlePlanTripClick}>
                Plan Your Trip
              </Button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="carousel-background"
            style={{
              backgroundImage: `url(${imgHero4})`, // Use imported image
              height: '400px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Carousel.Caption>
              <h3>Explore Hidden Gems</h3>
              <p>Discover places off the beaten path for a unique experience.</p>
              <Button variant="primary" onClick={handlePlanTripClick}>
                Plan Your Trip
              </Button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default PipPlan;
