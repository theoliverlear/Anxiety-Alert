// anxiety-scale.component.ts 
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Symptom} from "../../../entity/Symptom.entity";
import {InputType} from "../ss-input/models/InputType";
import {TagType} from "../../../models/html/TagType";

@Component({
    selector: 'anxiety-scale',
    templateUrl: './anxiety-scale.component.html',
    styleUrls: ['./anxiety-scale.component.css']
})
export class AnxietyScaleComponent {
    @Input() symptom: Symptom;
    @Output() severityChange: EventEmitter<number> = new EventEmitter<number>();
    constructor() {
        
    }

    public emitSeverityChange(input: string) {
        this.severityChange.emit(Number(input));
    }
    protected readonly InputType = InputType;
    protected readonly TagType = TagType;
}
