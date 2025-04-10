namespace BizVibe.Server.Configs
{
    public class BrregEndpoints
    {
        public string BaseUrl() => "https://data.brreg.no";
        public string OrganisationEndpoint(string organisationNumber) => "/enhetsregisteret/api/enheter/" + organisationNumber;
        public string SearchForOrganisationsByName(string OrganisationName) => "/enhetsregisteret/api/enheter?navn=" + OrganisationName;
        public string AccountingEndpoint(string orgNum) => "/regnskapsregisteret/regnskap/" + orgNum;
    }
}
