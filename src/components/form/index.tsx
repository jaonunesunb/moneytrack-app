import React, { useState, useEffect, useRef } from "react";
import { StyledForm } from "./styles";
import InputMask from "react-input-mask";
import * as yup from "yup";
import { ITransaction } from "../../interfaces/Finances";
import { transactionSchema } from "../../schemas/transactions.schema";

interface FormProps {
  listTransactions: ITransaction[];
  setListTransactions: React.Dispatch<React.SetStateAction<ITransaction[]>>;
}

const Form: React.FC<FormProps> = ({
  listTransactions,
  setListTransactions,
}) => {
  const [transaction, setTransaction] = useState<ITransaction>({
    id: "",
    description: "",
    value: 0,
    type: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const descriptionRef = useRef<HTMLInputElement>(null);
  const valueRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    transactionSchema
      .validate(transaction, { abortEarly: false })
      .then(() => {
        const newTransaction: ITransaction = {
          id: generateId(),
          description: transaction.description,
          value: transaction.value,
          type: transaction.type,
        };
        setListTransactions([newTransaction, ...listTransactions]);
        setTransaction({
          id: newTransaction.id,
          description: "",
          value: 0,
          type: "",
        });
        setErrors({});
      })
      .catch((error: yup.ValidationError) => {
        const validationErrors: { [key: string]: string } = {};
        error.inner.forEach((err: yup.ValidationError) => {
          validationErrors[err.path as string] = err.message;
        });
        setErrors(validationErrors);
      });
  }

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    const parsedValue = name === "value" ? parseFloat(value) : value;

    setTransaction((prevState) => ({
      ...prevState,
      [name]: parsedValue,
    }));
  }

  function generateId(): string {
    return Math.random().toString(36).substring(7);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <p>Descrição</p>
        <input
          ref={descriptionRef}
          className="inputDescription"
          type="text"
          name="description"
          value={transaction.description}
          onChange={handleInputChange}
          placeholder="Insira sua descrição"
          required
        />
        {errors.description && <p className="error">{errors.description}</p>}
        <p>Ex: Compra de roupas</p>
      </div>
      <div className="divInputValor">
      <label htmlFor="value">Valor</label>
      <InputMask
          mask="R$ 9999,99"
          value={transaction.value || ""}
          onChange={handleInputChange}
          name="value"
          placeholder="R$ 0,00"
          required
        />
        {errors.value && <p className="error">{errors.value}</p>}
        <label htmlFor="type">Tipo de Transação</label>
        <select
          ref={typeRef}
          name="type"
          value={transaction.type}
          onChange={handleInputChange}
          required
        >
          <option value="">Selecione o tipo</option>
          <option value="Entrada">Entrada</option>
          <option value="Saída">Saída</option>
        </select>
        {errors.type && <p className="error">{errors.type}</p>}
      </div>
      <button type="submit">Inserir valor</button>
    </StyledForm>
  );
};

export default Form;
