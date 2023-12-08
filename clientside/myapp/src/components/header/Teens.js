import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  showMenu,
  closeAll,
  closeIts,
  showTeens,
  showShopAll,
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

const Teens = () => {
  const dispatch = useDispatch();
  const showTeenss = useSelector((state) => state.header.value.showTeens);

  const teens = [
    "View all in Teens",
    "Sale",
    "Shop All",
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
      {showTeenss ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Teens
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
      {showTeenss
        ? teens.map((teens) => {
            return (
              <div
                className="list d-flex align-items-center justify-content-between"
                onClick={() => {
                  if (teens === "Shop All") {
                    dispatch(showTeens());
                    dispatch(showShopAll());
                  }
                }}
              >
                {teens} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Teens;
