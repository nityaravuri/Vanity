// src/components/dashboards/FinanceDashboard.tsx

import React from 'react';
import { mockFinanceData } from '../../data/mockRetailerData';
import { Download, Banknote } from 'lucide-react'; // <-- FIXED

// In a real app, this would be:
// const { financeData } = useFinance();

const FinanceDashboard: React.FC = () => {
  const data = mockFinanceData;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-semibold flex items-center">
            <Banknote className="h-5 w-5 mr-3 text-zinc-600" />
            Finance & Payouts
          </h3>
          <p className="text-sm text-gray-500">
            Next payout scheduled for: {data.nextPayoutDate}
          </p>
        </div>
        <button className="flex items-center px-4 py-2 bg-zinc-100 text-zinc-700 text-sm font-medium rounded-md hover:bg-zinc-200">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </button>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <p className="text-sm font-medium text-green-700">Available for Payout</p>
          <p className="text-3xl font-semibold text-green-800">
            ${data.availableBalance.toFixed(2)}
          </p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <p className="text-sm font-medium text-yellow-700">Pending (from recent sales)</p>
          <p className="text-3xl font-semibold text-yellow-800">
            ${data.pendingBalance.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Transaction History */}
      <h4 className="text-lg font-semibold mb-4">Recent Transactions</h4>
      <div className="divide-y divide-gray-200">
        {data.recentTransactions.map(tx => (
          <div key={tx.id} className="flex justify-between items-center py-3">
            <div>
              <p className="font-medium">{tx.description}</p>
              <p className="text-sm text-gray-500">{tx.date} - 
                <span className={`ml-1 ${
                  tx.type === 'Pending' ? 'text-yellow-600' : 'text-gray-500'
                }`}>
                  {tx.type}
                </span>
              </p>
            </div>
            <p className={`text-lg font-semibold ${
              tx.amount > 0 ? 'text-green-600' : 'text-zinc-800'
            }`}>
              {tx.amount > 0 ? '+' : ''}${tx.amount.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinanceDashboard;