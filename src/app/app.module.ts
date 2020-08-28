import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsListComponent,
        EventsListResolverService,
        EventService,
        CreateEventComponent,
        EventRouteActivatorService,
        EventDetailsComponent
} from './events/index';

import { AppComponent } from './app.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {ToastrService} from './common/toastr.service';
import { Error404Component } from './errors/error404/error404.component';
import {UserModule} from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
    imports: [
        BrowserModule,
        NgbModule,
        RouterModule.forRoot(appRoutes),
        UserModule
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
