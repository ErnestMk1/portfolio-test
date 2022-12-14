import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import './Skills.css';

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2 className="skills_caption">Skills</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, sint!
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skills-slider"
              >
                <div className="item">
                  <img src={meter1} alt="web-dev"/>
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="front"/>
                  <h5>Front-end skills</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="web-dev"/>
                  <h5>Guitar skills</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default Skills;
