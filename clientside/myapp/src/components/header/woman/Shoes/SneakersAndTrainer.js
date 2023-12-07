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

const SneakersAndTrainers = () => {
  const dispatch = useDispatch();
  const showSneakersAndTrainers = useSelector(
    (state) => state.header.value.showSneakersAndTrainers
  );

  const sneakersAndTrainers = [
    "View all in Sneakers & Trainers",
    "Sneakers",
    "Trainers",
  ];
  return (
    <>
      {showSneakersAndTrainers ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Sneakers And Trainers
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
      {showSneakersAndTrainers
        ? sneakersAndTrainers.map((sneakers) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {sneakers} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default SneakersAndTrainers;
