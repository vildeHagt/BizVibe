using BizVibe.Server.Models;

namespace BizVibe.Server.Proxies.BrregProxy
{
    public interface IBrregProxy
    {
        public Task<Organisation> GetOrganisationByOrganisationNumber(string organisationNumber);
        public Task<Units?> SearchForOrganisationsByName(string organisationName);
        public Task<OrganisationData?> GetOrganisationData(string orgNum);
    }
}
