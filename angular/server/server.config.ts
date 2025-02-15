import { ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';

export const serverAppConfig: ApplicationConfig = {
    providers: [provideServerRendering()],
};
