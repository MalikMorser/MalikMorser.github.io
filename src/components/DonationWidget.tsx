import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, DollarSign } from 'lucide-react';

interface DonationWidgetProps {
  lang: 'en' | 'ru';
}

export const DonationWidget: React.FC<DonationWidgetProps> = ({ lang }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(15);
  const [customAmount, setCustomAmount] = useState<string>('');

  const t = {
    other: lang === 'en' ? 'Other amount' : 'Другая сумма',
    support: lang === 'en' ? 'SUPPORT NOW' : 'ПОДДЕРЖАТЬ',
    currency: '$'
  };

  const amounts = [5, 10, 15, 25, 50, 100];

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (/^\d*$/.test(val)) {
      setCustomAmount(val);
      setSelectedAmount(null);
    }
  };

  const handleSupportClick = () => {
    // In a real integration, this might pass the amount to the URL or a payment processor.
    // For now, it just opens the link as requested.
    window.open('https://boosty.to/malikjan/donate', '_blank');
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-[#050505] border border-white/10 rounded-[2rem] overflow-hidden p-8 md:p-10 shadow-2xl relative group">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {/* Amount Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6 relative z-10">
        {amounts.map((amount) => (
          <button
            key={amount}
            onClick={() => handleAmountClick(amount)}
            className={`relative h-20 rounded-2xl border border-white/10 font-black text-2xl flex items-center justify-center transition-all duration-300 ${
              selectedAmount === amount
                ? 'bg-white text-black scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                : 'bg-white/5 text-white hover:bg-white/10 hover:border-white/20'
            }`}
          >
            {selectedAmount === amount && (
              <motion.div
                layoutId="activeCheck"
                className="absolute top-2 right-2 text-black"
              >
                <Check size={14} strokeWidth={4} />
              </motion.div>
            )}
            <span className="flex items-start">
              <span className="text-sm mt-1 mr-1 opacity-60 font-medium">$</span>
              {amount}
            </span>
          </button>
        ))}
      </div>

      {/* Custom Amount */}
      <div className={`relative flex items-center mb-8 transition-all duration-300 z-10 ${selectedAmount === null ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}>
        <div className="absolute left-6 text-white/40">
          <DollarSign size={20} />
        </div>
        <input
          type="text"
          value={customAmount}
          onChange={handleCustomAmountChange}
          placeholder={t.other}
          className={`w-full bg-transparent border rounded-2xl py-5 pl-14 pr-6 text-white font-bold text-lg outline-none transition-all ${
            selectedAmount === null
              ? 'border-cyber-amber bg-cyber-amber/5 shadow-[0_0_15px_rgba(255,184,0,0.1)]'
              : 'border-white/10 bg-white/5 focus:border-white/30'
          }`}
        />
      </div>

      {/* Action Button */}
      <button
        onClick={handleSupportClick}
        className="relative z-10 w-full py-6 bg-cyber-amber hover:bg-white text-black font-black uppercase tracking-[0.2em] text-lg rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(255,184,0,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]"
      >
        {t.support}
      </button>

      {/* Footer Note */}
      <div className="mt-8 text-center relative z-10">
        <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-mono">
          {lang === 'en' ? 'Secure payment via Boosty' : 'Безопасная оплата через Boosty'}
        </p>
      </div>
    </div>
  );
};
