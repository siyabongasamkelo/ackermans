import styled from "styled-components";
import p2 from "../Assets/Images/p2.jpg";
export const CartBoxStyled = styled.div`
  height: 380px;
  width: 24%;
`;
export const UpperDiv = styled.div`
  height: 75%;
  background-color: blue;
`;
export const LowerDiv = styled.div`
  height: 25%;
  background-color: black;
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
      <LowerDiv className=" text-white">
        <div>
          <div className=" text-center">
            <h4>WOMAN</h4>
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
