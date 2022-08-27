BEGIN;

Drop table if exists posts, categories, post_category, comments cascade;

CREATE TABLE categories(
    id serial primary key,
    name varchar(255) not null ,
    color varchar(255) not null
) ;


CREATE TABLE posts (
    id serial primary key,
    title varchar(250) not null,
    content text not null,
    username varchar(255) not null,
    username_img text not null,
    date_time timestamp not null default CURRENT_TIMESTAMP 
);
CREATE TABLE comments (
    id serial primary key , 
    content text not null,
    username varchar(255) not null ,
    post_id int not null,
    FOREIGN KEY ( post_id) REFERENCES posts(id) on DELETE CASCADE
);

CREATE TABLE post_category(
    id serial primary key ,
    post_id int ,
    category_id int ,
    FOREIGN KEY ( post_id) REFERENCES posts(id) on DELETE CASCADE ,
    FOREIGN KEY ( category_id) REFERENCES categories(id) on DELETE CASCADE
);

COMMIT;