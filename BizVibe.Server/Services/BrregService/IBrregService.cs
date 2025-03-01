using BizVibe.Server.Models;

namespace BizVibe.Server.Services.BrregService
{
    public interface IBrregService
    {
        public Task<Organisation> GetOrganisationByOrganisationNumber(string organisationNumber);
        public Task<Units?> SearchForOrganisationsByName(string organisationName);
    }
}
