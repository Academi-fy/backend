-- AlterTable
ALTER TABLE "setup_accounts" ALTER COLUMN "schoolId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "user_accounts" ALTER COLUMN "userId" DROP NOT NULL;
