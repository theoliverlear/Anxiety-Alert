// carousel.component.ts 
import {
    Component, EventEmitter,
    Input, Output, ViewChildren,
} from "@angular/core";
import {ImageAsset} from "../../../assets/imageAssets";
import {Symptom} from "../../../entity/Symptom.entity";
import {possibleSymptoms} from "../../../entity/PossibleSymptoms";
import {
    AnxietySymptomComponent
} from "../anxiety-symptom/anxiety-symptom.component";

@Component({
    selector: 'anxiety-carousel',
    templateUrl: './anxiety-carousel.component.html',
    styleUrls: ['./anxiety-carousel.component.css']
})
export class AnxietyCarouselComponent {
    @ViewChildren(AnxietySymptomComponent) anxietySymptoms: AnxietySymptomComponent[];
    @Output() totalSeverityChange: EventEmitter<number> = new EventEmitter<number>();
    constructor() {
        
    }

    public emitTotalSeverity() {
        this.totalSeverityChange.emit(this.getTotalSeverity());
    }

    public getTotalSeverity(): number {
        let totalSeverity: number = 0;
        for (let anxietySymptom of this.anxietySymptoms) {
            totalSeverity += anxietySymptom.severityLevel;
        }
        return totalSeverity;
    }
    protected readonly possibleSymptoms = possibleSymptoms;
}
