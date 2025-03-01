export interface Organization {
  organisasjonsnummer: string;
  navn: string;
  organisasjonsform: string;
  postadresse?: Address;
  forretningsadresse?: Address;
  registrertIMvaregisteret: boolean;
  maalform: string;
  underAvvikling: boolean;
  registrertIStiftelsesregisteret: boolean;
  konkurs: boolean;
  registrertIFrivillighetsregisteret: boolean;
  stiftelsesdato: string;
  registrertIForetaksregisteret: boolean;
  registreringsdatoEnhetsregisteret: string;
  hjemmeside?: string;
  underTvangsavviklingEllerTvangsopplosning: boolean;
  antallAnsatte?: number;
  harRegistrertAntallAnsatte: boolean;
  epostadresse?: string;
  telefon?: string;
  mobil?: string;
}

interface Address {
  kommune?: string;
  land?: string;
  postnummer?: string;
  poststed?: string;
  adresse?: string[];
  landkode?: string;
  kommunenummer?: string;
}
