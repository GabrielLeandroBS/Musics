import { NavLink } from "react-router-dom";

import { Container, List, Item, Navigation, Footer } from "./styled";
import getImages from "../../assets";
import Header from "../Header";

const link = [
  {
    name: "Explorer",
    url: "explorer",
    title: "Link to explorer",
    icon: getImages("search"),
  },
  {
    name: "Albums",
    title: "Link to songs",
    url: "albums",
    icon: getImages("album"),
  },
];

export default function Sidebar() {
  return (
    <Container>
      <Header />
      <Navigation>
        <List>
          {link.map(({ name, url, title, icon }) => (
            <Item key={name}>
              <img src={icon} alt={name} />
              <NavLink
                to={`/${url}`}
                title={title}
                alt={title}
                activeclassname="selected"
              >
                {name}
              </NavLink>
            </Item>
          ))}
        </List>
      </Navigation>
      <Footer>
        <a href="https://www.linkedin.com/in/gabrielleandrob/" target={"_blank"} rel="noopener" alt="Link to view linkedin" title="View linkedin">&#128512; Gabriel Leandro</a>
      </Footer>
    </Container>
  );
}
