/*
  Warnings:

  - You are about to drop the column `race` on the `Character` table. All the data in the column will be lost.
  - Added the required column `baseRace` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subRace` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Character" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "health" INTEGER NOT NULL DEFAULT 30,
    "age" TEXT NOT NULL,
    "baseRace" TEXT NOT NULL,
    "subRace" TEXT NOT NULL,
    "languages" TEXT NOT NULL DEFAULT 'Nenhum Registro',
    "affiliation" TEXT NOT NULL DEFAULT 'Nenhum Registro',
    "previous" TEXT NOT NULL DEFAULT 'Nenhum Registro',
    "defect" TEXT NOT NULL DEFAULT 'Nenhum Registro',
    "ideas" TEXT NOT NULL DEFAULT 'Nenhum Registro',
    "personality" TEXT NOT NULL DEFAULT 'Nenhum Registro',
    "history" TEXT NOT NULL DEFAULT 'Nenhum Registro',
    "perception" INTEGER NOT NULL DEFAULT 0,
    "displacement" INTEGER NOT NULL DEFAULT 0,
    "initiaitve" INTEGER NOT NULL DEFAULT 0,
    "inspiration" INTEGER NOT NULL DEFAULT 0,
    "xp" INTEGER NOT NULL DEFAULT 0,
    "gold" INTEGER NOT NULL DEFAULT 50,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Character" ("affiliation", "age", "createdAt", "defect", "displacement", "gold", "health", "history", "id", "ideas", "initiaitve", "inspiration", "languages", "name", "perception", "personality", "previous", "role", "userId", "xp") SELECT "affiliation", "age", "createdAt", "defect", "displacement", "gold", "health", "history", "id", "ideas", "initiaitve", "inspiration", "languages", "name", "perception", "personality", "previous", "role", "userId", "xp" FROM "Character";
DROP TABLE "Character";
ALTER TABLE "new_Character" RENAME TO "Character";
CREATE UNIQUE INDEX "Character_id_key" ON "Character"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
