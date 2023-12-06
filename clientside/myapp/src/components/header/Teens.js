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

const Teens = () => {
  const dispatch = useDispatch();
  const showTeens = useSelector((state) => state.header.value.showTeens);

  const teens = [
    "View all in Teens",
    "Sale",
    "Teen Boys",
    "Teen Girls",
    "Brands",
    "Graphic Tees",
    "Tropical Heat",
    "The Demin Shop",
    "Limited Edition",
  ];

  return (
    <>
      {showTeens ? (
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
      {showTeens
        ? teens.map((teens) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {teens} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Teens;
