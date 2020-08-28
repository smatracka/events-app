import {Routes} from '@angular/router';
import { EventDetailsComponent,
  EventRouteActivatorService,
  CreateEventComponent,
  EventsListResolverService,
  EventsListComponent,
  Error404Component
} from './events/index';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreatedEvent']},
  { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolverService}},
  { path: 'events/:id', component: EventDetailsComponent},
  { path: 'events/new', component: CreateEventComponent, canActivate: [EventRouteActivatorService]},
  { path: '404', component: Error404Component},
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'user', loadChildren: './user/user.module#UserModule'}
];
