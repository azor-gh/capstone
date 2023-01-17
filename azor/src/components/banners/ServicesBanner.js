import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const ServicesBanner = () => {
  return (
    <div className="services-banner d-flex">
      <Container className="d-flex align-middle align-items-center ">
        <Row>
          <Col xs={12} sm={8} md={7}>
            <h4 className="hero-title">
              Quality, value for money servicing for every motorcycle Expect the
              highest standards and great prices when you service your
              motorcycle
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesBanner;
