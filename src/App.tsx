import React, { useState, useEffect } from "react";
import Form from "./components/form";
import MoneyTrack from "../src/assets/MoneyTrack.png";
import List from "./components/listCard";
import TotalMoney from "./components/totalMoney";
import { StyleAPP, BtnsFilter } from "./AppStyles";
import { ITransaction } from "../src/interfaces/Finances/index";
import generatePDFReport from "./components/transactions_report";

const App: React.FC = () => {
  const [listTransactions, setListTransactions] = useState<ITransaction[]>([]);
  const [activeFilter, setActiveFilter] = useState<"all" | "entries" | "exits">(
    "all"
  );

  const filteredList = listTransactions.filter((item) => {
    if (activeFilter === "entries") {
      return item.type === "Entrada";
    }

    if (activeFilter === "exits") {
      return item.type === "Saída";
    }

    return true;
  });

  const handleGeneratePDF = () => {
    generatePDFReport(filteredList);
  };

  const handleDeleteTransaction = (id: string) => {
    const updatedTransactions = listTransactions.filter(
      (transaction) => transaction.id !== id
    );
    setListTransactions(updatedTransactions);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("listTransactions");
    if (storedData) {
      setListTransactions(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("listTransactions", JSON.stringify(listTransactions));
  }, [listTransactions]);

  const hasTransactions = listTransactions.length > 0;

  return (
    <StyleAPP>
      <header>
        <div className="DivHeader">
          <img className="ImgLogo" alt="Logo MoneyTracker" src={MoneyTrack} />{" "}
          <button className="BtnBegin" onClick={handleGeneratePDF}>
            Gerar Relatório
          </button>
        </div>
      </header>
      <section className="secBarca">
        <div className="divForm">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <div className={`divList ${!hasTransactions ? "emptyList" : ""}`}>
          <div className="DivBtnsFilters">
            <BtnsFilter
              active={activeFilter === "all"}
              onClick={() => setActiveFilter("all")}
            >
              Todos
            </BtnsFilter>

            <BtnsFilter
              active={activeFilter === "entries"}
              onClick={() => setActiveFilter("entries")}
            >
              Entradas
            </BtnsFilter>

            <BtnsFilter
              active={activeFilter === "exits"}
              onClick={() => setActiveFilter("exits")}
            >
              Saídas
            </BtnsFilter>
          </div>

          {hasTransactions ? (
            <List
              filteredList={filteredList}
              onDeleteTransaction={handleDeleteTransaction}
            />
          ) : (
            <p>Não há transações</p>
          )}
        </div>
      </section>
    </StyleAPP>
  );
};

export default App;
