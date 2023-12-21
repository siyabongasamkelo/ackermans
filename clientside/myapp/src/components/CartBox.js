import styled from "styled-components";
import p2 from "../Assets/Images/p2.jpg";

export const CartBoxStyled = styled.div`
  height: 400px;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    width: ${({ qua }) => (qua === 1 ? "98%" : "49%")};
  }
  @media only screen and (min-width: 768px) {
    width: ${({ qua }) => (qua === 1 ? "100%" : "49%")};
  }
  @media only screen and (min-width: 1200px) {
    width: 230px;
    margin-left: 30px;
  }
`;
export const UpperDiv = styled.div`
  height: 75%;
  img {
    height: 100%;
    width: 100%;
  }
`;
export const LowerDiv = styled.div`
  color: rgba(0, 0, 0, 0.7);
  height: 25%;
  h5 {
    padding-top: 10px;
    font-size: 16px;
  }
  @media only screen and (max-width: 600px) {
    h5 {
      font-size: 12px;
    }
    p {
      font-size: 12px;
    }
  }
`;

const CartBox = ({ qua }) => {
  return (
    <CartBoxStyled qua={qua}>
      <UpperDiv>
        <img src={p2} alt="cartegories" />
      </UpperDiv>
      <LowerDiv>
        <div>
          <div className=" text-center">
            <h5>WOMAN</h5>
          </div>
          <div className=" text-center">
            <p> Shop our range of Woman's fashion </p>
          </div>
        </div>
      </LowerDiv>
    </CartBoxStyled>
  );
};

export default CartBox;
