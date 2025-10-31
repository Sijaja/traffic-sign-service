package dev.sijaja.TrafficSignService.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import dev.sijaja.TrafficSignService.model.TrafficSign;
import dev.sijaja.TrafficSignService.service.TrafficSignService;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/signs")
@CrossOrigin(origins = "http://localhost:3000")
public class TrafficSignController {

    private final TrafficSignService service;

    @GetMapping
    public List<TrafficSign> getAll() {
        return service.getAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TrafficSign create(@RequestBody TrafficSign ts) {
        return service.save(ts);
    }

    @GetMapping("/{id}")
    public TrafficSign get(@PathVariable Long id) {
        return service.get(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Schild nicht gefunden!"));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

}
