import styled from "styled-components";
import { Link } from "react-router-dom";
import { Cart4, GeoAlt, List, Person, Search } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { showMenu, closeIts } from "../../Features/HeaderLinks";
import HeaderSlider from "./HeaderSlider";

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
  .dropdowns {
    height: auto;
    .woman {
      display: flex;
      div {
        width: 18%;
        height: 100px;
        margin: 20px 0 20px 0;
      }
    }
  }
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

      <Dropdown className="">
        <div className="linkcover d-flex justify-content-center align-items-center">
          <div className="cover  d-flex justify-content-evenly">
            <Link to="qwe">PROMOTIONS</Link>
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
          <div className="woman justify-content-around">
            <div>
              <h5>CLOTHING</h5>
              <ul>
                <li>Tops</li>
                <li>T-Shirts</li>
                <li>Demin Jeans</li>
                <li>Pants</li>
                <li>Shorts</li>
                <li>Skirts</li>
                <li>Dresses & Jumpsuits</li>
              </ul>
            </div>
            <div>
              <h5>LINGERIE & SLEEPWEAR</h5>
              <ul>
                <li>Bras</li>
                <li>Panties</li>
                <li>Seamfree</li>
                <li>Shapeware</li>
                <li>Socks & Hosiery</li>
                <li>Lingrie Essentials</li>
                <li>Sleepwear</li>
                <li>Matching Sets</li>
              </ul>
            </div>
            <div>
              <h5>SHOES</h5>
              <ul>
                <li>Heels</li>
                <li>Pumps & Flats</li>
                <li>Sandals</li>
                <li>Sneakers & Trainers</li>
              </ul>
              <h5>ACCESSORIES</h5>
              <ul>
                <li>Bags & Wallets</li>
                <li>Headgear</li>
              </ul>
            </div>
            <div>
              <h5>ACTIVEWEAR</h5>
              <ul>
                <li>Tops</li>
                <li>Pants</li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </Dropdown>

      {/* This is the code for when the menu is clicked on mobile view  */}
      <HeaderSlider />
    </HeaderStyled>
  );
};

export default Headers;
