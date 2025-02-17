import {Entity} from "typeorm";

@Entity()
export class Symptom {
    title: string;
    baselineDescription: string;
    attackDescription: string;
    public static readonly MAX_SEVERITY_LEVEL: number = 10;
    public static readonly MIN_SEVERITY_LEVEL: number = 0;

    constructor(title: string,
                baselineDescription: string,
                attackDescription: string) {
        this.title = title;
        this.baselineDescription = baselineDescription;
        this.attackDescription = attackDescription;
    }
}