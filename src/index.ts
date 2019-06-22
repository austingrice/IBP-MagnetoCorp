import {MangeotcorpCommercialpaperApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {MangeotcorpCommercialpaperApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new MangeotcorpCommercialpaperApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
