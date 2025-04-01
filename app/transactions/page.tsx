import React from "react";
import { db } from "../_lib/prisma";
import { Button } from "../_components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ArrowDownUpIcon } from "lucide-react";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany();

  const { userId } = auth();

  if (!userId) {
    redirect("/login");
  }

  return (
    <div>
      <div className="itens-center flex w-full justify-between p-6">
        <Button className="rounded-lg">Home</Button>
        <UserButton showName />
      </div>
      <div className="space-y-6 p-6">
        <div className="itens-center flex w-full justify-between">
          <h2 className="text-2xl font-bold">Transações</h2>
          <Button className="rounded-full font-bold">
            Adicionar Transação
            <ArrowDownUpIcon />
          </Button>
        </div>
        <DataTable columns={transactionColumns} data={transactions} />
      </div>
    </div>
  );
};

export default TransactionsPage;
