import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import axios from 'axios';

const TransactionImport = () => {
  const { email } = useContext(UserContext);
  const [transactionData, setTransactionData] = useState('');
  const [isImporting, setIsImporting] = useState(false);
  const [importResult, setImportResult] = useState(null);
  const [error, setError] = useState('');

  const handleImport = async () => {
    if (!email) {
      setError('Please enter your email first');
      return;
    }

    if (!transactionData.trim()) {
      setError('Please paste your transaction data');
      return;
    }

    setIsImporting(true);
    setError('');
    setImportResult(null);

    try {
      const response = await axios.post('http://localhost:5001/api/users/import-transactions', {
        email,
        transactionData
      });

      setImportResult(response.data);
    } catch (err) {
      console.error('Error importing transactions:', err);
      setError(err.response?.data?.message || 'Error importing transactions');
    } finally {
      setIsImporting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Import Transaction Data</h2>
      <p className="text-gray-600 mb-4">
        Paste your transaction data below to import it into your financial profile.
        This will help provide more accurate financial advice.
      </p>
      
      <textarea
        className="w-full h-64 p-3 border border-gray-300 rounded-md mb-4 font-mono text-sm"
        placeholder="Paste your transaction data here (tab-separated values)..."
        value={transactionData}
        onChange={(e) => setTransactionData(e.target.value)}
      />
      
      <button
        className={`px-6 py-3 rounded-md font-semibold text-white ${
          isImporting ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
        }`}
        onClick={handleImport}
        disabled={isImporting}
      >
        {isImporting ? 'Importing...' : 'Import Transactions'}
      </button>
      
      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      {importResult && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
          <h3 className="font-semibold mb-2">Import Successful!</h3>
          <p>Imported {importResult.incomeCount} income transactions and {importResult.expenseCount} expense transactions.</p>
          
          <h4 className="font-semibold mt-3 mb-2">Top Spending Categories:</h4>
          <ul className="list-disc pl-5">
            {importResult.topSpendingCategories.map((category, index) => (
              <li key={index}>
                {category.category}: ₹{category.total.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TransactionImport;