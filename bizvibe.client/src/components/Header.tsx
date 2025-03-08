import { CenteredContainer, Header, Nav } from "./components";
import SearchBar from "./SearchBar";
import { Organization } from "../interfaces/Organization";

interface HeaderMenuProps {
  onSearchResults: (
    organizations: Organization[],
    searchWord: string,
    isLoading: boolean
  ) => void;
}

export const HeaderMenu: React.FC<HeaderMenuProps> = ({ onSearchResults }) => {
  return (
    <Header>
      <CenteredContainer>
        <h2>
          Biz<br></br>Vibe
        </h2>
      </CenteredContainer>
      <CenteredContainer>
        <Nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </Nav>
      </CenteredContainer>
      <CenteredContainer>
        <SearchBar onSearchResults={onSearchResults} />
      </CenteredContainer>
    </Header>
  );
};
