// anxiety-console.component.ts 
import {Component, ViewChild} from "@angular/core";
import {possibleSymptoms} from "../../../entity/PossibleSymptoms";
import {
    AnxietyPopupComponent
} from "../anxiety-popup/anxiety-popup.component";

@Component({
    selector: 'anxiety-console',
    templateUrl: './anxiety-console.component.html',
    styleUrls: ['./anxiety-console.component.css']
})
export class AnxietyConsoleComponent {
    @ViewChild(AnxietyPopupComponent) anxietyPopup: AnxietyPopupComponent;
    constructor() {
        
    }
    public updatePopup(totalSeverity: number) {
        this.anxietyPopup.updatePopup(totalSeverity);
    }
    protected readonly possibleSymptoms = possibleSymptoms;
}
