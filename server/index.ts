// use isomorphic-fetch explicitly instead of default browser/server fetch
import 'isomorphic-fetch';

// import all requirements
import * as express from 'express';
import * as helmet from 'helmet';
import * as next from 'next';
import * as path from 'path';

import env from './env';

/**
 * Load env configuration
 */
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const { PRODUCTION_URL_APP } = env;
const ROOT_URL = dev ? `http://localhost:${port}` : PRODUCTION_URL_APP;

/**
 * Loads next app and request handler
 */
const app = next({ dev });
const handle = app.getRequestHandler();

/**
 * Creates server when app is prepared
 */
app.prepare().then(() => {
  // create express server
  const server = express();

  // all '/_next/' requests will be served directly
  server.get('/_next/*', (req, res) => {
    handle(req, res);
  });

  // all '/static/' requests will be served directly
  server.get('/static/*', (req, res) => {
    handle(req, res);
  });

  // use helmet security & protection extension
  server.use(helmet());
  // use express json
  server.use(express.json());

  // trust to proxy only when app is in production mode
  if (!dev) {
    server.set('trust proxy', 1);
  }

  // serve robots.txt directly
  server.get('/robots.txt', (_, res) => {
    res.sendFile(path.join(__dirname, '../../static', 'robots.txt'));
  });

  // handle all other request by internal rules
  server.get('*', (req, res) => {
    handle(req, res);
  });

  // start express server to listen on specific port
  server.listen(port, (err: Error) => {
    if (err) throw err;
    console.log(`> Ready on ${ROOT_URL}`);
  });
});
