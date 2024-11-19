-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Attributes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL DEFAULT 0,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Attributes" ("created_at", "id", "name", "value") SELECT "created_at", "id", "name", "value" FROM "Attributes";
DROP TABLE "Attributes";
ALTER TABLE "new_Attributes" RENAME TO "Attributes";
CREATE UNIQUE INDEX "Attributes_id_key" ON "Attributes"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
