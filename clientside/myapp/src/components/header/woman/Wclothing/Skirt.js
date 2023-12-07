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

const Skirt = () => {
  const dispatch = useDispatch();
  const showSkirt = useSelector((state) => state.header.value.showSkirt);

  const skirts = ["View all in Skirts", "Demin Skirts", "Skirts"];

  return (
    <>
      {showSkirt ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Skirts
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
      {showSkirt
        ? skirts.map((skirt) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {skirt} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Skirt;