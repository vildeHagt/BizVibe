using BizVibe.Server.Models;
using BizVibe.Server.Services.BrregService;
using Microsoft.AspNetCore.Mvc;

namespace BizVibe.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class BusinessController : ControllerBase
{
    private readonly ILogger<BusinessController> _logger;
    private readonly IBrregService _brregService;

    public BusinessController(ILogger<BusinessController> logger, IBrregService brregService)
    {
        _logger = logger;
        _brregService = brregService;
    }

    [HttpGet(Name = "GetOrganisations")]
    public async Task<List<Organisation>?> Get(string organisationName)
    {
        var organisations = await _brregService.SearchForOrganisationByName(organisationName);
        _logger.LogInformation($"Found {organisations?.Count} organisations with the name {organisationName}");
        return organisations;
    }
}
