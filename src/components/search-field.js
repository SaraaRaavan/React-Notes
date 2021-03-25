import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CleatTextIcon from "../vectors/icons/clear-text-icon.js";

const IconContainer = styled.span`
  position: absolute;
  right: 10px;
  top: 5px;
  cursor: pointer;
`;

const Input = styled.input`
  flex: 1;
`;

const Field = styled.div`
  display: flex;
  flex: 1;
  border: 2px solid black;
  position: relative;
`;

const SearchField = ({ searchNote }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const setSearch = (event) => {
    const val = event.target?.value;
    setSearchQuery(val);
    searchNote(val);
  };

  const clearSearch = () => {
    if (searchQuery) {
      setSearchQuery("");
      searchNote("");
    }
  };

  return (
    <Field>
      <Input
        placeholder={"Search note.."}
        value={searchQuery}
        onChange={(e) => setSearch(e)}
      />

      <IconContainer onClick={clearSearch}>
        <CleatTextIcon />
      </IconContainer>
    </Field>
  );
};

SearchField.defaultProps = {
  searchNote: () => {},
};

SearchField.propTypes = {
  searchNote: PropTypes.func.isRequired,
};

export default SearchField;
