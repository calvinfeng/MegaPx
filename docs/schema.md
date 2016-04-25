# Database Tables

## Users

column name     | data type  | details
----------------|------------|-----------------------
id              | integer    | not null, primary key
first_name      | string     | not null
last_name       | string     | not null
username        | string     | not null
password_digest | string     | not null
session_token   | string     | not null

## Photos

column name  | data type  | details
-------------|------------|---------------------
id           | integer    | not null, primary key
author_id    | integer    | not null, foreign key
lat          | float      | not null
lng          | float      | not null
url          | string     | not null
description  | text       | optional


## Comments
column name  | data type  | details
-------------|------------|---------------------
id           | integer    | not null, primary key
author_id    | integer    | not null, foreign key
photo_id     | integer    | not null, foreign key
content      | text       | not null

# Extra
** Search function **
## Tags
column name  | data type  | details
-------------|------------|---------------------
id           | integer    | not null, primary key
name         | string     | not null

## Taggings - join table
column name  | data type  | details
-------------|------------|---------------------
id           | integer    | not null, primary key
photo_id     | integer    | not null, foreign key
tag_id       | integer    | not null, foreign key
