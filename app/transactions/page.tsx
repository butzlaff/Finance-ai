import { db } from "../_lib/prisma";
import { Button } from "../_components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import AddTransactionButton from "../_components/add-transaction-button";

const TransactionsPage = async () => {
  const { userId } = await auth();

  const transactions = await db.transaction.findMany({
    where: {
      userId: userId!,
    },
  });

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
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton />
        </div>
        <DataTable columns={transactionColumns} data={transactions} />
      </div>
    </div>
  );
};

export default TransactionsPage;
