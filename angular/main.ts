import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AnxietyAlertModule} from "./modules/anxiety-alert.module";

console.log('main.ts loaded');

platformBrowserDynamic().bootstrapModule(AnxietyAlertModule)
    .catch(error => console.error(error));