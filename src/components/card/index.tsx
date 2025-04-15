import React from "react";
import { StyledCard, StyledTrashButton } from "./styles";
import Trash from "../../assets/trash.png";

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
      <div className="content">
        <p className="description">{transaction.description}</p>
        <p className="type">{transaction.type}</p>
      </div>
      <div className="value">
        <p>R${transaction.value}</p>
      </div>
      <StyledTrashButton onClick={handleDeleteTransaction}>
        <img src={Trash} alt="Deletar" />
      </StyledTrashButton>
    </StyledCard>
  );
};

export default Card;
