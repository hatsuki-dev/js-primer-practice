class Budget {
    constructor() {
        this.records = [];
    }
}

const budget = new Budget();
budget.addIncome(300000, "給料");
budget.addExpense(80000, "家賃");
budget.addExpense(30000, "食費");
budget.addExpense(5000, "食費");

getExpenseByLabel(){
    const result = new Map();
    for (const record of this.records){
        if (record.type === "Income"){continue;}
    }
    
}
