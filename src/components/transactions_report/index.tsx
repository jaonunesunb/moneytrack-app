import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { ITransaction } from "../../interfaces/Finances";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

type TDocumentDefinitions = {
  content: any[];
  styles?: any;
};

const generatePDFReport = (transactions: ITransaction[]) => {
  
  const reportItems = [];

  reportItems.push({ text: "Relatório de Transações", style: "header" });
  reportItems.push({ text: "\n" });

  
  transactions.forEach((transaction) => {
    const { type, value, description } = transaction;
    const transactionInfo = `Descrição: ${description}\nTipo: ${type}\nValor: R$ ${value}\n`;
    reportItems.push({ text: transactionInfo, style: "transaction" });
  });

  const totalBalance = transactions.reduce((total, transaction) => {
    if (transaction.type === "Entrada") {
      return total + transaction.value;
    } else {
      return total - transaction.value;
    }
  }, 0);
  const balanceColor = totalBalance < 0 ? "red" : "black";
  reportItems.push({ text: "Saldo Total:", style: "totalBalanceLabel" });
  reportItems.push({
    text: `R$ ${totalBalance}`,
    style: { totalBalanceValue: { color: balanceColor } },
  });

  const content: TDocumentDefinitions["content"] = [...reportItems];

  const docStyles: TDocumentDefinitions["styles"] = {
    header: { fontSize: 18, bold: true, marginBottom: 10 },
    transaction: { fontSize: 12, marginBottom: 10 },
    totalBalanceLabel: { fontSize: 14, bold: true, marginBottom: 5 },
    totalBalanceValue: { fontSize: 14, bold: true },
    customStyle: { fontSize: 16, italics: true, color: "blue" }, // Exemplo de estilo personalizado
  };

  // Defina as opções do documento PDF
  const docDefinition: TDocumentDefinitions = {
    content,
    styles: docStyles,
  };

  // Gere o documento PDF
  const pdfDoc = pdfMake.createPdf(docDefinition);

  // Baixe o arquivo PDF
  pdfDoc.download("relatorio-transacoes.pdf");
};

export default generatePDFReport;
