import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ImageCover } from "./styles/ImageCover.styled";
import styled from "styled-components";
import { Options } from "./styles/Options.styled";
import home3 from "../Assets/Images/home3.jpg";
import "react-multi-carousel/lib/styles.css";
import CartBox from "../components/CartBox";

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
      margin-left: 0;
      padding-left: 25%;
    }
    h3 {
      margin-left: 0;
      padding-left: 25%;
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

export const Divs = styled.div`
  width: 100%;
`;

const Jeans = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <ImageCover>
              <Image image={home3}>
                <Div className=" d-lg-flex">
                  <Text>
                    <h3>SAVE 50.00</h3>
                    <h5>
                      ON BASIC DENIM <br></br> AND JEGGINGS
                    </h5>
                  </Text>
                </Div>
              </Image>
            </ImageCover>

            <Divs className=" d-lg-flex justify-content-lg-center mt-5 ">
              <div className=" d-flex justify-content-between ">
                <CartBox qua={2} />
                <CartBox qua={2} />
              </div>
              <div className=" d-flex justify-content-between ">
                <CartBox qua={2} />
                <CartBox qua={2} />
              </div>
            </Divs>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Jeans;
