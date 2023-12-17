import React from "react";
import HeaderMenuComp from "../HeaderMenuComp";
import { tech } from "../MenuData";
import { techAccessories, audio, power } from "./TechData";

const TechMenu = () => {
  return (
    <>
      <HeaderMenuComp data={tech} title={"TECH"} shows={"showTech"} />
      <HeaderMenuComp data={audio} title={"AUDIO"} shows={"showAudio"} />
      <HeaderMenuComp data={power} title={"POWER"} shows={"showPower"} />
      <HeaderMenuComp
        data={techAccessories}
        title={"ACCESSORIES"}
        shows={"showTechAccessories"}
      />
    </>
  );
};

export default TechMenu;
