import {Symptom} from "./Symptom.entity";


const tightChestSymptom = new Symptom("Tight Chest", "Chest feels normal.", "Chest feels tight.");
const notMakingSense = new Symptom("Not Making Sense",
    "Thoughts are clearly communicated, no confusion.",
    "Thoughts are jumbled, not making sense, confused.");
const headSensationsSymptom = new Symptom("Head Sensations", "Clear, not heavy.", "Headache, feels full.");
const blankMindSymptom = new Symptom("Blank Mind", "Normal flow of thoughts.", "Mind is blank, nothing there.");
const thoughtsSymptom = new Symptom("Thoughts",
    "No negative, depressive thoughts. Able to think about things going on.",
    "Rapid, stressful thoughts. Negative self-talk. Low self-esteem.");
const bodySensationsSymptom = new Symptom("Body Sensations", "Awake and aware.", "Tired, exhausted, numb.");
const feelingsSymptom = new Symptom("Feelings", "Happy, calm, content.", "Sadness, anger, frustration, hopelessness");
const behaviorsSymptom = new Symptom("Behaviors",
    "Not avoidant of activities. No urge to isolate. No negative self talk.",
    "Lazy, anhedonia, negative self-talk, avoidance, attention span decreased.");
const possibleSymptoms: Symptom[] = [
    tightChestSymptom,
    notMakingSense,
    headSensationsSymptom,
    blankMindSymptom,
    thoughtsSymptom,
    bodySensationsSymptom,
    feelingsSymptom,
    behaviorsSymptom
];
export {
    possibleSymptoms,
    notMakingSense,
    tightChestSymptom,
    headSensationsSymptom,
    blankMindSymptom,
    thoughtsSymptom,
    bodySensationsSymptom,
    feelingsSymptom,
    behaviorsSymptom
}
