using BizVibe.Server.Models;
using BizVibe.Server.Proxies.BrregProxy;

namespace BizVibe.Server.Services.BrregService
{
    public class BrregService : IBrregService
    {
        private readonly IBrregProxy BrregProxy;

        public Task<Organisation> GetOrganisationByOrganisationNumber(string organisationNumber)
        {
            throw new NotImplementedException();
        }

        public Task<List<Organisation>?> SearchForOrganisationByName(string organisationName)
        {
            return BrregProxy.SearchForOrganisationByName(organisationName);
        }
    }
}
