import React, { useContext, useState } from "react";
import { Theme } from "../contexts/Theme";

const Search = ({ setName }) => {
  const { isLight, light, dark } = useContext(Theme);
  const theme = isLight ? light : dark;
  const [entrySearch, setEntry] = useState("");
  const onChange = (q) => {
    setEntry(q);
    setName(q);
  };
  return (
    <div className="form__container">
      <input
        type="text"
        className="form__search"
        placeholder="Search for a country..."
        style={{ background: theme.bgCard, color: theme.fontColor }}
        onChange={e=>onChange(e.target.value)}
        value={entrySearch}
      />
      <i className="fas fa-search search-icon"></i>
    </div>
  );
};

export default Search;
