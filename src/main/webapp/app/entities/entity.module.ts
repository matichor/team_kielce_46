import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {RouterModule} from "@angular/router";
import {ENTITY_ROUTE} from "./entity.route";
import {ReservationComponent} from "./reservation/reservation.component";
import {ReservationService} from "./reservation/reservation.service";

/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
        RouterModule.forRoot([ENTITY_ROUTE])
    ],
    declarations: [ReservationComponent],
    entryComponents: [],
    providers: [ReservationService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReservationSportEntityModule {}
