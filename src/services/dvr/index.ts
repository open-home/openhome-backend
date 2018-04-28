import { IService } from "../../managers/service.interface";
import { getConfig } from "../../utils/utils";

const rp = require('request-promise');
const btoa = require('btoa');

export class DvrService implements IService {

  private config;
  private socket = require('socket.io')(3001);
  private dataset = [];

  constructor() {

    this.socket.on('connect', (connected) => {
      connected.emit('message', this.dataset);
    });
  }

  async run(payload: any) {

    this.config = payload;
    let tempDatasetDvr = [];

    tempDatasetDvr.push(await this.getDvrCamera(0));
    tempDatasetDvr.push(await this.getDvrCamera(1));
    tempDatasetDvr.push(await this.getDvrCamera(2));
    tempDatasetDvr.push(await this.getDvrCamera(3));

    this.dataset = tempDatasetDvr;
    this.socket.emit('message', this.dataset);
  }

  private getDvrCamera(camera: number) {

    const config = getConfig();

    const credentials = btoa(config.dvr.username + ':' + config.dvr.password);
    const uri = config.dvr.address + ':' +
      config.dvr.port +
      config.dvr.endpoints.jpeg.uri +
      config.dvr.endpoints.jpeg.params.replace('@channel', camera.toString());

    const options = {
      method: 'GET',
      uri: uri,
      encoding: 'base64',
      headers: {
        'Authorization': 'Basic ' + credentials
      }
    };

    return rp(options)
      .then(function (body) {
        return body;
      })
      .catch(function (err) {
        console.log(JSON.stringify(err));
      });
  }
}