-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_character" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_character" ("id", "name") SELECT "id", "name" FROM "character";
DROP TABLE "character";
ALTER TABLE "new_character" RENAME TO "character";
CREATE UNIQUE INDEX "character_id_key" ON "character"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
