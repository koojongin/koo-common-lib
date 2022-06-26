import {CardOption as _CardOption} from "./enums/card.enum";
import {ICard as _ICard} from "./interfaces/ICard";

declare namespace Koo {
    export type CardOption = _CardOption;

    export interface ICard extends _ICard{}
}
