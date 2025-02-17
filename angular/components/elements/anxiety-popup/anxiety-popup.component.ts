// anxiety-popup.component.ts
import {Component, Input} from "@angular/core";
import {AttackStatus} from "../../../entity/AttackStatus";
import {TagType} from "../../../models/html/TagType";

@Component({
    selector: 'anxiety-popup',
    templateUrl: './anxiety-popup.component.html',
    styleUrls: ['./anxiety-popup.component.css']
})
export class AnxietyPopupComponent {
    @Input() attackStatus: AttackStatus = AttackStatus.NOT_AN_ATTACK;
    constructor() {
        
    }
    public setAttackStatus(attackStatus: AttackStatus) {
        this.attackStatus = attackStatus;
    }
    public updatePopup(severityLevel: number) {
        if (severityLevel <= 35) {
            this.setAttackStatus(AttackStatus.NOT_AN_ATTACK);
        } else {
            this.setAttackStatus(AttackStatus.ATTACK);
        }
    }
    protected readonly TagType = TagType;
}
