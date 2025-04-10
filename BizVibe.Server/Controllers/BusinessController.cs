using BizVibe.Server.Models;
using BizVibe.Server.Services.BrregService;
using Microsoft.AspNetCore.Mvc;

namespace BizVibe.Server.Controllers;

[ApiController]
[Route("business")]
public class BusinessController : ControllerBase
{
    private readonly ILogger<BusinessController> _logger;
    private readonly IBrregService _brregService;

    public BusinessController(ILogger<BusinessController> logger, IBrregService brregService)
    {
        _logger = logger;
        _brregService = brregService;
    }

    [HttpGet("GetOrganisations")]
    public async Task<Organisation[]?> GetOrganisations(string organisationName)
    {
        var units = await _brregService.SearchForOrganisationsByName(organisationName);
        return units.Embedded?.Organisations;
    }

    [HttpGet("GetOrganisationData")]
    public async Task<OrganisationData?> GetOrganisationData(string orgNum)
    {
        var orgData = await _brregService.GetOrganisationData(orgNum);
        return orgData;
    }
}
