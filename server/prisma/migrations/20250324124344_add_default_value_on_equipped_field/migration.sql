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
    "equipped" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CharacterItens_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CharacterItens_itemsId_fkey" FOREIGN KEY ("itemsId") REFERENCES "Items" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CharacterItens" ("additionalDescription", "bonusDamage", "characterId", "createdAt", "equipped", "id", "itemsId", "typeBonusDamage") SELECT "additionalDescription", "bonusDamage", "characterId", "createdAt", coalesce("equipped", false) AS "equipped", "id", "itemsId", "typeBonusDamage" FROM "CharacterItens";
DROP TABLE "CharacterItens";
ALTER TABLE "new_CharacterItens" RENAME TO "CharacterItens";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
