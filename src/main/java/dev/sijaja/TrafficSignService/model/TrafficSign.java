package dev.sijaja.TrafficSignService.model;

import dev.sijaja.TrafficSignService.model.enums.SignType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class TrafficSign {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private double latitude;
    private double longitude;
    private int heading;

    @Enumerated(EnumType.STRING)
    private SignType type;

    private String signValue;
    private int clusterSum = 1;

}
