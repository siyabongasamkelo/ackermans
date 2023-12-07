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

const Sandals = () => {
  const dispatch = useDispatch();
  const showSandals = useSelector((state) => state.header.value.showSandals);

  const sandals = ["View all in Sandals", "Sandals"];

  return (
    <>
      {showSandals ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Sandals
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
      {showSandals
        ? sandals.map((heels) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {heels} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Sandals;
