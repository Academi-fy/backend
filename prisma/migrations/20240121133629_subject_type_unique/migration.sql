/*
  Warnings:

  - A unique constraint covering the columns `[type]` on the table `subjects` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "subjects_type_key" ON "subjects"("type");
