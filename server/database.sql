-- Wanderers Database Setup
-- Run this script to create the database and table

CREATE DATABASE IF NOT EXISTS wanderers_db;
USE wanderers_db;

CREATE TABLE IF NOT EXISTS destinations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    description TEXT,
    category VARCHAR(50),
    rating DECIMAL(3, 2) DEFAULT 0.0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO destinations (name, country, description, category, rating) VALUES
('Bali', 'Indonesia', 'Tropical paradise with stunning beaches and vibrant culture', 'Beach', 4.8),
('Swiss Alps', 'Switzerland', 'Breathtaking mountain range perfect for skiing and hiking', 'Mountain', 4.9),
('Tokyo', 'Japan', 'Modern metropolis blending technology and tradition', 'City', 4.7),
('Machu Picchu', 'Peru', 'Ancient Incan citadel in the Andes Mountains', 'Historical', 5.0),
('Amazon Rainforest', 'Brazil', 'World''s largest tropical rainforest with incredible biodiversity', 'Adventure', 4.6);

SELECT * FROM destinations;
