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

const Promotions = () => {
  const dispatch = useDispatch();
  const showPromotions = useSelector(
    (state) => state.header.value.showPromotions
  );

  const promotions = ["Back To School", "Christmas"];

  return (
    <>
      {showPromotions ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Promotions
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
      {showPromotions
        ? promotions.map((promotions) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {promotions} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Promotions;
