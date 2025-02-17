// anxiety-symptom.component.ts 
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Symptom} from "../../../entity/Symptom.entity";
import {TagType} from "../../../models/html/TagType";

@Component({
    selector: 'anxiety-symptom',
    templateUrl: './anxiety-symptom.component.html',
    styleUrls: ['./anxiety-symptom.component.css']
})
export class AnxietySymptomComponent {
    @Input() symptom: Symptom;
    @Output() severityChange: EventEmitter<number> = new EventEmitter<number>();
    public severityLevel = 0;
    constructor() {
        
    }
    public emitSeverityChange(severityLevel: number) {
        this.severityLevel = severityLevel;
        this.severityChange.emit(severityLevel);
    }

    protected readonly TagType = TagType;
}
