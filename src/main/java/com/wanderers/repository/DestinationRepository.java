package com.wanderers.repository;

import com.wanderers.model.Destination;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Repository
public class DestinationRepository {

    private final JdbcTemplate jdbcTemplate;

    public DestinationRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // RowMapper to map ResultSet rows to Destination objects
    private static final RowMapper<Destination> DESTINATION_ROW_MAPPER = new RowMapper<>() {
        @Override
        public Destination mapRow(ResultSet rs, int rowNum) throws SQLException {
            return new Destination(
                    rs.getInt("id"),
                    rs.getString("name"),
                    rs.getString("country"),
                    rs.getString("description"),
                    rs.getString("category"),
                    rs.getDouble("rating")
            );
        }
    };

    // Get all destinations
    public List<Destination> findAll() {
        String sql = "SELECT * FROM destinations";
        return jdbcTemplate.query(sql, DESTINATION_ROW_MAPPER);
    }

    // Get destination by ID
    public Optional<Destination> findById(int id) {
        String sql = "SELECT * FROM destinations WHERE id = ?";
        List<Destination> results = jdbcTemplate.query(sql, DESTINATION_ROW_MAPPER, id);
        return results.isEmpty() ? Optional.empty() : Optional.of(results.get(0));
    }

    // Get destinations by category
    public List<Destination> findByCategory(String category) {
        String sql = "SELECT * FROM destinations WHERE category = ?";
        return jdbcTemplate.query(sql, DESTINATION_ROW_MAPPER, category);
    }

    // Create new destination
    public int save(Destination destination) {
        String sql = "INSERT INTO destinations (name, country, description, category, rating) VALUES (?, ?, ?, ?, ?)";
        return jdbcTemplate.update(sql,
                destination.getName(),
                destination.getCountry(),
                destination.getDescription(),
                destination.getCategory(),
                destination.getRating());
    }

    // Update existing destination
    public int update(int id, Destination destination) {
        String sql = "UPDATE destinations SET name=?, country=?, description=?, category=?, rating=? WHERE id=?";
        return jdbcTemplate.update(sql,
                destination.getName(),
                destination.getCountry(),
                destination.getDescription(),
                destination.getCategory(),
                destination.getRating(),
                id);
    }

    // Delete destination
    public int delete(int id) {
        String sql = "DELETE FROM destinations WHERE id = ?";
        return jdbcTemplate.update(sql, id);
    }
}
