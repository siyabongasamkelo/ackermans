import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { Button } from "./Button.styled";

export const UpperPart = styled.div``;
export const SignUp = styled.div`
  width: 60%;
`;
export const ConnectWithus = styled.div``;

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <UpperPart>
            <SignUp>
              <label>Sign up to our mailers</label>
              <input type="text" placeholder="Enter your email address" />
              <Button>Subscribe</Button>
            </SignUp>
            <ConnectWithus>
              <label>Connect with us</label>
            </ConnectWithus>
          </UpperPart>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
