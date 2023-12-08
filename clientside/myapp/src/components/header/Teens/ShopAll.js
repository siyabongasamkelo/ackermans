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

const ShopAll = () => {
  const dispatch = useDispatch();
  const showShopAll = useSelector((state) => state.header.value.showShopAll);

  const shopAll = [
    "View all in Shop All",
    "Tops & T-Shirts",
    "Shorts",
    "Skirts",
    "Bottoms & Jeans",
    "Jackets",
    "Tracksuits",
    "Dresses",
    "Sleepwear",
    "Underwear & Socks",
    "Accessories",
    "Shoes",
    "Bath & Body",
  ];

  return (
    <>
      {showShopAll ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Shop All
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
      {showShopAll
        ? shopAll.map((shopAll) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {shopAll} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default ShopAll;
