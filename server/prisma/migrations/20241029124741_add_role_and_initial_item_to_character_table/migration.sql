/*
  Warnings:

  - Added the required column `initial` to the `character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `character` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_character" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "initial" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_character" ("created_at", "id", "name") SELECT "created_at", "id", "name" FROM "character";
DROP TABLE "character";
ALTER TABLE "new_character" RENAME TO "character";
CREATE UNIQUE INDEX "character_id_key" ON "character"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
