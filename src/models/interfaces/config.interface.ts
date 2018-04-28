export interface IConfig {

  dvr: {
    address: string;
    endpoints: {
      jpeg: {
        params: string;
        uri: string;
      };
    };
    password: string;
    port: number;
    username: string
  };
  lights: {
    model: string;
  };
  location: {
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
  };
  openhome: {
    serverAddress: string;
  };
}