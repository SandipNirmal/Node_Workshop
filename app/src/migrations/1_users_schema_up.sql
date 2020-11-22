CREATE TABLE IF NOT EXISTS user_accounts (
      id UUID PRIMARY KEY,
      display_name VARCHAR(50),
      firstname VARCHAR(100),
      lastname VARCHAR(100),
      email VARCHAR(100) UNIQUE,
      password VARCHAR(100),
      bio text,
      created TIMESTAMP NOT NULL default NOW()
  );