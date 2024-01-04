/*
  Warnings:

  - You are about to drop the `_BlackboardTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ClubTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_BlackboardTag" DROP CONSTRAINT "_BlackboardTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_BlackboardTag" DROP CONSTRAINT "_BlackboardTag_B_fkey";

-- DropForeignKey
ALTER TABLE "_ClubTag" DROP CONSTRAINT "_ClubTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClubTag" DROP CONSTRAINT "_ClubTag_B_fkey";

-- AlterTable
ALTER TABLE "chats" ADD COLUMN     "lastActivity" JSONB[];

-- DropTable
DROP TABLE "_BlackboardTag";

-- DropTable
DROP TABLE "_ClubTag";

-- CreateTable
CREATE TABLE "_BlackboardBlackboardTagTag" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_ClubClubTag" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BlackboardBlackboardTagTag_AB_unique" ON "_BlackboardBlackboardTagTag"("A", "B");

-- CreateIndex
CREATE INDEX "_BlackboardBlackboardTagTag_B_index" ON "_BlackboardBlackboardTagTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClubClubTag_AB_unique" ON "_ClubClubTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ClubClubTag_B_index" ON "_ClubClubTag"("B");

-- AddForeignKey
ALTER TABLE "_BlackboardBlackboardTagTag" ADD CONSTRAINT "_BlackboardBlackboardTagTag_A_fkey" FOREIGN KEY ("A") REFERENCES "blackboards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlackboardBlackboardTagTag" ADD CONSTRAINT "_BlackboardBlackboardTagTag_B_fkey" FOREIGN KEY ("B") REFERENCES "blackboard_tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClubClubTag" ADD CONSTRAINT "_ClubClubTag_A_fkey" FOREIGN KEY ("A") REFERENCES "clubs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClubClubTag" ADD CONSTRAINT "_ClubClubTag_B_fkey" FOREIGN KEY ("B") REFERENCES "club_tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
