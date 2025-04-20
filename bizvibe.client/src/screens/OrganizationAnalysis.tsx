import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Organization } from "../interfaces/Organization";
import { fetchOrganizationData } from "../services/BrregApiService";
import OrganisationEarningsChart from "../components/computing/OrganisationEarningsChart";
import { OrganisationData } from "../interfaces/OrganisationData";
import { useEffect as reactUseEffect } from "react";

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

const OrganizationAnalysis: React.FC<{ organization: Organization }> = ({
  organization,
}) => {
  const [orgData, setOrgData] = useState<OrganisationData>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchOrganizationData(
          organization.organisasjonsnummer
        );
        setOrgData(data);
      } catch (err) {
        console.error("Error fetching organization data:", err);
      }
    };

    fetchData();
  }, [organization.organisasjonsnummer]);

  return (
    <AnalysisContainer>
      <SectionTitle>{organization.navn}</SectionTitle>
      {orgData && <OrganisationEarningsChart orgData={orgData} />}
    </AnalysisContainer>
  );
};

export default OrganizationAnalysis;
