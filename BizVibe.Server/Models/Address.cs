using System.Text.Json.Serialization;

namespace BizVibe.Server.Models
{
    public class Address
    {
        [JsonPropertyName("kommune")]
        public string? Municipality { get; set; }
        [JsonPropertyName("land")]
        public string? Country { get; set; }
        [JsonPropertyName("postnummer")]
        public string? PostalCode { get; set; }
        [JsonPropertyName("poststed")]
        public string? PostalPlace { get; set; }
        [JsonPropertyName("adresse")]
        public string[]? StreetAddress { get; set; }
        [JsonPropertyName("landkode")]
        public string? CountryCode { get; set; }
        [JsonPropertyName("kommunenummer")]
        public string? MunicipalityNumber { get; set; }
    }
}
