DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, description, price, stock) VALUES
('Apple', 'Fresh and juicy red apples', 0.99, 150),
('Banana', 'Ripe yellow bananas', 0.59, 200),
('Orange', 'Citrus oranges rich in Vitamin C', 0.79, 180),
('Strawberry', 'Sweet and vibrant strawberries', 2.99, 100),
('Blueberry', 'Nutrient-packed blueberries', 3.49, 120),
('Grapes', 'Seedless green grapes', 2.59, 170),
('Mango', 'Tropical and flavorful mangoes', 1.49, 90),
('Pineapple', 'Juicy and tangy pineapples', 2.99, 60),
('Watermelon', 'Refreshing and sweet watermelon', 4.99, 50),
('Kiwi', 'Tangy and nutrient-rich kiwis', 0.99, 130);
