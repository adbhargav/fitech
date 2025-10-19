import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import axios from 'axios';

const FinancialDataForm = () => {
  const { email } = useContext(UserContext);
  const [incomeSources, setIncomeSources] = useState([{ source: '', amount: '', frequency: 'monthly' }]);
  const [expenses, setExpenses] = useState([{ category: '', amount: '', frequency: 'monthly' }]);
  const [savingsGoal, setSavingsGoal] = useState({ amount: '', deadline: '' });
  const [investments, setInvestments] = useState([{ type: '', amount: '', riskLevel: 'Moderate' }]);
  const [debt, setDebt] = useState([{ type: '', amount: '', monthlyPayment: '' }]);
  const [message, setMessage] = useState('');

  // Handle income sources
  const handleIncomeChange = (index, field, value) => {
    const newIncomeSources = [...incomeSources];
    newIncomeSources[index][field] = value;
    setIncomeSources(newIncomeSources);
  };

  const addIncomeSource = () => {
    setIncomeSources([...incomeSources, { source: '', amount: '', frequency: 'monthly' }]);
  };

  const removeIncomeSource = (index) => {
    const newIncomeSources = [...incomeSources];
    newIncomeSources.splice(index, 1);
    setIncomeSources(newIncomeSources);
  };

  // Handle expenses
  const handleExpenseChange = (index, field, value) => {
    const newExpenses = [...expenses];
    newExpenses[index][field] = value;
    setExpenses(newExpenses);
  };

  const addExpense = () => {
    setExpenses([...expenses, { category: '', amount: '', frequency: 'monthly' }]);
  };

  const removeExpense = (index) => {
    const newExpenses = [...expenses];
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
  };

  // Handle investments
  const handleInvestmentChange = (index, field, value) => {
    const newInvestments = [...investments];
    newInvestments[index][field] = value;
    setInvestments(newInvestments);
  };

  const addInvestment = () => {
    setInvestments([...investments, { type: '', amount: '', riskLevel: 'Moderate' }]);
  };

  const removeInvestment = (index) => {
    const newInvestments = [...investments];
    newInvestments.splice(index, 1);
    setInvestments(newInvestments);
  };

  // Handle debt
  const handleDebtChange = (index, field, value) => {
    const newDebt = [...debt];
    newDebt[index][field] = value;
    setDebt(newDebt);
  };

  const addDebt = () => {
    setDebt([...debt, { type: '', amount: '', monthlyPayment: '' }]);
  };

  const removeDebt = (index) => {
    const newDebt = [...debt];
    newDebt.splice(index, 1);
    setDebt(newDebt);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter your email first');
      return;
    }

    try {
      const financialData = {
        incomeSources: incomeSources.filter(income => income.source && income.amount),
        expenses: expenses.filter(expense => expense.category && expense.amount),
        savingsGoal: savingsGoal.amount ? savingsGoal : { amount: 0 },
        investments: investments.filter(investment => investment.type && investment.amount),
        debt: debt.filter(debtItem => debtItem.type && debtItem.amount),
      };

      await axios.put(`http://localhost:5001/api/users/update/${email}`, financialData);
      setMessage('Financial data saved successfully!');
    } catch (error) {
      console.error('Error saving financial data:', error);
      setMessage('Error saving financial data. Please try again.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Update Your Financial Information</h2>
      <form onSubmit={handleSubmit}>
        {/* Income Sources */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Income Sources</h3>
          {incomeSources.map((income, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3">
              <input
                type="text"
                placeholder="Source (e.g., Salary)"
                value={income.source}
                onChange={(e) => handleIncomeChange(index, 'source', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                placeholder="Amount"
                value={income.amount}
                onChange={(e) => handleIncomeChange(index, 'amount', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md"
              />
              <select
                value={income.frequency}
                onChange={(e) => handleIncomeChange(index, 'frequency', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
              {incomeSources.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeIncomeSource(index)}
                  className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addIncomeSource}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Income Source
          </button>
        </div>

        {/* Expenses */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Expenses</h3>
          {expenses.map((expense, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3">
              <input
                type="text"
                placeholder="Category (e.g., Rent)"
                value={expense.category}
                onChange={(e) => handleExpenseChange(index, 'category', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                placeholder="Amount"
                value={expense.amount}
                onChange={(e) => handleExpenseChange(index, 'amount', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md"
              />
              <select
                value={expense.frequency}
                onChange={(e) => handleExpenseChange(index, 'frequency', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
              {expenses.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeExpense(index)}
                  className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addExpense}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Expense
          </button>
        </div>

        {/* Savings Goal */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Savings Goal</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="number"
              placeholder="Savings Amount"
              value={savingsGoal.amount}
              onChange={(e) => setSavingsGoal({ ...savingsGoal, amount: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="date"
              placeholder="Deadline"
              value={savingsGoal.deadline}
              onChange={(e) => setSavingsGoal({ ...savingsGoal, deadline: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Investments */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Investments</h3>
          {investments.map((investment, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3">
              <input
                type="text"
                placeholder="Type (e.g., Stock)"
                value={investment.type}
                onChange={(e) => handleInvestmentChange(index, 'type', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                placeholder="Amount"
                value={investment.amount}
                onChange={(e) => handleInvestmentChange(index, 'amount', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md"
              />
              <select
                value={investment.riskLevel}
                onChange={(e) => handleInvestmentChange(index, 'riskLevel', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
              </select>
              {investments.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeInvestment(index)}
                  className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addInvestment}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Investment
          </button>
        </div>

        {/* Debt */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Debt</h3>
          {debt.map((debtItem, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3">
              <input
                type="text"
                placeholder="Type (e.g., Student Loan)"
                value={debtItem.type}
                onChange={(e) => handleDebtChange(index, 'type', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                placeholder="Amount"
                value={debtItem.amount}
                onChange={(e) => handleDebtChange(index, 'amount', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                placeholder="Monthly Payment"
                value={debtItem.monthlyPayment}
                onChange={(e) => handleDebtChange(index, 'monthlyPayment', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md"
              />
              {debt.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeDebt(index)}
                  className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addDebt}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Debt
          </button>
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 font-semibold"
        >
          Save Financial Information
        </button>

        {message && (
          <div className={`mt-4 p-3 rounded-md ${message.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default FinancialDataForm;