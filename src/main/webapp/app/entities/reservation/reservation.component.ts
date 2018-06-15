import {Component, OnInit} from "@angular/core";
import {ReservationService} from "./reservation.service";
import {User} from "../../shared";
import {HttpResponse} from "@angular/common/http";
import {Reservation} from "./reservation.model";

@Component({
    selector: 'reservation',
    templateUrl: './reservation.component.html'
})
export class ReservationComponent implements OnInit {
    constructor(private reservationService: ReservationService){}

    ngOnInit(): void {
        this.reservationService.create({id: 98,
        address: 'sasdasd',
        ownerName: 'Maciek',
        price: 988
        }).subscribe(ppp=>{ppp});
    }
    //     this.reservationService.query().subscribe(test=>{
    //         console.log(test);
    //     })
    //
    //     this.reservationService.queryParam({ page: 2,
    //         size: 12,
    //         sort: null}).subscribe(
    //         (res: HttpResponse<Reservation>) =>console.log(res));
    // }

}
