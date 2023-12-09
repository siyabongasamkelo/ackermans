import styled from "styled-components";
import { Link } from "react-router-dom";
import { Cart4, GeoAlt, List, Person, Search } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import Menu from "./Menu";
import { useDispatch } from "react-redux";
import { showMenu, closeIts } from "../../Features/HeaderLinks";
import Womans from "./Womans";
import { useSelector } from "react-redux";
import Beauty from "./Beauty";
import Baby from "./Baby";
import Kids from "./Kids";
import Teens from "./Teens";
import Character from "./Character";
import Homeware from "./Homewear";
import Tech from "./Tech";
import FinanctialSolutions from "./FinancialSolutios";
import Clothing from "./woman/Clothing";
import LingerieAndSleep from "./woman/LingerieAndSleep";
import Shoes from "./woman/Shoes";
import Accessories from "./woman/Accessoris";
import ActiveWare from "./woman/ActiveWear";
import LimittedEdition from "./woman/LimitedEdition";
import Tops from "./woman/Wclothing/Tops";
import Tshirt from "./woman/Wclothing/Tshirts";
import Pants from "./woman/Wclothing/Pants";
import DeminJeans from "./woman/Wclothing/DeminJeans";
import Short from "./woman/Wclothing/Shorts";
import Skirt from "./woman/Wclothing/Skirt";
import DressesAndJump from "./woman/Wclothing/DressAndJump";
import Bras from "./woman/LingerieAndSleep/Bras";
import Panties from "./woman/LingerieAndSleep/Panties";
import SeamFree from "./woman/LingerieAndSleep/SeamFree";
import ShapeWare from "./woman/LingerieAndSleep/ShapeWare";
import SocksAndHosiery from "./woman/LingerieAndSleep/SocksAndHosiery";
import LingerieEssential from "./woman/LingerieAndSleep/LingerieEssential";
import Sleepware from "./woman/LingerieAndSleep/SleepWare";
import Heels from "./woman/Shoes/Heels";
import PumpsAndFlats from "./woman/Shoes/PumpsAndFlats";
import Sandals from "./woman/Shoes/Sandals";
import SneakersAndTrainers from "./woman/Shoes/SneakersAndTrainer";
import BagsAndWallets from "./woman/Accessories/BagsAndWallets";
import Headgear from "./woman/Accessories/Headgear";
import ActiveTop from "./woman/ActiveWare/ActiveTop";
import ActivePants from "./woman/ActiveWare/ActivePants";
import Makeup from "./Beauty/Makeup";
import BathAndBody from "./Beauty/BathAndBody";
import Skincare from "./Beauty/SkinCare";
import OralCare from "./Beauty/Makeup/OralCare";
import Fragrance from "./Beauty/Makeup/Fragrance";
import Brands from "./Beauty/Brands";
import Newborn from "./Baby/NewBorn";
import Boys3to36 from "./Baby/Boys3to36";
import Girls3to36 from "./Baby/Girls3to36";
import BabyEssentials from "./Baby/BabyEssentials";
import LimitedEdition from "./Baby/LimitedEdition";
import LillyAndSid from "./Baby/LIllyAndSid";
import FirstWardrobe from "./Baby/FirstWardrobe";
import BoysTwoToTen from "./Kids/BoysTwoToTen";
import GirlsTwoToTen from "./Kids/GirlsTwoToTen";
import School from "./Kids/School";
import LimitedEditionKids from "./Kids/LimitedEditionKids";
import SwimShops from "./Kids/SwimShop";
import BackToCrech from "./Kids/BackToCreche";
import LillyAndSidKids from "./Kids/LillyAndSadKids";
import ShopAll from "./Teens/ShopAll";
import TeenBoys from "./Teens/TeenBoys";
import TeenGirls from "./Teens/TeenGirls";
import TeenBrands from "./Teens/Brands";
import GraphicTees from "./Teens/GraphicTees";
import LimitedEditionTeens from "./Teens/LimitedEditionTeen";
import Bathroom from "./Homewear/Bathroom";
import DrinkAndLunch from "./Homewear/DrinkAndLunch";
import PartyAndDecoration from "./Homewear/PartyAndDecoration";

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
        <Baby />
        <Kids />
        <Teens />
        <Character />
        <Homeware />
        <Tech />
        <FinanctialSolutions />

        {/* display things on woman */}

        <Clothing />
        <LingerieAndSleep />
        <Shoes />
        <Accessories />
        <ActiveWare />
        <LimittedEdition />
        <Tops />
        <Tshirt />
        <Pants />
        <DeminJeans />
        <Short />
        <Skirt />
        <DressesAndJump />

        {/* display things on woman clothes lingerie */}
        <Bras />
        <Panties />
        <SeamFree />
        <ShapeWare />
        <SocksAndHosiery />
        <LingerieEssential />
        <Sleepware />
        {/* display things on woman clothes shoes */}
        <Heels />
        <PumpsAndFlats />
        <Sandals />
        <SneakersAndTrainers />
        {/* display things on woman clothes accessories */}
        <BagsAndWallets />
        <Headgear />
        {/* display things on woman clothes activeware */}
        <ActiveTop />
        <ActivePants />
        {/* display things on Beauty */}
        <Makeup />
        <BathAndBody />
        <Skincare />
        <OralCare />
        <Fragrance />
        <Brands />
        {/* display things on Baby */}
        <Newborn />
        <Boys3to36 />
        <Girls3to36 />
        <BabyEssentials />
        <LimitedEdition />
        <LillyAndSid />
        <FirstWardrobe />
        {/* display things on Kids */}
        <BoysTwoToTen />
        <GirlsTwoToTen />
        <School />
        <LimitedEditionKids />
        <SwimShops />
        <BackToCrech />
        <LillyAndSidKids />
        {/* display things on Teens */}
        <ShopAll />
        <TeenBoys />
        <TeenGirls />
        <TeenBrands />
        <GraphicTees />
        <LimitedEditionTeens />
        {/* display things on Homeware */}
        <Bathroom />
        <DrinkAndLunch />
        <PartyAndDecoration />
      </Popup>
    </HeaderStyled>
  );
};

export default Headers;
