import React from "react";
import HeaderMenuComp from "../HeaderMenuComp";
import { tech } from "../MenuData";

const TechMenu = () => {
  return (
    <>
      <HeaderMenuComp data={tech} title={"TECH"} shows={"showTech"} />
    </>
  );
};

export default TechMenu;
