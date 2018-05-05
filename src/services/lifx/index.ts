import { ILifxLightPayload } from "../../models/interfaces/payload/lifx-light-payload.interface";
import { IActionPerformer } from "../../managers/action-performer.interface";
import { ILifxLightPower } from "../../models/interfaces/payload/lifx-light-power-payload.interface";
import { ILifxLightColor } from "../../models/interfaces/payload/lifx-light-color-payload.interface";
import { IService } from "../../managers/service.interface";

const lifxClient = require('node-lifx').Client;
const client = new lifxClient();

client.init();

export class LifxLightService implements IService {

  private lifxClient;
  private socket = require('socket.io')(3000);
  private dataset = [];
  private isTest = false;

  constructor() {

    this.lifxClient = require('node-lifx').Client;

    this.socket.on('connect', (connected) => {
      connected.emit('message', this.dataset);
    });
  }

  async run() {

    if (this.isTest) {
      this.dataset = this.getTestLights();
      this.socket.emit('message', this.dataset);
      return;
    }

    const tempDataset = [];
    const lights = client.lights();

    try {

      for (let i = 0; i < lights.length; i++) {

        const payload = await this.getLightsInfo(lights[i]);
        tempDataset.push(payload);
      }

      // Check if datasets changed.
      if (JSON.stringify(this.dataset) !== JSON.stringify(tempDataset) ) {

        this.dataset = tempDataset;
        this.socket.emit('message', this.dataset);
      }
    } catch(err) {
      this.socket.emit('message', this.dataset);
    }
  }

  private getLightsInfo(light) {

    return new Promise((resolve, reject) => {
      light.getState((err, info) => {

        if (err) {
          return reject(err);
        }

        const lightPayload: ILifxLightPayload = {

          id: light.id,
          address: light.address,
          port: light.port,
          label: info.label,
          power: (info.power === 1) ? 'on' : 'off',
          color: info.color
        };

        return resolve(lightPayload)
      });
    });
  }

  private getTestLights() {

    const light01: ILifxLightPayload = {
      id: 'light01',
      color: { hue: 0, saturation: 1, brightness: 30, kelvin: 25000 },
      power: 'off',
      label: 'Light 01',
      port: 56789,
      address: '1.1.1.1'
    };

    const light02: ILifxLightPayload = {
      id: 'light02',
      color: { hue: 0, saturation: 1, brightness: 30, kelvin: 25000 },
      power: 'off',
      label: 'Light 02',
      port: 56789,
      address: '1.1.1.2'
    };

    const light03: ILifxLightPayload = {
      id: 'light03',
      color: { hue: 0, saturation: 1, brightness: 30, kelvin: 25000 },
      power: 'off',
      label: 'Light 03',
      port: 56789,
      address: '1.1.1.3'
    };

    const light04: ILifxLightPayload = {
      id: 'light04',
      color: { hue: 0, saturation: 1, brightness: 30, kelvin: 25000 },
      power: 'off',
      label: 'Light 04',
      port: 56789,
      address: '1.1.1.4'
    };

    const light05: ILifxLightPayload = {
      id: 'light05',
      color: { hue: 0, saturation: 1, brightness: 30, kelvin: 25000 },
      power: 'off',
      label: 'Light 05',
      port: 56789,
      address: '1.1.1.5'
    };

    const array = [];

    array.push(light01);
    array.push(light02);
    array.push(light03);
    array.push(light04);
    array.push(light05);

    return array;
  }
}

export class LifxLightPower implements IActionPerformer {

  performAction(payload: ILifxLightPower, company?: string): any {

    let result = { status: 'ok' };

    try {
      switch (payload.power) {

        case 'on':
          client.light(payload.label).on(0);
          break;

        case 'off':
          client.light(payload.label).off(0);
          break;
      }
    } catch (err) {
      result = { status: 'error' };
    }

    return result;
  }
}

export class LifxLightColor implements IActionPerformer {

  performAction(payload: ILifxLightColor, company?: string): any {

    let result = { status: 'ok' };

    try {

      client
        .light(payload.label)
        .color(payload.hue, payload.saturation, payload.brightness, payload.kelvin, 0);
    } catch (err) {
      console.log(JSON.stringify(err));
      result = { status: 'error' };
    }

    return result;
  }
}