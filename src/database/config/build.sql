BEGIN;

Drop table if exists posts, categories, post_category, comments cascade;

CREATE TABLE posts (
    id serial primary key,
    title varchar(250),
    content text not null

)




COMMIT;