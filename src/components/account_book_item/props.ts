export enum AmountType {
  Income = 1,
  Expenses = 2,
}

export const basicProps = {
  dateDesc: {
    type: String,
    default: "-",
  },
  amountType: {
    type: Number,
    default: 0,
  },
  amount: {
    type: Number,
    default: 0.0,
  },
};
