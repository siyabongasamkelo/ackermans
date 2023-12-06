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

const Kids = () => {
  const dispatch = useDispatch();
  const showKids = useSelector((state) => state.header.value.showKids);

  const kids = [
    "View all in Kids",
    "Sale",
    "Boys 2-10 Years",
    "Girls 2-10 Years",
    "School",
    "Limited Edition",
    "The Denim Shop",
    "Christmas",
    "Swim Shop",
    "Lilly + Sid",
  ];

  return (
    <>
      {showKids ? (
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
      {showKids
        ? kids.map((kids) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {kids} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Kids;
