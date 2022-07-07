// COMPONENTS
import OtherKeys from "./../OtherKeys/OtherKeys";
import SecureTool from "./../SecureTool/SecureTool";
import Container from "./../Container/Container";

const OthersTools = () => {
  return (
    <section className="otherTools">
      <Container>
        <OtherKeys />
        <SecureTool />
      </Container>
    </section>
  );
};

export default OthersTools;
