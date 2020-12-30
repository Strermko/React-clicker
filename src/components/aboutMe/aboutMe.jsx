/// *** Import component and styles here *** ///
import React, { useState } from "react";
import { Row, Col, Container, Button, ButtonGroup, ListGroup, ListGroupItem } from "reactstrap";
import { useSpring, animated } from "react-spring";
import "./aboutMe.scss";

/// *** Import all images or other stuff *** ///
import RedSus from "../../media/img/Red.png";
import PurpleSus from "../../media/img/Purple.png";
import YellowSus from "../../media/img/Yellow.png";
import GreenSus from "../../media/img/Green.png";
import OrangeSus from "../../media/img/Orange.png";

/// *** Simulating information pull from backend or other place *** ///
const imgArray = [RedSus, OrangeSus, PurpleSus, YellowSus, GreenSus];
const informationArray = [
  "I'm not sure it's a really good idea to make UX this way, but wanna try =D",
  "I'm second year Computer Science student at WSEI in Kraków, and have a nursery degree... but spent a lot of time and begun a few study untill I found my self in IT.",
  "Maybe put here some list it's a better way to comunicate, but for no reason i write it in line: React, JS, HTML5, CSS3, .Net(C#), Unity, Git, a bit of Python, OOP",
  "I've spend a lot of time with coffee, not like work in coffee shop, I've live with coffee in my soul =D After this a little time in McDonalds. Work in tourism now... but you know :(",
  ["Manual tester with ISTQB cerificate", "Good library Udemy courses", "A lot of Coffee training and cupping", "physical couch and trainer"],
];

/// *** Place for Functions *** ///
const listGenerator = (list) => {
  return <ListGroup>{list.map((el) => {return(<ListGroupItem>{el}</ListGroupItem>)})}</ListGroup>;
};
/// *** Main export Hook *** ///
function AboutMe() {
  const [count, setCount] = useState(0);
  const [currentUpgrade, setCurrentUpgrade] = useState(0);
  const [animate, toogleAnimate] = useState(false);
  const { x } = useSpring({
    from: { x: 0 },
    x: animate ? 1 : 0,
    config: { duration: 500 },
  });

  const styleChanger = (points, pickedUpgrade) => {
    if (count >= points && currentUpgrade !== pickedUpgrade) {
      return { backgroundColor: "gray", color: "white", opacity: 0.5 };
    } else if (currentUpgrade === pickedUpgrade) {
      return { backgroundColor: "blue", opacity: 0.5 };
    } else {
      return { background: "none", color: "black" };
    }
  };

  const pointChanger = () => {
    switch (currentUpgrade) {
      case 1:
        setCount(count + 2);
        break;
      case 2:
        setCount(count + 4);
        break;
      case 3:
        setCount(count + 8);
        break;
      case 4:
        setCount(count + 12);
        break;
      default:
        setCount(count + 1);
        break;
    }
  };

  return (
    <Container className="about-me-panel">
      <Row className="point-counter">
        <Col>Impostors : {count}</Col>
      </Row>
      <Row className="tip">
        <Col>Find more impostors for more information</Col>
      </Row>
      <Row className="main-panel">
        <Col className="upgrades">
          <ButtonGroup vertical>
            <Button
              style={styleChanger(5, 1)}
              onClick={() => {
                if (count >= 5) {
                  setCurrentUpgrade(1);
                }
              }}
            >
              Education (x2 points)
            </Button>
            <Button
              style={styleChanger(15, 2)}
              onClick={() => {
                if (count >= 15) {
                  setCurrentUpgrade(2);
                }
              }}
            >
              Skills (x4 points)
            </Button>
            <Button
              style={styleChanger(45, 3)}
              onClick={() => {
                if (count >= 45) {
                  setCurrentUpgrade(3);
                }
              }}
            >
              Experience (x8 points)
            </Button>
            <Button
              style={styleChanger(85, 4)}
              onClick={() => {
                if (count >= 85) {
                  setCurrentUpgrade(4);
                }
              }}
            >
              Courses (x12 points)
            </Button>
          </ButtonGroup>
        </Col>
        <Col className="clicker">
          <animated.div
            style={{
              opacity: x.interpolate({ range: [0, 1], output: [1, 1] }),
              transform: x
                .interpolate({
                  range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                  output: [1, 0.9, 1.1, 0.9, 1],
                })
                .interpolate((x) => `scale(${x})`),
            }}
          >
            <img
              src={imgArray[currentUpgrade]}
              alt="IMG"
              onClick={() => {
                pointChanger();
                toogleAnimate(!animate);
              }}
            />
          </animated.div>
        </Col>
        <Col className="information">{typeof(informationArray[currentUpgrade]) !== "string" ? listGenerator(informationArray[currentUpgrade]) : informationArray[currentUpgrade] }</Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
