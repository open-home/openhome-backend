import { IService } from "../../managers/service.interface";
import { IActionPerformer } from "../../managers/action-performer.interface";
import { IThermostatZoneThresholdPayload } from "../../models/interfaces/payload/thermostat-zone-threshold-payload.interface";
import { OpenhomeCloud } from "../openhome-cloud";
import * as io from 'socket.io-client';
import { IDeviceIsAlivePayload } from "../../models/interfaces/payload/device-is-alive-payload.interface";
const rp = require('request-promise');

export class ThermostatService implements IService {

  private socket = require('socket.io')(3002);
  private dataset;
  private zones: any;

  constructor() {

    this.socket.emit('message', this.dataset);

    this.socket.on('connect', (connected) => {

      connected.on('update', async (message) => {

        await this.getData();
        this.socket.emit('message', this.dataset);
      });

      connected.emit('message', this.dataset);
    });
  }

  public async run() {

    await this.getData();
    this.socket.emit('message', this.dataset);
  }

  private async getData() {

    const openhomeCloud = new OpenhomeCloud();

    this.zones = await openhomeCloud.getThermostats();
    this.dataset = this.zones;
  }
}

export class ThermostatZoneThreshold implements IActionPerformer {

  public async performAction(payload: IThermostatZoneThresholdPayload, company?: string) {

    const openhomeCloud = new OpenhomeCloud();
    const thermostats = await openhomeCloud.getThermostats();

    const thremostat = thermostats[payload.guid];
    const data = await this.setZoneThreshold(thremostat.endpoint, payload);

    const socket = io('http://localhost:3002');
    socket.emit('update', '');

    return data;
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

export class DeviceIsAlive implements IActionPerformer {

  public async performAction(payload: IDeviceIsAlivePayload) {

    let status = false;
    const openhomeCloud = new OpenhomeCloud();
    const devices = await openhomeCloud.getDevices();
    const device = devices[payload.guid];

    if (!device) {
      return status;
    }

    try {
      const res = await this.deviceIsAlive(device.endpoint);
      status = true;
    } catch(e) {
      status = false;
    }

    return status;
  }

  private deviceIsAlive(ip) {

    const form = {
      action: 'DEVICE_IS_ALIVE'
    };

    const options = {
      method: 'POST',
      uri: 'http://' + ip + ':8080/httpListener',
      body: JSON.stringify(form)
    };

    return rp(options);
  }
}