import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import "./experience.css"
const Experience = () => {
  return (
    <div className="bgcon">

    <Container className="my-2 bgexperience">
      <h1 className="text-center text-black bg-white fs-1 pt-2">Experience</h1>
      <ListGroup variant="flush" className="lst">
        <h5>Masakhane NLP Researcher / Linguistic Project Coordinator</h5>
        <ListGroup.Item className="lst">
          Working as an annotator on a collaboration project on Question
          Answering.
        </ListGroup.Item>
        <ListGroup.Item className="lst">
          Coordinating a team of 5 translators working on the translation of
          about 200 scientific research papers from English to Yorùbá language.
        </ListGroup.Item>
        <ListGroup.Item className="lst">
          Led a team of 3 annotators who worked on a multi-modal translation and
          computer vision project.
        </ListGroup.Item>
        <ListGroup.Item className="lst">
          Coordinated 6 annotators on a combined 4000 text datasets who worked
          on Named Entity Recognition Annotation and Parts of Speech Tagging
          project.
        </ListGroup.Item>
        <ListGroup.Item className="lst">
          Led a team of translators who translated 8000 sentences from English
          language to Nigerian Pidgin English.
        </ListGroup.Item>
        <ListGroup.Item className="lst">
          Performed human model evaluation of a model trained majorly on dataset
          from the news domain.
        </ListGroup.Item>
        <ListGroup.Item className="lst">
          <strong> Aremu Language Consult Limited</strong>
          <br />
          <em> Founder/C.E.O</em>
          <br />
          December 2018 - Present (4 years 10 months) Majaro,
          Yaba, Lagos
          <br />
          - Leading the development of rule-based guides to aid the development
          of numerical model development in Yorùbá language.
          <br />
          - Supplying the written and spoken form of contents needed for the
          project to develop text-to-speech tools.
          <br />- Evaluating cardinal and ordinal numeral formats in relation to
          contextual use in the project.
        </ListGroup.Item>
        <ListGroup.Item className="lst">
          <strong>TELUS International</strong>
          <br />
          <em>Phonetician</em>
          <br />
          June 2022 - November 2022 (6 months)
          <br />
          - Leading the development of rule-based guides to aid the development
          of numerical model development in Yorùbá language.
          <br />
          - Supplying the written and spoken form of contents needed for the
          project to develop text-to-speech tools.
          <br />- Evaluating cardinal and ordinal numeral formats in relation to
          contextual use in the project.
        </ListGroup.Item>

        <ListGroup.Item className="lst">
          <strong>Amazéthu</strong>
          <br />
          <em>Lead Speech Annotator</em>
          <br />
          November 2021 - October 2022 (1 year)
          <br />
          - Contributed to the development of ontology and style guide which
          guides annotation of speech phonetically and documented annotation
          processes.
          <br />
          - Leading a team of 5 annotators who annotated about 2000 dataset of
          speech corpus.
          <br />
          - Tested a conversation design tool and gave recommendations on how to
          improve the tool.
          <br />- Worked on evaluating a speech annotation tool and recommended
          some linguistic design features which made the annotation process
          swift by about 55% optimization.
        </ListGroup.Item>

        <ListGroup.Item className="lst">
          <strong>Translators without Borders</strong>
          <br />
          <em>Terminologist</em>
          <br />
          January 2021 - January 2022 (1 year 1 month)
          <br />
          - Handled partners request on terminology base creation and
          enrichment.
          <br />
          - Used Terminology Management tools such as Memsource, Web4, and Kato
          TM to optimize delivery of task.
          <br />
          - Assisted other teams on translation, localization, subtitling, and
          voice-over projects.
          <br />
          - Actively involved in the migration of terminologies from old systems
          to new.
          <br />- Documented terminology processes of about 10 partners for
          translation works.
        </ListGroup.Item>

        <ListGroup.Item className="lst">
          <strong>Yoruba Name</strong>
          <br />
          <em>Lexicographer</em>
          <br />
          August 2018 - February 2020 (1 year 7 months)
          <br />
          Lekki, Lagos
          <br />
          - Worked with the director of the project remotely and supplied about
          700 names into the dashboard.
          <br />
          - Edited and added meanings, morphology, and geolocation to names in
          the dashboard.
          <br />- Used and tested the text-to-speech feature aiding
          pronunciation of names in the dashboard.
        </ListGroup.Item>
      </ListGroup>
    </Container>
    </div>
  );
};

export default Experience;
