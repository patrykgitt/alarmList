import { Alarm } from "./alarm";

export class AlarmMgnt {
    
    constructor(public listName: string, private alarms: Alarm[] = []) {
        // no statements required
    }

    get items(): readonly Alarm[]  { 
        return this.alarms;
    }

    addItem(alarm: string) {
        this.alarms.push(new Alarm(alarm));
    }
}