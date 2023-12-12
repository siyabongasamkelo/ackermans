import styled from "styled-components";
import { Link } from "react-router-dom";
import DropDownWoman from "./DropDownWoman";
import DropDownBeauty from "./DropDownBeauty";
import DropDownBaby from "./DropDownBaby";
import { useDispatch, useSelector } from "react-redux";
import { hover } from "../../../Features/DropDown";

export const Dropdown = styled.div`
  height: 70px;
  .linkcover {
    height: 70px;
    width: 100%;
    .cover {
      width: 65%;
    }
    a {
      text-decoration: none;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.7);
    }
  }
`;

const DropDownMenu = () => {
  const dispatch = useDispatch();
  const hovers = useSelector((state) => state.dropdown.value);
  console.log(hovers);
  return (
    <>
      <Dropdown className="">
        <div className="linkcover d-flex justify-content-center align-items-center">
          <div className="cover  d-flex justify-content-evenly">
            <Link
              to="qwe"
              onMouseOver={() => {
                dispatch(hover(".promotions"));
              }}
              onMouseLeave={() => {
                dispatch(hover(""));
              }}
            >
              PROMOTIONS
            </Link>
            <Link
              to="qwe"
              onMouseOver={() => {
                dispatch(hover(".woman"));
              }}
              onMouseLeave={() => {
                dispatch(hover(""));
              }}
            >
              WOMAN
            </Link>
            <Link
              to="qwe"
              onMouseOver={() => {
                dispatch(hover(".beauty"));
              }}
              onMouseLeave={() => {
                dispatch(hover(""));
              }}
            >
              BEAUTY
            </Link>
            <Link
              to="qwe"
              onMouseOver={() => {
                dispatch(hover(".baby"));
              }}
              onMouseLeave={() => {
                dispatch(hover(""));
              }}
            >
              BABY
            </Link>
            <Link
              to="qwe"
              onMouseOver={() => {
                dispatch(hover(".kids"));
              }}
              onMouseLeave={() => {
                dispatch(hover(""));
              }}
            >
              KIDS
            </Link>
            <Link
              to="qwe"
              onMouseOver={() => {
                dispatch(hover(".teens"));
              }}
              onMouseLeave={() => {
                dispatch(hover(""));
              }}
            >
              TEENS
            </Link>

            <Link
              to="qwe"
              onMouseOver={() => {
                dispatch(hover(".character"));
              }}
              onMouseLeave={() => {
                dispatch(hover(""));
              }}
            >
              CHARACTER
            </Link>
            <Link
              to="qwe"
              onMouseOver={() => {
                dispatch(hover(".homeware"));
              }}
              onMouseLeave={() => {
                dispatch(hover(""));
              }}
            >
              HOMEWARE
            </Link>
            <Link
              to="qwe"
              onMouseOver={() => {
                dispatch(hover(".tech"));
              }}
              onMouseLeave={() => {
                dispatch(hover(""));
              }}
            >
              TECH
            </Link>
            <Link
              to="qwe"
              onMouseOver={() => {
                dispatch(hover(".cellular"));
              }}
              onMouseLeave={() => {
                dispatch(hover(""));
              }}
            >
              CELLULAR
            </Link>
          </div>
        </div>
        <div className="dropdowns">
          <DropDownWoman />
          <DropDownBeauty />
          <DropDownBaby />
        </div>
      </Dropdown>
    </>
  );
};

export default DropDownMenu;
