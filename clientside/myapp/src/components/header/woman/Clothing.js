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

const Clothing = () => {
  const dispatch = useDispatch();
  const showClothing = useSelector((state) => state.header.value.showClothing);

  const clothing = [
    "View all in Clothing",
    "Tops",
    "T-Shirts",
    "Pants",
    "Demin Jeans",
    "Shorts",
    "Skirts",
    "Dresses Jumpsuits",
  ];

  return (
    <>
      {showClothing ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Clothing
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
      {showClothing
        ? clothing.map((clothing) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {clothing} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Clothing;
