import { Component, OnInit } from '@angular/core';
import {EventService} from '../shared/event.service';
import {ToastrService} from '../../common/toastr.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: any[];

  constructor(private eventService: EventService, private toastrService: ToastrService, private route: ActivatedRoute) {

  }
   ngOnInit(){
    this.events = this.route.snapshot.data['events']
     // this.events = this.eventService.getEvents().subscribe(events => {this.events = events});
   }

  handleThumbnailClick(eventName: any) {
    this.toastrService.success(eventName);
  }
}
