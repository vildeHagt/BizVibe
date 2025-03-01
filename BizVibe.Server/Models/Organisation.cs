using System.Text.Json.Serialization;

namespace BizVibe.Server.Models
{
    public class Organisation
    {
        [JsonPropertyName("organisasjonsnummer")]
        public string? OrganisationNumber { get; set; }
        [JsonPropertyName("navn")]
        public string? Name { get; set; }
        [JsonPropertyName("organisasjonsform")]
        public required OrganisationForm OrganisationForm { get; set; }
        [JsonPropertyName("postadresse")]
        public Address? PostalAddress { get; set; }
        [JsonPropertyName("forretningsadresse")]
        public Address? BusinessAddress { get; set; }
        [JsonPropertyName("registrertIMvaregisteret")]
        public bool? RegisteredInMvaRegister { get; set; }
        [JsonPropertyName("maalform")]
        public string? Language { get; set; }
        [JsonPropertyName("underAvvikling")]
        public bool? UnderLiquidation { get; set; }
        [JsonPropertyName("registrertIStiftelsesregisteret")]
        public bool? RegisteredInFoundationRegister { get; set; }
        [JsonPropertyName("konkurs")]
        public bool? Bankrupt { get; set; }
        [JsonPropertyName("registrertIFrivillighetsregisteret")]
        public bool? RegisteredInVoluntaryRegister { get; set; }
        [JsonPropertyName("stiftelsesdato")]
        public string? FoundationDate { get; set; }
        [JsonPropertyName("registrertIForetaksregisteret")]
        public bool? RegisteredInEnterpriseRegister { get; set; }
        [JsonPropertyName("registreringsdatoEnhetsregisteret")]
        public string?   RegistrationDateUnitRegister { get; set; }
        [JsonPropertyName("hjemmeside")]
        public string? Website { get; set; }
        [JsonPropertyName("underTvangsavviklingEllerTvangsopplosning")]
        public bool? UnderCompulsoryLiquidationOrCompulsoryDissolution { get; set; }
        [JsonPropertyName("antallAnsatte")]
        public int? NumberOfEmployees { get; set; }
        [JsonPropertyName("harRegistrertAntallAnsatte")]
        public bool? HasRegisteredNumberOfEmployees { get; set; }
        [JsonPropertyName("epostadresse")]
        public string? EmailAddress { get; set; }
        [JsonPropertyName("telefon")]
        public string? PhoneNumber { get; set; }
        [JsonPropertyName("mobil")]
        public string? MobileNumber { get; set; }
    }
}
