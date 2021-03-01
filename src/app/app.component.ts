import { Component } from '@angular/core';
import { Alarm } from "./alarm";
import { AlarmMgnt } from "./alarmMgnt";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new AlarmMgnt("Alarm", [
    new Alarm("J6 axis overspeed", true, true),
    new Alarm("Undervoltage error", true),
    new Alarm("Communication error", true, false, true),
  ]);  
  
  get username(): string {
    return this.list.listName;
  }

  get itemCount(): number {
    return this.items.length;
  }

  get items(): readonly Alarm[] {
    return this.list.items.filter(item => this.showArchived || !item.archived);
  }

  addItem(newItem) {
    if (newItem != "") {
        this.list.addItem(newItem);
    }
  }

  showArchived: boolean = false;
}
