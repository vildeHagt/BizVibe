import { TailSpin } from "react-loading-icons";
import { CenteredContainer } from "./components";

export const Loading: React.FC<SearchBarProps> = () => {
  return (
    <CenteredContainer>
      <TailSpin stroke="#4E485C" />
    </CenteredContainer>
  );
};
