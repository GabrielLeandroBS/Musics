import { Form, Input, Animation } from "./styled";
import getImages from "../../assets";

export default function Search({ placeholder, submit, setQuery }) {
  return (
    <Form>
      <span htmlFor="search" hidden>
        {placeholder}
      </span>
      <Input
        onInput={(e) => setQuery(e.target.value)}
        id="search"
        type="text"
        placeholder={placeholder}
        name="search"
      />
      <Animation onClick={() => submit()}>
        <img loading="lazy" src={getImages("submit")} alt="Search icon" />
      </Animation>
    </Form>
  );
}
