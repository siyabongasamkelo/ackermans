import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import CartBox from "../components/CartBox";

export const Div = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const Cartegories = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <Div className=" d-lg-flex justify-content-lg-between ">
              <div className=" d-flex">
                <CartBox />
                <CartBox />
              </div>
              <div>
                <CartBox />
              </div>
              <div className=" d-flex">
                <CartBox />
                <CartBox />
              </div>
            </Div>
            <Div className=" d-lg-flex justify-content-lg-between ">
              <div>
                <CartBox />
                <CartBox />
              </div>
              <div>
                <CartBox />
              </div>
              <div>
                <CartBox />
                <CartBox />
              </div>
            </Div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cartegories;
