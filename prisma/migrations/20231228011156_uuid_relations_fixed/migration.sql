-- DropForeignKey
ALTER TABLE "clubs" DROP CONSTRAINT "clubs_chatId_fkey";

-- DropForeignKey
ALTER TABLE "courses" DROP CONSTRAINT "courses_chatId_fkey";

-- AlterTable
ALTER TABLE "clubs" ALTER COLUMN "chatId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "courses" ALTER COLUMN "chatId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "clubs" ADD CONSTRAINT "clubs_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "chats"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "chats"("id") ON DELETE SET NULL ON UPDATE CASCADE;
