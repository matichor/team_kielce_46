import {Route} from '@angular/router';
import {ReservationComponent} from './reservation/reservation.component';

export const ENTITY_ROUTE: Route = {
    path: 'reservation',
    component: ReservationComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title'
    }
};
