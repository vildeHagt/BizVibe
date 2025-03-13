import React from "react";
import styled from "styled-components";
import { Organization } from "../interfaces/Organization";

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
  return (
    <AnalysisContainer>
      <SectionTitle>Organization Analysis</SectionTitle>
    </AnalysisContainer>
  );
};

export default OrganizationAnalysis;
