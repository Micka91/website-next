import Container from "../Container/Container";
import Address from "./../Address/Address";
import Informations from "./../Informations/Informations";
import Conditions from "./../Conditions/Conditions";
import DownloadApp from "../DownloadApp/DownloadApp";
import Copyright from "./../Copyright/Copyright";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer">
          <Address />
          <Informations />
          <Conditions />
          <DownloadApp />
        </div>
      </Container>
      <Copyright />
    </footer>
  );
};

export default Footer;
