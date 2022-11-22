// import ExpenseItem from "./ExpenseItem";
import "../../../src/styles/ExpensiveStyle/Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensiveList from "./ExpensiveList";
import ExpensiveChart from "./ExpensiveChart";
const Expense = (props) => {
  const [filterYear, setFilterYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    console.log(selectedYear);
  };
  // hàm lọc item từ app, trả ra 1 arr mới đã lọc để ExpéniveItem lấy
  // làm nguyên liệu render
  const filteredExpensive = props.item.filter((eleOfItem) => {
    // Condition viết sau return với filter lấy từ state
    return eleOfItem.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expense">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={(selectedYear) => filterChangeHandler(selectedYear)}
      />
      <ExpensiveChart expenses={filteredExpensive} />
      {/* Truyền động: Dùng map để tạo 1 arr mới, thay đổi các 
      phần tử bên trong sau khi nhận arr từ hàm filt
       */}
      {/* {filteredExpensive.length === 0 && <p> No results! add for more 😁</p>} */}
      <ExpensiveList items={filteredExpensive} />

      {/* Truyền giá trị tĩnh */}
      {/* <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      />
      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      />
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      />
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      /> */}
    </Card>
  );
};

export default Expense;
