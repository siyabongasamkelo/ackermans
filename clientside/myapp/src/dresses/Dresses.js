import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styled from "styled-components";
export const Cover = styled.div``;
export const OnLayBy = styled.div`
  height: 400px;
  width: 70%;
  background-color: red;
`;

const Dresses = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Cover>
            <OnLayBy></OnLayBy>
          </Cover>
        </Col>
      </Row>
    </Container>
  );
};

export default Dresses;
