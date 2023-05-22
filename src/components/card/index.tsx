import React from "react";
import StyledCard from "./styles";
import Trash from "../../assets/trash.png"

import { ITransaction } from "../../interfaces/Finances";

interface CardProps {
  transaction: ITransaction;
  onDeleteTransaction: (id: string) => void;
}

const Card: React.FC<CardProps> = ({ transaction, onDeleteTransaction }) => {
  const handleDeleteTransaction = () => {
    onDeleteTransaction(transaction.id);
  };

  return (
    <StyledCard>
      <div className="div1">
        <p className="maior">{transaction.description}</p>
        <p className="entradamenor">{transaction.type}</p>
      </div>
      <div className="div2">
        <p className="vlor">R${transaction.value}</p>
      </div>
      <div className="divIMGBTN">
        <button onClick={handleDeleteTransaction}>
          <img src={Trash} alt="Deletar" />
        </button>
      </div>
    </StyledCard>
  );
};

export default Card;
