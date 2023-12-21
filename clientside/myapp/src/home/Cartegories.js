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
  @media only screen and (max-width: 600px) {
    width: 100%;
    background-color: red;
  }
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
                <CartBox qua={true} />
                <CartBox qua={false} />
              </Devider>
              <Devider divs={"18%"}>
                <CartBox qua={1} />
              </Devider>
              <Devider
                className=" d-flex justify-content-between "
                divs={"38%"}
              >
                <CartBox qua={2} />
                <CartBox qua={2} />
              </Devider>
            </Div>
            {/* <Div className=" d-lg-flex justify-content-lg-between ">
              <Devider
                className=" d-flex justify-content-between "
                divs={"38%"}
              >
                <CartBox />
                <CartBox />
              </Devider>
              <Devider divs={"18%"}>
                <CartBox />
              </Devider>
              <Devider
                className=" d-flex justify-content-between "
                divs={"38%"}
              >
                <CartBox />
                <CartBox />
              </Devider>
            </Div> */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cartegories;
