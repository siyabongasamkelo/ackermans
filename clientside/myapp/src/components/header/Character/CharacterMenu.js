import HeaderMenuComp from "../HeaderMenuComp";
import { character } from "../MenuData";
import { baby } from "./CharacterData";

const CharacterMenu = () => {
  return (
    <>
      <HeaderMenuComp
        data={character}
        title={"CHARACTER"}
        shows={"showCharacter"}
      />
      <HeaderMenuComp data={baby} title={"Kids"} shows={"showCharacterKid"} />
    </>
  );
};

export default CharacterMenu;
