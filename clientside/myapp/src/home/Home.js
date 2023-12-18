import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Headers from "../components/header/Headers";
import styled from "styled-components";
import home1 from "../Assets/Images/home1.jpg";
import home2 from "../Assets/Images/home2.jpg";
import home3 from "../Assets/Images/home3.jpg";
import { Button } from "../components/Button.styled";

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
  display: flex;
  justify-content: center;
`;

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Headers />
            <ImagesCovers className=" d-flex justify-content-between ">
              <Options image={home1} width={"49.5%"}>
                <Button mt={"51%"}>Choose Your Dress</Button>
              </Options>
              <Options image={home2} width={"49.5%"}>
                <Button mt={"51%"}>Choose Your Shorts </Button>
              </Options>
            </ImagesCovers>
            <ImagesCovers>
              <Options image={home3} width={"100%"} mg={"20px"}>
                <Button mt={"25%"}>Shop Character </Button>
              </Options>
            </ImagesCovers>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
