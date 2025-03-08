import styled from "styled-components";
import { Organization } from "../interfaces/Organization";
import { Container } from "./components";
import Emoji from "../styles/Emoji";
import { capitalizeFirstLetter } from "../utils/captilazieFirstLetter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  transition: transform 0.2s, color 0.2s;
  margin: 0 auto;

  &:hover {
    transform: translateY(-5px);
  }

  td {
    color: ${(props) =>
      props.isHovered ? props.theme.text : props.theme.listText};
  }
`;

const ListRowTitle = styled.td`
  padding-right: 4rem;
  font-weight: bold;
  padding-bottom: 1rem;
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
  selectOrganization: (organization: Organization) => void;
}

const OrganizationList: React.FC<OrganizationListProps> = ({
  organizations,
  searchWord,
  selectOrganization,
}) => {
  if (!searchWord) {
    return null;
  }

  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredRow(index);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  return (
    <OrganizationListContainer>
      <Container>
        <SearchWordDes>Du søkte etter</SearchWordDes>
        <SearchWordTitle>{searchWord}</SearchWordTitle>
      </Container>
      <Container>
        <OrganizationCard>
          <table>
            <thead>
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
            </thead>
            <tbody>
              {organizations.map((org, index) => (
                <HoverContainer
                  key={index}
                  isHovered={hoveredRow === index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => selectOrganization(org)}
                >
                  <ListRow>{capitalizeFirstLetter(org.navn)}</ListRow>
                  <ListRow>
                    {typeof org.forretningsadresse?.kommune === "string"
                      ? capitalizeFirstLetter(org.forretningsadresse.kommune)
                      : "-"}
                  </ListRow>
                </HoverContainer>
              ))}
            </tbody>
          </table>
        </OrganizationCard>
      </Container>
    </OrganizationListContainer>
  );
};

export default OrganizationList;
