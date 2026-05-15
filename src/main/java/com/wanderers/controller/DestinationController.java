package com.wanderers.controller;

import com.wanderers.model.Destination;
import com.wanderers.service.DestinationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/destinations")
@CrossOrigin(origins = "*")
public class DestinationController {

    private final DestinationService destinationService;

    public DestinationController(DestinationService destinationService) {
        this.destinationService = destinationService;
    }

    // GET all destinations
    // http://localhost:8080/api/destinations
    @GetMapping
    public ResponseEntity<List<Destination>> getAllDestinations() {
        List<Destination> destinations = destinationService.getAllDestinations();
        return ResponseEntity.ok(destinations);
    }

    // GET destination by ID
    // http://localhost:8080/api/destinations/1
    @GetMapping("/{id}")
    public ResponseEntity<?> getDestinationById(@PathVariable int id) {
        Optional<Destination> destination = destinationService.getDestinationById(id);
        if (destination.isPresent()) {
            return ResponseEntity.ok(destination.get());
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body("Destination not found with ID: " + id);
    }

    // GET destinations by category
    // http://localhost:8080/api/destinations/category/Beach
    @GetMapping("/category/{category}")
    public ResponseEntity<List<Destination>> getByCategory(@PathVariable String category) {
        List<Destination> destinations = destinationService.getDestinationsByCategory(category);
        return ResponseEntity.ok(destinations);
    }

    // POST - Add new destination
    // http://localhost:8080/api/destinations
    @PostMapping
    public ResponseEntity<String> addDestination(@RequestBody Destination destination) {
        String message = destinationService.addDestination(destination);
        return ResponseEntity.status(HttpStatus.CREATED).body(message);
    }

    // PUT - Update destination
    // http://localhost:8080/api/destinations/1
    @PutMapping("/{id}")
    public ResponseEntity<String> updateDestination(@PathVariable int id,
                                                     @RequestBody Destination destination) {
        String message = destinationService.updateDestination(id, destination);
        if (message.contains("not found")) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(message);
        }
        return ResponseEntity.ok(message);
    }

    // DELETE - Remove destination
    // http://localhost:8080/api/destinations/1
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteDestination(@PathVariable int id) {
        String message = destinationService.deleteDestination(id);
        if (message.contains("not found")) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(message);
        }
        return ResponseEntity.ok(message);
    }
}
