import React, { useState } from "react";
import { Row, Col, ListGroup, Container } from "reactstrap";
import { Link } from "react-router-dom";
import "./header.scss";
import Alive from "../../media/img/alive.png";
import Dead from "../../media/img/dead.png";

function Header() {
  const [sus, setSus] = useState(true);
  return (
    <Container className="header">
      <Row>
        <Col className="logo">
          <Link to="/">
            <img
              onClick={() => setSus(false)}
              src={sus ? Alive : Dead}
              alt="Home"
            />
          </Link>
        </Col>
        <Col className="menu">
          <ListGroup horizontal>
            <Link to="/about-me">About me</Link>
            <Link to="/">Contact</Link>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
