import { bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideZoneChangeDetection, ApplicationRef } from '@angular/core';
import { AppComponent } from '../components/app/app.component';
import { routes } from '../modules/routing/routes';

export function AppServerModule(): Promise<ApplicationRef> {
    let changeDetectionOptions: { eventCoalescing: boolean; runCoalescing: boolean } = {
        eventCoalescing: true,
        runCoalescing: true
    };
    return bootstrapApplication(AppComponent, {
        providers: [
            provideServerRendering(),
            provideRouter(routes, withComponentInputBinding()),
            provideZoneChangeDetection(changeDetectionOptions)
        ],
    });
}
