import React from "react";
import Card from "../card";
import { ITransaction } from "../../interfaces/Finances";
import { StyledList } from "./styles";

interface ListProps {
  filteredList: ITransaction[];
  onDeleteTransaction: (id: string) => void;
}

const List: React.FC<ListProps> = ({ filteredList, onDeleteTransaction }) => {
  return (
    <StyledList>
      <ul>
        {filteredList.map((transaction: ITransaction) => (
          <Card
            transaction={transaction}
            key={transaction.id}
            onDeleteTransaction={onDeleteTransaction}
          />
        ))}
      </ul>
    </StyledList>
  );
};

export default List;
