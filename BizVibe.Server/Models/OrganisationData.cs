using System.Text.Json.Serialization;

namespace BizVibe.Server.Models
{
    public class OrganisationData
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("journalnr")]
        public string Journalnr { get; set; }

        [JsonPropertyName("regnskapstype")]
        public string Regnskapstype { get; set; }

        [JsonPropertyName("virksomhet")]
        public Virksomhet Virksomhet { get; set; }

        [JsonPropertyName("regnskapsperiode")]
        public Regnskapsperiode Regnskapsperiode { get; set; }

        [JsonPropertyName("valuta")]
        public string Valuta { get; set; }

        [JsonPropertyName("avviklingsregnskap")]
        public bool Avviklingsregnskap { get; set; }

        [JsonPropertyName("oppstillingsplan")]
        public string Oppstillingsplan { get; set; }

        [JsonPropertyName("revisjon")]
        public Revisjon Revisjon { get; set; }

        [JsonPropertyName("regnkapsprinsipper")]
        public Regnkapsprinsipper Regnkapsprinsipper { get; set; }

        [JsonPropertyName("egenkapitalGjeld")]
        public EgenkapitalGjeld EgenkapitalGjeld { get; set; }

        [JsonPropertyName("eiendeler")]
        public Eiendeler Eiendeler { get; set; }

        [JsonPropertyName("resultatregnskapResultat")]
        public ResultatregnskapResultat ResultatregnskapResultat { get; set; }
    }

    public class Virksomhet
    {
        [JsonPropertyName("organisasjonsnummer")]
        public string Organisasjonsnummer { get; set; }

        [JsonPropertyName("organisasjonsform")]
        public string Organisasjonsform { get; set; }

        [JsonPropertyName("morselskap")]
        public bool Morselskap { get; set; }
    }

    public class Regnskapsperiode
    {
        [JsonPropertyName("fraDato")]
        public string FraDato { get; set; }

        [JsonPropertyName("tilDato")]
        public string TilDato { get; set; }
    }

    public class Revisjon
    {
        [JsonPropertyName("ikkeRevidertAarsregnskap")]
        public bool IkkeRevidertAarsregnskap { get; set; }

        [JsonPropertyName("fravalgRevisjon")]
        public bool FravalgRevisjon { get; set; }
    }

    public class Regnkapsprinsipper
    {
        [JsonPropertyName("smaaForetak")]
        public bool SmaaForetak { get; set; }

        [JsonPropertyName("regnskapsregler")]
        public string Regnskapsregler { get; set; }
    }

    public class EgenkapitalGjeld
    {
        [JsonPropertyName("sumEgenkapitalGjeld")]
        public double SumEgenkapitalGjeld { get; set; }

        [JsonPropertyName("egenkapital")]
        public Egenkapital Egenkapital { get; set; }

        [JsonPropertyName("gjeldOversikt")]
        public GjeldOversikt GjeldOversikt { get; set; }
    }

    public class Egenkapital
    {
        [JsonPropertyName("sumEgenkapital")]
        public double SumEgenkapital { get; set; }

        [JsonPropertyName("opptjentEgenkapital")]
        public OpptjentEgenkapital OpptjentEgenkapital { get; set; }

        [JsonPropertyName("innskuttEgenkapital")]
        public InnskuttEgenkapital InnskuttEgenkapital { get; set; }
    }

    public class OpptjentEgenkapital
    {
        [JsonPropertyName("sumOpptjentEgenkapital")]
        public double SumOpptjentEgenkapital { get; set; }
    }

    public class InnskuttEgenkapital
    {
        [JsonPropertyName("sumInnskuttEgenkaptial")]
        public double SumInnskuttEgenkaptial { get; set; }
    }

    public class GjeldOversikt
    {
        [JsonPropertyName("sumGjeld")]
        public double SumGjeld { get; set; }

        [JsonPropertyName("kortsiktigGjeld")]
        public KortsiktigGjeld KortsiktigGjeld { get; set; }

        [JsonPropertyName("langsiktigGjeld")]
        public LangsiktigGjeld LangsiktigGjeld { get; set; }
    }

    public class KortsiktigGjeld
    {
        [JsonPropertyName("sumKortsiktigGjeld")]
        public double SumKortsiktigGjeld { get; set; }
    }

    public class LangsiktigGjeld
    {
        [JsonPropertyName("sumLangsiktigGjeld")]
        public double SumLangsiktigGjeld { get; set; }
    }

    public class Eiendeler
    {
        [JsonPropertyName("sumEiendeler")]
        public double SumEiendeler { get; set; }

        [JsonPropertyName("omloepsmidler")]
        public Omloepsmidler Omloepsmidler { get; set; }

        [JsonPropertyName("anleggsmidler")]
        public Anleggsmidler Anleggsmidler { get; set; }
    }

    public class Omloepsmidler
    {
        [JsonPropertyName("sumOmloepsmidler")]
        public double SumOmloepsmidler { get; set; }
    }

    public class Anleggsmidler
    {
        [JsonPropertyName("sumAnleggsmidler")]
        public double SumAnleggsmidler { get; set; }
    }

    public class ResultatregnskapResultat
    {
        [JsonPropertyName("ordinaertResultatFoerSkattekostnad")]
        public double OrdinaertResultatFoerSkattekostnad { get; set; }

        [JsonPropertyName("aarsresultat")]
        public double Aarsresultat { get; set; }

        [JsonPropertyName("totalresultat")]
        public double Totalresultat { get; set; }

        [JsonPropertyName("finansresultat")]
        public Finansresultat Finansresultat { get; set; }

        [JsonPropertyName("driftsresultat")]
        public Driftsresultat Driftsresultat { get; set; }
    }

    public class Finansresultat
    {
        [JsonPropertyName("nettoFinans")]
        public double NettoFinans { get; set; }

        [JsonPropertyName("finansinntekt")]
        public Finansinntekt Finansinntekt { get; set; }

        [JsonPropertyName("finanskostnad")]
        public Finanskostnad Finanskostnad { get; set; }
    }

    public class Finansinntekt
    {
        [JsonPropertyName("sumFinansinntekter")]
        public double SumFinansinntekter { get; set; }
    }

    public class Finanskostnad
    {
        [JsonPropertyName("sumFinanskostnad")]
        public double SumFinanskostnad { get; set; }
    }

    public class Driftsresultat
    {
        [JsonPropertyName("driftsresultat")]
        public double Resultat { get; set; }

        [JsonPropertyName("driftsinntekter")]
        public Driftsinntekter Driftsinntekter { get; set; }

        [JsonPropertyName("driftskostnad")]
        public Driftskostnad Driftskostnad { get; set; }
    }

    public class Driftsinntekter
    {
        [JsonPropertyName("sumDriftsinntekter")]
        public double SumDriftsinntekter { get; set; }
    }

    public class Driftskostnad
    {
        [JsonPropertyName("sumDriftskostnad")]
        public double SumDriftskostnad { get; set; }
    }
}
