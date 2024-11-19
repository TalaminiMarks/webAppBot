/*
  Warnings:

  - You are about to drop the column `initial` on the `character` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `character` table. All the data in the column will be lost.
  - Added the required column `age` to the `character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `race` to the `character` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Items" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "usage" TEXT NOT NULL,
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

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_character" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "health" INTEGER DEFAULT 30,
    "age" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "laguages" TEXT DEFAULT 'Nehum Registro',
    "affiliation" TEXT DEFAULT 'Nehum Registro',
    "previous" TEXT DEFAULT 'Nehum Registro',
    "defect" TEXT DEFAULT 'Nehum Registro',
    "ideas" TEXT DEFAULT 'Nehum Registro',
    "personality" TEXT DEFAULT 'Nehum Registro',
    "history" TEXT DEFAULT 'Nehum Registro',
    "xp" INTEGER NOT NULL DEFAULT 0,
    "gold" INTEGER NOT NULL DEFAULT 50,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_character" ("created_at", "id", "name") SELECT "created_at", "id", "name" FROM "character";
DROP TABLE "character";
ALTER TABLE "new_character" RENAME TO "character";
CREATE UNIQUE INDEX "character_id_key" ON "character"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Items_id_key" ON "Items"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Attributes_id_key" ON "Attributes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Expertise_id_key" ON "Expertise"("id");
