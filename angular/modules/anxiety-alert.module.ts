import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AppRouting} from "./routing/app-routing.module";
import {RouterOutlet} from "@angular/router";
import {
    HttpClientModule,
    provideHttpClient,
    withFetch
} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {services} from "../services/services";
import {AppComponent} from "../components/app/app.component";
import {elements} from "../components/elements/elements";
import {directives} from "../directives/directives";
import {pages} from "../components/pages/pages";
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
    declarations: [
        AppComponent,
        ...elements,
        ...directives,
        ...pages,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRouting,
        RouterOutlet,
        NgOptimizedImage,
        NgbCarouselModule,
        HttpClientModule
    ],
    providers: [
        ...services,
        provideHttpClient(withFetch()),
    ],
    bootstrap: [AppComponent],
    exports: [],
    schemas: []
})
export class AnxietyAlertModule {
    constructor() {

    }
}