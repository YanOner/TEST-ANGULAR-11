import { Address } from "src/model/Address";

export interface Atm {
    type: string;
    functionality: string[];
    distance: number;
    address: Address;
}