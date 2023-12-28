/*
  Warnings:

  - You are about to drop the column `state` on the `clubs` table. All the data in the column will be lost.
  - The `meetingDay` column on the `clubs` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `state` on the `events` table. All the data in the column will be lost.
  - You are about to drop the `_BlackboardToBlackboardTag` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `level` on the `grades` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `subjects` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Day" AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

-- CreateEnum
CREATE TYPE "GradeLevel" AS ENUM ('G5', 'G6', 'G7', 'G8', 'G9', 'G10');

-- CreateEnum
CREATE TYPE "SubjectType" AS ENUM ('ART', 'BIOLOGY', 'CHEMISTRY', 'COMPUTER_SCIENCE', 'ECONOMICS', 'ENGLISH', 'ETHICS', 'FRENCH', 'GEOGRAPHY', 'GERMAN', 'HISTORY', 'IMP', 'ITALIAN', 'MATHS', 'MUSIC', 'NWT', 'PHYSICS', 'POLITICS', 'RELIGION', 'SPANISH', 'SPORT');

-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('ADMIN', 'TEACHER', 'STUDENT');

-- DropForeignKey
ALTER TABLE "_BlackboardToBlackboardTag" DROP CONSTRAINT "_BlackboardToBlackboardTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_BlackboardToBlackboardTag" DROP CONSTRAINT "_BlackboardToBlackboardTag_B_fkey";

-- AlterTable
ALTER TABLE "clubs" DROP COLUMN "state",
DROP COLUMN "meetingDay",
ADD COLUMN     "meetingDay" "Day";

-- AlterTable
ALTER TABLE "events" DROP COLUMN "state";

-- AlterTable
ALTER TABLE "grades" DROP COLUMN "level",
ADD COLUMN     "level" "GradeLevel" NOT NULL;

-- AlterTable
ALTER TABLE "subjects" DROP COLUMN "type",
ADD COLUMN     "type" "SubjectType" NOT NULL;

-- AlterTable
ALTER TABLE "user_chats" ALTER COLUMN "read" SET DEFAULT true;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "type",
ADD COLUMN     "type" "UserType" NOT NULL;

-- DropTable
DROP TABLE "_BlackboardToBlackboardTag";

-- CreateTable
CREATE TABLE "_BlackboardTag" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BlackboardTag_AB_unique" ON "_BlackboardTag"("A", "B");

-- CreateIndex
CREATE INDEX "_BlackboardTag_B_index" ON "_BlackboardTag"("B");

-- AddForeignKey
ALTER TABLE "_BlackboardTag" ADD CONSTRAINT "_BlackboardTag_A_fkey" FOREIGN KEY ("A") REFERENCES "blackboards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlackboardTag" ADD CONSTRAINT "_BlackboardTag_B_fkey" FOREIGN KEY ("B") REFERENCES "blackboard_tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
