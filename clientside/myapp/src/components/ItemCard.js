import styled from "styled-components";
import p1 from "../Assets/Images/p1.jpg";

export const ItemCartStyled = styled.div`
  height: 400px;
  width: 300px;
  background-color: red;
`;
export const UpperPart = styled.div`
  height: 80%;
`;
export const LowerPart = styled.div`
  height: 20%;
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
        <h4>59.00</h4>
      </LowerPart>
    </ItemCartStyled>
  );
};

export default ItemCard;
