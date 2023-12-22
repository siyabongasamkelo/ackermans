import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Links from "./Links";

const MoreFashion = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className=" mt-5 ">
            <h5>More Fashion. More choice</h5>
            <p>
              In need of a wardrobe refresh? You’ve come to the right place for
              on-trend summer finds to must-have winter essentials. With our
              women’s clothing and accessories range, we’ve got your whole
              outfit sorted, no matter the weather or your budget. From
              party-approved dresses to statement denims, tops, shoes, knitwear
              and jackets.
            </p>
            <Link>Read more</Link>
          </div>
          <div>
            <h6>Fashionable searches on Ackermans</h6>
            <div>
              <Links />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MoreFashion;
