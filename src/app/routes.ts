import {EventsListComponent} from './events/events-list/events-list.component';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {Routes} from '@angular/router';
import {CreateEventComponent} from './events/create-event/create-event.component';
import {Error404Component} from './errors/error404/error404.component';
import {EventRouteActivatorService} from './events/shared/event-route-activator.service';
import {EventsListResolverService} from './events/events-list-resolver.service';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreatedEvent']},
  { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolverService}},
  { path: 'events/:id', component: EventDetailsComponent},
  { path: 'events/new', component: CreateEventComponent, canActivate: [EventRouteActivatorService]},
  { path: '404', component: Error404Component},
  { path: '', redirectTo: '/events', pathMatch: 'full'}
];
