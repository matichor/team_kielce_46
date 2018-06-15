package com.reservation.sport.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="sport_facilities_type")
@Data
public class SportFacilitiesType {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name="description")
    private String description;
}
