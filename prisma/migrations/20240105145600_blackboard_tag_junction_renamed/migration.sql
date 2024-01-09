/*
  Warnings:

  - You are about to drop the `_BlackboardBlackboardTagTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_BlackboardBlackboardTagTag" DROP CONSTRAINT "_BlackboardBlackboardTagTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_BlackboardBlackboardTagTag" DROP CONSTRAINT "_BlackboardBlackboardTagTag_B_fkey";

-- DropTable
DROP TABLE "_BlackboardBlackboardTagTag";

-- CreateTable
CREATE TABLE "_BlackboardBlackboardTag" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BlackboardBlackboardTag_AB_unique" ON "_BlackboardBlackboardTag"("A", "B");

-- CreateIndex
CREATE INDEX "_BlackboardBlackboardTag_B_index" ON "_BlackboardBlackboardTag"("B");

-- AddForeignKey
ALTER TABLE "_BlackboardBlackboardTag" ADD CONSTRAINT "_BlackboardBlackboardTag_A_fkey" FOREIGN KEY ("A") REFERENCES "blackboards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlackboardBlackboardTag" ADD CONSTRAINT "_BlackboardBlackboardTag_B_fkey" FOREIGN KEY ("B") REFERENCES "blackboard_tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
