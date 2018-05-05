export interface ILocation {

  city: string;
  garbageDisposal: {
    company: string;
  };
  geo: {
    lat: number;
    lon: number;
  };
  nation: string;
  province: string;
  zip: string;
}