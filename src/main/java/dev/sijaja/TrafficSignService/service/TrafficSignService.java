package dev.sijaja.TrafficSignService.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dev.sijaja.TrafficSignService.model.TrafficSign;
import dev.sijaja.TrafficSignService.repository.TrafficSignRepository;
import lombok.AllArgsConstructor;

@Transactional
@AllArgsConstructor
@Service
public class TrafficSignService {
    private static final double CLUSTER_RADIUS_METERS = 20.0;
    private final TrafficSignRepository repo;

    public List<TrafficSign> getAll() {
        return repo.findAll();
    }

    public Optional<TrafficSign> get(Long id) {
        return repo.findById(id);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    public TrafficSign save(TrafficSign trafficSign) {
        List<TrafficSign> existing = repo.findAll();

        for (TrafficSign cluster : existing) {
            if (cluster.getType() == trafficSign.getType()
                    && trafficSign.getSignValue().equalsIgnoreCase(cluster.getSignValue())) {
                double distance = calculateDistance(
                        cluster.getLatitude(), cluster.getLongitude(),
                        trafficSign.getLatitude(), trafficSign.getLongitude());
                if (distance < CLUSTER_RADIUS_METERS) {
                    cluster.setLatitude((cluster.getLatitude() + trafficSign.getLatitude()) / 2);
                    cluster.setLongitude((cluster.getLongitude() + trafficSign.getLongitude()) / 2);
                    cluster.setClusterSum(cluster.getClusterSum() + 1);
                    return repo.save(cluster);
                }
            }
        }
        return repo.save(trafficSign);
    }

    private static final double EARTH_RADIUS = 6371000; // meters

    private double calculateDistance(double lat1, double lon1, double lat2, double lon2) {
        double latDistance = Math.toRadians(lat2 - lat1);
        double lonDistance = Math.toRadians(lon2 - lon1);

        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2))
                        * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return EARTH_RADIUS * c;
    }
}
