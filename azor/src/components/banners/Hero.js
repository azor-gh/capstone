import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";

const HeroBanner = () => {
  return (
    <>
      <div className="hero-banner d-flex">
        <Container className="d-flex align-middle align-items-center ">
          <Row>
            <Col xs={12} sm={8} md={7}>
              <h1 className="hero-title">
                Book your motorcycle service online
              </h1>
              <br></br>
              <h3 className="text-white">
                Your trusted motorcycle maintenance service partner.
              </h3>
              <br></br>
              <Button href="/services" className="text-white fw-semibold fs-5">
                <i className="fa-solid fa-calendar-check"></i> BOOK YOUR
                MOTORCYCLE NOW
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HeroBanner;
