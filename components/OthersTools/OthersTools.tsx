// NEXT
import Image from "next/image";
// COMPONENTS
import OtherKeys from "./../OtherKeys/OtherKeys";
import SecureTool from "./../SecureTool/SecureTool";
import Container from "./../Container/Container";

const OthersTools = () => {
  return (
    <section className="otherTools">
      <div className="otherTools__background">
        <Image
          src="/images/solutions/bluewave.png"
          alt="fond bleu"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <Container>
        <OtherKeys />
        <SecureTool />
      </Container>
    </section>
  );
};

export default OthersTools;
