import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Organization } from "../interfaces/Organization";
import { OrganisationData } from "../interfaces/OrganisationData";
import { fetchOrganizationData } from "../services/BrregApiService";
import OrganisationEarningsChart from "../components/computing/OrganisationEarningsChart";
import Emoji from "../styles/Emoji";

const AnalysisContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const DataGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const DataCard = styled.div`
  background: ${(props) => props.theme.background};
  padding: 12px;
  border-radius: 8px;
  border-left: 4px solid #0077cc;
`;

const AnalysisContent = styled.div`
  display: flex;
  gap: 20px; /* Space between the grid and the chart */
  align-items: flex-start; /* Align items at the top */
`;

const DataGridContainer = styled.div`
  flex: 2; /* Take up more space for the data grid */
`;

const ChartContainer = styled.div`
  flex: 1; /* Take up less space for the chart */
  min-width: 300px; /* Ensure the chart has a minimum width */
`;

const Label = styled.div`
  font-weight: bold;
  color: ${(props) => props.theme.strongDescriptionText};
`;

const Value = styled.div`
  font-size: 1.1em;
`;

// Helper for formatting
const formatNumber = (num?: number) =>
  num?.toLocaleString("no-NO", { style: "currency", currency: "NOK" }) ?? "-";

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
        console.info(data);
      } catch (err) {
        console.error("Error fetching organization data:", err);
      }
    };

    fetchData();
  }, [organization.organisasjonsnummer]);

  // Derived calculations for finance
  const totalAssets = orgData?.eiendeler?.sumEiendeler ?? 0;
  const totalLiabilities =
    orgData?.egenkapitalGjeld?.gjeldOversikt?.sumGjeld ?? 0;
  const equity = orgData?.egenkapitalGjeld?.egenkapital?.sumEgenkapital ?? 0;
  const netProfit = orgData?.resultatregnskapResultat?.aarsresultat ?? 0;
  const equityRatio = totalAssets > 0 ? (equity / totalAssets) * 100 : 0;
  const debtRatio =
    totalAssets > 0 ? (totalLiabilities / totalAssets) * 100 : 0;

  return (
    <AnalysisContainer>
      <SectionTitle>
        {organization.navn} <Emoji symbol="🏢" />
      </SectionTitle>

      {orgData ? (
        <>
          <DataGrid>
            <DataCard>
              <Label>Totale eiendeler</Label>
              <Value>{formatNumber(totalAssets)}</Value>
            </DataCard>

            <DataCard>
              <Label>Totalt gjeld</Label>
              <Value>{formatNumber(totalLiabilities)}</Value>
            </DataCard>

            <DataCard>
              <Label>Egenkapital</Label>
              <Value>{formatNumber(equity)}</Value>
            </DataCard>

            <DataCard>
              <Label>Årsresultat</Label>
              <Value>{formatNumber(netProfit)}</Value>
            </DataCard>

            <DataCard>
              <Label>Egenkapitalandel</Label>
              <Value>{equityRatio.toFixed(2)}%</Value>
            </DataCard>

            <DataCard>
              <Label>Gjeldsgrad</Label>
              <Value>{debtRatio.toFixed(2)}%</Value>
            </DataCard>
          </DataGrid>

          <br />

          <ChartContainer>
            <OrganisationEarningsChart orgData={orgData} />
          </ChartContainer>
        </>
      ) : (
        <p>Laster økonomisk data…</p>
      )}
    </AnalysisContainer>
  );
};

export default OrganizationAnalysis;
