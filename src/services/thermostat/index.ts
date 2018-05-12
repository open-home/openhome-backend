import { IService } from "../../managers/service.interface";
import { IActionPerformer } from "../../managers/action-performer.interface";
import { IThermostatZoneThresholdPayload } from "../../models/interfaces/payload/thermostat-zone-threshold-payload.interface";
import { OpenhomeCloud } from "../openhome-cloud";
const rp = require('request-promise');

export class ThermostatService implements IService {

  private socket = require('socket.io')(3002);
  private dataset;
  private zones: any;

  constructor() { }

  public async run() {

    const openhomeCloud = new OpenhomeCloud();

    this.zones = await openhomeCloud.getThermostats();
    this.dataset = this.zones;

    this.socket.emit('message', this.dataset);
    this.socket.on('connect', (connected) => {
      connected.emit('message', this.dataset);
    });
  }
}

export class ThermostatZoneThreshold implements IActionPerformer {

  public async performAction(payload: IThermostatZoneThresholdPayload, company?: string) {

    const openhomeCloud = new OpenhomeCloud();
    const thermostats = await openhomeCloud.getThermostats();

    const thremostat = thermostats[payload.guid];
    return await this.setZoneThreshold(thremostat.endpoint, payload);
  }

  private setZoneThreshold(ip, device) {

    const form = {
      action: 'SET_THRESHOLD',
      payload: {
        threshold: device.threshold
      }
    };

    const options = {
      method: 'POST',
      uri: 'http://' + ip + ':8080/httpListener',
      body: JSON.stringify(form)
    };

    return rp(options);
  }
}