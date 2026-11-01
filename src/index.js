import express from 'express';
import { rateLimit } from 'express-rate-limit';

import helmet from 'helmet';
import { Logger } from 'leekslazylogger';

import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const app = express();

// Config
const configPath = join(import.meta.dirname, '..', 'config.json');
if (!existsSync(configPath)) {
  throw new Error(`Couldn't find '${configPath}'`);
}
const config = JSON.parse(readFileSync(configPath, 'utf8'));

// Security headers
app.use(helmet());

// Logging
let log = console;
if (config.logging.enabled) {
  log = new Logger({ namespaces: ['http'] });

  app.use((req, res, next) => {
    const start = performance.now();
    res.on('finish', () => {
      const ms = (performance.now() - start).toFixed(2);
      log.info.http(`${res.statusCode} ${req.method} ${req.originalUrl} (${ms} ms)`);
    });

    next();
  });
}

// Ratelimiting
if (config.ratelimit.enabled) {
  app.use(rateLimit({
    windowMs: config.ratelimit.time,
    limit: config.ratelimit.maxRequests,
    standardHeaders: 'draft-8',
    legacyHeaders: false
  }));
}

// Hook up all the routers
const routersDir = join(import.meta.dirname, 'routers');
if (!existsSync(routersDir)) {
  throw new Error(`Couldn't find '${routersDir}'`);
}

for (const file of readdirSync(routersDir).filter((f) => f.endsWith('.js')).sort()) {
  const { default: router } = await import(pathToFileURL(join(routersDir, file)));
  app.use(router);
}

// Hook up the static folder (if enabled)
if (config.static.enabled) {
  app.use(express.static(join(import.meta.dirname, config.static.directory)));
}

// Listen on port and notify when it is up
app.listen(config.port, () => log.info(`Express server started on port ${config.port}`));
