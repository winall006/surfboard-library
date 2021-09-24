-- CreateTable
CREATE TABLE "Books" (
    "bookId" TEXT NOT NULL,
    "bookName" VARCHAR(30) NOT NULL,
    "author" VARCHAR(30) NOT NULL,
    "category" VARCHAR(15) NOT NULL,
    "availablity" BOOLEAN NOT NULL,

    CONSTRAINT "Books_pkey" PRIMARY KEY ("bookId")
);

-- CreateTable
CREATE TABLE "Issue" (
    "employeeId" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,
    "bookName" VARCHAR(30) NOT NULL,
    "issueDate" VARCHAR(10) NOT NULL,

    CONSTRAINT "Issue_pkey" PRIMARY KEY ("bookId")
);

-- CreateTable
CREATE TABLE "Return" (
    "employeeId" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,
    "bookName" VARCHAR(30) NOT NULL,
    "returnDate" VARCHAR(10) NOT NULL,

    CONSTRAINT "Return_pkey" PRIMARY KEY ("bookId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Issue_employeeId_key" ON "Issue"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "Return_employeeId_key" ON "Return"("employeeId");
