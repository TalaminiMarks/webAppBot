/*
  Warnings:

  - Added the required column `type` to the `Items` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Items" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "damage" TEXT,
    "typeDamage" TEXT,
    "description" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "equippable" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Items" ("createdAt", "damage", "description", "equippable", "id", "name", "typeDamage", "weight") SELECT "createdAt", "damage", "description", "equippable", "id", "name", "typeDamage", "weight" FROM "Items";
DROP TABLE "Items";
ALTER TABLE "new_Items" RENAME TO "Items";
CREATE UNIQUE INDEX "Items_id_key" ON "Items"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
