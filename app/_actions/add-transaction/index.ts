"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { addTransactionSchema } from "./schema";

interface addTransactionProps {
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const addTransaction = async (params: addTransactionProps) => {
  addTransactionSchema.parse(params);

  const { userId } = auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  const res = await db.transaction.create({
    data: { ...params, userId },
  });
  return res;
};
