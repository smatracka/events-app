import { Component, OnInit } from '@angular/core';
import {EventService} from '../shared/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {

  events: any[];

  constructor(private eventService: EventService) {
    this.events = this.eventService.getEvents();
  }
}
