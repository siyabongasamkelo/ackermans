import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import CartBox from "../components/CartBox";

export const Devider = styled.div`
  width: 100%;
  @media only screen and (min-width: 1200px) {
    margin-left: -30px;
  }
`;

const Cartegories = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="mt-5 d-md-flex d-lg-flex">
            <Devider className=" d-sm-flex justify-content-sm-between  d-flex">
              <CartBox qua={2} />
              <CartBox qua={2} />
            </Devider>
            <Devider>
              <CartBox qua={1} />
            </Devider>
            <Devider className=" d-flex justify-content-between ">
              <CartBox qua={2} />
              <CartBox qua={2} />
            </Devider>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cartegories;
