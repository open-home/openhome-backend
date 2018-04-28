import { Commons } from "../../utils/commons";
import { IConfig } from "../../models/interfaces/config.interface";

const rp = require('request-promise');

export class OpenhomeCloud {

  constructor() { }

  public getConfig(): IConfig {

    return this.call(Commons.openhomeCloud.endpoints.config).then((data) => {
      return JSON.parse(data);
    });
  }

  private call(endpoint: string, payload?: any) {

    const options = {
      method: 'POST',
      uri: Commons.openhomeCloud.service + endpoint
    };

    return rp(options);
  }
}