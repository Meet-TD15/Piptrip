import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import blog1 from '../assets/images/blog1.jpg'; // Example blog image
// import blog2 from '../assets/images/blog2.jpg'; // Example blog image
// import blog3 from '../assets/images/blog3.jpg'; // Example blog image

export default function PipBlogs() {
  const blogsData = [
    {
      id: 1,
    //   image: blog1,
      title: 'Top 10 Destinations for Solo Travelers',
      description:
        'Explore the best destinations for solo travelers around the world. These places promise a mix of adventure, relaxation, and community experiences.',
      link: '#',
    },
    {
      id: 2,
    //   image: blog2,
      title: 'How to Plan a Budget-Friendly Trip',
      description:
        'Learn how to stretch your budget with smart planning, cost transparency, and choosing the right itinerary to make the most of your travel.',
      link: '#',
    },
    {
      id: 3,
    //   image: blog3,
      title: 'The Ultimate Travel Packing Checklist',
      description:
        'Packing made easy! Here’s a checklist for every traveler to ensure nothing is left behind on your next adventure.',
      link: '#',
    },
  ];

  return (
    <section id="blogs" className="block blogs-block">
      <Container>
        <div className="title-holder text-center mb-5">
          <h2>Latest Blogs</h2>
          <div className="subtitle">Travel Tips and Stories</div>
        </div>
        <Row>
          {blogsData.map((blog) => (
            <Col md={4} key={blog.id} className="mb-4">
              <Card className="blog-card">
                <Card.Img variant="top" src={blog.image} className="blog-image" />
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.description}</Card.Text>
                  <Button variant="outline-primary" href={blog.link}>
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
