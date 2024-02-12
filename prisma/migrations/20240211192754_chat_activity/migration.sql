/*
  Warnings:

  - You are about to drop the column `activities` on the `chats` table. All the data in the column will be lost.
  - You are about to drop the column `chatHistory` on the `chats` table. All the data in the column will be lost.
  - You are about to drop the column `lastActivity` on the `chats` table. All the data in the column will be lost.
  - You are about to drop the `messages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_messages` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ChatActivityType" AS ENUM ('ACTIVITY_SEND', 'ACTIVITY_EDIT', 'ACTIVITY_DELETE', 'ACTIVITY_PIN', 'ACTIVITY_UNPIN', 'CHAT_TARGET_ADD', 'CHAT_TARGET_REMOVE', 'CHAT_COURSE_ADD', 'CHAT_COURSE_REMOVE', 'CHAT_CLUB_ADD', 'CHAT_CLUB_REMOVE', 'CHAT_NAME_CHANGE', 'CHAT_AVATAR_CHANGE');

-- DropForeignKey
ALTER TABLE "messages" DROP CONSTRAINT "messages_authorId_fkey";

-- DropForeignKey
ALTER TABLE "messages" DROP CONSTRAINT "messages_chatId_fkey";

-- DropForeignKey
ALTER TABLE "messages" DROP CONSTRAINT "messages_replyToId_fkey";

-- DropForeignKey
ALTER TABLE "user_messages" DROP CONSTRAINT "user_messages_messageId_fkey";

-- DropForeignKey
ALTER TABLE "user_messages" DROP CONSTRAINT "user_messages_userId_fkey";

-- AlterTable
ALTER TABLE "chats" DROP COLUMN "activities",
DROP COLUMN "chatHistory",
DROP COLUMN "lastActivity";

-- DropTable
DROP TABLE "messages";

-- DropTable
DROP TABLE "user_messages";

-- CreateTable
CREATE TABLE "activities" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "chatId" UUID NOT NULL,
    "targetId" UUID,
    "type" "ChatActivityType" NOT NULL,
    "value" JSONB[],
    "pinned" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "activities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_activities" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "chatActivityId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT true,
    "starred" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_activities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "chats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_targetId_fkey" FOREIGN KEY ("targetId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_activities" ADD CONSTRAINT "user_activities_chatActivityId_fkey" FOREIGN KEY ("chatActivityId") REFERENCES "activities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_activities" ADD CONSTRAINT "user_activities_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
