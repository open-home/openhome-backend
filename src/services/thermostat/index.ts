import { IService } from "../../managers/service.interface";
import { IThermostatZones } from "../../models/interfaces/thermostat-zones.interface";
import { getConfig } from "../../utils/utils";
import { IActionPerformer } from "../../managers/action-performer.interface";
import { IThermostatZoneThresholdPayload } from "../../models/interfaces/payload/thermostat-zone-threshold-payload.interface";

export class ThermostatService implements IService {

  private zones: IThermostatZones[];

  constructor() { }

  public run() {
    this.zones = getConfig().temperature.zones;

    for (let zone of this.zones) {

      const currentZoneTemp: number = this.getZoneTemperature(zone);
      this.actualizeZone(zone, this.checkZoneTemperature(zone, currentZoneTemp));
    }
  }

  private getZoneTemperature(zone: IThermostatZones): number {
    return 0;
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