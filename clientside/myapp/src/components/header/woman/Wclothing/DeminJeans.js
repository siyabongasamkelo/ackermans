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

const DeminJeans = () => {
  const dispatch = useDispatch();
  const showDeminJeans = useSelector(
    (state) => state.header.value.showDeminJeans
  );

  const deminJeans = [
    "View all in Demin Jeans",
    "Fashion",
    "Joggings",
    "Skinny",
  ];

  return (
    <>
      {showDeminJeans ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Demin Jeans
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
      {showDeminJeans
        ? deminJeans.map((demin) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {demin} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default DeminJeans;
