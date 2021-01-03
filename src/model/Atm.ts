import { Address } from "cluster";

export interface Atm {
    type: string;
    functionality: string[];
    distance: number;
    address: Address;
}