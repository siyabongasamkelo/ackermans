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

const Beauty = () => {
  const dispatch = useDispatch();
  const showBeauty = useSelector((state) => state.header.value.showBeauty);

  const beauty = [
    "View all in Beauty",
    "Makeup",
    "Bath & Body",
    "Skincare",
    "Oral Care",
    "Fragrance",
    "Brands",
  ];

  return (
    <>
      {showBeauty ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />{" "}
            Woman
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
      {showBeauty
        ? beauty.map((beauty) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {beauty} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Beauty;
