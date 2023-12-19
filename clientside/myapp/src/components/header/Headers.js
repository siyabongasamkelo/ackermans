import styled from "styled-components";
import { Link } from "react-router-dom";
import { Cart4, GeoAlt, List, Person, Search } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import HeaderSlider from "./HeaderSlider";
import DropDownMenu from "./Dropdowns/DropDownMenu";
import { show } from "../../Features/HeaderLink";

export const HeaderStyled = styled.header`
  @media only screen and (max-width: 600px) {
    height: 5vh;
    svg {
      transform: scale(120%);
      fill: grey;
    }
  }

  @media only screen and (min-width: 768px) {
    height: 5vh;
    svg {
      transform: scale(120%);
      fill: grey;
    }
  }

  @media only screen and (min-width: 992px) {
    height: 5vh;
    svg {
      transform: scale(120%);
      fill: grey;
    }
  }

  @media only screen and (min-width: 1200px) {
    height: 10vh;
  }
`;

export const Ul = styled.ul`
  list-style: none;
`;
export const Li = styled.li`
  display: inline-block;
  a {
    color: grey;
    text-decoration: none;
    margin-left: 30px;
    font-size: 12px;
  }
`;
export const H3 = styled.h3`
  color: green;
  font-weight: 800;
  margin-left: 20px;
  font-size: 14px;
`;

const Headers = () => {
  const dispatch = useDispatch();
  return (
    <HeaderStyled>
      <div className="container d-flex justify-content-between align-items-center  mt-3">
        <div className=" d-flex align-items-start  ">
          <List
            className=" d-lg-none"
            onClick={() => {
              dispatch(show("menu"));
            }}
          />
          <H3>ACKERMANS</H3>
        </div>
        <nav className=" d-none d-lg-block">
          <Ul>
            <Li>
              <Link to={"/123"}>
                <Search />
                SEARCH
              </Link>
            </Li>
            <Li>
              <Link to={"/123"}>
                <Person />
                LOGIN
              </Link>
            </Li>
            <Li>
              <Link to={"/123"}>
                <Cart4 />
                MY CART
              </Link>
            </Li>
            <Li>
              <Link to={"/123"}>
                <GeoAlt /> STORE LOCATOR
              </Link>
            </Li>
          </Ul>
        </nav>
        <nav className=" d-lg-none ">
          <Ul>
            <Li>
              <Link to={"/123"}>
                <Search />
              </Link>
            </Li>
            <Li>
              <Link to={"/123"}>
                <Person />
              </Link>
            </Li>
            <Li>
              <Link to={"/123"}>
                <Cart4 />
              </Link>
            </Li>
          </Ul>
        </nav>
      </div>

      <DropDownMenu />

      {/* This is the code for when the menu is clicked on mobile view  */}
      <HeaderSlider />
    </HeaderStyled>
  );
};

export default Headers;
