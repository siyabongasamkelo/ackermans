import styled from "styled-components";
import p2 from "../Assets/Images/p2.jpg";
export const CartBoxStyled = styled.div`
  height: 380px;
  /* width: 18%; */
  width: 300px;
`;
export const UpperDiv = styled.div`
  height: 75%;
`;
export const LowerDiv = styled.div`
  color: rgba(0, 0, 0, 0.7);
  height: 25%;
  h5 {
    padding-top: 10px;
    font-size: 16px;
  }
`;

const Image = styled.img.attrs((props) => ({
  src: props.Img || p2,
}))`
  width: 100%;
  height: 100%;
`;

const CartBox = () => {
  return (
    <CartBoxStyled>
      <UpperDiv>
        <Image src={p2} />
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
