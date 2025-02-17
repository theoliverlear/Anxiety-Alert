import 'zone.js/node';
import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express, {Request, Response, NextFunction, Express} from 'express';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { AppServerModule } from './main.server';
import {AnxietyAlertModule} from "../modules/anxiety-alert.module";
import '@angular/localize/init';

console.log('Starting SSR Server...');

async function bootstrap(): Promise<void> {
    const nestApp: INestApplication = await NestFactory.create(AnxietyAlertModule);
    let expressPort: number = 3000;
    await nestApp.listen(expressPort);
}
export function app(): express.Express {
    function serveStaticAssets() {
        server.get('*.*', express.static(execFolder, {maxAge: '1y'}));
    }

    function setupViewEngine(): {
        execFolder: string;
        indexHtml: string;
        commonEngine: CommonEngine
    } {
        const execFolder: string = join(process.cwd(), 'build');
        const indexHtml: string = existsSync(join(execFolder, 'index.original.html'))
            ? join(execFolder, 'index.original.html')
            : join(execFolder, 'index.html');
        const commonEngine = new CommonEngine();
        server.set('view engine', 'html');
        server.set('views', execFolder);
        return {execFolder, indexHtml, commonEngine};
    }

    function configureServerRendering() {
        server.get('*', async (request: Request, response: Response, next: NextFunction): Promise<void> => {
            console.log(`SSR Request: ${request.originalUrl}`);
            try {
                const html: string = await commonEngine.render({
                    bootstrap: () => AppServerModule(),
                    documentFilePath: indexHtml,
                    url: `${request.protocol}://${request.headers.host}${request.originalUrl}`,
                    publicPath: execFolder,
                    providers: [{
                        provide: APP_BASE_HREF,
                        useValue: request.baseUrl
                    }],
                });
                response.send(html);
            } catch (err) {
                console.error('SSR Error:', err);
                next(err);
            }
        });
    }
    const server: Express = express();
    const {execFolder, indexHtml, commonEngine} = setupViewEngine();
    serveStaticAssets();
    configureServerRendering();
    return server;
}

function run(): void {
    let configuredPort: string = process.env['PORT'];
    const port: string | number = configuredPort || 4000;
    const server: Express = app();
    server.listen(port, () => onServerLoad(port));
}
function onServerLoad(port: string | number): void {
    console.log(`Node SSR server running at http://localhost:${port}`);
}

declare const __non_webpack_require__: NodeRequire;
const mainModule: NodeJS.Module = __non_webpack_require__.main;
const moduleFilename: string = mainModule?.filename || '';

function initializeIfMain() {
    let isMainModule: boolean = moduleFilename === __filename;
    let iisNodeDetected: boolean = moduleFilename.includes('iisnode');
    if (isMainModule || iisNodeDetected) {
        run();
    }
}
bootstrap();
initializeIfMain();
