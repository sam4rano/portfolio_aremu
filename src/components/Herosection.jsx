import Aremu from "../assets/aremupc.jpeg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./herosection.css";
import Typewriter from "typewriter-effect";

const Herosection = () => {
  return (
    <Container fluid className="bghero h-auto px-5">
      <div className="container_all p-5">
        <div className="col img_container text-white border-2">
          <img src={Aremu} alt="adeola pics" className="border img_one" />
          <p className="p_title">
            <Typewriter
              options={{
                strings: ["Aremu A."],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </div>
        <div className="col text-white fst-italic" style={{ paddingTop: "70px" }}>
          <p className="fs-5 text-center">
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
