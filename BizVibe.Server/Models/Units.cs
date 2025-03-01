using System.Text.Json.Serialization;

namespace BizVibe.Server.Models
{
    public class Units
    {
        [JsonPropertyName("_embedded")]
        public Embedded? Embedded { get; set; }
    }

    public class Embedded
    {
        [JsonPropertyName("enheter")]
        public Organisation[] Units { get; set; }
    }
}
