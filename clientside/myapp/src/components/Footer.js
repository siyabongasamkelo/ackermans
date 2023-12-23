import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { Button } from "./Button.styled";
import {
  Facebook,
  GeoAltFill,
  Instagram,
  Linkedin,
  Youtube,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export const UpperPart = styled.div``;
export const SignUp = styled.div`
  width: 60%;
  input {
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    margin-left: 20px;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    label {
      padding-left: 28%;
      padding-bottom: 5%;
    }
    input {
      width: 100%;
    }
  }
`;
export const ConnectWithus = styled.div`
  width: 40%;
  height: 100px;
  background-color: green;
  svg {
    transform: scale(200%);
    margin-left: 30px;
    fill: white;
    cursor: pointer;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-top: 30px;
    div {
      width: 60%;
      margin-left: 18%;
    }
    svg {
      transform: scale(170%);
    }
  }
`;
export const MyButton = styled(Button)`
  width: 180px;
  margin-left: 20px;
  @media only screen and (max-width: 600px) {
    margin-left: 25%;
    margin-top: 5%;
  }
`;
export const Label = styled.label`
  font-size: 18px;
  color: white;
  padding-left: 30px;
  @media only screen and (max-width: 600px) {
    padding-left: 32%;
    padding-top: 5%;
    padding-bottom: 2%;
  }
`;

export const LowerPart = styled.div``;

export const TheLinks = styled.div``;

export const Devitions = styled.div`
  width: 16%;
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.7);
    transition: 0.5s ease-in-out;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const MobileDisplay = styled.div``;

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <UpperPart className=" d-lg-flex justify-content-lg-between align-items-lg-center mt-5">
            <SignUp className=" d-lg-flex align-items-lg-center">
              <div className=" d-lg-flex ">
                <div>
                  <label>Sign up to our mailers</label>
                </div>
                <div>
                  <input type="text" placeholder="Enter your email address" />
                </div>
              </div>

              <MyButton>Subscribe</MyButton>
            </SignUp>
            <ConnectWithus className="   d-lg-flex align-items-lg-center flex-lg-row ">
              <Label>Connect with us</Label>
              <div>
                <Facebook />
                <Youtube />
                <Instagram />
                <Linkedin />
                <GeoAltFill />
              </div>
            </ConnectWithus>
          </UpperPart>
          <LowerPart className=" mb-5 d-none d-lg-block ">
            <TheLinks className=" d-flex justify-content-between mt-5 ">
              <Devitions>
                <h6>Customer Service</h6>
                <Link>Returns F.A.Q</Link>
                <br></br>
                <Link>Delivery Details</Link>
                <br></br>
                <Link>How To Order</Link>
                <br></br>
                <Link>Store Locator</Link>
                <br></br>
                <br></br>
                <h6>Ackerman Shop</h6>
                <Link>Woman</Link>
                <br></br>
                <Link>Baby</Link>
                <br></br>
                <Link>Kids</Link>
                <br></br>
                <Link>Homeware</Link>
                <br></br>
                <Link>Cellular</Link>
                <br></br>
                <Link>Character</Link>
              </Devitions>
              <Devitions>
                <h6>My Ackerman Profile</h6>
                <Link>Register a Profile / Login</Link>
                <br></br>
                <Link>My Details</Link>
                <br></br>
                <Link>My Ackerman Account</Link>
                <br></br>
                <Link>My Lay-bay</Link>
              </Devitions>
              <Devitions>
                <h6>Coperate Information</h6>
                <Link>About Us</Link>
                <br></br>
                <Link>Carees</Link>
                <br></br>
                <Link>CSI</Link>
                <br></br>
                <Link>Store Directory</Link>
                <br></br>
                <Link>Store Locator</Link>
                <br></br>
                <Link>New Store</Link>
                <br></br>
                <Link>Listen To Ackerman Sound</Link>
                <br></br>
                <Link>Contact Us</Link>
              </Devitions>

              <Devitions>
                <h6>Explore</h6>
                <Link>Catalogues</Link>
                <br></br>
                <Link>Ackermans Blog</Link>
                <br></br>
                <Link>Competions</Link>
                <br></br>
                <Link>The Baby Corner</Link>
              </Devitions>
              <Devitions>
                <h6>Financial Solutions</h6>
                <Link>Account Application</Link>
                <br></br>
                <Link>Ackermans Account</Link>
                <br></br>
                <Link>Lay-By</Link>
                <br></br>
                <Link>Insurance</Link>
                <br></br>
                <Link>Loans</Link>
                <br></br>
                <Link>Bill Payments</Link>
                <br></br>
                <Link>Money Transfer</Link>
                <br></br>
                <Link>Vouchers</Link>
              </Devitions>
              <Devitions>
                <h6>Terms & Conditions</h6>
                <Link>General</Link>
                <br></br>
                <Link>Pepkor Privacy Policy</Link>
                <br></br>
                <Link>Cookie Policy</Link>
                <br></br>
                <Link>Competions Rules</Link>
                <br></br>
                <Link>Promotions Of Access To Information</Link>
                <br></br>
                <Link>Act Manual</Link>
              </Devitions>
            </TheLinks>
          </LowerPart>
          <MobileDisplay className=" d-sm-none d-lg-block">
            <h6>CUSTOMER SERVICE</h6>
            <p>Returns F.A.Q</p>
            <p>Delivery Details</p>
            <p>How to order</p>
            <p>Store Locator</p>
          </MobileDisplay>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
