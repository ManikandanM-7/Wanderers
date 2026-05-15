package com.wanderers.service;

import com.wanderers.model.Destination;
import com.wanderers.repository.DestinationRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DestinationService {

    private final DestinationRepository destinationRepository;

    public DestinationService(DestinationRepository destinationRepository) {
        this.destinationRepository = destinationRepository;
    }

    public List<Destination> getAllDestinations() {
        return destinationRepository.findAll();
    }

    public Optional<Destination> getDestinationById(int id) {
        return destinationRepository.findById(id);
    }

    public List<Destination> getDestinationsByCategory(String category) {
        return destinationRepository.findByCategory(category);
    }

    public String addDestination(Destination destination) {
        int rows = destinationRepository.save(destination);
        return rows > 0 ? "Destination added successfully." : "Failed to add destination.";
    }

    public String updateDestination(int id, Destination destination) {
        Optional<Destination> existing = destinationRepository.findById(id);
        if (existing.isEmpty()) {
            return "Destination not found with ID: " + id;
        }
        int rows = destinationRepository.update(id, destination);
        return rows > 0 ? "Destination updated successfully." : "Failed to update destination.";
    }

    public String deleteDestination(int id) {
        Optional<Destination> existing = destinationRepository.findById(id);
        if (existing.isEmpty()) {
            return "Destination not found with ID: " + id;
        }
        int rows = destinationRepository.delete(id);
        return rows > 0 ? "Destination deleted successfully." : "Failed to delete destination.";
    }
}
