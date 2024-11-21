/*
  Warnings:

  - Added the required column `value` to the `CharacterAttributes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `CharacterExpertise` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CharacterAttributes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "attributesId" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,
    CONSTRAINT "CharacterAttributes_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CharacterAttributes_attributesId_fkey" FOREIGN KEY ("attributesId") REFERENCES "Attributes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CharacterAttributes" ("attributesId", "characterId", "id") SELECT "attributesId", "characterId", "id" FROM "CharacterAttributes";
DROP TABLE "CharacterAttributes";
ALTER TABLE "new_CharacterAttributes" RENAME TO "CharacterAttributes";
CREATE TABLE "new_CharacterExpertise" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "expertiseId" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,
    CONSTRAINT "CharacterExpertise_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CharacterExpertise_expertiseId_fkey" FOREIGN KEY ("expertiseId") REFERENCES "Expertise" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CharacterExpertise" ("characterId", "expertiseId", "id") SELECT "characterId", "expertiseId", "id" FROM "CharacterExpertise";
DROP TABLE "CharacterExpertise";
ALTER TABLE "new_CharacterExpertise" RENAME TO "CharacterExpertise";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
