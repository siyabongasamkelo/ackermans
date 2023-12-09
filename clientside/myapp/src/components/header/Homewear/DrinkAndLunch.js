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

const DrinkAndLunch = () => {
  const dispatch = useDispatch();
  const showDrinkAndLunch = useSelector(
    (state) => state.header.value.showDrinkAndLunch
  );

  const drinkAndLunch = [
    "View all in Drinkware & LunchBoxes",
    "Drinkware,Lunchboxes",
  ];

  return (
    <>
      {showDrinkAndLunch ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Drink And Lunch
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
      {showDrinkAndLunch
        ? drinkAndLunch.map((drinkAndLunch) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {drinkAndLunch} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default DrinkAndLunch;
