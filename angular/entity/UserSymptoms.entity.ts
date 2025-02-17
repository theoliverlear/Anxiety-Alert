import { Entity } from 'typeorm';
import {Symptom} from "./Symptom.entity";
import {UserSymptom} from "./UserSymptom.entity";

@Entity()
export class UserSymptoms {
    symptoms: UserSymptom[];

    constructor(symptoms: UserSymptom[] = []) {
        this.symptoms = symptoms;
    }

    isAttack(): boolean {
        let totalSeverity: number;
        for (const symptom of this.symptoms) {
            totalSeverity += symptom.severityLevel;
        }
        return totalSeverity > this.getAttackThreshold();
    }

    getAttackThreshold(): number {
        const totalScaleAmount: number = this.symptoms.length * Symptom.MAX_SEVERITY_LEVEL;
        return totalScaleAmount / 2;
    }
}