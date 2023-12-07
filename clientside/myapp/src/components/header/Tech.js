import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { showMenu, closeAll, closeIts } from "../../Features/HeaderLinks";
import styled from "styled-components";

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

const Tech = () => {
  const dispatch = useDispatch();
  const showTech = useSelector((state) => state.header.value.showTech);

  const tech = [
    "View all in Tech",
    "Audio",
    "Power Bank & Chargers",
    "Accessories",
  ];

  return (
    <>
      {showTech ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Tech
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
      {showTech
        ? tech.map((homeware) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {homeware} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Tech;
