/*
  Warnings:

  - You are about to drop the column `created_at` on the `Attributes` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `CharacterAttributes` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `CharacterExpertise` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `CharacterItens` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `CharacterSkills` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `CharacterSpells` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Expertise` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Items` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Skills` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Spells` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "discordId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "globalName" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Attributes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Attributes" ("id", "name") SELECT "id", "name" FROM "Attributes";
DROP TABLE "Attributes";
ALTER TABLE "new_Attributes" RENAME TO "Attributes";
CREATE UNIQUE INDEX "Attributes_id_key" ON "Attributes"("id");
CREATE UNIQUE INDEX "Attributes_name_key" ON "Attributes"("name");
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
    "initiaitve" INTEGER NOT NULL DEFAULT 0,
    "inspiration" INTEGER NOT NULL DEFAULT 0,
    "xp" INTEGER NOT NULL DEFAULT 0,
    "gold" INTEGER NOT NULL DEFAULT 50,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Character" ("affiliation", "age", "defect", "displacement", "gold", "health", "history", "id", "ideas", "initiaitve", "inspiration", "languages", "name", "perception", "personality", "previous", "race", "role", "xp") SELECT "affiliation", "age", "defect", "displacement", "gold", "health", "history", "id", "ideas", "initiaitve", "inspiration", "languages", "name", "perception", "personality", "previous", "race", "role", "xp" FROM "Character";
DROP TABLE "Character";
ALTER TABLE "new_Character" RENAME TO "Character";
CREATE UNIQUE INDEX "Character_id_key" ON "Character"("id");
CREATE TABLE "new_CharacterAttributes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "attributesId" INTEGER NOT NULL,
    "value" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CharacterAttributes_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CharacterAttributes_attributesId_fkey" FOREIGN KEY ("attributesId") REFERENCES "Attributes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CharacterAttributes" ("attributesId", "characterId", "id", "value") SELECT "attributesId", "characterId", "id", "value" FROM "CharacterAttributes";
DROP TABLE "CharacterAttributes";
ALTER TABLE "new_CharacterAttributes" RENAME TO "CharacterAttributes";
CREATE TABLE "new_CharacterDeath" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "fail1" BOOLEAN NOT NULL DEFAULT false,
    "fail2" BOOLEAN NOT NULL DEFAULT false,
    "fail3" BOOLEAN NOT NULL DEFAULT false,
    "success1" BOOLEAN NOT NULL DEFAULT false,
    "success2" BOOLEAN NOT NULL DEFAULT false,
    "success3" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CharacterDeath_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CharacterDeath" ("characterId", "fail1", "fail2", "fail3", "id", "success1", "success2", "success3") SELECT "characterId", "fail1", "fail2", "fail3", "id", "success1", "success2", "success3" FROM "CharacterDeath";
DROP TABLE "CharacterDeath";
ALTER TABLE "new_CharacterDeath" RENAME TO "CharacterDeath";
CREATE TABLE "new_CharacterExpertise" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "expertiseId" INTEGER NOT NULL,
    "value" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
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
    "bonusDamage" TEXT,
    "typeBonusDamage" TEXT,
    "additionalDescription" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CharacterItens_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CharacterItens_itemsId_fkey" FOREIGN KEY ("itemsId") REFERENCES "Items" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CharacterItens" ("additionalDescription", "bonusDamage", "characterId", "id", "itemsId", "typeBonusDamage") SELECT "additionalDescription", "bonusDamage", "characterId", "id", "itemsId", "typeBonusDamage" FROM "CharacterItens";
DROP TABLE "CharacterItens";
ALTER TABLE "new_CharacterItens" RENAME TO "CharacterItens";
CREATE TABLE "new_CharacterSkills" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "skillsId" INTEGER NOT NULL,
    "bonusDamage" TEXT,
    "typeBonusDamage" TEXT,
    "additionalDescription" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CharacterSkills_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CharacterSkills_skillsId_fkey" FOREIGN KEY ("skillsId") REFERENCES "Skills" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CharacterSkills" ("additionalDescription", "bonusDamage", "characterId", "id", "skillsId", "typeBonusDamage") SELECT "additionalDescription", "bonusDamage", "characterId", "id", "skillsId", "typeBonusDamage" FROM "CharacterSkills";
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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CharacterSpells_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CharacterSpells_spellsId_fkey" FOREIGN KEY ("spellsId") REFERENCES "Spells" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CharacterSpells" ("additionalDescription", "bonusDamage", "characterId", "id", "spellsId", "typeBonusDamage") SELECT "additionalDescription", "bonusDamage", "characterId", "id", "spellsId", "typeBonusDamage" FROM "CharacterSpells";
DROP TABLE "CharacterSpells";
ALTER TABLE "new_CharacterSpells" RENAME TO "CharacterSpells";
CREATE UNIQUE INDEX "CharacterSpells_id_key" ON "CharacterSpells"("id");
CREATE TABLE "new_Expertise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Expertise" ("id", "name") SELECT "id", "name" FROM "Expertise";
DROP TABLE "Expertise";
ALTER TABLE "new_Expertise" RENAME TO "Expertise";
CREATE UNIQUE INDEX "Expertise_id_key" ON "Expertise"("id");
CREATE UNIQUE INDEX "Expertise_name_key" ON "Expertise"("name");
CREATE TABLE "new_Items" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "damage" TEXT,
    "typeDamage" TEXT,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Items" ("damage", "description", "id", "name", "typeDamage") SELECT "damage", "description", "id", "name", "typeDamage" FROM "Items";
DROP TABLE "Items";
ALTER TABLE "new_Items" RENAME TO "Items";
CREATE UNIQUE INDEX "Items_id_key" ON "Items"("id");
CREATE TABLE "new_Skills" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "damage" TEXT,
    "typeDamage" TEXT,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Skills" ("damage", "description", "id", "name", "typeDamage") SELECT "damage", "description", "id", "name", "typeDamage" FROM "Skills";
DROP TABLE "Skills";
ALTER TABLE "new_Skills" RENAME TO "Skills";
CREATE UNIQUE INDEX "Skills_id_key" ON "Skills"("id");
CREATE TABLE "new_Spells" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "damage" TEXT,
    "typeDamage" TEXT,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Spells" ("damage", "description", "id", "name", "typeDamage") SELECT "damage", "description", "id", "name", "typeDamage" FROM "Spells";
DROP TABLE "Spells";
ALTER TABLE "new_Spells" RENAME TO "Spells";
CREATE UNIQUE INDEX "Spells_id_key" ON "Spells"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
