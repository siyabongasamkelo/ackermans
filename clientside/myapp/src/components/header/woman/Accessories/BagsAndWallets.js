import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { closeIts, showMenu, closeAll } from "../../../../Features/HeaderLinks";

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

const BagsAndWallets = () => {
  const dispatch = useDispatch();
  const showBagsAndWallets = useSelector(
    (state) => state.header.value.showBagAndWallets
  );

  const bagsAndWallets = ["View all in Bags & Wallets", "Bags"];
  return (
    <>
      {showBagsAndWallets ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Bags And Wallets
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
      {showBagsAndWallets
        ? bagsAndWallets.map((bags) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {bags} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default BagsAndWallets;
