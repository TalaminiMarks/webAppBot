/*
  Warnings:

  - Added the required column `value` to the `Attributes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Expertise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Items" ADD COLUMN "damage" TEXT;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Attributes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Attributes" ("created_at", "id", "name") SELECT "created_at", "id", "name" FROM "Attributes";
DROP TABLE "Attributes";
ALTER TABLE "new_Attributes" RENAME TO "Attributes";
CREATE UNIQUE INDEX "Attributes_id_key" ON "Attributes"("id");
CREATE TABLE "new_Expertise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Expertise" ("created_at", "id", "name") SELECT "created_at", "id", "name" FROM "Expertise";
DROP TABLE "Expertise";
ALTER TABLE "new_Expertise" RENAME TO "Expertise";
CREATE UNIQUE INDEX "Expertise_id_key" ON "Expertise"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
