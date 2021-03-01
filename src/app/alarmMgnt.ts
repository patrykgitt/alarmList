import { Alarm } from "./alarm";

export class TodoList {
    
    constructor(public user: string, private todoItems: Alarm[] = []) {
        // no statements required
    }

    get items(): readonly Alarm[]  { 
        return this.todoItems;
    }

    addItem(task: string) {
        this.todoItems.push(new Alarm(task));
    }
}