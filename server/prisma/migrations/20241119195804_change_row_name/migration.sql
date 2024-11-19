/*
  Warnings:

  - You are about to drop the column `usage` on the `Items` table. All the data in the column will be lost.
  - Added the required column `name` to the `Items` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Items" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "damage" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Items" ("created_at", "damage", "description", "id") SELECT "created_at", "damage", "description", "id" FROM "Items";
DROP TABLE "Items";
ALTER TABLE "new_Items" RENAME TO "Items";
CREATE UNIQUE INDEX "Items_id_key" ON "Items"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
