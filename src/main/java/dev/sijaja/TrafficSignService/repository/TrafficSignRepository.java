package dev.sijaja.TrafficSignService.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.sijaja.TrafficSignService.model.TrafficSign;

public interface TrafficSignRepository extends JpaRepository<TrafficSign, Long> {

}
