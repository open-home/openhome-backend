import { IConfig } from "../models/interfaces/config.interface";

let configState: IConfig;

export const setConfig = (config: IConfig) => {
  configState = config;
};

export const getConfig = () => {
  return configState;
};