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
            <Div className=" d-flex justify-content-between ">
              <CartBox />
              <CartBox />
              <CartBox />
              <CartBox />
            </Div>
            <Div className=" d-flex justify-content-between ">
              <CartBox />
              <CartBox />
              <CartBox />
              <CartBox />
            </Div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cartegories;
