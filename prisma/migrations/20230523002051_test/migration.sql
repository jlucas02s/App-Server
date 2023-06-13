/*
  Warnings:

  - Made the column `nome` on table `aluno` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_aluno" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL
);
INSERT INTO "new_aluno" ("id", "nome") SELECT "id", "nome" FROM "aluno";
DROP TABLE "aluno";
ALTER TABLE "new_aluno" RENAME TO "aluno";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
