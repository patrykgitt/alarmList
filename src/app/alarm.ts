export class Alarm {
  constructor(
    descriptionVal: string,
    approvedVal: boolean = false,
    goingVal: boolean = true,
    archivedVal: boolean = false
  ) {
    this.description = descriptionVal;
    this.approved = approvedVal;
    this.going = goingVal;
    this.archived = archivedVal;
  }

  description: string;
  approved: boolean;
  going: boolean;
  archived: boolean;
}
