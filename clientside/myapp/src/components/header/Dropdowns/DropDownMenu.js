import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hover } from "../../../Features/DropDown";

import DropDownWoman from "../woman/DropDownWoman";
import DropDownBeauty from "../Beauty/DropDownBeauty";
import DropDownBaby from "../Baby/DropDownBaby";
import DropDownKids from "../Kids/DropDownKids";
import DropDownTeens from "../Teens/DropDownTeens";
import DropDownCharacter from "../Character/DropDownCharacter";
import DropDownHomewear from "../Homewear/DropDownHomewear";
import DropDownTech from "../Tech/DropDownTech";

export const Dropdown = styled.div`
  height: 70px;
  .linkcover {
    height: 70px;
    width: 100%;
    a {
      text-decoration: none;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.7);
    }
  }
`;

export const Cover = styled.div`
  width: 65%;
  @media only screen and (min-width: 992px) {
    width: 90%;
  }
  @media only screen and (min-width: 1200px) {
    width: 70%;
  }
`;

const DropDownMenu = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Dropdown className=" d-none d-lg-block ">
        <div className="linkcover d-flex justify-content-center align-items-center">
          <Cover className="cover  d-flex justify-content-evenly">
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
          </Cover>
        </div>
        <div className="dropdowns">
          <DropDownWoman />
          <DropDownBeauty />
          <DropDownBaby />
          <DropDownKids />
          <DropDownTeens />
          <DropDownCharacter />
          <DropDownHomewear />
          <DropDownTech />
        </div>
      </Dropdown>
    </>
  );
};

export default DropDownMenu;
