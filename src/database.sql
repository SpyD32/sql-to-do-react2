CREATE TABLE "To Do" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(25) NOT NULL,
	"completed" BOOLEAN DEFAULT false,
	"hours" INTEGER DEFAULT 0
);

INSERT INTO "To Do" ("name", "hours", "complete")
VALUES ('Groceries', '2', false), 
('Homework', '4', false), 
('Chores', '2', true);