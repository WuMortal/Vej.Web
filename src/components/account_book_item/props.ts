export enum AmountType {
  Income = 1,
  Expenses = 2,
}

export const basicProps = {
  dateDesc: {
    type: String,
    default: "-",
  },
  incomeAmount: {
    type: String,
    default: "-",
  },
  expensesAmount: {
    type: String,
    default: "-",
  },
};
