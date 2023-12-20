import styled from "styled-components";
import p1 from "../Assets/Images/p1.jpg";

export const ItemCartStyled = styled.div`
  height: 400px;
  width: 300px;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;
export const UpperPart = styled.div`
  height: 80%;
`;
export const LowerPart = styled.div`
  height: 20%;
  h5 {
    color: rgba(0, 0, 0, 0.7);
    line-height: 0px;
  }
`;

const Image = styled.img.attrs((props) => ({
  src: props.Img || p1,
}))`
  width: 100%;
  height: 100%;
`;

const ItemCard = () => {
  return (
    <ItemCartStyled>
      <UpperPart>
        <Image src={p1} alt="product pic" />
      </UpperPart>
      <LowerPart>
        <p>Stripe short sleeve T-shirt</p>
        <h5>R 59.00</h5>
      </LowerPart>
    </ItemCartStyled>
  );
};

export default ItemCard;
