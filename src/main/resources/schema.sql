-- Wanderers Database Schema
-- Run this script to set up the database

CREATE DATABASE IF NOT EXISTS wanderers_db;
USE wanderers_db;

CREATE TABLE IF NOT EXISTS destinations (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(100)  NOT NULL,
    country     VARCHAR(100)  NOT NULL,
    description TEXT,
    category    VARCHAR(50),   -- Beach, Mountain, City, Historical, Adventure
    rating      DOUBLE DEFAULT 0.0,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
