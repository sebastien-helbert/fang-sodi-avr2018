
export enum Sexe {
  HOMME = 'Homme', FEMME = 'Femme'
}
export class Personne {
  constructor(public nom: string, public prenom: string, public date_naissance?: Date, public sexe?: Sexe) {}
}
