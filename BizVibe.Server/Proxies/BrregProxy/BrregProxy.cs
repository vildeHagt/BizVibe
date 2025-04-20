using BizVibe.Server.Configs;
using BizVibe.Server.Models;
using System.Text.Json;
using System.Text.Json.Serialization;

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

        public async Task<OrganisationData?> GetOrganisationData(string orgNum)
        {
            var response = await httpClient.GetAsync(baseUrl + brregEndpoints.AccountingEndpoint(orgNum));
            var jsonResponse = await response.Content.ReadAsStringAsync();
            Console.WriteLine("Raw JSON Response: " + jsonResponse);

            if (!response.IsSuccessStatusCode)
            {
                Console.WriteLine($"Error fetching data: {response.StatusCode}");
                return new OrganisationData();
            }

            var organisationData = JsonSerializer.Deserialize<List<OrganisationData>>(jsonResponse);
            return organisationData[0];
        }
    }
}
