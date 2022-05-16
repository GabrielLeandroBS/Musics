import { NavLink } from "react-router-dom";

import { Span } from "./styled";

export default function Button({ text, title, alt, href, type }) {
  return (
    <NavLink to={`/${href}`} title={title} alt={alt}>
      <Span type={type}>{text}</Span>
    </NavLink>
  );
}
