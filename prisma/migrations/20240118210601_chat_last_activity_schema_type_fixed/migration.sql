/*
  Warnings:

  - Changed the type of `lastActivity` on the `chats` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "chats" DROP COLUMN "lastActivity",
ADD COLUMN     "lastActivity" JSONB NOT NULL;
