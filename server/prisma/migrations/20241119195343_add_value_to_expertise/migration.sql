-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Expertise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL DEFAULT 0,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Expertise" ("created_at", "id", "name", "value") SELECT "created_at", "id", "name", "value" FROM "Expertise";
DROP TABLE "Expertise";
ALTER TABLE "new_Expertise" RENAME TO "Expertise";
CREATE UNIQUE INDEX "Expertise_id_key" ON "Expertise"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
