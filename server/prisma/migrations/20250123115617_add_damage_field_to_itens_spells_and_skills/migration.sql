/*
  Warnings:

  - You are about to drop the column `bonusValue` on the `CharacterItens` table. All the data in the column will be lost.
  - You are about to drop the column `typeDamage` on the `CharacterItens` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `CharacterItens` table. All the data in the column will be lost.
  - You are about to drop the column `bonusValue` on the `CharacterSkills` table. All the data in the column will be lost.
  - You are about to drop the column `typeDamage` on the `CharacterSkills` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `CharacterSkills` table. All the data in the column will be lost.
  - You are about to drop the column `bonusValue` on the `CharacterSpells` table. All the data in the column will be lost.
  - You are about to drop the column `typeDamage` on the `CharacterSpells` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `CharacterSpells` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Items" ADD COLUMN "damage" TEXT;
ALTER TABLE "Items" ADD COLUMN "typeDamage" TEXT;

-- AlterTable
ALTER TABLE "Skills" ADD COLUMN "damage" TEXT;
ALTER TABLE "Skills" ADD COLUMN "typeDamage" TEXT;

-- AlterTable
ALTER TABLE "Spells" ADD COLUMN "damage" TEXT;
ALTER TABLE "Spells" ADD COLUMN "typeDamage" TEXT;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CharacterItens" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "itemsId" INTEGER NOT NULL,
    "bonusDamage" TEXT,
    "typeBonusDamage" TEXT,
    "additionalDescription" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CharacterItens_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CharacterItens_itemsId_fkey" FOREIGN KEY ("itemsId") REFERENCES "Items" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CharacterItens" ("characterId", "created_at", "id", "itemsId") SELECT "characterId", "created_at", "id", "itemsId" FROM "CharacterItens";
DROP TABLE "CharacterItens";
ALTER TABLE "new_CharacterItens" RENAME TO "CharacterItens";
CREATE TABLE "new_CharacterSkills" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "skillsId" INTEGER NOT NULL,
    "bonusDamage" TEXT,
    "typeBonusDamage" TEXT,
    "additionalDescription" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CharacterSkills_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CharacterSkills_skillsId_fkey" FOREIGN KEY ("skillsId") REFERENCES "Skills" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CharacterSkills" ("characterId", "created_at", "id", "skillsId") SELECT "characterId", "created_at", "id", "skillsId" FROM "CharacterSkills";
DROP TABLE "CharacterSkills";
ALTER TABLE "new_CharacterSkills" RENAME TO "CharacterSkills";
CREATE UNIQUE INDEX "CharacterSkills_id_key" ON "CharacterSkills"("id");
CREATE TABLE "new_CharacterSpells" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "spellsId" INTEGER NOT NULL,
    "bonusDamage" TEXT,
    "typeBonusDamage" TEXT,
    "additionalDescription" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CharacterSpells_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CharacterSpells_spellsId_fkey" FOREIGN KEY ("spellsId") REFERENCES "Spells" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CharacterSpells" ("characterId", "created_at", "id", "spellsId") SELECT "characterId", "created_at", "id", "spellsId" FROM "CharacterSpells";
DROP TABLE "CharacterSpells";
ALTER TABLE "new_CharacterSpells" RENAME TO "CharacterSpells";
CREATE UNIQUE INDEX "CharacterSpells_id_key" ON "CharacterSpells"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
