import styled from "styled-components";
import { Link } from "react-router-dom";
import { Cart4, GeoAlt, List, Person, Search } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import Menu from "./Menu";
import { useDispatch } from "react-redux";
import { showMenu, closeIts } from "../Features/HeaderLinks";
import Womans from "./Womans";
import { useSelector } from "react-redux";
import Beauty from "./Beauty";

export const HeaderStyled = styled.header`
  @media only screen and (max-width: 600px) {
    height: 5vh;
    svg {
      transform: scale(120%);
      fill: grey;
    }
    div {
      h3 {
        color: green;
        font-weight: 800;
        margin-left: 20px;
        font-size: 14px;
      }
    }
    nav {
      ul {
        list-style: none;
        li {
          display: inline-block;
          svg {
            margin-left: 30px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    height: 5vh;
    svg {
      transform: scale(120%);
      fill: grey;
    }
    div {
      h3 {
        color: green;
        font-weight: 800;
        margin-left: 20px;
        font-size: 14px;
      }
    }
    nav {
      ul {
        list-style: none;
        li {
          display: inline-block;
          svg {
            margin-left: 30px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 992px) {
    height: 5vh;
    svg {
      transform: scale(120%);
      fill: grey;
    }
    div {
      h3 {
        color: green;
        font-weight: 800;
      }
    }
    nav {
      ul {
        list-style: none;
        li {
          display: inline-block;
          a {
            color: grey;
            text-decoration: none;
            margin-left: 30px;
            font-size: 12px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    height: 10vh;
    div {
      h3 {
        color: green;
        font-weight: 800;
      }
    }
    nav {
      ul {
        list-style: none;
        li {
          display: inline-block;
          a {
            color: grey;
            text-decoration: none;
            margin-left: 30px;
            font-size: 12px;
          }
        }
      }
    }
  }
`;

export const Popup = styled.div`
  height: 90vh;
  width: 100%;
  position: absolute;
  z-index: 2;
  .menu {
    background-color: rgba(0, 0, 0, 0.2);
    height: 50px;
    svg {
      margin-right: 20px;
    }
  }
  .list {
    height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-left: 20px;
    svg {
      margin-right: 30px;
    }
  }
`;

const Headers = () => {
  const dispatch = useDispatch();
  const closeIt = useSelector((state) => state.header.value.closeIt);

  console.log({ closeIt });

  return (
    <HeaderStyled>
      <div className="container d-flex justify-content-between align-items-center  mt-3">
        <div className=" d-flex align-items-start  ">
          <List
            className=" d-lg-none"
            onClick={() => {
              dispatch(showMenu());
              dispatch(closeIts());
            }}
          />
          <h3>ACKERMANS</h3>
        </div>
        <nav className=" d-none d-lg-block">
          <ul>
            <li>
              <Link to={"/123"}>
                <Search />
                SEARCH
              </Link>
            </li>
            <li>
              <Link to={"/123"}>
                <Person />
                LOGIN
              </Link>
            </li>
            <li>
              <Link to={"/123"}>
                <Cart4 />
                MY CART
              </Link>
            </li>
            <li>
              <Link to={"/123"}>
                <GeoAlt /> STORE LOCATOR
              </Link>
            </li>
          </ul>
        </nav>
        <nav className=" d-lg-none ">
          <ul>
            <li>
              <Link to={"/123"}>
                <Search />
              </Link>
            </li>
            <li>
              <Link to={"/123"}>
                <Person />
              </Link>
            </li>
            <li>
              <Link to={"/123"}>
                <Cart4 />
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* This is the code for when the menu is clicked */}

      <Popup
        as={motion.div}
        animate={{
          x: closeIt ? -12 : -500,
        }}
        transition={{ duration: 0.5 }}
      >
        <Menu />
        <Womans />
        <Beauty />
      </Popup>
    </HeaderStyled>
  );
};

export default Headers;
