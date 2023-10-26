import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import "./pub.css"

const Publication = () => {

	const style = [
		{
			color:"white",
			backgroundColor:"black"
		}
	]
  return (
	<div className="bgpub">

    <Container className="" style={{style}}>
      <ListGroup variant="flush" className="pubcon text-dark">
        <h2 className="text-center pt-2">Publications</h2>
        <ListGroup.Item as="li" className="pblst text-white">
          <strong>Anuoluwapo Aremu, Jesujoba Alabi, David Adelani.</strong>
          <em>YORC: Yoruba Reading Comprehension Dataset.</em> Widening NLP
          Workshop at Empirical Methods of Natural Language Processing (2023)
        </ListGroup.Item>
        <ListGroup.Item as="li" className="pblst text-white">
          <strong>
            Tolulope Ogunremi, Kola Tubosun, Anuoluwapo Aremu, Iroro Orife,
            David Ifeoluwa Adelani.
          </strong>{" "}
          <em>Ìròyìnspeech: A Multi-Purpose YorùbáSpeech Corpus.</em> (2023)
        </ListGroup.Item>
        <ListGroup.Item as="li" className="pblst text-white">
          <strong>
            Anubha Kabra, Emmy Liu, Simran Khanuja, Alham Fikri Aji, Genta Indra
            Winata, Samuel Cahyawijaya, Anuoluwapo Aremu, Perez Ogayo, Graham
            Neubig.
          </strong>{" "}
          Multi-Lingual and Multi-Cultural Figurative Language Understanding.
          Association of Computational Linguistics (2023)
        </ListGroup.Item>
        <ListGroup.Item as="li" className="pblst text-white">
          <strong>
            Cheikh M. Bamba Dione, David Adelani, Peter Nabende, Jesujoba Alabi,
            Thapelo Sindane, Happy Buzaaba, Shamsuddeen Hassan Muhammad, Chris
            Chinenye Emezue, Perez Ogayo, Anuoluwapo Aremu et al.
          </strong>{" "}
          MasakhaPOS: Part-of-Speech Tagging for Typologically Diverse African
          Languages. Association of Computational Linguistics (2023)
        </ListGroup.Item>
        <ListGroup.Item as="li" className="pblst text-white">
          <strong>
            Tosin P. Adewumi, Mofetoluwa Adeyemi, Aremu Anuoluwapo et al.
          </strong>{" "}
          AfriWOZ: Corpus for Exploiting Cross-Lingual Transferability for
          Generation of Dialogue in Low-Resource, African Languages.
          International Joint Conference on Neural Networks (2023)
        </ListGroup.Item>
        <ListGroup.Item as="li" className="pblst text-white">
          <strong>
            David Ifeoluwa Adelani, Marek Masiak, Israel Abebe Azime, Jesujoba
            Alabi, …, Anuoluwapo Aremu et al.
          </strong>{" "}
          MasakhaNEWS: News Topic Classification for African Languages.
          AfricaNLP Workshop at International Conference on Learning
          Representations (2023)
        </ListGroup.Item>
        <ListGroup.Item as="li" className="pblst text-white">
          <strong>
            Odunayo Ogundepo, Tajuddeen R. Gwadabe, Clara E. Rivera, Jonathan H.
            Clark, Sebastian Ruder, David Ifeoluwa Adelani, Bonaventure F. P.
            Dossou, …, Aremu Anuoluwapo et al.
          </strong>{" "}
          AfriQA: Cross-Lingual Open-Retrieval Question Answering for African
          Languages (2023)
        </ListGroup.Item>
        <ListGroup.Item as="li" className="pblst text-white">
          <strong>
            David Adelani, Graham Nuebig, Sebastian Ruder, …, Anuoluwapo Aremu
            et al.
          </strong>{" "}
          MasakhaNER 2.0: Africa-centric Transfer Learning for Named Entity
          Recognition. Empirical Methods in Natural Language Processing (2022)
        </ListGroup.Item>
        <ListGroup.Item as="li" className="pblst text-white">
          <strong>
            Shamsuddeen Hassan Muhammad, David Ifeoluwa Adelani, Ibrahim Sa’id
            Ahmed, Idris Abdulmumin, …, Anuoluwapo Aremu et al.
          </strong>{" "}
          NaijaSenti: A Nigerian Twitter Sentiment Corpus for Multilingual
          Sentiment Analysis. The International Conference of Language Resources
          and Evaluation (2022)
        </ListGroup.Item>
        <ListGroup.Item as="li" className="pblst text-white" >
          <strong>
            David Ifeoluwa Adelani, Jesujoba Oluwadara Alabi, Angela Fan, Julia
            Kreutzer, …, Anuoluwapo Aremu et al.
          </strong>{" "}
          A Few Thousand Translations Go a Long Way! Leveraging Pre-trained
          Models for African News Translation. North American Association of
          Computational Linguistics (2022)
        </ListGroup.Item>
        <ListGroup.Item as="li" className="pblst text-white">
          <strong>
            Tosin Adewumi, Mofetoluwa Adeyemi, Aremu Anuoluwapo et al.
          </strong>{" "}
          Itakuroso: Exploiting Cross-Lingual Transferability for Natural
          Language Generation of Dialogues in Low-Resource, African Languages.
          International Conference of Learning Representation (2022)
        </ListGroup.Item>
        <ListGroup.Item as="li" className="pblst text-white">
          <strong>
            David Adelani, Jade Abbott, Graham Nuebig, …, Anuoluwapo Aremu et
            al.
          </strong>{" "}
          MasakhaNER: Named Entity Recognition for African Languages.
          Transactions of the Association for Computational Linguistics (2021)
          9: 1116–1131
        </ListGroup.Item>
        <ListGroup.Item as="li" className="pblst text-white">
          <strong>
            Sebastain Gehrmann, Tosin Adewumi, Karmanya Addarwal, Pawal Sasanka,
            Ammanamanchi, …, Aremu Anuoluwapo et al.
          </strong>{" "}
          The GEM Benchmark: Natural Language Generation, its Evaluation and
          Metrics. Association for Computational Linguistics (2021)
        </ListGroup.Item>
        <ListGroup.Item as="li" className="pblst text-white">
          The Morphology Analysis of Yoruba Personal and Yoruba Praise Names
          (2021) - B.A. Project
        </ListGroup.Item>
        <ListGroup.Item as="li" className="pblst text-white">
          Lost in translation: Why Google Translate often gets Yoruba — and
          other languages — wrong. Global Voices (2020)
        </ListGroup.Item>
        <ListGroup.Item as="li" className="pblst text-white">
          Yoruba Loan Words: How Language Evolves. Global Voices (2020)
        </ListGroup.Item>
      </ListGroup>
    </Container>
	</div>
  );
};

export default Publication;
