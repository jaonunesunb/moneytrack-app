import * as yup from "yup";

export const transactionSchema = yup.object().shape({
  description: yup.string().required("A descrição da transação é obrigatória"),
  value: yup
    .number()
    .required("O valor da transação é obrigatório")
    .min(1, "O valor da transação não pode ser negativo e nem zero"),
  type: yup
    .string()
    .oneOf(
      ["Entrada", "Saída"],
      "O tipo da transação deve ser Entrada ou Saída"
    )
    .required("O tipo da transação é obrigatório"),
});
