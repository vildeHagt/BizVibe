import React, { useState } from "react";
import styled from "styled-components";
import { Organization } from "../interfaces/Organization";
import { fetchOrganizationData } from "../services/BrregApiService";
import OrganisationEarningsChart from "../components/computing/OrganisationEarningsChart";
import { OrganisationData } from "../interfaces/OrganisationData";

const AnalysisContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const DataPoint = styled.p`
  font-size: 1em;
  margin: 5px 0;
`;

const OrganizationAnalysis: React.FC<{ organization: Organization }> = async ({
  organization,
}) => {
  const [orgData, setOrgData] = useState<OrganisationData>();

  try {
    const data = await fetchOrganizationData(organization.organisasjonsnummer);
    setOrgData(data);
  } catch (err) {
    console.error("Error fetching organization data:", err);
  }

  return (
    <AnalysisContainer>
      <SectionTitle>{organization.navn}</SectionTitle>
      {orgData && (
        <OrganisationEarningsChart
          orgData={orgData}
        ></OrganisationEarningsChart>
      )}
    </AnalysisContainer>
  );
};

export default OrganizationAnalysis;
