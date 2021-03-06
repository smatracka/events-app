import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {EventService} from './event.service';
import {Observable} from 'rxjs';

@Injectable()
export class EventRouteActivatorService implements CanActivate{

  constructor(private eventService: EventService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const eventExists = !! this.eventService.getEvent(+route.params);
    if (!eventExists)
      this.router.navigate(['/404']);
    return eventExists;
  }
}
