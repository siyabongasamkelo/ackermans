import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hover } from "../../../Features/DropDown";
import DropDownComp from "./DropDownComp";
import {
  accessories,
  activeWare,
  clothing,
  lingerieAndSleep,
  shoes,
} from "../woman/WomanData";
import {
  bathAndBody,
  brands,
  fragrance,
  makeUp,
  oralCare,
  skincare,
} from "../Beauty/BeautyData";
import {
  babyEssentialss,
  boys3to36s,
  girls3to36,
  newborn,
} from "../Baby/BabyData";
import { boys, girls, school } from "../Kids/KidsData";
import { shopAll, teenBoys, teenGirls, teenBrands } from "../Teens/TeenData";
import { baby, homeware, kids } from "../Character/CharacterData";
import { bathroom, drinkAndLunch, partyAndDec } from "../Homewear/HomewearData";
import { audio, power, techAccessories } from "../Tech/TechData";

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
  const sale = [
    "LIMITED EDITION",
    "THE LINGERIE SHOP",
    "THE DEMIN SHOP",
    "TRENDING",
    "CHRISTMAS",
    "SUMMER-WARE CAPSULE",
  ];
  const babySale = [
    "LIMITED EDITION",
    "CHRISTMAS",
    "LILLY + SID",
    "TURTLEDOVE LONDON",
    "MY FIRST WARDROBE",
  ];
  const kidsSale = [
    "LIMITED EDITION",
    "THE DEMIN SHOP",
    "CHRISTMAS",
    "SWIM SHOP",
    "LILLY + SID",
  ];
  const teensSale = [
    "GRAPHIC TEES",
    "TROPICAL HEAT",
    "THE DEMIN SHOP",
    "LIMITED EDITION",
  ];
  const characterSale = ["CHRISTMAS"];
  const homewareSale = ["LIMITED EDITION", "NOVELTY ESSENTIALS"];
  const empty = [""];
  const characterBrands = [
    "Disney",
    "Marvel",
    "Werner Bros",
    "DC Super Heroes",
    "Universal",
    "Nickelodeon",
    "Hasbro",
    "Mattel",
    "Other",
  ];
  return (
    <>
      <Dropdown className=" d-none d-lg-block ">
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
          <DropDownComp
            products={[
              clothing,
              lingerieAndSleep,
              shoes,
              accessories,
              activeWare,
              sale,
            ]}
            headers={[
              "CLOTHING",
              "LINGERIE & SLEEPWARE",
              "SHOES",
              "ACCESSORIES",
              "ACTIVEWARE",
              "SALE",
            ]}
            classNames={"woman"}
          />

          <DropDownComp
            products={[
              makeUp,
              bathAndBody,
              skincare,
              oralCare,
              fragrance,
              brands,
            ]}
            headers={[
              "MAKEUP",
              "BATH&BODY",
              "SKINCARE",
              "ORAL CARE",
              "FRAGRANCE",
              "BRANDS",
            ]}
            classNames={"beauty"}
          />

          <DropDownComp
            products={[
              newborn,
              boys3to36s,
              girls3to36,
              empty,
              babyEssentialss,

              babySale,
            ]}
            headers={[
              "NEWBORN",
              "BOYS 3-36 MONTHS",
              "GIRLS 3-36 MONTHS",

              "",
              "BABY ESSENTIALS",
              "SALE",
            ]}
            classNames={"baby"}
          />

          <DropDownComp
            products={[boys, girls, empty, empty, school, kidsSale]}
            headers={[
              "BOYS 2-10 YEARS",
              "GIRLS 2-10 YEARS",
              "",
              "",
              "SCHOOL",
              "SALE",
            ]}
            classNames={"kids"}
          />

          <DropDownComp
            products={[
              shopAll,
              teenBoys,
              teenGirls,
              empty,
              teenBrands,
              teensSale,
            ]}
            headers={[
              "SHOP ALL",
              "TEEN BOYS",
              "TEEN GIRLS",
              "",
              "BRANDS",
              "SALE",
            ]}
            classNames={"teens"}
          />

          <DropDownComp
            products={[
              baby,
              kids,
              homeware,
              empty,
              characterBrands,

              characterSale,
            ]}
            headers={["BABY", "KIDS", "HOMEWARE", "", "BRANDS", "SALE"]}
            classNames={"character"}
          />

          <DropDownComp
            products={[
              bathroom,
              drinkAndLunch,
              empty,
              empty,
              partyAndDec,
              homewareSale,
            ]}
            headers={[
              "BATHROOM",
              "DRINKWARE & LUNCHBOXES",
              "",
              "",
              "PARTY & DECORATIONS",
              "SALES",
            ]}
            classNames={"homeware"}
          />

          <DropDownComp
            products={[audio, power, techAccessories, empty, empty, empty]}
            headers={[
              "AUDIO",
              "POWERBANKS & CHARGERS",
              "ACCESSORIES",
              "",
              "",
              "",
            ]}
            classNames={"tech"}
          />
        </div>
      </Dropdown>
    </>
  );
};

export default DropDownMenu;
