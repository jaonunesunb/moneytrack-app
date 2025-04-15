import React from "react";
import { StyledMoney } from "./styles";

interface TotalMoneyProps {
  listTransactions: Array<{
    type: string;
    value: number;
  }>;
}

const TotalMoney: React.FC<TotalMoneyProps> = ({ listTransactions }) => {
  const saldoInicial = 0;
  const valorTotal = listTransactions.reduce(
    (saldo: number, transaction: { type: string; value: number }) => {
      if (transaction.type === "Entrada") {
        return saldo + transaction.value;
      } else {
        return saldo - transaction.value;
      }
    },
    saldoInicial
  );

  const saldoClassName = valorTotal < 0 ? "valorTotal_negative" : "valorTotal";
  return (
    <StyledMoney>
      <div className="content">
        <p>Valor total:</p>
        <p className="saldoText">O valor se refere ao saldo disponível</p>
      </div>
      <p className={saldoClassName}>R${valorTotal}</p>
    </StyledMoney>
  );
};

export default TotalMoney;
