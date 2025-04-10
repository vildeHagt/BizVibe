import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import App from "./App";
import { darkTheme } from "./styles/theme.ts";
import { OrganizationDetails } from "./screens/OrganizationDetails";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import { useState } from "react";
import { Organization } from "./interfaces/Organization.ts";
import { HeaderMenu } from "./components/Header.tsx";

const MainApp = () => {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [searchWord, setSearchWord] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSearchResults = (
    organizations: Organization[],
    searchWord: string,
    isLoading: boolean
  ) => {
    setOrganizations(organizations);
    setSearchWord(searchWord);
    setLoading(isLoading);

    navigate("/", { state: { organizations } });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <HeaderMenu onSearchResults={handleSearchResults} />
      <Routes>
        <Route
          path="/"
          element={
            <App
              organizations={organizations}
              searchWord={searchWord}
              loading={loading}
            />
          }
        />
        <Route path="/organization" element={<OrganizationDetails />} />
      </Routes>
    </ThemeProvider>
  );
};

export default MainApp;
