import { ArrowLeft, CaretRightFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { XLg } from "react-bootstrap-icons";
import styled from "styled-components";
import { showMenu, closeAll } from "../Features/HeaderLinks";

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

const Womans = () => {
  const dispatch = useDispatch();
  const showWomans = useSelector((state) => state.header.value.showWomans);
  const woman = [
    "View all in Woman",
    "Sale",
    "Clothing",
    "Lingerie & Sleepwear",
    "Shoes",
    "Accessories",
    "ActiveWare",
    "Limited Edition",
    "The LIngerie Shop",
    "The Denim Shop",
    "Bra Guide",
    "Trnding",
    "Christmas",
    "Summer-Ware Capsule",
  ];

  return (
    <>
      {showWomans ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft /> Woman
          </div>
          <XLg
            onClick={() => {
              dispatch(showMenu());
              dispatch(closeAll());
            }}
          />
        </Top>
      ) : (
        ""
      )}
      {showWomans
        ? woman.map((woman) => {
            return (
              <div
                className="list d-flex align-items-center justify-content-between"
                onClick={() => {}}
              >
                {woman} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Womans;
