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

const Accessories = () => {
  const dispatch = useDispatch();
  const showAccessories = useSelector(
    (state) => state.header.value.showAccessories
  );

  const Accessories = ["View all in Accessories", "Bags & Wallets", "Headgear"];

  return (
    <>
      {showAccessories ? (
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
      {showAccessories
        ? Accessories.map((accessories) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {accessories} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Accessories;