export class Country {
    recovered: number;
    deaths: number;
    confirmed: number;
    country: string;
    Country(country: string, confirmed: number, deaths: number, recovered: number) {
        this.country = country;
        this.confirmed = confirmed;
        this.deaths = deaths;
        this.recovered = recovered;
    }
}