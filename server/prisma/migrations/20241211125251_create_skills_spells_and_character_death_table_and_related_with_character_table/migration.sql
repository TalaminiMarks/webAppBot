/*
  Warnings:

  - You are about to drop the column `skills` on the `Character` table. All the data in the column will be lost.
  - Added the required column `bonusValue` to the `CharacterItens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `CharacterItens` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Skills" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Spells" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "CharacterSkills" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "skillsId" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    "bonusValue" TEXT,
    "typeDamage" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CharacterSkills_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CharacterSkills_skillsId_fkey" FOREIGN KEY ("skillsId") REFERENCES "Skills" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CharacterSpells" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "spellsId" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    "bonusValue" TEXT,
    "typeDamage" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CharacterSpells_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CharacterSpells_spellsId_fkey" FOREIGN KEY ("spellsId") REFERENCES "Spells" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CharacterDeath" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "fail1" BOOLEAN NOT NULL DEFAULT false,
    "fail2" BOOLEAN NOT NULL DEFAULT false,
    "fail3" BOOLEAN NOT NULL DEFAULT false,
    "success1" BOOLEAN NOT NULL DEFAULT false,
    "success2" BOOLEAN NOT NULL DEFAULT false,
    "success3" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "CharacterDeath_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Character" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "health" INTEGER NOT NULL DEFAULT 30,
    "age" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "languages" TEXT NOT NULL DEFAULT 'Nenhum Registro',
    "affiliation" TEXT NOT NULL DEFAULT 'Nenhum Registro',
    "previous" TEXT NOT NULL DEFAULT 'Nenhum Registro',
    "defect" TEXT NOT NULL DEFAULT 'Nenhum Registro',
    "ideas" TEXT NOT NULL DEFAULT 'Nenhum Registro',
    "personality" TEXT NOT NULL DEFAULT 'Nenhum Registro',
    "history" TEXT NOT NULL DEFAULT 'Nenhum Registro',
    "perception" INTEGER NOT NULL DEFAULT 0,
    "displacement" INTEGER NOT NULL DEFAULT 0,
    "iniviative" INTEGER NOT NULL DEFAULT 0,
    "inspiration" INTEGER NOT NULL DEFAULT 0,
    "xp" INTEGER NOT NULL DEFAULT 0,
    "gold" INTEGER NOT NULL DEFAULT 50,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Character" ("affiliation", "age", "created_at", "defect", "gold", "health", "history", "id", "ideas", "languages", "name", "personality", "previous", "race", "role", "xp") SELECT "affiliation", "age", "created_at", "defect", "gold", "health", "history", "id", "ideas", "languages", "name", "personality", "previous", "race", "role", "xp" FROM "Character";
DROP TABLE "Character";
ALTER TABLE "new_Character" RENAME TO "Character";
CREATE UNIQUE INDEX "Character_id_key" ON "Character"("id");
CREATE TABLE "new_CharacterAttributes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "attributesId" INTEGER NOT NULL,
    "value" INTEGER NOT NULL DEFAULT 0,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CharacterAttributes_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CharacterAttributes_attributesId_fkey" FOREIGN KEY ("attributesId") REFERENCES "Attributes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CharacterAttributes" ("attributesId", "characterId", "id", "value") SELECT "attributesId", "characterId", "id", "value" FROM "CharacterAttributes";
DROP TABLE "CharacterAttributes";
ALTER TABLE "new_CharacterAttributes" RENAME TO "CharacterAttributes";
CREATE TABLE "new_CharacterExpertise" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "expertiseId" INTEGER NOT NULL,
    "value" INTEGER NOT NULL DEFAULT 0,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CharacterExpertise_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CharacterExpertise_expertiseId_fkey" FOREIGN KEY ("expertiseId") REFERENCES "Expertise" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CharacterExpertise" ("characterId", "expertiseId", "id", "value") SELECT "characterId", "expertiseId", "id", "value" FROM "CharacterExpertise";
DROP TABLE "CharacterExpertise";
ALTER TABLE "new_CharacterExpertise" RENAME TO "CharacterExpertise";
CREATE TABLE "new_CharacterItens" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "itemsId" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    "bonusValue" TEXT NOT NULL,
    "typeDamage" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CharacterItens_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CharacterItens_itemsId_fkey" FOREIGN KEY ("itemsId") REFERENCES "Items" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CharacterItens" ("characterId", "id", "itemsId") SELECT "characterId", "id", "itemsId" FROM "CharacterItens";
DROP TABLE "CharacterItens";
ALTER TABLE "new_CharacterItens" RENAME TO "CharacterItens";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Skills_id_key" ON "Skills"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Spells_id_key" ON "Spells"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CharacterSkills_id_key" ON "CharacterSkills"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CharacterSpells_id_key" ON "CharacterSpells"("id");
