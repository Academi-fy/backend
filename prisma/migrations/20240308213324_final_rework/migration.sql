/*
  Warnings:

  - You are about to drop the column `value` on the `activities` table. All the data in the column will be lost.
  - You are about to drop the `_UserChatActivity` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `executorId` to the `activities` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `chats` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ChatType" AS ENUM ('GROUP', 'PRIVATE', 'COURSE');

-- DropForeignKey
ALTER TABLE "_UserChatActivity" DROP CONSTRAINT "_UserChatActivity_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserChatActivity" DROP CONSTRAINT "_UserChatActivity_B_fkey";

-- AlterTable
ALTER TABLE "activities" DROP COLUMN "value",
ADD COLUMN     "activityContent" JSONB[],
ADD COLUMN     "executorId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "chats" DROP COLUMN "type",
ADD COLUMN     "type" "ChatType" NOT NULL;

-- DropTable
DROP TABLE "_UserChatActivity";

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_executorId_fkey" FOREIGN KEY ("executorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
