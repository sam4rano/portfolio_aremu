import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./footer.css";
import {
  BiLogoLinkedinSquare,
  BiLogoInstagramAlt,
  BiLogoFacebookSquare,
  BiLogoTwitter,
  BiPhone,
  BiEnvelope,
} from "react-icons/bi";

function Footer() {
  return (
    <Container
      fluid
      className="bgadded text-white h-auto p-2 d-flex flex-row justify-content-around"
      style={{ maxHeight: "300px" }}
    >
      <h5 className="w-20 mt-5"> Social links</h5>
      <ul className="d-flex flex-column w-40">
        <li>
          <BiLogoTwitter />
          <a
            href="https://twitter.com/aremuadeolajr"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <BiLogoLinkedinSquare />
          <a
            href="https://www.linkedin.com/in/aremu-adeola-jr-213055155/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li>
          <BiLogoInstagramAlt />
          <a
            href="https://www.instagram.com/adeola_jr/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <BiLogoFacebookSquare />
          <a
            href="https://web.facebook.com/profile.php?id=100007049295659"
            target="_blank"
            rel="noreferrer"
          >
            facebook
          </a>
        </li>
      </ul>
      <ul className="w-40 pt-5">
        <li>
          <BiPhone />

          <a href="#">
            +2349090612374
          </a>
        </li>
        <li>
          <BiEnvelope />

          <a href="#">
            aremuadeola97@gmail.com
          </a>
        </li>
      </ul>
    </Container>
  );
}

export default Footer;
