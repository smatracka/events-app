import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {

  event = {
    id: 1,
    name: 'Angular Connect',
    date: '30.10.2020',
    time: '10:00 am',
    price: 599.99,
    imageUrl: 'assets/img/angularconnect-shield.png',
    location: {
      address: 'al. Jerozolimskie 33',
      city: 'Warsaw',
      country: 'Poland'
    }
  };

}
