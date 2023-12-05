import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Headers from "../components/Headers";
// import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            {/* <Header /> */}
            <Headers />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
