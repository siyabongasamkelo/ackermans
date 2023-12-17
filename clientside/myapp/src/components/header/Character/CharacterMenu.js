import HeaderMenuComp from "../HeaderMenuComp";
import { character } from "../MenuData";
import { baby, homeware, kids } from "./CharacterData";

const CharacterMenu = () => {
  return (
    <>
      <HeaderMenuComp
        data={character}
        title={"CHARACTER"}
        shows={"showCharacter"}
      />
      <HeaderMenuComp data={kids} title={"KIDS"} shows={"showCharacterKid"} />
      <HeaderMenuComp data={baby} title={"BABY"} shows={"showCharacterBaby"} />
      <HeaderMenuComp
        data={homeware}
        title={"HOMEWARE"}
        shows={"showCharacterHomeware"}
      />
    </>
  );
};

export default CharacterMenu;
