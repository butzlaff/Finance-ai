import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const TRANSACTION_TYPE_OPTIONS = [
  {
    label: "Depósito",
    value: TransactionType.DEPOSIT,
  },
  {
    label: "Despesa",
    value: TransactionType.EXPENSE,
  },
  {
    label: "Investimento",
    value: TransactionType.INVESTIMENT,
  },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    label: "Alimentação",
    value: TransactionCategory.FOOD,
  },
  {
    label: "Transporte",
    value: TransactionCategory.TRANSPORTATION,
  },
  {
    label: "Moradia",
    value: TransactionCategory.HOUSING,
  },
  {
    label: "Educação",
    value: TransactionCategory.EDUCATION,
  },
  {
    label: "Saúde",
    value: TransactionCategory.HEALTH,
  },
  {
    label: "Entretenimento",
    value: TransactionCategory.ENTERTAINMENT,
  },
  {
    label: "Salário",
    value: TransactionCategory.SALARY,
  },
  {
    label: "Utilidade",
    value: TransactionCategory.UTILITY,
  },
  {
    label: "Outras",
    value: TransactionCategory.OTHER,
  },
];

export const TRANSACTION_PAYMENT_OPTIONS = [
  {
    label: "Cartão de Crédito",
    value: TransactionPaymentMethod.CREDIT_CARD,
  },
  {
    label: "Cartão de Débito",
    value: TransactionPaymentMethod.DEBIT_CARD,
  },
  {
    label: "Transferência Bancária",
    value: TransactionPaymentMethod.BANK_TRANSFER,
  },
  {
    label: "Boleto",
    value: TransactionPaymentMethod.BANK_SLIP,
  },
  {
    label: "Dinheiro",
    value: TransactionPaymentMethod.CASH,
  },
  {
    label: "Pix",
    value: TransactionPaymentMethod.PIX,
  },
  {
    label: "Outros",
    value: TransactionPaymentMethod.OTHER,
  },
];
