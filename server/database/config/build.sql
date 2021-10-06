BEGIN;
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password text NOT NULL,
    username VARCHAR(55) NOT NULL,
    mobile VARCHAR(255) NOT NULL,
    avatar TEXT,
    location VARCHAR(255) NOT NULL
);
-- CREATE TABLE friendship (
--     id SERIAL PRIMARY KEY,
--     user_id INT REFERENCES users(id) ON DELETE CASCADE,
-- );

COMMIT;
