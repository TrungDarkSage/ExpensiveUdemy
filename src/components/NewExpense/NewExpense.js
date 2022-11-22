import "../../../src/styles/NewExpensiveStyle/NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (updExpenseData) => {
    const expenseData = {
      // sao chép lại các cặp key - prop của
      // Obj expenseData vào submitHandler
      ...updExpenseData,
      //  và tạo thêm 1 khóa id
      // id: Math.random().toString(),
      id: Math.floor(Math.random() * 1000).toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setEditForm(false);
  };
  const [editForm, setEditForm] = useState(false);

  const toFormHandler = () => {
    setEditForm(true);
  };

  const hidFormHandler = () => {
    setEditForm(false);
  };

  return (
    <div className="new-expense">
      {/* prop onSave phải là 1 hàm và hàm được gọi 
      khi có event bên trong component Form (submited)*/}
      {editForm === false && (
        <button onClick={() => toFormHandler()}>Add New Expensive</button>
      )}
      {editForm === true && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hidFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
