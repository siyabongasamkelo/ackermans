import {
  baby,
  beauty,
  character,
  themenu,
} from "../components/header/MenuData";
import { Link } from "react-router-dom";
const Links = () => {
  return (
    <div>
      {themenu.map((link) => {
        return <Link> | {link}</Link>;
      })}
      {baby.map((link) => {
        return <Link> | {link}</Link>;
      })}
      {beauty.map((link) => {
        return <Link> | {link}</Link>;
      })}
      {character.map((link) => {
        return <Link> | {link}</Link>;
      })}
    </div>
  );
};

export default Links;
