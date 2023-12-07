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

const PumpsAndFlats = () => {
  const dispatch = useDispatch();
  const showPumpsAndFlats = useSelector(
    (state) => state.header.value.showPumpsAndFlats
  );

  const pumpsAndFlats = ["View all in Pumps & Flats", "Pumps & Flats"];

  return (
    <>
      {showPumpsAndFlats ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Pumps And Flats
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
      {showPumpsAndFlats
        ? pumpsAndFlats.map((Pump) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {Pump} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default PumpsAndFlats;
