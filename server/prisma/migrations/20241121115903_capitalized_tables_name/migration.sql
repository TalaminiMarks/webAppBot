/*
  Warnings:

  - You are about to drop the `attributes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `character` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `expertise` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `items` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "attributes";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "character";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "expertise";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "items";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "health" INTEGER NOT NULL DEFAULT 30,
    "age" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "laguages" TEXT NOT NULL DEFAULT 'Nehum Registro',
    "affiliation" TEXT NOT NULL DEFAULT 'Nehum Registro',
    "previous" TEXT NOT NULL DEFAULT 'Nehum Registro',
    "defect" TEXT NOT NULL DEFAULT 'Nehum Registro',
    "ideas" TEXT NOT NULL DEFAULT 'Nehum Registro',
    "personality" TEXT NOT NULL DEFAULT 'Nehum Registro',
    "history" TEXT NOT NULL DEFAULT 'Nehum Registro',
    "xp" INTEGER NOT NULL DEFAULT 0,
    "gold" INTEGER NOT NULL DEFAULT 50,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Items" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Attributes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Expertise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Character_id_key" ON "Character"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Items_id_key" ON "Items"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Attributes_id_key" ON "Attributes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Expertise_id_key" ON "Expertise"("id");
