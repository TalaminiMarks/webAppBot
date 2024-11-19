/*
  Warnings:

  - You are about to drop the column `value` on the `Attributes` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Expertise` table. All the data in the column will be lost.
  - You are about to drop the column `damage` on the `Items` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Attributes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Attributes" ("created_at", "id", "name") SELECT "created_at", "id", "name" FROM "Attributes";
DROP TABLE "Attributes";
ALTER TABLE "new_Attributes" RENAME TO "Attributes";
CREATE UNIQUE INDEX "Attributes_id_key" ON "Attributes"("id");
CREATE TABLE "new_Expertise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Expertise" ("created_at", "id", "name") SELECT "created_at", "id", "name" FROM "Expertise";
DROP TABLE "Expertise";
ALTER TABLE "new_Expertise" RENAME TO "Expertise";
CREATE UNIQUE INDEX "Expertise_id_key" ON "Expertise"("id");
CREATE TABLE "new_Items" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Items" ("created_at", "description", "id", "name") SELECT "created_at", "description", "id", "name" FROM "Items";
DROP TABLE "Items";
ALTER TABLE "new_Items" RENAME TO "Items";
CREATE UNIQUE INDEX "Items_id_key" ON "Items"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
