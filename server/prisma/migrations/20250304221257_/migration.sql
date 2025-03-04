/*
  Warnings:

  - You are about to drop the column `cooper` on the `Character` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Character" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "maxHealth" INTEGER NOT NULL DEFAULT 30,
    "currentHealth" INTEGER NOT NULL DEFAULT 10,
    "age" TEXT NOT NULL,
    "baseRace" TEXT NOT NULL,
    "subRace" TEXT NOT NULL,
    "armor" INTEGER NOT NULL DEFAULT 0,
    "proficiency" INTEGER NOT NULL DEFAULT 0,
    "perception" INTEGER NOT NULL DEFAULT 0,
    "displacement" INTEGER NOT NULL DEFAULT 0,
    "initiative" INTEGER NOT NULL DEFAULT 0,
    "inspiration" INTEGER NOT NULL DEFAULT 0,
    "languages" TEXT NOT NULL DEFAULT 'Nenhum Registro',
    "affiliation" TEXT NOT NULL DEFAULT 'Nenhum Registro',
    "previous" TEXT NOT NULL DEFAULT 'Nenhum Registro',
    "defect" TEXT NOT NULL DEFAULT 'Nenhum Registro',
    "ideas" TEXT NOT NULL DEFAULT 'Nenhum Registro',
    "personality" TEXT NOT NULL DEFAULT 'Nenhum Registro',
    "story" TEXT NOT NULL DEFAULT 'Nenhum Registro',
    "tendency" TEXT NOT NULL DEFAULT 'Nenhum Registro',
    "level" INTEGER NOT NULL DEFAULT 1,
    "levelUp" BOOLEAN NOT NULL DEFAULT false,
    "xp" INTEGER NOT NULL DEFAULT 0,
    "copper" INTEGER NOT NULL DEFAULT 0,
    "silver" INTEGER NOT NULL DEFAULT 0,
    "gold" INTEGER NOT NULL DEFAULT 50,
    "electro" INTEGER NOT NULL DEFAULT 0,
    "platinum" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Character" ("affiliation", "age", "armor", "baseRace", "createdAt", "currentHealth", "defect", "displacement", "electro", "gold", "id", "ideas", "initiative", "inspiration", "languages", "level", "levelUp", "maxHealth", "name", "perception", "personality", "platinum", "previous", "proficiency", "role", "silver", "story", "subRace", "tendency", "updatedAt", "userId", "xp") SELECT "affiliation", "age", "armor", "baseRace", "createdAt", "currentHealth", "defect", "displacement", "electro", "gold", "id", "ideas", "initiative", "inspiration", "languages", "level", "levelUp", "maxHealth", "name", "perception", "personality", "platinum", "previous", "proficiency", "role", "silver", "story", "subRace", "tendency", "updatedAt", "userId", "xp" FROM "Character";
DROP TABLE "Character";
ALTER TABLE "new_Character" RENAME TO "Character";
CREATE UNIQUE INDEX "Character_id_key" ON "Character"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
