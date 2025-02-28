using BizVibe.Server.Configs;
using BizVibe.Server.Models;

namespace BizVibe.Server.Proxies.BrregProxy
{
    public class BrregProxy(HttpClient httpClient) : IBrregProxy
    {
        public BrregEndpoints _brregEndpoints = new BrregEndpoints();

        public Task<Organisation> GetOrganisationByOrganisationNumber(string organisationNumber)
        {
            throw new NotImplementedException();
        }

        public async Task<List<Organisation>?> SearchForOrganisationByName(string organisationName)
        {
            var response = await httpClient.GetAsync(_brregEndpoints.SearchForOrganisationByName(organisationName));
            var organisations = await response.Content.ReadFromJsonAsync<List<Organisation>>();
            return organisations;
        }
    }
}
