import { IService } from "../../managers/service.interface";
import { IThermostatZones } from "../../models/interfaces/thermostat-zones.interface";
import { getConfig } from "../../utils/utils";
import { IActionPerformer } from "../../managers/action-performer.interface";
import { IThermostatZoneThresholdPayload } from "../../models/interfaces/payload/thermostat-zone-threshold-payload.interface";
import { OpenhomeCloud } from "../openhome-cloud";

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

    for (let zone in this.zones) {

      const currentZoneTemp: number = this.getZoneTemperature(this.zones[zone]);
      this.actualizeZone(this.zones[zone], this.checkZoneTemperature(this.zones[zone], currentZoneTemp));
    }
  }

  private getZoneTemperature(zone: IThermostatZones): number {
    return zone.temperature;
  }

  private checkZoneTemperature(zone: IThermostatZones, currentZoneTemp: number): boolean {
    return currentZoneTemp <= zone.threshold;
  }

  private actualizeZone(zone: IThermostatZones, actualize: boolean) {

    if (zone.active != actualize) {
      // activate
    }
  }
}

export class ThermostatZoneThreshold implements IActionPerformer {

  private zone: IThermostatZones;

  public performAction(payload: IThermostatZoneThresholdPayload, company?: string) {

    this.zone = getConfig().temperature.zones[payload.zone];
    const result = this.setZoneThreshold();

    return { success: result };
  }

  private setZoneThreshold(): string {

    // Todo.
    return 'ok';
  }
}