import React from "react";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${(props) => props.theme.surface};
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;

  input {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.text};
    outline: none;
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.text};
    cursor: pointer;
    margin-left: 10px;
  }
`;

const SearchBar: React.FC = () => {
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your search logic here
    console.log("Search initiated");
  };

  return (
    <SearchBarContainer>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Søk etter selskap..." />
        <button type="submit">Søk</button>
      </form>
    </SearchBarContainer>
  );
};

export default SearchBar;
