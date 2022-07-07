// COMPONENTS
import ContactCards from "./../ContactCards/ContactCards";
import Container from "./../Container/Container";
import ContactInformations from "./../ContactInformations/ContactInformations";

const ContactContent = () => {
  return (
    <div className="contact">
      <Container>
        <ContactCards />
        <ContactInformations />
      </Container>
    </div>
  );
};

export default ContactContent;
