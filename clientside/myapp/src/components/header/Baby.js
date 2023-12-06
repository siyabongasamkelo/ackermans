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

const Baby = () => {
  const dispatch = useDispatch();
  const showBaby = useSelector((state) => state.header.value.showBaby);

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
      {showBaby ? (
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
      {showBaby
        ? baby.map((baby) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {baby} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Baby;
