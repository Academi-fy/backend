/*
  Warnings:

  - Changed the type of `activityContent` on the `activities` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "activities" DROP COLUMN "activityContent",
ADD COLUMN     "activityContent" JSONB NOT NULL;
