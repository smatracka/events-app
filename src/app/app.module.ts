import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {EventService} from './events/shared/event.service';
import {ToastrService} from './common/toastr.service';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/error404/error404.component';
import {EventRouteActivatorService} from './events/shared/event-route-activator.service';
import {EventsListResolverService} from './events/events-list-resolver.service';
import { ProfileComponent } from './user/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    ProfileComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        RouterModule.forRoot(appRoutes)
    ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    {
      provide: 'canDeactivateCreatedEvent',
      useValue: checkDirtyState,
    },
    EventsListResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty)
    return window.confirm('Save the event!');
  return true
}
