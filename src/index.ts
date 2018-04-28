import { HttpServer } from "./services/http";
import { DvrService } from "./services/dvr";
import { LifxLightService } from "./services/lifx";
import { OpenhomeCloud } from "./services/openhome-cloud";
import { IConfig } from "./models/interfaces/config.interface";
import { getConfig, setConfig } from "./utils/utils";

const httpServer = new HttpServer(8080);
const openhomeCloud = new OpenhomeCloud();
const lifxLightService = new LifxLightService();
const dvrService = new DvrService();
let configState: IConfig;

async function init() {

  // Http Server.
  httpServer.listen();

  // Openhome Cloud configs.
  setConfig(await openhomeCloud.getConfig());

  // Services.
  setInterval(lifxLightService.run.bind(lifxLightService), 2000);
  setInterval(dvrService.run.bind(dvrService, getConfig()), 2000);
}

init();