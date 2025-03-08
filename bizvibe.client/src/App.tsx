import "./App.css";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/theme.ts";
import GlobalStyles from "./styles/globalStyles";
import {
  Header,
  OuterContainer,
  CenteredContainer,
  Nav,
} from "./components/components.ts";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import { Organization } from "./interfaces/Organization.ts";
import OrganizationList from "./components/OrganizationList.tsx";
import { Loading } from "./components/LoadingScreen.tsx";
import { useNavigate } from "react-router-dom";
import { HeaderMenu } from "./components/Header.tsx";

function App() {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [searchWord, setSearchWord] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleOrganizationClick = (organization: Organization) => {
    navigate("/organization", { state: { organization } });
  };

  const handleSearchResults = (
    organizations: Organization[],
    searchWord: string,
    isLoading: boolean
  ) => {
    setOrganizations(organizations);
    setSearchWord(searchWord);
    setLoading(isLoading);
  };

  return (
    <OuterContainer>
      <ThemeProvider theme={darkTheme}>
        <HeaderMenu onSearchResults={handleSearchResults} />
        {loading ? (
          <Loading />
        ) : (
          <>
            <CenteredContainer>
              <OrganizationList
                organizations={organizations}
                searchWord={searchWord}
                selectOrganization={handleOrganizationClick}
              ></OrganizationList>
            </CenteredContainer>
          </>
        )}
        <GlobalStyles />
      </ThemeProvider>
    </OuterContainer>
  );
}

export default App;
