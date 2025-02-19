import React from 'react';
import { ArrowUpRight, ArrowDownLeft, Check } from 'lucide-react';

const transactions = [
  {
    type: 'sent',
    amount: '1,000',
    currency: 'USDC',
    address: '8xzt...3kj9',
    time: '2 mins ago',
    status: 'completed'
  },
  {
    type: 'received',
    amount: '500',
    currency: 'USDC',
    address: '3fgh...9p2m',
    time: '1 hour ago',
    status: 'completed'
  },
  {
    type: 'sent',
    amount: '2,500',
    currency: 'USDC',
    address: '7yui...4n2p',
    time: '3 hours ago',
    status: 'completed'
  }
];

export function TransactionHistory() {
  return (
    <div className="glass rounded-2xl p-8 border border-indigo-500/20">
      <h3 className="text-2xl font-bold mb-6 gradient-text">Recent Transactions</h3>
      
      <div className="space-y-4">
        {transactions.map((tx, index) => (
          <div key={index} className="glass bg-white/5 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-full ${tx.type === 'sent' ? 'bg-red-500/20' : 'bg-green-500/20'}`}>
                {tx.type === 'sent' ? (
                  <ArrowUpRight className={`h-5 w-5 ${tx.type === 'sent' ? 'text-red-500' : 'text-green-500'}`} />
                ) : (
                  <ArrowDownLeft className={`h-5 w-5 ${tx.type === 'sent' ? 'text-red-500' : 'text-green-500'}`} />
                )}
              </div>
              <div>
                <div className="text-gray-100">{tx.type === 'sent' ? 'Sent to' : 'Received from'}</div>
                <div className="text-gray-400 text-sm">{tx.address}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-gray-100">
                {tx.type === 'sent' ? '-' : '+'}{tx.amount} {tx.currency}
              </div>
              <div className="text-gray-400 text-sm">{tx.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}