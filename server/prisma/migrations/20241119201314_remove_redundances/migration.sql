-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_character" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "health" INTEGER NOT NULL DEFAULT 30,
    "age" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "laguages" TEXT NOT NULL DEFAULT 'Nehum Registro',
    "affiliation" TEXT NOT NULL DEFAULT 'Nehum Registro',
    "previous" TEXT NOT NULL DEFAULT 'Nehum Registro',
    "defect" TEXT NOT NULL DEFAULT 'Nehum Registro',
    "ideas" TEXT NOT NULL DEFAULT 'Nehum Registro',
    "personality" TEXT NOT NULL DEFAULT 'Nehum Registro',
    "history" TEXT NOT NULL DEFAULT 'Nehum Registro',
    "xp" INTEGER NOT NULL DEFAULT 0,
    "gold" INTEGER NOT NULL DEFAULT 50,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_character" ("affiliation", "age", "created_at", "defect", "gold", "health", "history", "id", "ideas", "laguages", "name", "personality", "previous", "race", "xp") SELECT coalesce("affiliation", 'Nehum Registro') AS "affiliation", "age", "created_at", coalesce("defect", 'Nehum Registro') AS "defect", "gold", coalesce("health", 30) AS "health", coalesce("history", 'Nehum Registro') AS "history", "id", coalesce("ideas", 'Nehum Registro') AS "ideas", coalesce("laguages", 'Nehum Registro') AS "laguages", "name", coalesce("personality", 'Nehum Registro') AS "personality", coalesce("previous", 'Nehum Registro') AS "previous", "race", "xp" FROM "character";
DROP TABLE "character";
ALTER TABLE "new_character" RENAME TO "character";
CREATE UNIQUE INDEX "character_id_key" ON "character"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
