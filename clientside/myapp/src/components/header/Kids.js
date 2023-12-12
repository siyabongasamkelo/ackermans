import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  showMenu,
  closeAll,
  closeIts,
  showKids,
  showBoys210,
  showGirls210,
  showSchool,
  showLimitedKids,
  showSwimShops,
  showBackToCrech,
  showLillyAndSadKids,
} from "../../Features/HeaderLinks";
import styled from "styled-components";
import { kids } from "./MenuData";

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

const Kids = () => {
  const dispatch = useDispatch();
  const showKidss = useSelector((state) => state.header.value.showKids);

  return (
    <>
      {showKidss ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Kids
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
      {showKidss
        ? kids.map((kids) => {
            return (
              <div
                className="list d-flex align-items-center justify-content-between"
                onClick={() => {
                  if (kids === "Boys 2-10 Years") {
                    dispatch(showKids());
                    dispatch(showBoys210());
                  }
                  if (kids === "Girls 2-10 Years") {
                    dispatch(showKids());
                    dispatch(showGirls210());
                  }
                  if (kids === "School") {
                    dispatch(showKids());
                    dispatch(showSchool());
                  }
                  if (kids === "Limited Edition") {
                    dispatch(showKids());
                    dispatch(showLimitedKids());
                  }
                  if (kids === "Swim Shop") {
                    dispatch(showKids());
                    dispatch(showSwimShops());
                  }
                  if (kids === "Swim Shop") {
                    dispatch(showKids());
                    dispatch(showSwimShops());
                  }
                  if (kids === "Back To Crech") {
                    dispatch(showKids());
                    dispatch(showBackToCrech());
                  }
                  if (kids === "Lilly + Sid") {
                    dispatch(showKids());
                    dispatch(showLillyAndSadKids());
                  }
                }}
              >
                {kids} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Kids;
