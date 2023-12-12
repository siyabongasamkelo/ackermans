import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  closeIts,
  showMenu,
  closeAll,
  showAccessories,
  showBagAndWallets,
  showHeadgear,
} from "../../../Features/HeaderLinks";
import { accessories } from "./WomanData";

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

const Accessories = () => {
  const dispatch = useDispatch();
  const showAccessoriess = useSelector(
    (state) => state.header.value.showAccessories
  );

  return (
    <>
      {showAccessoriess ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Accessories
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
      {showAccessoriess
        ? accessories.map((accessories) => {
            return (
              <div
                className="list d-flex align-items-center justify-content-between"
                onClick={() => {
                  if (accessories === "Bags & Wallets") {
                    dispatch(showAccessories());
                    dispatch(showBagAndWallets());
                  }
                  if (accessories === "Headgear") {
                    dispatch(showAccessories());
                    dispatch(showHeadgear());
                  }
                }}
              >
                {accessories} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Accessories;
