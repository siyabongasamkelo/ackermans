import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Headers from "../components/header/Headers";
import styled from "styled-components";
import home1 from "../Assets/Images/home1.jpg";
import home2 from "../Assets/Images/home2.jpg";
import home3 from "../Assets/Images/home3.jpg";
import { Button } from "../components/Button.styled";
import { ImageCover } from "./styles/ImageCover.styled";
import { Options } from "./styles/Options.styled";

const MyButton = styled(Button)`
  @media only screen and (max-width: 600px) {
    margin-top: 50%;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 27%;
  }
  @media only screen and (min-width: 992px) {
    margin-top: 0;
    margin-top: ${({ tablet }) => tablet};
  }
  @media only screen and (min-width: 1200px) {
    margin-top: ${({ mt }) => mt};
  }
`;

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Headers />
            <ImageCover className="  d-lg-flex justify-content-lg-between ">
              <Options image={home1} width={"49.5%"}>
                <MyButton mt={"51%"} tablet={"70%"}>
                  Choose Your Dress
                </MyButton>
              </Options>
              <Options image={home2} width={"49.5%"}>
                <MyButton mt={"51%"} tablet={"70%"}>
                  Choose Your Shorts
                </MyButton>
              </Options>
            </ImageCover>
            <ImageCover>
              <Options image={home3} width={"100%"} mg={"0"}>
                <MyButton mt={"25%"} tablet={"32%"}>
                  Shop Character
                </MyButton>
              </Options>
            </ImageCover>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
