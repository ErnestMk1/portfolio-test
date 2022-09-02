import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";
import logo from '../../assets/img/logo.svg';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={6}>
            <img
              src={logo}
              alt='footer logo'
              className="footer_logo"
            />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="google.com">
                <img src={navIcon1} alt="link img" />
              </a>
              <a href="JoeMama.com">
                <img src={navIcon2} alt="link img" />
              </a>
              <a href="youtube.com">
                <img src={navIcon3} alt="link img" />
              </a>
              <p>CopyRight 2022. All Right Reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
