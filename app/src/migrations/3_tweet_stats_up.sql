CREATE TABLE IF NOT EXISTS tweet_likes (
    tweet_id UUID,
    user_id UUID,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (tweet_id) REFERENCES tweets (id),
)