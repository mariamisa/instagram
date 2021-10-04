BEGIN;
DROP TABLE IF EXISTS users,
notification CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password text NOT NULL,
    username VARCHAR(55) NOT NULL,
    mobile VARCHAR(255) NOT NULL,
    avatar TEXT,
    location VARCHAR(255) NOT NULL,
    role VARCHAR(55) DEFAULT 'user',
    check(role in ('user','provider'))
);

COMMIT;
