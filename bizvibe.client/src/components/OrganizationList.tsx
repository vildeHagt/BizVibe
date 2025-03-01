import styled from "styled-components";
import { Organization } from "../interfaces/Organization";
import { Container } from "./components";

const OrganizationListContainer = styled.div`
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
`;

const OrganizationCard = styled.div`
  background-color: ${(props) => props.theme.secondary};
  border-radius: 8px;
  padding: 16px;
  width: 300px;
  transition: transform 0.2s;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  margin: 10px;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    margin-top: 0;
    font-size: 1.25em;
  }

  p {
    margin: 8px 0;
  }
`;

const SearchWordTitle = styled.h1`
  text-align: left;
  margin: 0;
`;

const SearchWordDes = styled.p`
  text-align: left;
  margin: 0;
  color: ${(props) => props.theme.descriptionText};
`;

interface OrganizationListProps {
  organizations: Organization[];
  searchWord: string;
}

const OrganizationList: React.FC<OrganizationListProps> = ({
  organizations,
  searchWord,
}) => {
  if (!searchWord) {
    return null;
  }

  return (
    <OrganizationListContainer>
      <Container>
        <SearchWordDes>Du søkte etter</SearchWordDes>
        <SearchWordTitle>{searchWord}</SearchWordTitle>
      </Container>
      <Container>
        <ul>
          {organizations.map((org) => (
            <OrganizationCard key={org.organisasjonsnummer}>
              {org.navn}
            </OrganizationCard>
          ))}
        </ul>
      </Container>
    </OrganizationListContainer>
  );
};

export default OrganizationList;
