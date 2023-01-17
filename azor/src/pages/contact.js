import Container from "react-bootstrap/esm/Container";
import ContactForm from "../components/forms/ContactForm";

const Contact = () => {
  return (
    <>
      <Container className="my-5">
        <h1 className="text-center mb-5">Contact Us</h1>
        <div>
          <h5 className="fw-light line-height-5 mb-5 lh-base">
            Whether you need some help to find your next bike, motorbike or van,
            or you'd like to let us know what we do well or how we could do
            better... we'd love to hear from you. Azor Motorcycle Services is
            committed to providing an exceptional customer experience, and this
            is made possible by receiving and acting on the feedback we're given
            by you.
          </h5>

          <h6 className="lh-base">
            Our dedicated support teams are currently working remotely, but
            they're all still available to help you 7 days a week.
          </h6>
          <h6>We look forward to hearing from you.</h6>
        </div>
      </Container>
      <div className="my-5 bg-light border-top border-bottom border-primary">
        <Container>
          <ContactForm />
        </Container>
      </div>
    </>
  );
};

export default Contact;
