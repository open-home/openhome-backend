import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as timeout from 'connect-timeout';
import * as HttpListener from '../http/routes/listener';

export class HttpServer {

  public app: express.Application;
  protected port: number;

  constructor(port: number) {

    this.port = port;

    this.app = express();
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(timeout('60000'));

    // Routes
    this.app.use('/httpListener', HttpListener.httpListener);
  }

  public listen() {

    this.app.listen(this.port, (server) => {
      console.log('Server ready on port', this.port.toString());
    })
  }
}
