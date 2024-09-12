DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    quantity_per_unit VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO products (name, description, price, stock, quantity_per_unit) VALUES
('Apple', 'Fresh and juicy red apples', 0.99, 150, 'each'),
('Banana', 'Ripe yellow bananas', 0.59, 200, '1 bunch'),
('Orange', 'Citrus oranges rich in Vitamin C', 0.79, 180, 'each'),
('Strawberry', 'Sweet and vibrant strawberries', 2.99, 100, '250 g pack'),
('Blueberry', 'Nutrient-packed blueberries', 3.49, 120, '250 g pack'),
('Grapes', 'Seedless green grapes', 2.59, 170, '500 g pack'),
('Mango', 'Tropical and flavorful mangoes', 1.49, 90, 'each'),
('Pineapple', 'Juicy and tangy pineapples', 2.99, 60, 'each'),
('Watermelon', 'Refreshing and sweet watermelon', 4.99, 50, 'each'),
('Kiwi', 'Tangy and nutrient-rich kiwis', 0.99, 130, 'each'),
('Fruit Box', 'Collection of seasonal fruits', 64.99, 1000, 'per box'),
('Pear', 'Crisp and refreshing pears', 1.29, 160, '1 kg'),
('Peach', 'Sweet and juicy peaches', 2.49, 140, '1 kg'),
('Plum', 'Ripe and succulent plums', 1.89, 110, '1 kg'),
('Avocado', 'Creamy and nutrient-dense avocados', 1.99, 80, 'each'),
('Cantaloupe', 'Mildly sweet and hydrating cantaloupe', 3.99, 40, 'each'),
('Papaya', 'Exotic and flavorful papayas', 2.49, 70, 'each'),
('Pomegranate', 'Juicy and antioxidant-rich pomegranates', 3.99, 50, 'each'),
('Coconut', 'Nutritious and hydrating coconuts', 4.49, 30, 'each'),
('Dragon Fruit', 'Exotic and vibrant dragon fruit', 5.99, 20, 'each'),
('Raspberry', 'Delicious and antioxidant-rich raspberries', 4.49, 60, '250 g pack');
