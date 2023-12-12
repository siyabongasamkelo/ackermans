import styled from "styled-components";
import { Link } from "react-router-dom";
import DropDownWoman from "./DropDownWoman";
import DropDownBeauty from "./DropDownBeauty";
import DropDownBaby from "./DropDownBaby";
import { useState } from "react";

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
  const [show, setShow] = useState("");
  console.log(show);
  return (
    <>
      <Dropdown className="">
        <div className="linkcover d-flex justify-content-center align-items-center">
          <div className="cover  d-flex justify-content-evenly">
            <Link
              to="qwe"
              onMouseOver={() => {
                setShow("Promotions");
              }}
              onMouseLeave={() => {
                setShow("");
              }}
            >
              PROMOTIONS
            </Link>
            <Link to="qwe">WOMAN</Link>
            <Link to="qwe">BEAUTY</Link>
            <Link to="qwe">KIDS</Link>
            <Link to="qwe">TEENS</Link>

            <Link to="qwe">CHARACTER</Link>
            <Link to="qwe">HOMEWARE</Link>
            <Link to="qwe">TECH</Link>
            <Link to="qwe">CELLULAR</Link>
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
