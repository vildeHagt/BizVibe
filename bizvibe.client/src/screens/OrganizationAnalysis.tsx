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

      <SectionTitle>Basic Information</SectionTitle>
      <DataPoint>Name: {organization.navn}</DataPoint>
      <DataPoint>
        Organization Number: {organization.organisasjonsnummer}
      </DataPoint>
      <DataPoint>Organization Form: {organization.organisasjonsform}</DataPoint>
      <DataPoint>Established Date: {organization.stiftelsesdato}</DataPoint>

      <SectionTitle>Addresses</SectionTitle>
      {organization.forretningsadresse && (
        <div>
          <DataPoint>
            Business Address:{" "}
            {organization.forretningsadresse.adresse?.join(", ")}
          </DataPoint>
          <DataPoint>
            City: {organization.forretningsadresse.poststed}
          </DataPoint>
          <DataPoint>
            Postal Code: {organization.forretningsadresse.postnummer}
          </DataPoint>
        </div>
      )}

      <SectionTitle>Registration Status</SectionTitle>
      <DataPoint>
        Registered in VAT Register:{" "}
        {organization.registrertIMvaregisteret ? "Yes" : "No"}
      </DataPoint>
      <DataPoint>
        Registered in Business Register:{" "}
        {organization.registrertIForetaksregisteret ? "Yes" : "No"}
      </DataPoint>
      <DataPoint>
        Under Liquidation: {organization.underAvvikling ? "Yes" : "No"}
      </DataPoint>
      <DataPoint>Bankruptcy: {organization.konkurs ? "Yes" : "No"}</DataPoint>

      <SectionTitle>Contact Information</SectionTitle>
      {organization.epostadresse && (
        <DataPoint>Email: {organization.epostadresse}</DataPoint>
      )}
      {organization.telefon && (
        <DataPoint>Phone: {organization.telefon}</DataPoint>
      )}
      {organization.mobil && (
        <DataPoint>Mobile: {organization.mobil}</DataPoint>
      )}
      {organization.hjemmeside && (
        <DataPoint>Website: {organization.hjemmeside}</DataPoint>
      )}

      <SectionTitle>Employment</SectionTitle>
      {organization.harRegistrertAntallAnsatte && (
        <DataPoint>Number of Employees: {organization.antallAnsatte}</DataPoint>
      )}
    </AnalysisContainer>
  );
};

export default OrganizationAnalysis;
