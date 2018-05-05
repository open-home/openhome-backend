export interface IDvr {

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
}