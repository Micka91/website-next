// REACT
import { useState, useEffect } from "react";
// COMPONENTS
import Container from "../Container/Container";
import Informations from "./../Informations/Informations";
import Conditions from "./../Conditions/Conditions";
import DownloadApp from "../DownloadApp/DownloadApp";
import Copyright from "./../Copyright/Copyright";
import Details from "./../Details/Details";
// TRANSLATION
import { footer } from "../../translations/fr/footer";

const Footer = () => {
  const [matches, setMatches] = useState(true);

  console.log("MATCHES", matches);

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <footer>
      <Container>
        <h3
          style={{ textAlign: "center", fontWeight: 400, marginTop: "7rem" }}
          dangerouslySetInnerHTML={{ __html: footer.col4.subTitle }}
        />
        <div className="footer">
          <Details />
          <Informations />
          <Conditions />
          <DownloadApp />
        </div>

        <div className="footer__newsletter">
          {/* <iframe
            className="footer__iframe"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            title="newsletter"
            src="https://app.mailjet.com/widget/iframe/56BJ/P1r"
            width="100%"
            height={matches ? 350 : 450}
          ></iframe> */}
          <iframe
            data-w-type="embedded"
            src="https://xt0ps.mjt.lu/wgt/xt0ps/6qy/form?c=f1c979b0"
            // width="600"
            style={{
              width: matches ? 370 : "100%",
              height: "auto",
              border: "none",
              marginLeft: "auto",
            }}
          />
        </div>
      </Container>
      <Copyright />
    </footer>
  );
};

export default Footer;
