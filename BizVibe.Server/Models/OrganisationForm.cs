using System.Text.Json.Serialization;

namespace BizVibe.Server.Models
{
    public class OrganisationForm
    {
        [JsonPropertyName("kode")]
        public required string Code { get; set; }
        [JsonPropertyName("beskrivelse")]
        public required string Description { get; set; }
        [JsonPropertyName("utgaatt")]
        public bool? Expired { get; set; }
    }
}
