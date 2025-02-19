import React, { useState } from 'react';
import { Send, ArrowRight, Wallet } from 'lucide-react';

export function PaymentForm() {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [currency, setCurrency] = useState('USDC');

  return (
    <div className="glass rounded-2xl p-8 border border-indigo-500/20">
      <h3 className="text-2xl font-bold mb-6 gradient-text">Send Payment</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-gray-300 mb-2">Amount</label>
          <div className="flex gap-4">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 glass bg-white/5 rounded-xl px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="0.00"
            />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="glass bg-white/5 rounded-xl px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="USDC">USDC</option>
              <option value="SOL">SOL</option>
              <option value="USDT">USDT</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Recipient Address</label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full glass bg-white/5 rounded-xl px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Solana wallet address"
          />
        </div>

        <div className="pt-4">
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-4 rounded-xl hover:glow transition-all duration-300 flex items-center justify-center space-x-2">
            <Send className="h-5 w-5" />
            <span>Send Payment</span>
          </button>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-400 mt-4">
          <span>Network Fee: ~$0.001</span>
          <span>Expected Time: &lt;1s</span>
        </div>
      </div>
    </div>
  );
}