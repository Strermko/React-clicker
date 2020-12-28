import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./mainPage.scss";
import Mem from "../../media/img/meme.jpg"

const MainPage = () => {
  return (
    <Container className="main-page">
      <Row className="title">
        <h2>Welcome in this simple page</h2>
      </Row>
      <Row className="main-info">
        <Col>
            <div>
            Hi, my name is <span className="italic">Dmytro Skoropadskyi</span> (Dimek in short). I'm realy glad to see you in my 
            page because it's mean you've come here to help (giving me feedback) or give me a job offer =D <br/><br/>
            Then if you're not impostor, dont click on <span className="italic">Orange</span>...<br/><br/>
            But go ahead and use other button to get more information or contact with me :) <br/><br/>
            <span className="italic">P.S. I try to make memes generator here but dont find anny API</span>
            </div>
        </Col>
        <Col>
            <img src={Mem} alt="Tutaj był mem"/>
        </Col>
      </Row>
    </Container>
  );
};
export default MainPage;
