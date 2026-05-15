-- Wanderers Sample Data
-- Inserted only if table is empty

INSERT INTO destinations (name, country, description, category, rating)
SELECT * FROM (SELECT
    'Bali',
    'Indonesia',
    'Tropical paradise known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.',
    'Beach',
    4.8) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM destinations LIMIT 1);

INSERT INTO destinations (name, country, description, category, rating)
SELECT * FROM (SELECT
    'Swiss Alps',
    'Switzerland',
    'Breathtaking mountain range offering skiing, hiking and stunning panoramic views.',
    'Mountain',
    4.9) AS tmp
WHERE NOT EXISTS (SELECT id FROM destinations WHERE name = 'Swiss Alps');

INSERT INTO destinations (name, country, description, category, rating)
SELECT * FROM (SELECT
    'Machu Picchu',
    'Peru',
    'Ancient Incan citadel set high in the Andes Mountains, one of the New Seven Wonders of the World.',
    'Historical',
    5.0) AS tmp
WHERE NOT EXISTS (SELECT id FROM destinations WHERE name = 'Machu Picchu');

INSERT INTO destinations (name, country, description, category, rating)
SELECT * FROM (SELECT
    'Tokyo',
    'Japan',
    'A vibrant metropolis blending ultramodern and traditional culture, famous for its food and technology.',
    'City',
    4.7) AS tmp
WHERE NOT EXISTS (SELECT id FROM destinations WHERE name = 'Tokyo');

INSERT INTO destinations (name, country, description, category, rating)
SELECT * FROM (SELECT
    'Amazon Rainforest',
    'Brazil',
    'The world''s largest tropical rainforest, teeming with biodiversity and adventure activities.',
    'Adventure',
    4.6) AS tmp
WHERE NOT EXISTS (SELECT id FROM destinations WHERE name = 'Amazon Rainforest');
