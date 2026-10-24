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

  getBalance() {
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

  getExpenseByLabel() {
    const result = new Map();

    for (const record of this.records) {
      if (record.type === "income") {
        continue;
      }
      if (result.has(record.label)) {
        result.set(record.label, result.get(record.label) + record.amount);
      } else {
        result.set(record.label, record.amount);
      }
    }

    return result;
  }
}

const budget = new Budget();
budget.addIncome(300000, "給料");
budget.addExpense(80000, "家賃");
budget.addExpense(30000, "食費");
budget.addExpense(5000, "食費");

console.log(budget.getBalance());          // 185000
console.log(budget.getExpenseByLabel());   // Map(2) { '家賃' => 80000, '食費' => 35000 }