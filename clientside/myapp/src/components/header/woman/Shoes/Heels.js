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

const Heels = () => {
  const dispatch = useDispatch();
  const showHeels = useSelector((state) => state.header.value.showHeels);

  const heels = ["View all in Heels", "Heels"];

  return (
    <>
      {showHeels ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Heels
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
      {showHeels
        ? heels.map((heels) => {
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

export default Heels;
