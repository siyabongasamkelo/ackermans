import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { closeIts, showMenu, closeAll } from "../../../Features/HeaderLinks";

export const Top = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 50px;
  svg {
    margin-right: 20px;
  }
  div {
    svg {
      margin-left: 20px;
    }
  }
`;

const BoysTwoToTen = () => {
  const dispatch = useDispatch();
  const showBoys210 = useSelector((state) => state.header.value.showBoys210);

  const boys = [
    "View all in Boys 2-10 years",
    "Tops & T-Shirts",
    "Bottoms & Jeans",
    "Jacket & Knitwear",
    "Tracksuits",
    "Sets",
    "Dungerees",
    "Sleepware",
    "Underwear & Socks",
    "Swimwear",
    "Accessories",
    "Shoes",
  ];

  return (
    <>
      {showBoys210 ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Boys 2-10 Years
          </div>
          <XLg
            onClick={() => {
              dispatch(closeAll());
            }}
          />
        </Top>
      ) : (
        ""
      )}
      {showBoys210
        ? boys.map((limitedEdition) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {limitedEdition} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default BoysTwoToTen;
