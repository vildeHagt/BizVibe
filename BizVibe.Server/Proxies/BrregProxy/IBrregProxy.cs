using BizVibe.Server.Models;

namespace BizVibe.Server.Proxies.BrregProxy
{
    public interface IBrregProxy
    {
        public Task<Organisation> GetOrganisationByOrganisationNumber(string organisationNumber);
        public Task<List<Organisation>?> SearchForOrganisationByName(string organisationName);

    }
}
