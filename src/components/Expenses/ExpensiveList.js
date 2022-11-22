import React from "react";
import ExpenseItem from "./ExpenseItem";
import "../../../src/styles/ExpensiveStyle/ExpensiveList.css";
// import Expense from "./Expense";

const ExpensiveList = (props) => {
  if (props.items.length === 0) {
    return (
      <p className="expenses-list__fallback"> No results! add for more 😁</p>
    );
  }
  return (
    <ul className="expenses-list">
      {props.items.map((eleOfArrfiltered) => (
        <ExpenseItem
          key={eleOfArrfiltered.id}
          title={eleOfArrfiltered.title}
          amount={eleOfArrfiltered.amount}
          date={eleOfArrfiltered.date}
        />
      ))}
    </ul>
  );
};

export default ExpensiveList;
