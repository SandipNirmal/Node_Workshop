CREATE TABLE IF NOT EXISTS tweets (
    id UUID PRIMARY KEY,
    user_id UUID,
    text_content VARCHAR(280),
    likes_count INT,
    created TIMESTAMP NOT NULL default NOW(),
    FOREIGN KEY (user_id) REFERENCES user_accounts (id)
)