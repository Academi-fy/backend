/*
  Warnings:

  - Added the required column `name` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clubs" ADD COLUMN     "avatar" TEXT;

-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "name" TEXT NOT NULL;
