import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function PipServices() {
  const servicesData = [
    {
      id: 1,
      icon: "fas fa-road", // Icon for flexible itineraries
      title: "Flexible Itineraries",
      description:
        "Customize your travel plans with flexible itineraries that adapt to your preferences and schedule.",
    },
    {
      id: 2,
      icon: "fas fa-dollar-sign", // Icon for cost transparency
      title: "Cost Transparency",
      description:
        "Know exactly what you're paying for with clear and upfront cost details for all services.",
    },
    {
      id: 3,
      icon: "fas fa-credit-card", // Icon for EMI based payment
      title: "EMI Based Payment",
      description:
        "Enjoy travel now and pay later with our easy EMI options that suit your budget.",
    },
    {
      id: 4,
      icon: "fas fa-map-marked-alt", // Icon for blank destinations
      title: "Explore New Destinations",
      description:
        "Discover hidden gems and unique destinations you may have never considered.",
    },
    {
      id: 5,
      icon: "fas fa-suitcase-rolling", // Icon for trip suggestions
      title: "Personalized Trip Suggestions",
      description:
        "Get tailored trip ideas based on your preferences and interests for a unique travel experience.",
    },
    {
      id: 6,
      icon: "fas fa-users", // Icon for travel partners
      title: "Travel Partners for Solo Travelers",
      description:
        "Connect with other solo travelers and create unforgettable memories together.",
    },
  ];

  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder text-center mb-4">
          <h2>Our Services</h2>
          <div className="subtitle">Services We Provide</div>
        </div>
        <Row>
          {servicesData.map((service) => {
            return (
              <Col sm={4} className="holder mb-4" key={service.id}>
                <div className="icon text-center mb-3">
                  <i className={service.icon} style={{ fontSize: '40px', color: '#007bff' }}></i>
                </div>
                <h3 className="text-center">{service.title}</h3>
                <p className="text-center">{service.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
