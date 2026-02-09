import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

const ExpenseItem = () => {
  const date = new Date(2024, 10, 12);
  const title = "New book";
  const price = 30.99;

  return (
    <div className="expense-item">
      <div>{date.toString()}</div>
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item_price">{price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
