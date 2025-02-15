import {Component, Inject, OnInit, PLATFORM_ID} from "@angular/core";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, map, mergeMap} from "rxjs";
import {isPlatformBrowser} from "@angular/common";

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string;
    constructor(private router: Router, private activatedRoot: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: object) {
        if (isPlatformBrowser(this.platformId)) {
            // ✅ This only runs in the browser, avoiding SSR errors
            this.activatedRoot.params.subscribe(params => {
                console.log('Route params:', params);
            });
        }
    }
    ngOnInit() {
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd),
            map(() => this.activatedRoot),
            map((route) => {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }),
            mergeMap((route) => route.data)
        ).subscribe((data) => {
            const metaInfo = data['meta'] || {};
            this.title = metaInfo['title'] || 'Anxiety Alert';
        });
    }
}