import { useLocation } from "react-router-dom";
import { CenteredContainer } from "../components/components";
import OrganizationAnalysis from "./OrganizationAnalysis";

export const OrganizationDetails: React.FC = () => {
  const location = useLocation();
  const { organization } = location.state;

  return <CenteredContainer></CenteredContainer>;
};
