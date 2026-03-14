-- CreateEnum
CREATE TYPE "BrewMethod" AS ENUM ('POUR_OVER', 'OTHER');

-- CreateTable
CREATE TABLE "BrewLog" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "brewedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "recipeName" TEXT,
    "note" TEXT,
    "rating" INTEGER,
    "method" "BrewMethod" NOT NULL DEFAULT 'POUR_OVER',
    "grindSize" TEXT,
    "coffeeAmount" DOUBLE PRECISION,
    "waterAmount" DOUBLE PRECISION,
    "waterTemp" INTEGER,
    "brewTimeSec" INTEGER,
    "dripper" TEXT,
    "filterType" TEXT,

    CONSTRAINT "BrewLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BrewStep" (
    "id" SERIAL NOT NULL,
    "brewLogId" INTEGER NOT NULL,
    "stepNumber" INTEGER NOT NULL,
    "cumulativeAmount" DOUBLE PRECISION NOT NULL,
    "timeSeconds" INTEGER NOT NULL,

    CONSTRAINT "BrewStep_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BrewStep_brewLogId_stepNumber_key" ON "BrewStep"("brewLogId", "stepNumber");

-- AddForeignKey
ALTER TABLE "BrewStep" ADD CONSTRAINT "BrewStep_brewLogId_fkey" FOREIGN KEY ("brewLogId") REFERENCES "BrewLog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
