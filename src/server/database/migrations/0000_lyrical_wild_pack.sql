CREATE TABLE IF NOT EXISTS "users" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"username" varchar(20) NOT NULL,
	CONSTRAINT "users__uk--username" UNIQUE("username")
);
