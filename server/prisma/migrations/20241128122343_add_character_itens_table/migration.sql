-- CreateTable
CREATE TABLE "CharacterItens" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "characterId" TEXT NOT NULL,
    "itemsId" INTEGER NOT NULL,
    CONSTRAINT "CharacterItens_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CharacterItens_itemsId_fkey" FOREIGN KEY ("itemsId") REFERENCES "Items" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
