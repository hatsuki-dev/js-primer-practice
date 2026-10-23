class Budget {
    constructor() {
        this.records = [];
    }

    validateAmount(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("金額は0より大きい数字で入れてください");
        }
    }

    addIncome(amount, label) {
        this.validateAmount(amount);
        this.records.push({ type: "income", amount, label });
    }

    addExpense(amount, label) {
        this.validateAmount(amount);
        this.records.push({ type: "expense", amount, label });
    }

    getBalance(){
        let balance = 0;
        for (const record of this.records) {
            if (record.type === "income") {
                balance += record.amount;
            } else if (record.type === "expense") {
                balance -= record.amount;
            }
        }
        return balance;
    }
}

const budget = new Budget();
budget.addIncome(300000, "給料");

try {
  budget.addExpense(-500, "ミス");
} catch (error) {
  console.log("エラー:", error.message);
}

console.log(budget.getBalance());   // ?
