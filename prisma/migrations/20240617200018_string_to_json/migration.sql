/*
  Warnings:

  - The `activityContent` column on the `activities` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `requirements` column on the `clubs` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `information` column on the `events` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "activities" DROP COLUMN "activityContent",
ADD COLUMN     "activityContent" JSONB[];

-- AlterTable
ALTER TABLE "clubs" DROP COLUMN "requirements",
ADD COLUMN     "requirements" JSONB[];

-- AlterTable
ALTER TABLE "events" DROP COLUMN "information",
ADD COLUMN     "information" JSONB[];
