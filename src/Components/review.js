import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
// import user1 from '../assets/images/user1.jpg'; // Example user image
// import user2 from '../assets/images/user2.jpg'; // Example user image
// import user3 from '../assets/images/user3.jpg'; // Example user image

export default function PipReviews() {
  const reviewsData = [
    {
      id: 1,
      name: 'Rahul Singh',
    //   image: user1,
      review: 'PipTrip helped me plan the most amazing trip to the mountains. Their flexible payment options made it easier, and the itinerary was perfect!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sara Johnson',
    //   image: user2,
      review: 'As a solo traveler, finding companions was difficult. PipTrip matched me with like-minded travelers, and the experience was unforgettable!',
      rating: 4.5,
    },
    {
      id: 3,
      name: 'Amit Patel',
    //   image: user3,
      review: 'The transparency in pricing and detailed trip suggestions were impressive. Highly recommend PipTrip for stress-free travel planning!',
      rating: 4,
    },
  ];

  return (
    <section id="reviews" className="block review-block">
      <Container>
        <div className="title-holder text-center mb-5">
          <h2>Customer Reviews</h2>
          <div className="subtitle">What Our Happy Travelers Say</div>
        </div>
        <Row>
          {reviewsData.map((review) => (
            <Col md={4} key={review.id} className="mb-4">
              <Card className="review-card">
                <div className="text-center mt-3">
                  <Image
                    src={review.image}
                    roundedCircle
                    alt={review.name}
                    className="review-image"
                  />
                </div>
                <Card.Body>
                  <Card.Title className="text-center">{review.name}</Card.Title>
                  <Card.Text className="text-muted text-center mb-3">
                    {'⭐'.repeat(Math.floor(review.rating))} 
                    {review.rating % 1 ? '⭐½' : ''}
                  </Card.Text>
                  <Card.Text className="text-center">
                    {review.review}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
