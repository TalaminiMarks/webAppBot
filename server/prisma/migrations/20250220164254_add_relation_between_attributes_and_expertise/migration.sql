/*
  Warnings:

  - Added the required column `attributesId` to the `Expertise` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Expertise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "attributesId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Expertise_attributesId_fkey" FOREIGN KEY ("attributesId") REFERENCES "Attributes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Expertise" ("createdAt", "id", "name") SELECT "createdAt", "id", "name" FROM "Expertise";
DROP TABLE "Expertise";
ALTER TABLE "new_Expertise" RENAME TO "Expertise";
CREATE UNIQUE INDEX "Expertise_id_key" ON "Expertise"("id");
CREATE UNIQUE INDEX "Expertise_name_key" ON "Expertise"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
