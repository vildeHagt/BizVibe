import styled from "styled-components";
import { Organization } from "../interfaces/Organization";
import { Container } from "./components";
import Emoji from "../styles/Emoji";
import { capitalizeFirstLetter } from "../utils/captilazieFirstLetter";

const OrganizationListContainer = styled.div`
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
`;

const OrganizationCard = styled.div`
  background-color: ${(props) => props.theme.secondary};
  padding: 16px;
  border-radius: 8px;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  text-align: left;

  h3 {
    margin-top: 0;
    font-size: 1.25em;
  }

  p {
    margin: 8px 0;
  }
`;

const ListRow = styled.td`
  padding-right: 4rem;
  padding-bottom: 1rem;
  color: ${(props) => props.theme.listText};
`;

const HoverContainer = styled.tr`
  transition: transform 0.2s;
  margin: 0 auto;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ListRowTitle = styled.td`
  padding-right: 4rem;
  font-weight: bold;
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
        <OrganizationCard>
          <table>
            <tr>
              <ListRowTitle>
                Bedrift
                <Emoji symbol="🏢" />
              </ListRowTitle>
              <ListRowTitle>
                By
                <Emoji symbol="📍" />
              </ListRowTitle>
            </tr>
            {organizations.map((org) => (
              <HoverContainer>
                <ListRow>{capitalizeFirstLetter(org.navn)}</ListRow>
                <ListRow>
                  {capitalizeFirstLetter(org.forretningsadresse?.kommune)}
                </ListRow>
              </HoverContainer>
            ))}
          </table>
        </OrganizationCard>
      </Container>
    </OrganizationListContainer>
  );
};

export default OrganizationList;
