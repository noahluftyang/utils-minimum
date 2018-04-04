import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app';

async function init(): Promise<void> {
  console.log('enter!!', AppModule);
  try {
    await platformBrowserDynamic().bootstrapModule(AppModule);
  } catch (err) {
    console.error(err);
  }
}

init();
