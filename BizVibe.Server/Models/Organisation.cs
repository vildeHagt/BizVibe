using System.Text.Json.Serialization;

namespace BizVibe.Server.Models
{
    public class Organisation
    {
        [JsonPropertyName("organisasjonsnummer")]
        public required string OrganisationNumber { get; set; }
        [JsonPropertyName("navn")]
        public required string Name { get; set; }
        [JsonPropertyName("organisasjonsform")]
        public required OrganisationForm OrganisationForm { get; set; }
        [JsonPropertyName("postadresse")]
        public Address? PostalAddress { get; set; }
        [JsonPropertyName("forretningsadresse")]
        public Address? BusinessAddress { get; set; }
        [JsonPropertyName("registrertIMvaregisteret")]
        public required bool RegisteredInMvaRegister { get; set; }
        [JsonPropertyName("maalform")]
        public required string Language { get; set; }
        [JsonPropertyName("underAvvikling")]
        public required bool UnderLiquidation { get; set; }
        [JsonPropertyName("registrertIStiftelsesregisteret")]
        public required bool RegisteredInFoundationRegister { get; set; }
        [JsonPropertyName("konkurs")]
        public required bool Bankrupt { get; set; }
        [JsonPropertyName("registrertIFrivillighetsregisteret")]
        public required bool RegisteredInVoluntaryRegister { get; set; }
        [JsonPropertyName("stiftelsesdato")]
        public required string FoundationDate { get; set; }
        [JsonPropertyName("registrertIForetaksregisteret")]
        public required bool RegisteredInEnterpriseRegister { get; set; }
        [JsonPropertyName("registreringsdatoEnhetsregisteret")]
        public required string RegistrationDateUnitRegister { get; set; }
        [JsonPropertyName("hjemmeside")]
        public string? Website { get; set; }
        [JsonPropertyName("underTvangsavviklingEllerTvangsopplosning")]
        public required bool UnderCompulsoryLiquidationOrCompulsoryDissolution { get; set; }
        [JsonPropertyName("antallAnsatte")]
        public int? NumberOfEmployees { get; set; }
        [JsonPropertyName("harRegistrertAntallAnsatte")]
        public required bool HasRegisteredNumberOfEmployees { get; set; }
        [JsonPropertyName("epostadresse")]
        public string? EmailAddress { get; set; }
        [JsonPropertyName("telefon")]
        public string? PhoneNumber { get; set; }
        [JsonPropertyName("mobil")]
        public string? MobileNumber { get; set; }
    }
}
