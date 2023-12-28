/*
  Warnings:

  - You are about to drop the `_BlackboardToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ClassToCourse` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ClubToClubTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ClubToEvent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_EventToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_SchoolToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_BlackboardToUser" DROP CONSTRAINT "_BlackboardToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_BlackboardToUser" DROP CONSTRAINT "_BlackboardToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "_ClassToCourse" DROP CONSTRAINT "_ClassToCourse_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClassToCourse" DROP CONSTRAINT "_ClassToCourse_B_fkey";

-- DropForeignKey
ALTER TABLE "_ClubToClubTag" DROP CONSTRAINT "_ClubToClubTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClubToClubTag" DROP CONSTRAINT "_ClubToClubTag_B_fkey";

-- DropForeignKey
ALTER TABLE "_ClubToEvent" DROP CONSTRAINT "_ClubToEvent_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClubToEvent" DROP CONSTRAINT "_ClubToEvent_B_fkey";

-- DropForeignKey
ALTER TABLE "_EventToUser" DROP CONSTRAINT "_EventToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventToUser" DROP CONSTRAINT "_EventToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "_SchoolToUser" DROP CONSTRAINT "_SchoolToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_SchoolToUser" DROP CONSTRAINT "_SchoolToUser_B_fkey";

-- DropTable
DROP TABLE "_BlackboardToUser";

-- DropTable
DROP TABLE "_ClassToCourse";

-- DropTable
DROP TABLE "_ClubToClubTag";

-- DropTable
DROP TABLE "_ClubToEvent";

-- DropTable
DROP TABLE "_EventToUser";

-- DropTable
DROP TABLE "_SchoolToUser";

-- CreateTable
CREATE TABLE "_BlackboardTarget" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_ClassCourse" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_ClubEvent" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_ClubTag" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_EventSubscriber" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_SchoolMember" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BlackboardTarget_AB_unique" ON "_BlackboardTarget"("A", "B");

-- CreateIndex
CREATE INDEX "_BlackboardTarget_B_index" ON "_BlackboardTarget"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClassCourse_AB_unique" ON "_ClassCourse"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassCourse_B_index" ON "_ClassCourse"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClubEvent_AB_unique" ON "_ClubEvent"("A", "B");

-- CreateIndex
CREATE INDEX "_ClubEvent_B_index" ON "_ClubEvent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClubTag_AB_unique" ON "_ClubTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ClubTag_B_index" ON "_ClubTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventSubscriber_AB_unique" ON "_EventSubscriber"("A", "B");

-- CreateIndex
CREATE INDEX "_EventSubscriber_B_index" ON "_EventSubscriber"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SchoolMember_AB_unique" ON "_SchoolMember"("A", "B");

-- CreateIndex
CREATE INDEX "_SchoolMember_B_index" ON "_SchoolMember"("B");

-- AddForeignKey
ALTER TABLE "_BlackboardTarget" ADD CONSTRAINT "_BlackboardTarget_A_fkey" FOREIGN KEY ("A") REFERENCES "blackboards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlackboardTarget" ADD CONSTRAINT "_BlackboardTarget_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassCourse" ADD CONSTRAINT "_ClassCourse_A_fkey" FOREIGN KEY ("A") REFERENCES "classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassCourse" ADD CONSTRAINT "_ClassCourse_B_fkey" FOREIGN KEY ("B") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClubEvent" ADD CONSTRAINT "_ClubEvent_A_fkey" FOREIGN KEY ("A") REFERENCES "clubs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClubEvent" ADD CONSTRAINT "_ClubEvent_B_fkey" FOREIGN KEY ("B") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClubTag" ADD CONSTRAINT "_ClubTag_A_fkey" FOREIGN KEY ("A") REFERENCES "clubs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClubTag" ADD CONSTRAINT "_ClubTag_B_fkey" FOREIGN KEY ("B") REFERENCES "club_tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventSubscriber" ADD CONSTRAINT "_EventSubscriber_A_fkey" FOREIGN KEY ("A") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventSubscriber" ADD CONSTRAINT "_EventSubscriber_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SchoolMember" ADD CONSTRAINT "_SchoolMember_A_fkey" FOREIGN KEY ("A") REFERENCES "schools"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SchoolMember" ADD CONSTRAINT "_SchoolMember_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
