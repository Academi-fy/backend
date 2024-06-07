/*
  Warnings:

  - You are about to drop the `refresh_tokens` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "refresh_tokens" DROP CONSTRAINT "refresh_tokens_userAccountId_fkey";

-- AlterTable
ALTER TABLE "user_accounts" ADD COLUMN     "refreshTokens" TEXT[];

-- DropTable
DROP TABLE "refresh_tokens";
