export interface Address {
    street: string;
    housenumber: string;
    postalcode: string;
    city: string;
    geoLocation: Map<string, number>;
}