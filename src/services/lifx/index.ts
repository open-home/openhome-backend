import * as express from 'express';
import * as bodyParser from 'body-parser';
import { ILightPayload } from "../../models/interfaces/light-payload.interface";

const lifxClient = require('node-lifx').Client;
const client = new lifxClient();
const cors = require('cors');
const app = express();
const socket = require('socket.io')(3000);
const isTest = true;
let dataset = [];

client.init();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(8080, () => {
  console.log('HTTP Server Listening on', '8080');
});

socket.on('connect', (connected) => {
  connected.emit('message', dataset);
});

app.post('/lights/power', (req, res, next) => {

  let result = { status: 'ok' };

  try {
    switch (req.body.power) {

      case 'on':
        client.light(req.body.label).on(0);
        break;

      case 'off':
        client.light(req.body.label).off(0);
        break;
    }
  } catch (err) {
    result = { status: 'error' };
  }

  res
    .status(200)
    .contentType('application/json')
    .send(result);
});

app.post('/lights/color', (req, res, next) => {

  let result = { status: 'ok' };

  try {

    client
      .light(req.body.label)
      .color(req.body.hue, req.body.saturation, req.body.brightness, req.body.kelvin, 0);
  } catch (err) {
    console.log(JSON.stringify(err));
    result = { status: 'error' };
  }

  res
    .status(200)
    .contentType('application/json')
    .send(result);
});

const getLights = async () => {

  if (isTest) {
    dataset = getTestLights();
    socket.emit('message', dataset);
    return;
  }

  const tempDataset = [];
  const lights = client.lights();

  try {

    for (let i = 0; i < lights.length; i++) {

      const payload = await getLightsInfo(lights[i]);
      tempDataset.push(payload);
    }

    // Check if datasets changed.
    if (JSON.stringify(dataset) !== JSON.stringify(tempDataset) ) {

      dataset = tempDataset;
      socket.emit('message', dataset);
    }
  } catch(err) {
    socket.emit('message', dataset);
  }
};

const getLightsInfo = (light) => {

  return new Promise((resolve, reject) => {
    light.getState((err, info) => {

      if (err) {
        return reject(err);
      }

      const lightPayload: ILightPayload = {

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
};

const getTestLights = () => {

  const light01: ILightPayload = {
    id: 'light01',
    color: { hue: 0, saturation: 1, brightness: 30, kelvin: 25000 },
    power: 'off',
    label: 'Light 01',
    port: 56789,
    address: '1.1.1.1'
  };

  const light02: ILightPayload = {
    id: 'light02',
    color: { hue: 0, saturation: 1, brightness: 30, kelvin: 25000 },
    power: 'off',
    label: 'Light 02',
    port: 56789,
    address: '1.1.1.2'
  };

  const light03: ILightPayload = {
    id: 'light03',
    color: { hue: 0, saturation: 1, brightness: 30, kelvin: 25000 },
    power: 'off',
    label: 'Light 03',
    port: 56789,
    address: '1.1.1.3'
  };

  const light04: ILightPayload = {
    id: 'light04',
    color: { hue: 0, saturation: 1, brightness: 30, kelvin: 25000 },
    power: 'off',
    label: 'Light 04',
    port: 56789,
    address: '1.1.1.4'
  };

  const light05: ILightPayload = {
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
};

setInterval(getLights, 2000);
