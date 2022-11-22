import { Invoice } from "../models/invoice";
export class invoice{
    static list: Invoice[] = [
        {
          idFacture: 1, montantFacture: 120, montantRemise: 10, dateFacture: "12/12/2021",
          active: true
        }, {
          idFacture: 2, montantFacture: 1020, montantRemise: 90, dateFacture: "22/11/2020"
          , active: true
        },
        {
          idFacture: 3, montantFacture: 260, montantRemise: 30, dateFacture: "18/10/2020",
          active: false
        },
        {
          idFacture: 4, montantFacture: 450, montantRemise: 40, dateFacture: "14/12/2020",
          active: true
        },
      ]
    }