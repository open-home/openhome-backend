import { Commons } from "../../utils/commons";
import { IConfig } from "../../models/interfaces/config.interface";
import { IThermostatZones } from "../../models/interfaces/thermostat-zones.interface";
import { ITemperature } from "../../models/interfaces/temperature.interface";

const rp = require('request-promise');

export class OpenhomeCloud {

  constructor() { }

  public getConfig(): IConfig {

    return this.call(Commons.openhomeCloud.endpoints.config).then((data) => {
      return JSON.parse(data);
    });
  }

  public getThermostats(): any {

    return this.call(Commons.openhomeCloud.endpoints.thermostat).then((data) => {
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