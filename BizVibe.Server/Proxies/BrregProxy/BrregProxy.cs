using BizVibe.Server.Configs;
using BizVibe.Server.Models;

namespace BizVibe.Server.Proxies.BrregProxy
{
    public class BrregProxy(HttpClient httpClient, BrregEndpoints brregEndpoints) : IBrregProxy
    {
        private string baseUrl = brregEndpoints.BaseUrl();

        public Task<Organisation> GetOrganisationByOrganisationNumber(string organisationNumber)
        {
            throw new NotImplementedException();
        }

        public async Task<Units?> SearchForOrganisationsByName(string organisationName)
        {
            Console.WriteLine(brregEndpoints.ToString());
            var response = await httpClient.GetAsync(baseUrl + brregEndpoints.SearchForOrganisationsByName(organisationName));
            var organisations = await response.Content.ReadFromJsonAsync<Units>();
            return organisations;
        }
    }
}
