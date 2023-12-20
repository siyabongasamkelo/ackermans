import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ImageCover } from "./styles/ImageCover.styled";
import styled from "styled-components";
import { Options } from "./styles/Options.styled";
import home3 from "../Assets/Images/home3.jpg";
import { Button } from "../components/Button.styled";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ItemCard from "../components/ItemCard";

export const Image = styled(Options)`
  height: 200px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${({ image }) => image});
`;
export const Div = styled.div`
  width: 100%;
  .action {
    margin-left: 5%;
    margin-top: 8%;
  }
`;
export const MyButton = styled(Button)`
  width: 220px;
  @media only screen and (max-width: 600px) {
    margin-left: 17%;
  }
  @media only screen and (min-width: 768px) {
    margin-top: -20px;
    margin-left: 30%;
  }
`;
export const Text = styled.div`
  margin-left: 15%;
  h5 {
    font-size: 58px;
    font-weight: 700;
    color: white;
  }
  h3 {
    font-size: 78px;
    font-weight: 800;
    padding-left: 80px;
    color: white;
  }
  @media only screen and (max-width: 600px) {
    h5 {
      font-size: 21px;
      margin-top: 15px;
    }
    h3 {
      font-size: 28px;
    }
  }
  @media only screen and (min-width: 768px) {
    h5 {
      font-size: 20px;
      margin-top: 30px;
      margin-left: 20%;
    }
    h3 {
      font-size: 28px;
      margin-left: 20%;
    }
  }
  @media only screen and (min-width: 992px) {
    h5 {
      margin-left: 25%;
    }
    h3 {
      margin-left: 0%;
    }
  }
`;
export const Action = styled.div`
  margin-left: 5%;
  margin-top: 8%;
`;
export const MyCarousel = styled.div`
  margin-top: 50px;
`;

function Tshirts() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <ImageCover>
              <Image image={home3}>
                <Div className=" d-lg-flex">
                  <Text>
                    <h5>IT'S GIVING</h5>
                    <h3>TROPICAL</h3>
                  </Text>
                  <Action>
                    <MyButton>Shop T-shirts</MyButton>
                  </Action>
                </Div>
              </Image>
            </ImageCover>
            <MyCarousel>
              <Carousel responsive={responsive}>
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
              </Carousel>
            </MyCarousel>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Tshirts;
