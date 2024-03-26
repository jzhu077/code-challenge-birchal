import * as fs from "fs";

enum TransactionTypes {
  INCOMPLETE = "INCOMPLETE",
  PURCHASED = "PURCHASED",
  REFUND = "REFUND",
}

interface TransactionHistoryItem {
  name: string;
  numberOfShares: number;
  dateOfPurchase: string;
  status: TransactionTypes;
}

interface ProcessedTransactions {
  [key: string] : Transaction
}

interface Transaction{
  name: string;
  totalShares: number;
  weight: number;
}

const getWeightByStatus = (type: string, dateOfPurchase: string, numberOfShares: number) => {
  switch (type){
    case TransactionTypes.REFUND:
      return -1;
    case TransactionTypes.PURCHASED:
      const now = new Date();
      if (new Date(dateOfPurchase) >= new Date(now.setMonth(now.getMonth() - 6))) {
        return 1.5;
      }
      if (numberOfShares > 1000){
        return 1.25;
      }
      return 1;
    case TransactionTypes.INCOMPLETE:
    default:
      return 0;
  }
}

const getTotalShares = (numberOfShares: number, type: TransactionTypes):number => {
  switch (type) {
    case TransactionTypes.REFUND:
      return numberOfShares * -1;
    case TransactionTypes.PURCHASED:
      return numberOfShares;
    case TransactionTypes.INCOMPLETE:
    default:
      return 0;
  }
}

const sortFn = (a: Transaction, b: Transaction): number => {
  if (a.weight > b.weight){
    return -1;
  } else if (a.weight < b.weight) {
    return 1;
  }
  return 0;
}

const main = () => {
  const data = fs.readFileSync("./src/transaction_history.json", "utf-8");

  // Your code here
  const transactions :TransactionHistoryItem[] = JSON.parse(data)
  const processedTransactions:ProcessedTransactions = {};
  for (let i = 0; i < transactions.length; i++){
    const {status, numberOfShares, name, dateOfPurchase} =transactions[i];
    const weight = getWeightByStatus(status, dateOfPurchase, numberOfShares);
    if (!processedTransactions[name]){
      processedTransactions[name] = {
        name: name,
        totalShares: getTotalShares(numberOfShares, status),
        weight
      }
    } else {
      processedTransactions[name] = {
        name: name,
        totalShares: processedTransactions[name].totalShares + getTotalShares(numberOfShares, status),
        weight: processedTransactions[name].weight + weight
      }
    }
  }

  const result = Object.values(processedTransactions).sort(sortFn);
  console.table(result, ["name", "totalShares", "weight"]);
};

main();
