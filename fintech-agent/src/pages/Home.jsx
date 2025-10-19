import React from 'react';
import Header from '../components/Header';
import ChatWindow from '../components/ChatWindow';
import ChartDisplay from '../components/ChartDisplay';
import FinancialDataForm from '../components/FinancialDataForm';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      <div className="max-w-6xl mx-auto p-6">
        {/* Transaction Import */}
        
        
        {/* Financial Data Form */}
        <FinancialDataForm />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Chat Section */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Financial Coach Chat</h2>
            <ChatWindow />
          </div>

          {/* Charts Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Your Financial Overview</h2>
            <ChartDisplay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;