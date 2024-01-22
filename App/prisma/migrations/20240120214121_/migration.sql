-- CreateTable
CREATE TABLE "expense" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "formPayment_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "bank_id" INTEGER NOT NULL,
    "value" REAL NOT NULL,
    "created_at" DATETIME NOT NULL,
    CONSTRAINT "expense_formPayment_id_fkey" FOREIGN KEY ("formPayment_id") REFERENCES "formpayment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "expense_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "expense_bank_id_fkey" FOREIGN KEY ("bank_id") REFERENCES "Bank" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Bank" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "card" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "invoice" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "month" DATETIME NOT NULL,
    "opening_date" DATETIME NOT NULL,
    "closed_date" DATETIME NOT NULL,
    "value" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "invoice_id" INTEGER NOT NULL,
    CONSTRAINT "invoice_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "card" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "cardexpense" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "portion" INTEGER NOT NULL,
    "portion_value" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "created_at" DATETIME NOT NULL,
    "card_id" INTEGER NOT NULL,
    "invoice_id" INTEGER NOT NULL,
    CONSTRAINT "cardexpense_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "card" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "cardexpense_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "invoice" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "formpayment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL
);
