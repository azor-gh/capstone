import React from "react";
import Container from "react-bootstrap/esm/Container";
import Img4 from "../assets/media/images/img4.jpeg";

const About = () => {
  return (
    <Container>
      <div className="text-center mt-5">
        <h1>About Us</h1>
      </div>
      <div className="mt-5">
        <h5 className="lh-base mb-3">
          At Azor Motorcycle Services, we're committed to offering a better way
          to repair and take care of your motorcycle.
        </h5>
        <h5 className="lh-base">
          We know that you're passionate about your bike and we want to help you
          keep it in the best possible condition. With our experienced mechanics
          and state-of-the-art facilities, we're confident that we can provide
          you with the best service possible.
        </h5>
      </div>
      <div className="mt-5 border-top border-bottom border-primary">
        <div className="row featurette my-5">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              Azor Motorcylce Services.{" "}
              <span className="text-muted">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              We are proud to be a part of the Azor Motors Group, which launched
              in 2006. Our company trades under the Azor Motors, Bristol Street
              Motors, and Macklin Motors names. You can find our headquarters in
              Gateshead, but we also have Vertu Motorcycles Centres in
              Sunderland, Stockton, Grantham, and Nottingham. We are proud to
              represent some of the world's top motorcycling manufacturers,
              including Honda and BMW Motorrad.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="img-fluid mx-auto"
              width="500"
              height="500"
              src={Img4}
              alt="Azor Service Center"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
