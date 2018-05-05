import { IDvr } from "./dvr.interface";
import { ILights } from "./lights.interface";
import { ILocation } from "./location.interface";
import { IOpenhome } from "./openhome.interface";
import { ITemperature } from "./temperature.interface";

export interface IConfig {

  dvr: IDvr;
  lights: ILights;
  location: ILocation;
  openhome: IOpenhome;
  temperature: ITemperature;
}