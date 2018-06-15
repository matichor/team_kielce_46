package com.reservation.sport.domain;

import lombok.Data;


import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name="sport_facilities")
@Data
public class SportFacilities {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name="adress")
    private String address;

    @Column(name="owner_name")
    private String ownerName;

    @Column(name="prices")
    private BigDecimal price;

    @OneToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="sport_facilities_type_id")
    private SportFacilitiesType sportFacilitiesType;


}
