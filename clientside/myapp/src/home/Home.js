import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Headers from "../components/header/Headers";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Headers />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
