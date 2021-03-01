export class Alarm {
  constructor(
    taskVal: string,
    approvedVal: boolean = false,
    goingVal: boolean = true
  ) {
    this.task = taskVal;
    this.approved = approvedVal;
    this.going = goingVal;
  }

  task: string;
  approved: boolean;
  going: boolean;
}
