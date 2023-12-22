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
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 1200px) {
    width: 49%;
  }
`;
export const MyButton = styled(Button)`
  width: 220px;
`;
export const Financial = styled.div``;
export const FinancialHeader = styled.div`
  background-color: grey;
  div {
    padding: 30px;
  }
`;
export const FinanceOptions = styled.div`
  height: 45px;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FindOutMore = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className=" d-lg-flex justify-content-lg-between">
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
          <Financial className=" mt-4">
            <FinancialHeader className=" d-flex justify-content-center text-white">
              <div>
                <h4>FINANCIAL</h4>
                <h4>SERVICES</h4>
              </div>
            </FinancialHeader>
            <div className=" text-white">
              <FinanceOptions>APPLY FOR A LOAN</FinanceOptions>
              <FinanceOptions>APPLY FOR A LOAN</FinanceOptions>
              <FinanceOptions>APPLY FOR A LOAN</FinanceOptions>

              <FinanceOptions>APPLY FOR A LOAN</FinanceOptions>
              <FinanceOptions>APPLY FOR A LOAN</FinanceOptions>
              <FinanceOptions>APPLY FOR A LOAN</FinanceOptions>
              <FinanceOptions>APPLY FOR A LOAN</FinanceOptions>
            </div>
          </Financial>
        </Col>
      </Row>
    </Container>
  );
};

export default FindOutMore;
