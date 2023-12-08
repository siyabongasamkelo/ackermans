import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  showMenu,
  closeAll,
  closeIts,
  showBaby,
  showNewBorn,
  showBoys3to36,
  showGirls3to36,
  showBabyEssential,
  showBabyLimitedEdition,
  showLIllyAndSid,
  showFirstWardrobe,
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

const Baby = () => {
  const dispatch = useDispatch();
  const showBabys = useSelector((state) => state.header.value.showBaby);

  const baby = [
    "View all in Baby",
    "Sale",
    "Newborn",
    "Boys 3-36 Months",
    "Girls 3-36 Months",
    "Baby Esentials",
    "Limitted Edition",
    "Christmas",
    "Lilly + Sid",
    "My First Wardrobe",
  ];

  return (
    <>
      {showBabys ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Baby
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
      {showBabys
        ? baby.map((baby) => {
            return (
              <div
                className="list d-flex align-items-center justify-content-between"
                onClick={() => {
                  if (baby === "Newborn") {
                    dispatch(showBaby());
                    dispatch(showNewBorn());
                  }
                  if (baby === "Boys 3-36 Months") {
                    dispatch(showBaby());
                    dispatch(showBoys3to36());
                  }
                  if (baby === "Girls 3-36 Months") {
                    dispatch(showBaby());
                    dispatch(showGirls3to36());
                  }
                  if (baby === "Baby Esentials") {
                    dispatch(showBaby());
                    dispatch(showBabyEssential());
                  }
                  if (baby === "Limitted Edition") {
                    dispatch(showBaby());
                    dispatch(showBabyLimitedEdition());
                  }
                  if (baby === "Lilly + Sid") {
                    dispatch(showBaby());
                    dispatch(showLIllyAndSid());
                  }
                  if (baby === "My First Wardrobe") {
                    dispatch(showBaby());
                    dispatch(showFirstWardrobe());
                  }
                }}
              >
                {baby} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Baby;
