import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  showMenu,
  closeAll,
  closeIts,
  showClothing,
  showWoman,
  showLingerieAndSleep,
  showShoes,
  showAccessories,
  showActiveware,
  showLimitedEdtion,
} from "../../Features/HeaderLinks";
import { woman } from "./MenuData";

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

const Womans = () => {
  const dispatch = useDispatch();
  const showWomans = useSelector((state) => state.header.value.showWomans);

  return (
    <>
      {showWomans ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Woman
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
      {showWomans
        ? woman.map((woman) => {
            return (
              <div
                className="list d-flex align-items-center justify-content-between"
                onClick={() => {
                  if (woman === "Clothing") {
                    dispatch(showClothing());
                    dispatch(showWoman());
                  }
                  if (woman === "Lingerie & Sleepwear") {
                    dispatch(showWoman());
                    dispatch(showLingerieAndSleep());
                  }
                  if (woman === "Shoes") {
                    dispatch(showWoman());
                    dispatch(showShoes());
                  }
                  if (woman === "Accessories") {
                    dispatch(showWoman());
                    dispatch(showAccessories());
                  }
                  if (woman === "ActiveWare") {
                    dispatch(showWoman());
                    dispatch(showActiveware());
                  }
                  if (woman === "Limited Edition") {
                    dispatch(showWoman());
                    dispatch(showLimitedEdtion());
                  }
                }}
              >
                {woman} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Womans;
