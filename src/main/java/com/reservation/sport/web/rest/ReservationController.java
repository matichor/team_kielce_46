package com.reservation.sport.web.rest;

import com.reservation.sport.domain.SportFacilities;
import com.reservation.sport.repository.SportFacilitiesRepositiory;
import jdk.nashorn.internal.objects.annotations.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ReservationController {

    @Autowired
    private SportFacilitiesRepositiory sportFacilitiesRepositiory;

    @GetMapping("/sportfacilities")
    public SportFacilities getSportFacilities() {
        return sportFacilitiesRepositiory.findOne(1L);
    }

    @GetMapping("/spparam")
    public SportFacilities getIt(Pageable pageable){
        return null;
    }

    @PostMapping("/hit")
    public void createSportFacilities(@RequestBody SportFacilities sportFacilities){
        sportFacilities.getOwnerName();
    }


}
