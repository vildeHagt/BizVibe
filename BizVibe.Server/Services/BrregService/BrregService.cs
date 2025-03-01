using BizVibe.Server.Models;
using BizVibe.Server.Proxies.BrregProxy;

namespace BizVibe.Server.Services.BrregService
{
    public class BrregService(IBrregProxy BrregProxy) : IBrregService
    {
        public Task<Organisation> GetOrganisationByOrganisationNumber(string organisationNumber)
        {
            throw new NotImplementedException();
        }

        public Task<List<Units>?> SearchForOrganisationsByName(string organisationName)
        {
            return BrregProxy.SearchForOrganisationsByName(organisationName);
        }
    }
}
