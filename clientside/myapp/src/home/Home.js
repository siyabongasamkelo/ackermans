import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Headers from "../components/header/Headers";
import styled from "styled-components";
import home1 from "../Assets/Images/home1.jpg";

export const ImagesCovers = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 10px;
`;

export const Options = styled.div`
  height: 100%;
  width: ${({ width }) => width};
  margin-top: ${({ mg }) => mg};
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
`;

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Headers />
            <ImagesCovers className=" d-flex justify-content-between ">
              <Options image={home1} width={"49.5%"}></Options>
              <Options image={home1} width={"49.5%"}></Options>
            </ImagesCovers>
            <ImagesCovers>
              <Options image={home1} width={"100%"} mg={"20px"}></Options>
            </ImagesCovers>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
