/*
  Warnings:

  - You are about to drop the column `targetId` on the `activities` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "activities" DROP CONSTRAINT "activities_targetId_fkey";

-- AlterTable
ALTER TABLE "activities" DROP COLUMN "targetId",
ADD COLUMN     "answerToId" UUID;

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_answerToId_fkey" FOREIGN KEY ("answerToId") REFERENCES "activities"("id") ON DELETE SET NULL ON UPDATE CASCADE;
