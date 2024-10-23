/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMoney, deductMoney } from '../Slices/Budget';
import { addExpense } from '../Slices/Expence';

const Home = () => {
  const dispatch = useDispatch();
  const budget = useSelector((state) => state.budget);
  const expenses = useSelector((state) => state.expense);

  const [money, setMoney] = useState();
  const [reason, setReason] = useState('');

  const handleAddMoney = () => {
    dispatch(addMoney(Number(money)));
  };

  const handleAddExpense = () => {
    if (money > 0) {
      dispatch(deductMoney(Number(money)));
      dispatch(addExpense({ amount: Number(money), reason }));
    }
  };

  return (
    <div>
      <h1>Money Manager</h1>
      <h2>Total Budget: ₹{budget}</h2>

      <input
        type="number"
        value={money}
        onChange={(e) => setMoney(e.target.value)}
        placeholder="Enter money"
      />
      <input
        type="text"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        placeholder="Reason"
      />
      <button onClick={handleAddMoney}>Add Money</button>
      <button onClick={handleAddExpense}>Add Expense</button>

      <h3>Expenses</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            ₹{expense.amount} - {expense.reason}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
