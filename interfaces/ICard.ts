import {CardOption} from "../enums/card.enum";

export interface ICard {
    name: string;
    options: CardOption[];
    tier: 'r' | 'sr' | 'ssr';
}
