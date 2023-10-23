import Aremu from "../assets/aremubg.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./herosection.css"

const Herosection = () => {
  return (
    <Container fluid className="bg-dark h-auto ">
      <div className="container_all">
        <div className="col img_container text-white border-2">
          <Image src={Aremu} fluid />
          <p style={{ marginLeft: "150px", fontSize: "20px" }}>
            Aremu Adeola Jr.
          </p>
        </div>
        <div className="col text-white" style={{paddingTop:"70px"}}>
          <p className="fs-4">
            I am a linguist with 5 years of experience in African language
            advocacy, research, and technology. I created Yooba Lingo, the first
            African indigenous language crossword board game to aid the learning
            of Yorùbá language and also present African languages to modern
            engagements. In recent time, my works have span across the Nigerian
            Pidgin, Nigerian English, Hausa Language and the Yoruba Language.
            Interested in Conversation Design, Text Annotations, Automatic
            Speech Recognition, Machine Translation, Question Answering and
            other interesting NLP task.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Herosection;
