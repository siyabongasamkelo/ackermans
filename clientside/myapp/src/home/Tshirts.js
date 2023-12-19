import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ImageCover } from "./styles/ImageCover.styled";
import styled from "styled-components";
import { Options } from "./styles/Options.styled";
import home3 from "../Assets/Images/home3.jpg";

export const Image = styled(Options)`
  height: 200px;
`;

function Tshirts() {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <ImageCover>
              <Image></Image>
            </ImageCover>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Tshirts;
