import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { Options } from "./styles/Options.styled";
import { Button } from "../components/Button.styled";
import home3 from "../Assets/Images/home3.jpg";

export const Image = styled(Options)`
  height: 200px;
  width: 49%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${({ image }) => image});
`;
export const MyButton = styled(Button)`
  width: 220px;
`;

export const Financial = styled.div`
  background-color: red;
`;

export const FinancialHeader = styled.div``;

const FindOutMore = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className=" d-flex justify-content-between">
            <Image
              image={home3}
              className=" d-flex flex-column align-items-center justify-content-center text-white"
            >
              <h3>DATA DEALS</h3>
              <h5>TO KICK OFF </h5>
              <h3>THE NEW YEAR</h3>
              <MyButton>Find Out More</MyButton>
            </Image>
            <Image
              image={home3}
              className=" d-flex flex-column align-items-center justify-content-center text-white"
            >
              <h3>DATA DEALS</h3>
              <h5>TO KICK OFF </h5>
              <h3>THE NEW YEA`R</h3>
              <MyButton>Find Out More</MyButton>
            </Image>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FindOutMore;
