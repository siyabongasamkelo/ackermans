import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  closeIts,
  showMenu,
  closeAll,
  showShoes,
  showHeels,
  showPumpsAndFlats,
  showSandals,
  showSneakersAndTrainers,
} from "../../../Features/HeaderLinks";

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

const Shoes = () => {
  const dispatch = useDispatch();
  const showShoess = useSelector((state) => state.header.value.showShoes);

  const shoes = [
    "View all in Shoes",
    "Heels",
    "Pumps & Flats",
    "Sandals",
    "Sneakers & Trainers",
  ];

  return (
    <>
      {showShoess ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Shoes
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
      {showShoess
        ? shoes.map((shoes) => {
            return (
              <div
                className="list d-flex align-items-center justify-content-between"
                onClick={() => {
                  if (shoes === "Heels") {
                    dispatch(showShoes());
                    dispatch(showHeels());
                  }
                  if (shoes === "Pumps & Flats") {
                    dispatch(showShoes());
                    dispatch(showPumpsAndFlats());
                  }
                  if (shoes === "Sandals") {
                    dispatch(showShoes());
                    dispatch(showSandals());
                  }
                  if (shoes === "Sneakers & Trainers") {
                    dispatch(showShoes());
                    dispatch(showSneakersAndTrainers());
                  }
                }}
              >
                {shoes} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Shoes;
