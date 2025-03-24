/*
  Warnings:

  - You are about to drop the column `equipped` on the `CharacterSkills` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CharacterItens" ADD COLUMN "equipped" BOOLEAN;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
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
INSERT INTO "new_CharacterSkills" ("additionalDescription", "bonusDamage", "characterId", "createdAt", "id", "skillsId", "typeBonusDamage") SELECT "additionalDescription", "bonusDamage", "characterId", "createdAt", "id", "skillsId", "typeBonusDamage" FROM "CharacterSkills";
DROP TABLE "CharacterSkills";
ALTER TABLE "new_CharacterSkills" RENAME TO "CharacterSkills";
CREATE UNIQUE INDEX "CharacterSkills_id_key" ON "CharacterSkills"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
