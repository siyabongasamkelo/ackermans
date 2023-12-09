import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  showMenu,
  closeAll,
  closeIts,
  showTeens,
  showShopAll,
  showTeenBoys,
  showTeenGirls,
  showTeenBrands,
  showGraphicTees,
  showTeenLimitedEdition,
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
                  if (teens === "Teen Boys") {
                    dispatch(showTeens());
                    dispatch(showTeenBoys());
                  }
                  if (teens === "Teen Girls") {
                    dispatch(showTeens());
                    dispatch(showTeenGirls());
                  }
                  if (teens === "Brands") {
                    dispatch(showTeens());
                    dispatch(showTeenBrands());
                  }
                  if (teens === "Graphic Tees") {
                    dispatch(showTeens());
                    dispatch(showGraphicTees());
                  }
                  if (teens === "Limited Edition") {
                    dispatch(showTeens());
                    dispatch(showTeenLimitedEdition());
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
