import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Headers from "../components/header/Headers";
import styled from "styled-components";

export const UpperImages = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 10px;
  background-color: red;
`;

export const LowerImages = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 40px;
  background-color: blue;
`;

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Headers />
            <UpperImages className=" d-flex justify-content-between "></UpperImages>
            <LowerImages></LowerImages>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
