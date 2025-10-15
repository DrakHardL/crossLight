import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Room5Bed } from './room-5-bed/room5-bed';
import { Room5Case } from './room-5-case/room-5-case';
import { Room5Shelf } from './room-5-shelf/room5-shelf';

enum Props {
  ROOM5_CASE = "une caisse",
  ROOM5_BED = "lit pas fou",
  ROOM5_SHELF = "étagère miraculeuse",
  ROOM5_RUBBLE = "gravas",
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

  protected props = [Props.ROOM5_BED, Props.ROOM5_CASE, Props.ROOM5_SHELF];
  protected inspected_props: any;

  inspect(prop: Props) {
    switch (prop) {
      case Props.ROOM5_BED:
        this.container.clear();
        this.container.createComponent(Room5Bed);
        break;
      case Props.ROOM5_CASE:
        this.container.clear();
        this.container.createComponent(Room5Case);
        break;
      case Props.ROOM5_SHELF:
        this.container.clear();
        this.container.createComponent(Room5Shelf);
        break;
    }
  }
}
