/*
  Warnings:

  - You are about to drop the column `laguages` on the `Character` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Character" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "health" INTEGER NOT NULL DEFAULT 30,
    "age" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "languages" TEXT NOT NULL DEFAULT 'Nehum Registro',
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
INSERT INTO "new_Character" ("affiliation", "age", "created_at", "defect", "gold", "health", "history", "id", "ideas", "name", "personality", "previous", "race", "xp") SELECT "affiliation", "age", "created_at", "defect", "gold", "health", "history", "id", "ideas", "name", "personality", "previous", "race", "xp" FROM "Character";
DROP TABLE "Character";
ALTER TABLE "new_Character" RENAME TO "Character";
CREATE UNIQUE INDEX "Character_id_key" ON "Character"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
