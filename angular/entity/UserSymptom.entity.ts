import {Entity} from "typeorm";
import {Symptom} from "./Symptom.entity";

@Entity()
export class UserSymptom {
    symptom: Symptom;
    severityLevel: number;

    constructor(symptom: Symptom, severityLevel: number) {
        this.symptom = symptom;
        this.severityLevel = severityLevel;
    }
}