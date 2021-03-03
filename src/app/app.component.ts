import { Component } from '@angular/core';
import { Alarm } from "./alarm";
import { AlarmMgnt } from "./alarmMgnt";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private currDate = new Date();
  private list = new AlarmMgnt("Alarm", [
    new Alarm("J6 axis overspeed", this.currDate, true, true),
    new Alarm("Undervoltage error", this.currDate, true),
    new Alarm("Communication error", this.currDate, true, false, true),
  ]);  
  
  get username(): string {
    return this.list.listName;
  }

  get itemCount(): number {
    //console.log(this.items);
    //console.log(this);
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
