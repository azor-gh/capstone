import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const WhyBook = () => {
  return (
    <div className="bg-light fluid">
      <Container className="pt-5 d-flex flex-column ">
        <h3>Why book your motorcycle's service online?</h3>
        <Row className="mt-5">
          {[
            {
              icon: "fa-solid fa-list-check",
              title: "Quick and easy form",
            },
            {
              icon: "fa-solid fa-screwdriver-wrench",
              title: "Choose a service",
            },
            {
              icon: "fa-solid fa-clock",
              title: "Reserve a time slot online",
            },
            {
              icon: "fa-solid fa-credit-card",
              title: "No payment required now",
            },
          ].map((props, index) => {
            return (
              <Col xs={6} sm={6} md={3} className="mb-5" key={index}>
                <Row>
                  <Col>
                    <i className={`${props.icon} fa-3x`}></i>
                    <br></br>
                    <br></br>
                    <h3>{props.title}</h3>
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default WhyBook;
