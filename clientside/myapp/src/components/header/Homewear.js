import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  showMenu,
  closeAll,
  closeIts,
  showHomeware,
  showBathroom,
  showDrinkAndLunch,
} from "../../Features/HeaderLinks";
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

const Homeware = () => {
  const dispatch = useDispatch();
  const homewaress = useSelector((state) => state.header.value.showHomeware);

  const homeware = [
    "View all in Homeware",
    "Sale",
    "Bathroom",
    "Drinkware & Lunchboxes",
    "Party & Decorations",
    "Limited Edition",
    "Novelty Essentials",
  ];

  return (
    <>
      {homewaress ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Homeware
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
      {homewaress
        ? homeware.map((homeware) => {
            return (
              <div
                className="list d-flex align-items-center justify-content-between"
                onClick={() => {
                  if (homeware === "Bathroom") {
                    dispatch(showHomeware());
                    dispatch(showBathroom());
                  }
                  if (homeware === "Drinkware & Lunchboxes") {
                    dispatch(showHomeware());

                    dispatch(showDrinkAndLunch());
                  }
                }}
              >
                {homeware} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Homeware;
