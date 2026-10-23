try {
  throw new Error("問題が起きました");
  console.log("ここは、実行されない");
} catch (error) {
  console.log("受け止めた:", error.message);
}




class PiggyBank {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    if (typeof amount !== "number") {
      throw new Error("金額は数字で入れてください");
    }
    if (amount <= 0) {
      throw new Error("0より大きい金額を入れてください");
    }
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}


const bank = new PiggyBank();

try {
  bank.deposit(100);
  bank.deposit(-50);      // ← ここで、エラー
  bank.deposit(200);      // ← 実行されない
} catch (error) {
  console.log("エラー:", error.message);
}

console.log(bank.getBalance());   // ?