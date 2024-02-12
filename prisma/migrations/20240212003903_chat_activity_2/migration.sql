/*
  Warnings:

  - The values [ACTIVITY_SEND,ACTIVITY_EDIT,ACTIVITY_DELETE,ACTIVITY_PIN,ACTIVITY_UNPIN] on the enum `ChatActivityType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `pinned` on the `activities` table. All the data in the column will be lost.
  - You are about to drop the `user_activities` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ChatActivityType_new" AS ENUM ('MESSAGE_SEND', 'MESSAGE_EDIT', 'MESSAGE_DELETE', 'MESSAGE_ANSWER', 'ACTIVITY_STAR', 'ACTIVITY_UNSTAR', 'POLL_SEND', 'POLL_EDIT', 'POLL_DELETE', 'POLL_VOTE', 'POLL_UNVOTE', 'POLL_CLOSE', 'POLL_REOPEN', 'POLL_RESULT', 'CHAT_TARGET_ADD', 'CHAT_TARGET_REMOVE', 'CHAT_COURSE_ADD', 'CHAT_COURSE_REMOVE', 'CHAT_CLUB_ADD', 'CHAT_CLUB_REMOVE', 'CHAT_NAME_CHANGE', 'CHAT_AVATAR_CHANGE');
ALTER TABLE "activities" ALTER COLUMN "type" TYPE "ChatActivityType_new" USING ("type"::text::"ChatActivityType_new");
ALTER TYPE "ChatActivityType" RENAME TO "ChatActivityType_old";
ALTER TYPE "ChatActivityType_new" RENAME TO "ChatActivityType";
DROP TYPE "ChatActivityType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "user_activities" DROP CONSTRAINT "user_activities_chatActivityId_fkey";

-- DropForeignKey
ALTER TABLE "user_activities" DROP CONSTRAINT "user_activities_userId_fkey";

-- AlterTable
ALTER TABLE "activities" DROP COLUMN "pinned",
ADD COLUMN     "starred" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "user_activities";

-- CreateTable
CREATE TABLE "_UserChatActivity" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_ReadChatActivity" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserChatActivity_AB_unique" ON "_UserChatActivity"("A", "B");

-- CreateIndex
CREATE INDEX "_UserChatActivity_B_index" ON "_UserChatActivity"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ReadChatActivity_AB_unique" ON "_ReadChatActivity"("A", "B");

-- CreateIndex
CREATE INDEX "_ReadChatActivity_B_index" ON "_ReadChatActivity"("B");

-- AddForeignKey
ALTER TABLE "_UserChatActivity" ADD CONSTRAINT "_UserChatActivity_A_fkey" FOREIGN KEY ("A") REFERENCES "activities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserChatActivity" ADD CONSTRAINT "_UserChatActivity_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReadChatActivity" ADD CONSTRAINT "_ReadChatActivity_A_fkey" FOREIGN KEY ("A") REFERENCES "activities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReadChatActivity" ADD CONSTRAINT "_ReadChatActivity_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
