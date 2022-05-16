import { Image } from "./styled";
import getImages from "../../assets";

export default function Header() {
  return (
    <header>
      <figure>
        <Image src={getImages("logo")} alt="Logo" />
      </figure>
    </header>
  );
}
