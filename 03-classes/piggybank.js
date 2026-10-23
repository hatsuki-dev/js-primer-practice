class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`こんにちは、${this.name}です。${this.age}歳です。`);
  }
}

const p1 = new Person("はっち", 20);
const p2 = new Person("ひよこ", 1);

p1.greet();
p2.greet();


class PiggyBank {
    constructor() {
        this.balance = 0;
    }
    deposit(amount) {
        this.balance += amount;
    }
    getBalance() {
        return this.balance;
    }
};

const bank = new PiggyBank();
bank.deposit(100);
bank.deposit(250);
console.log(bank.getBalance());   // 350

 
const bank2 = new PiggyBank();
bank2.deposit(10);
console.log(bank.getBalance());    // ?
console.log(bank2.getBalance());   // ?