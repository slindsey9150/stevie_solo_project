-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE Characters (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  level INTEGER NOT NULL,
  charisma INTEGER NOT NULL,
  constitution INTEGER NOT NULL,
  strength INTEGER NOT NULL,
  dexterity INTEGER NOT NULL,
  wisdom INTEGER NOT NULL,
  intelligence INTEGER NOT NULL,
  player BOOLEAN NOT NULL,
  class_id INTEGER NOT NULL,
  inventory INTEGER NOT NULL,
  spells VARCHAR NOT NULL,
  stats INTEGER NOT NULL,
  in_campaign BOOLEAN NOT NULL,
  backstory TEXT NOT NULL,
  is_complete BOOLEAN NOT NULL,
  notes TEXT NOT NULL,
  race_id INTEGER NOT NULL
);



CREATE TABLE class (
  id SERIAL PRIMARY KEY,
  class VARCHAR NOT NULL,
  description INTEGER NOT NULL
);

CREATE TABLE stats (
  id SERIAL PRIMARY KEY,
  name INTEGER NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE adventure (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  name INTEGER NOT NULL,
  player_characters INTEGER NOT NULL,
  non_player_characters INTEGER NOT NULL,
  player_input_id INTEGER NOT NULL
);

CREATE TABLE races (
  id SERIAL PRIMARY KEY,
  race INTEGER NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE player_inputs (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  adventure_id INTEGER NOT NULL,
  inputs INTEGER NOT NULL
);

CREATE TABLE friends (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  friend_id INTEGER NOT NULL,
  friendship_approval INTEGER NOT NULL,
  request INTEGER NOT NULL
);

CREATE TABLE inventory (
  id VARCHAR PRIMARY KEY,
  user_id INTEGER NOT NULL,
  name VARCHAR NOT NULL,
  requirements VARCHAR NOT NULL,
  price INTEGER NOT NULL,
  weight INTEGER NOT NULL
);