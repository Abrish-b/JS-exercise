import getBudgetObject from './task-7';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: (income) => `$${income}`,
    getIncomeInEuros: (income) => `${income} euros`,
  };

  return fullBudget;
}
