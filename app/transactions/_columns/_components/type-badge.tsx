import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { Circle } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type == TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted font-bold text-primary hover:bg-muted">
        <Circle className="mr-2 fill-primary" size={8} />
        Depósito
      </Badge>
    );
  }
  if (transaction.type == TransactionType.EXPENSE) {
    return (
      <Badge className="bg-red-700 bg-opacity-10 font-bold text-red-700 hover:bg-muted">
        <Circle className="mr-2 fill-red-700 text-red-700" size={8} />
        Despesa
      </Badge>
    );
  }

  return (
    <Badge className="bg-white bg-opacity-10 font-bold text-white">
      <Circle className="mr-2 fill-white text-white" size={8} />
      Investimento
    </Badge>
  );
};

export default TypeBadge;
