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

function App() {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [searchWord, setSearchWord] = useState<string>("");
  const [loading, setLoading] = useState(false);

  return (
    <OuterContainer>
      <ThemeProvider theme={darkTheme}>
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
            <SearchBar
              onSearchResults={(organizations, searchWord, isLoading) => {
                setOrganizations(organizations);
                setSearchWord(searchWord);
                setLoading(isLoading);
              }}
            />
          </CenteredContainer>
        </Header>
        {loading ? (
          <Loading />
        ) : (
          <>
            <CenteredContainer>
              <OrganizationList
                organizations={organizations}
                searchWord={searchWord}
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
