import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Room5Bed } from './room-5-bed/room5-bed';
import { Room5Case } from './room-5-case/room-5-case';
import { Room5Shelf } from './room-5-shelf/room5-shelf';
import { Room5Rubble } from './room5-rubble/room5-rubble';

enum Props {
  ROOM5_CASE = "la vielle caisse en bois",
  ROOM5_BED = "le lit de camp",
  ROOM5_SHELF = "l'étagère bancale",
  ROOM5_RUBBLE = "l'amoncellement de gravats",
};

@Component({
  selector: 'app-room-5',
  imports: [],
  templateUrl: './room-5.html',
  styleUrl: './room-5.css'
})
export class Room5 {
  @ViewChild('inspected_props_element', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  protected props = [Props.ROOM5_BED, Props.ROOM5_CASE, Props.ROOM5_SHELF, Props.ROOM5_RUBBLE];
  protected inspected_props: any;

  inspect(prop: Props) {
    this.container.clear();
    switch (prop) {
      case Props.ROOM5_BED:
        this.container.createComponent(Room5Bed);
        break;
      case Props.ROOM5_CASE:
        this.container.createComponent(Room5Case);
        break;
      case Props.ROOM5_SHELF:
        this.container.createComponent(Room5Shelf);
        break;
      case Props.ROOM5_RUBBLE:
        this.container.createComponent(Room5Rubble);
        break;
    }
  }
}
