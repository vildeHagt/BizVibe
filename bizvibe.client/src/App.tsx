import "./App.css";
import { OuterContainer, CenteredContainer } from "./components/components.ts";
import OrganizationList from "./components/OrganizationList.tsx";
import { Loading } from "./components/LoadingScreen.tsx";
import { useNavigate } from "react-router-dom";
import { Organization } from "./interfaces/Organization.ts";

interface AppProps {
  organizations: Organization[];
  searchWord: string;
  loading: boolean;
}

const App = ({ organizations, searchWord, loading }: AppProps) => {
  const navigate = useNavigate();

  const handleOrganizationClick = (organization: Organization) => {
    navigate("/organization", { state: { organization } });
  };

  return (
    <OuterContainer>
      {loading ? (
        <Loading />
      ) : (
        <CenteredContainer>
          <OrganizationList
            organizations={organizations}
            searchWord={searchWord}
            selectOrganization={handleOrganizationClick}
          />
        </CenteredContainer>
      )}
    </OuterContainer>
  );
};

export default App;
