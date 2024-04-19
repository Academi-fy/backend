/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `user_accounts` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "GradeLevel" ADD VALUE 'G11';
ALTER TYPE "GradeLevel" ADD VALUE 'G12';

-- AlterEnum
ALTER TYPE "SubjectType" ADD VALUE 'LATIN';

-- AlterTable
ALTER TABLE "user_accounts" ADD COLUMN     "email" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "birthday" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "user_accounts_email_key" ON "user_accounts"("email");
