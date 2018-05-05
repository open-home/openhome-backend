import * as express from "express";
import { ResponsePayload } from "../../../models/interfaces/payload/response-payload";
import { Commons } from "../../../utils/commons";
import { RequestPayload } from "../../../models/interfaces/payload/request-payload";
import { IActionPerformer } from "../../../managers/action-performer.interface";
import { LifxLightColor, LifxLightPower } from "../../lifx";
import { Actions } from "../../../actions/actions";
import { ThermostatZoneThreshold } from "../../thermostat";

let httpListenerRouter = express.Router();

export const httpListener = httpListenerRouter.post("/", (req: express.Request, res: express.Response) => {

  const requestPayload = req.body as RequestPayload;
  let actionPerformer: IActionPerformer = null;

  switch (requestPayload.action) {

    case Actions.LIGHT_POWER: {
      actionPerformer = new LifxLightPower();
      break;
    }

    case Actions.LIGHT_COLOR: {
      actionPerformer = new LifxLightColor();
      break;
    }

    case Actions.THERMOSTAT_ZONE_THRESHOLD: {
      actionPerformer = new ThermostatZoneThreshold();
      break;
    }

    default:
      // Action not found.
      res.status(404).send();
      break;
  }

  if (actionPerformer !== null) {

    const result = actionPerformer.performAction(requestPayload.payload);

    if (result instanceof Promise) {
      result
        .then((data) => {

          const responsePayload = new ResponsePayload(data);
          res
            .status(200)
            .contentType(Commons.contentTypes.applicationJson)
            .send(responsePayload);
        })
        .catch((error) => {
          res.status(403).send();
        })
    } else {

      const responsePayload = new ResponsePayload(result);
      res
        .status(200)
        .contentType(Commons.contentTypes.applicationJson)
        .send(responsePayload);
    }
  }
});
