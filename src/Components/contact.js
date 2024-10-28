import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function PipContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact Us</h2>
          <div className="subtitle">Get connected with us</div>
        </div>
        <Form className="contact-form">
          <Row>
            <Col sm={4}>
              <Form.Control
                placeholder="Enter your full name"
                type="text"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                placeholder="Enter your email address"
                type="email"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                placeholder="Enter your contact number"
                type="tel"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                placeholder="Enter Your Messege hear"
                required
              />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit+">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.71772237972!2d73.09068466836038!3d22.322081831004574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1723830619956!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
            <ul>
                <li><i className="fas fa-envelope"></i>
                hello@domain.com
                </li>
                <li><i className="fas fa-phone"></i>
                000-000-0000
                </li>
                <li><i className="fas fa-map-marker-alt"></i>
                Vadodara,Gujarat,India
                </li>
            </ul>
        </div>
      </Container>
    </section>
  );
}
