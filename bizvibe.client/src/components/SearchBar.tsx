import styled from "styled-components";
import React, { useState } from "react";
import { fetchOrganizations } from "../services/BrregApiService";
import { Organization } from "../interfaces/Organization";

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${(props) => props.theme.surface};
  border-radius: 5px;
  max-width: 400px;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;

  input {
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

interface SearchBarProps {
  onSearchResults: (organizations: Organization[], searchWord: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchResults }) => {
  const [organisationName, setOrganisationName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await fetchOrganizations(organisationName);
      onSearchResults(data, organisationName);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrganisationName(event.target.value);
  };

  return (
    <SearchBarContainer>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={organisationName}
          onChange={handleInputChange}
          placeholder="Søk etter selskap..."
        />
        <button type="submit">🔍</button>
      </form>

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
    </SearchBarContainer>
  );
};

export default SearchBar;
