import styled from "styled-components";
import React, { useState } from "react";
import { fetchOrganizations } from "../services/BrregApiService";

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
  const [organisationName, setOrganisationName] = useState("");
  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      console.log(organisationName);
      const data = await fetchOrganizations(organisationName);
      setOrganizations(data);
      console.log("Fetched organizations:", data);
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
        <button type="submit">Søk</button>
      </form>

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}

      <ul>
        {organizations.map((org) => (
          <li>{org}</li>
        ))}
      </ul>
    </SearchBarContainer>
  );
};

export default SearchBar;
