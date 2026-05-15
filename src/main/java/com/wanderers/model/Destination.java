package com.wanderers.model;

public class Destination {

    private int id;
    private String name;
    private String country;
    private String description;
    private String category;   // e.g. Beach, Mountain, City, Historical
    private double rating;

    public Destination() {}

    public Destination(int id, String name, String country, String description, String category, double rating) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.description = description;
        this.category = category;
        this.rating = rating;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public double getRating() { return rating; }
    public void setRating(double rating) { this.rating = rating; }

    @Override
    public String toString() {
        return "Destination{id=" + id + ", name='" + name + "', country='" + country + "'}";
    }
}
