export interface OrganisationData {
  id: number;
  journalnr: string;
  regnskapstype: string;
  virksomhet: Virksomhet;
  regnskapsperiode: Regnskapsperiode;
  valuta: string;
  avviklingsregnskap: boolean;
  oppstillingsplan: string;
  revisjon: Revisjon;
  regnkapsprinsipper: Regnkapsprinsipper;
  egenkapitalGjeld: EgenkapitalGjeld;
  eiendeler: Eiendeler;
  resultatregnskapResultat: ResultatregnskapResultat;
}

export interface Virksomhet {
  organisasjonsnummer: string;
  organisasjonsform: string;
  morselskap: boolean;
}

export interface Regnskapsperiode {
  fraDato: string;
  tilDato: string;
}

export interface Revisjon {
  ikkeRevidertAarsregnskap: boolean;
  fravalgRevisjon: boolean;
}

export interface Regnkapsprinsipper {
  smaaForetak: boolean;
  regnskapsregler: string;
}

export interface EgenkapitalGjeld {
  sumEgenkapitalGjeld: number;
  egenkapital: Egenkapital;
  gjeldOversikt: GjeldOversikt;
}

export interface Egenkapital {
  sumEgenkapital: number;
  opptjentEgenkapital: OpptjentEgenkapital;
  innskuttEgenkapital: InnskuttEgenkapital;
}

export interface OpptjentEgenkapital {
  sumOpptjentEgenkapital: number;
}

export interface InnskuttEgenkapital {
  sumInnskuttEgenkaptial: number;
}

export interface GjeldOversikt {
  sumGjeld: number;
  kortsiktigGjeld: KortsiktigGjeld;
  langsiktigGjeld: LangsiktigGjeld;
}

export interface KortsiktigGjeld {
  sumKortsiktigGjeld: number;
}

export interface LangsiktigGjeld {
  sumLangsiktigGjeld: number;
}

export interface Eiendeler {
  sumEiendeler: number;
  omloepsmidler: Omloepsmidler;
  anleggsmidler: Anleggsmidler;
}

export interface Omloepsmidler {
  sumOmloepsmidler: number;
}

export interface Anleggsmidler {
  sumAnleggsmidler: number;
}

export interface ResultatregnskapResultat {
  ordinaertResultatFoerSkattekostnad: number;
  aarsresultat: number;
  totalresultat: number;
  finansresultat: Finansresultat;
  driftsresultat: Driftsresultat;
}

export interface Finansresultat {
  nettoFinans: number;
  finansinntekt: Finansinntekt;
  finanskostnad: Finanskostnad;
}

export interface Finansinntekt {
  sumFinansinntekter: number;
}

export interface Finanskostnad {
  sumFinanskostnad: number;
}

export interface Driftsresultat {
  resultat: number;
  driftsinntekter: Driftsinntekter;
  driftskostnad: Driftskostnad;
}

export interface Driftsinntekter {
  sumDriftsinntekter: number;
}

export interface Driftskostnad {
  sumDriftskostnad: number;
}
