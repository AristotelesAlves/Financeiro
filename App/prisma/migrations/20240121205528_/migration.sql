-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_expense" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "formPayment_id" INTEGER NOT NULL,
    "category_id" INTEGER,
    "bank_id" INTEGER NOT NULL,
    "value" REAL NOT NULL,
    "created_at" DATETIME NOT NULL,
    CONSTRAINT "expense_formPayment_id_fkey" FOREIGN KEY ("formPayment_id") REFERENCES "formpayment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "expense_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "expense_bank_id_fkey" FOREIGN KEY ("bank_id") REFERENCES "Bank" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_expense" ("bank_id", "category_id", "created_at", "description", "formPayment_id", "id", "value") SELECT "bank_id", "category_id", "created_at", "description", "formPayment_id", "id", "value" FROM "expense";
DROP TABLE "expense";
ALTER TABLE "new_expense" RENAME TO "expense";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
