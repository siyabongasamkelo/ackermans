import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  CaretRightFill,
  Cart4,
  GeoAlt,
  List,
  Person,
  Search,
  XLg,
} from "react-bootstrap-icons";
import { motion } from "framer-motion";
import { useState } from "react";

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

const Header = () => {
  const [closeIt, setCloseIt] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showWomans, setShowWomans] = useState(false);
  const [showBeauty, setShowBeauty] = useState(false);
  const [showBaby, setShowBaby] = useState(false);
  const [showKids, setShowKids] = useState(false);
  const [showTeens, setShowTeens] = useState(false);
  const [showCharacter, setShowCharacter] = useState(false);
  const [showHomeware, setShowHomeware] = useState(false);
  const [showTech, setShowTech] = useState(false);
  const [showFinacial, setShowFinancial] = useState(false);

  // ----- This area all the state for the items on the womans clothing menu ------ \\

  const [showClothing, setShowClothing] = useState(false);
  const [showLingerieAndSleep, setShowLingerieAndSleep] = useState(false);
  const [showShoes, setShowShoes] = useState(false);
  const [showAccessories, setShowAccessories] = useState(false);
  const [showActiveware, setShowActiveware] = useState(false);
  const [showLimittedEdition, setShowLimittedEdition] = useState(false);
  const [showTops, setShowTops] = useState(false);
  const [showTshirts, setShowTshirts] = useState(false);
  const [showPants, setShowPants] = useState(false);
  const [showDeminJeans, setShowDeminJeans] = useState(false);
  const [showShorts, setShowShorts] = useState(false);
  const [showSkirts, setShowSkirts] = useState(false);
  const [showDressesAndJump, setShowDressesAndJump] = useState(false);

  // ----- This area all the state for the items on the womans lingerie bra menu ------ \\

  const [showBra, setShowBra] = useState(false);
  const [showPanties, setShowPanties] = useState(false);
  const [showSeamfree, setShowSeamfree] = useState(false);
  const [showShapewear, setShowShapewear] = useState(false);
  const [showSocksAndHosiery, setShowSocksAndHosiery] = useState(false);
  const [showLingerieEssential, setShowLingerieEssential] = useState(false);
  const [showSleepware, setShowSleepware] = useState(false);

  // ----- This area all the state for the items on the womans shoe menu ------ \\

  const [showHeels, setShowHeels] = useState(false);
  const [showPumpsAndFlats, setShowPumpsAndFlats] = useState(false);
  const [showSandals, setShowSandals] = useState(false);
  const [showSneakersAndTrainers, setShowSneakersAndTrainers] = useState(false);

  const themenu = [
    "My Profile",
    "My Orders",
    "Shop",
    "Promotions",
    "Woman",
    "Beauty",
    "Baby",
    "Kids",
    "Teens",
    "Character",
    "Homeware",
    "Tech",
    "Cellular",
    "More",
    "Financtial Solutions",
    "Competions",
    "Ackermans",
    "Catalogues",
  ];

  const promotions = ["Back To School", "Christmas"];

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

  const beauty = [
    "View all in Beauty",
    "Makeup",
    "Bath & Body",
    "Skincare",
    "Oral Care",
    "Fragrance",
    "Brands",
  ];

  const baby = [
    "View all in Baby",
    "Sale",
    "Newborn",
    "Boys 3-36 Months",
    "Girls 3-36 Months",
    "Baby Esentials",
    "Limitted Edition",
    "Christmas",
    "Lilly + Sid",
    "My First Wardrobe",
  ];

  const kids = [
    "View all in Kids",
    "Sale",
    "Boys 2-10 Years",
    "Girls 2-10 Years",
    "School",
    "Limited Edition",
    "The Denim Shop",
    "Christmas",
    "Swim Shop",
    "Lilly + Sid",
  ];

  const teens = [
    "View all in Teens",
    "Sale",
    "Teen Boys",
    "Teen Girls",
    "Brands",
    "Graphic Tees",
    "Tropical Heat",
    "The Demin Shop",
    "Limited Edition",
  ];

  const character = [
    "View all in Character",
    "Sale",
    "Baby",
    "Kids",
    "Homeware",
    "Brands",
    "Christmas",
  ];

  const homeware = [
    "View all in Homeware",
    "Sale",
    "Bathroom",
    "Drinkware & Lunchboxes",
    "Party & Decorations",
    "Limited Edition",
    "Novelty Essentials",
  ];

  const tech = [
    "View all in Tech",
    "Audio",
    "Power Bank & Chargers",
    "Accessories",
  ];

  const FinanctialSolutions = [
    "Account Application",
    "Ackerman Account",
    "Lay-by",
    "Insurance",
    "Loans",
    "Bill Payment",
    "Money Transer",
    "Vouchers",
  ];

  // ----------------- clothing menus here ----------------------//

  const clothing = [
    "View all in Clothing",
    "Tops",
    "T-Shirts",
    "Pants",
    "Demin Jeans",
    "Shorts",
    "Skirts",
    "Dresses Jumpsuits",
  ];

  const LingerieAndSleep = [
    "View all in Lingerie & SleepWear",
    "Bras",
    "Panties",
    "Seamfree",
    "Shapewear",
    "Socks & Hosiery",
    "Lingerie Essentials",
    "Sleepware",
    "Matching Sets",
  ];

  const shoes = [
    "View all in Shoes",
    "Heels",
    "Pumps & Flats",
    "Sandals",
    "Sneakers & Trainers",
  ];

  const activeWare = ["View all in ActiveWare", "Top", "Pants"];

  const Accessories = ["View all in Accessories", "Bags & Wallets", "Headgear"];

  const limitedEdition = [
    "View all in Limited Edition",
    "Clothing",
    "Lingerie",
    "Sleepware",
    "Accessories",
    "Shoes",
  ];

  //-----------------------woamn clothing menu---------------------------//

  const tops = [
    "View all in Tops",
    "Shirts",
    "Short Sleeve Tops",
    "Sleeveless Tops",
  ];

  const tshirts = [
    "View all in T-shirts",
    "Long Sleeve T-shirts",
    "Short Sleeve T-shirts",
  ];

  const pants = ["View all in Pants", "Leggings", "Pants"];

  const deminJeans = [
    "View all in Demin Jeans",
    "Fashion",
    "Joggings",
    "Skinny",
  ];

  const shorts = ["View all in Shorts", "Demin Shorts", "Shorts"];

  const skirts = ["View all in Skirts", "Demin Skirts", "Skirts"];

  const dressesAndJump = [
    "View all in Dresses & Jumpsuits",
    "Dresses",
    "Jumpsuits",
  ];

  //-----------------------woman clothing lingerie & sleepware---------------------------//

  const bras = [
    "View all in Bras",
    "Nursing Bras",
    "Bra Accessories",
    "T-shirts Bras",
    "Multiway Bras",
    "Balconette Bras",
    "Wirefree Bras",
    "Underwire bras",
  ];

  const panties = [
    "View all in Panties",
    "Panties",
    "Thongs",
    "Boylegs",
    "Bikinis",
    "Briefs",
  ];

  const seamfree = [
    "View all in Seamfree",
    "Bralettes",
    "Cycle Shorts",
    "Croptops",
    "Panties",
  ];

  const shapewear = [
    "View all in Shapewear",
    "Bodysuits",
    "Camisoles",
    "Longlegs",
    "Panties",
  ];

  const socksAndHosiery = [
    "View all in Socks & Hosiery",
    "Anklets",
    "Tights",
    "Secrete Socks",
    "Low Cut Socks",
  ];

  const lingerieEssential = [
    "View all in Lingerie Essential",
    "Cycle Shorts",
    "Slips",
  ];

  const sleepware = [
    "View all in Sleepware",
    "Pyjamas",
    "Gowns",
    "Onesies",
    "Sleep Shirts",
    "Chemises",
  ];

  //-----------------------woman clothing lingerie & sleepware---------------------------//

  const heels = ["View all in Heels", "Heels"];

  const pumpsAndFlats = ["View all in Pumps & Flats", "Pumps & Flats"];

  const sandals = ["View all in Sandals", "Sandals"];

  const sneakersAndTrainers = [
    "View all in Sneakers & Trainers",
    "Sneakers",
    "Trainers",
  ];

  return (
    <HeaderStyled>
      <div className="container d-flex justify-content-between align-items-center  mt-3">
        <div className=" d-flex align-items-start  ">
          <List
            className=" d-lg-none"
            onClick={() => {
              setCloseIt(!closeIt);
              setShowMenu(!showMenu);
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
        <div className="menu d-flex justify-content-between mt-2 align-items-center ">
          <h3>Menu</h3>
          <XLg
            onClick={() => {
              setCloseIt(false);
              setShowMenu(false);
              setShowWomans(false);
            }}
          />
        </div>

        {showMenu
          ? themenu.map((menu) => {
              return (
                <div
                  className="list d-flex align-items-center justify-content-between"
                  onClick={() => {
                    if (menu === "Woman") {
                      setShowMenu(!showMenu);
                      setShowWomans(true);
                    }
                    if (menu === "Beauty") {
                      setShowMenu(!showMenu);
                      setShowBeauty(true);
                    }
                    if (menu === "Baby") {
                      setShowMenu(!showMenu);
                      setShowBaby(true);
                    }
                    if (menu === "Kids") {
                      setShowMenu(!showMenu);
                      setShowKids(true);
                    }
                    if (menu === "Teens") {
                      setShowMenu(!showMenu);
                      setShowTeens(true);
                    }
                    if (menu === "Character") {
                      setShowMenu(!showMenu);
                      setShowCharacter(true);
                    }
                    if (menu === "Homeware") {
                      setShowMenu(!showMenu);
                      setShowHomeware(true);
                    }
                    if (menu === "Tech") {
                      setShowMenu(!showMenu);
                      setShowTech(true);
                    }
                    if (menu === "Financtial Solutions") {
                      setShowMenu(!showMenu);
                      setShowFinancial(true);
                    }
                  }}
                >
                  {menu} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showWomans
          ? woman.map((woman) => {
              return (
                <div
                  className="list d-flex align-items-center justify-content-between"
                  onClick={() => {
                    if (woman === "Clothing") {
                      setShowMenu(false);
                      setShowWomans(false);
                      setShowClothing(true);
                    }
                    if (woman === "Lingerie & Sleepwear") {
                      setShowMenu(false);
                      setShowWomans(false);
                      setShowLingerieAndSleep(true);
                    }
                    if (woman === "Shoes") {
                      setShowMenu(false);
                      setShowWomans(false);
                      setShowShoes(true);
                    }
                    if (woman === "Accessories") {
                      setShowMenu(false);
                      setShowWomans(false);
                      setShowAccessories(true);
                    }
                    if (woman === "ActiveWare") {
                      setShowMenu(false);
                      setShowWomans(false);
                      setShowActiveware(true);
                    }
                    if (woman === "Limited Edition") {
                      setShowMenu(false);
                      setShowWomans(false);
                      setShowLimittedEdition(true);
                    }
                  }}
                >
                  {woman} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showBeauty
          ? beauty.map((beauty) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {beauty} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showBaby
          ? baby.map((baby) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {baby} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showKids
          ? kids.map((kids) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {kids} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showTeens
          ? teens.map((teens) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {teens} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showCharacter
          ? character.map((character) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {character} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showHomeware
          ? homeware.map((homeware) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {homeware} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showTech
          ? tech.map((tech) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {tech} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showFinacial
          ? FinanctialSolutions.map((financial) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {financial} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {/* This is really getting messy soon it's gonna be impossible to debugg */}
        {/* Woman / Clothing menu    clothing manu womans menu "open the ackermans website to see more"*/}

        {showClothing
          ? clothing.map((cloths) => {
              return (
                <div
                  className="list d-flex align-items-center justify-content-between"
                  onClick={() => {
                    if (cloths === "Tops") {
                      setShowMenu(false);
                      setShowWomans(false);
                      setShowClothing(false);
                      setShowTops(true);
                    }
                    if (cloths === "T-Shirts") {
                      setShowMenu(false);
                      setShowWomans(false);
                      setShowClothing(false);
                      setShowTshirts(true);
                    }
                    if (cloths === "Pants") {
                      setShowMenu(false);
                      setShowWomans(false);
                      setShowClothing(false);
                      setShowPants(true);
                    }
                    if (cloths === "Demin Jeans") {
                      setShowMenu(false);
                      setShowWomans(false);
                      setShowClothing(false);
                      setShowDeminJeans(true);
                    }
                    if (cloths === "Shorts") {
                      setShowMenu(false);
                      setShowWomans(false);
                      setShowClothing(false);
                      setShowShorts(true);
                    }
                    if (cloths === "Skirts") {
                      setShowMenu(false);
                      setShowWomans(false);
                      setShowClothing(false);
                      setShowSkirts(true);
                    }
                    if (cloths === "Dresses Jumpsuits") {
                      setShowMenu(false);
                      setShowWomans(false);
                      setShowClothing(false);
                      setShowDressesAndJump(true);
                    }
                  }}
                >
                  {cloths} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showLingerieAndSleep
          ? LingerieAndSleep.map((lingerie) => {
              return (
                <div
                  className="list d-flex align-items-center justify-content-between"
                  onClick={() => {
                    if (lingerie === "Bras") {
                      setShowMenu(false);
                      setShowWomans(false);
                      setShowClothing(false);
                      setShowLingerieAndSleep(false);
                      setShowBra(true);
                    }
                    if (lingerie === "Panties") {
                      setShowMenu(false);
                      setShowWomans(false);
                      setShowClothing(false);
                      setShowLingerieAndSleep(false);
                      setShowPanties(true);
                    }
                    if (lingerie === "Seamfree") {
                      setShowMenu(false);
                      setShowWomans(false);
                      setShowClothing(false);
                      setShowLingerieAndSleep(false);
                      setShowSeamfree(true);
                    }
                    if (lingerie === "Shapewear") {
                      setShowMenu(false);
                      setShowWomans(false);
                      setShowClothing(false);
                      setShowLingerieAndSleep(false);
                      setShowShapewear(true);
                    }
                    if (lingerie === "Socks & Hosiery") {
                      setShowMenu(false);
                      setShowWomans(false);
                      setShowClothing(false);
                      setShowLingerieAndSleep(false);
                      setShowSocksAndHosiery(true);
                    }
                    if (lingerie === "Lingerie Essentials") {
                      setShowMenu(false);
                      setShowWomans(false);
                      setShowClothing(false);
                      setShowLingerieAndSleep(false);
                      setShowLingerieEssential(true);
                    }
                    if (lingerie === "Sleepware") {
                      setShowMenu(false);
                      setShowWomans(false);
                      setShowClothing(false);
                      setShowLingerieAndSleep(false);
                      setShowSleepware(true);
                    }
                  }}
                >
                  {lingerie} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showShoes
          ? shoes.map((shoes) => {
              return (
                <div
                  className="list d-flex align-items-center justify-content-between"
                  onClick={() => {
                    if (shoes === "Heels") {
                      setShowMenu(false);
                      setShowWomans(false);
                      setShowClothing(false);
                      setShowShoes(false);
                      setShowHeels(true);
                    }
                    if (shoes === "Pumps & Flats") {
                      setShowMenu(false);
                      setShowWomans(false);
                      setShowClothing(false);
                      setShowShoes(false);
                      setShowPumpsAndFlats(true);
                    }
                    if (shoes === "Sandals") {
                      setShowMenu(false);
                      setShowWomans(false);
                      setShowClothing(false);
                      setShowShoes(false);
                      setShowSandals(true);
                    }
                    if (shoes === "Sneakers & Trainers") {
                      setShowMenu(false);
                      setShowWomans(false);
                      setShowClothing(false);
                      setShowShoes(false);
                      setShowSneakersAndTrainers(true);
                    }
                  }}
                >
                  {shoes} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showAccessories
          ? Accessories.map((acc) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {acc} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showActiveware
          ? activeWare.map((active) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {active} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showLimittedEdition
          ? limitedEdition.map((limited) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {limited} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {/* This is really getting messy soon it's gonna be impossible to debugg */}
        {/* Woman / Clothing / tops    clothing manu womans menu "open the ackermans website to see more"*/}

        {showTops
          ? tops.map((top) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {top} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showTshirts
          ? tshirts.map((tshirts) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {tshirts} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showPants
          ? pants.map((pants) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {pants} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showDeminJeans
          ? deminJeans.map((demin) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {demin} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showShorts
          ? shorts.map((shorts) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {shorts} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showSkirts
          ? skirts.map((skirts) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {skirts} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showDressesAndJump
          ? dressesAndJump.map((dresses) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {dresses} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {/* This is really getting messy soon it's gonna be impossible to debugg */}
        {/* Woman / lingerie / bras    clothing manu womans menu "open the ackermans website to see more"*/}

        {showBra
          ? bras.map((bras) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {bras} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showPanties
          ? panties.map((panties) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {panties} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showSeamfree
          ? seamfree.map((seamfree) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {seamfree} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showShapewear
          ? shapewear.map((shapewear) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {shapewear} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showSocksAndHosiery
          ? socksAndHosiery.map((socksAndHosiery) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {socksAndHosiery} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showLingerieEssential
          ? lingerieEssential.map((lingerieE) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {lingerieE} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showSleepware
          ? sleepware.map((sleepware) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {sleepware} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {/* This is really getting messy soon it's gonna be impossible to debugg */}
        {/* Woman / Shoes    clothing manu womans menu "open the ackermans website to see more"*/}

        {showHeels
          ? heels.map((heels) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {heels} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showSneakersAndTrainers
          ? sneakersAndTrainers.map((Sneakers) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {Sneakers} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showPumpsAndFlats
          ? pumpsAndFlats.map((pumps) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {pumps} <CaretRightFill />
                </div>
              );
            })
          : ""}

        {showSandals
          ? sandals.map((sandals) => {
              return (
                <div className="list d-flex align-items-center justify-content-between">
                  {sandals} <CaretRightFill />
                </div>
              );
            })
          : ""}
      </Popup>
    </HeaderStyled>
  );
};

export default Header;
