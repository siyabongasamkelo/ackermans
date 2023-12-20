import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import CartBox from "../components/CartBox";

export const Div = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const Devider = styled.div`
  width: ${({ divs }) => divs};
`;

const Cartegories = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <Div className=" d-lg-flex justify-content-lg-between ">
              <Devider
                className=" d-flex justify-content-between "
                divs={"38%"}
              >
                <CartBox quantity={2} />
                <CartBox quantity={2} />
              </Devider>
              <Devider divs={"18%"}>
                <CartBox quantity={1} />
              </Devider>
              <Devider
                className=" d-flex justify-content-between "
                divs={"38%"}
              >
                <CartBox quantity={2} />
                <CartBox quantity={2} />
              </Devider>
            </Div>
            <Div className=" d-lg-flex justify-content-lg-between ">
              <Devider
                className=" d-flex justify-content-between "
                divs={"38%"}
              >
                <CartBox quantity={2} />
                <CartBox quantity={2} />
              </Devider>
              <Devider divs={"18%"}>
                <CartBox quantity={1} />
              </Devider>
              <Devider
                className=" d-flex justify-content-between "
                divs={"38%"}
              >
                <CartBox quantity={2} />
                <CartBox quantity={2} />
              </Devider>
            </Div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cartegories;
