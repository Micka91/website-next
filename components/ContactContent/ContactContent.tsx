// COMPONENTS
import ContactCards from "./../ContactCards/ContactCards";
import Container from "./../Container/Container";
import ContactInformations from "./../ContactInformations/ContactInformations";

const ContactContent = () => {
  return (
    <div className="contact">
      <div
        className="contact__background"
        style={{ backgroundImage: "url(/images/background/pattern.svg)" }}
      >
      </div>
      <Container>
        <ContactCards />
        <ContactInformations />
      </Container>
    </div>
  );
};

export default ContactContent;
