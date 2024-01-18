/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `blackboard_tags` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `schools` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[schoolName]` on the table `setup_accounts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "blackboard_tags_name_key" ON "blackboard_tags"("name");

-- CreateIndex
CREATE UNIQUE INDEX "schools_name_key" ON "schools"("name");

-- CreateIndex
CREATE UNIQUE INDEX "setup_accounts_schoolName_key" ON "setup_accounts"("schoolName");
