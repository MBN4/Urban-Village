'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Truck, Smartphone, CreditCard, Send, MapPin, Copy, ArrowLeft } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'method' | 'address' | 'payment-info' | 'success';
type PaymentMethod = 'cod' | 'jazzcash' | 'easypaisa';

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { cartTotal, clearCart } = useCart();
  const [step, setStep] = useState<Step>('method');
  const [method, setMethod] = useState<PaymentMethod | null>(null);
  const [address, setAddress] = useState('');
  const [isCopying, setIsCopying] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopying(true);
    setTimeout(() => setIsCopying(false), 2000);
  };

  const handleNext = () => {
    if (step === 'method') {
      if (method === 'cod') setStep('address');
      else setStep('payment-info');
    } else if (step === 'address' || step === 'payment-info') {
      setStep('success');
      // In success step, we'll clear the cart when the user closes the modal or after a delay
    }
  };

  const handleFinish = () => {
    clearCart();
    onClose();
    // Reset for next time
    setTimeout(() => {
      setStep('method');
      setMethod(null);
      setAddress('');
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-md bg-white rounded-[32px] overflow-hidden shadow-2xl border border-stone-100"
        >
          {/* Navigation Buttons */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8 flex gap-2 z-10">
            {(step === 'address' || step === 'payment-info') && (
              <button 
                onClick={() => setStep('method')}
                className="p-2 md:p-3 hover:bg-stone-100 rounded-full transition-colors flex items-center justify-center text-stone-400 hover:text-stone-900 bg-white/80 backdrop-blur-sm"
                title="Go Back"
              >
                <ArrowLeft size={18} className="md:w-5 md:h-5" />
              </button>
            )}
          </div>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 md:top-8 md:right-8 p-2 md:p-3 hover:bg-stone-100 rounded-full transition-colors z-10 bg-white/80 backdrop-blur-sm"
          >
            <X size={18} className="text-stone-400 md:w-5 md:h-5" />
          </button>

          <div className="pt-16 p-6 md:pt-20 md:p-10">
            <AnimatePresence mode="wait">
              {/* Step 1: Method Selection */}
              {step === 'method' && (
                <motion.div
                  key="method"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <span className="text-[9px] font-bold tracking-[0.4em] text-lime uppercase mb-3 block">PAYMENT</span>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-6 md:mb-8 italic leading-tight">Choose how <br /> to pay.</h2>
                  
                  <div className="space-y-3 mb-8 md:mb-10">
                    {[
                      { id: 'cod', name: 'Cash on Delivery', icon: <Truck size={20} />, desc: 'Pay when your harvest arrives' },
                      { id: 'jazzcash', name: 'JazzCash', icon: <Smartphone size={20} />, desc: 'Instant mobile wallet transfer' },
                      { id: 'easypaisa', name: 'EasyPaisa', icon: <CreditCard size={20} />, desc: 'Simple digital payments' }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setMethod(opt.id as PaymentMethod)}
                        className={`w-full p-4 md:p-5 rounded-[20px] md:rounded-[24px] border-2 text-left flex items-center gap-4 transition-all duration-300 ${
                          method === opt.id 
                            ? 'border-lime bg-lime/5' 
                            : 'border-stone-50 hover:border-stone-100 bg-white'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          method === opt.id ? 'bg-lime text-white' : 'bg-stone-50 text-stone-400'
                        }`}>
                          {opt.icon}
                        </div>
                        <div>
                          <div className="font-bold text-stone-900">{opt.name}</div>
                          <div className="text-xs text-stone-500">{opt.desc}</div>
                        </div>
                        {method === opt.id && (
                          <div className="ml-auto text-lime">
                            <CheckCircle2 size={24} />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>

                  <button
                    disabled={!method}
                    onClick={handleNext}
                    className="w-full bg-stone-900 text-white py-6 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-lime transition-all duration-500 disabled:opacity-20 disabled:cursor-not-allowed shadow-xl shadow-stone-900/10"
                  >
                    Continue to {method === 'cod' ? 'Address' : 'Instructions'}
                  </button>
                </motion.div>
              )}

              {/* Step 2a: Address (COD) */}
              {step === 'address' && (
                <motion.div
                  key="address"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <span className="text-[9px] font-bold tracking-[0.4em] text-lime uppercase mb-3 block">DELIVERY</span>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-6 md:mb-8 italic leading-tight">Where should <br /> we harvest?</h2>
                  
                  <div className="relative mb-8 md:mb-10">
                    <MapPin className="absolute top-5 left-5 text-stone-300" size={16} />
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter your full delivery address..."
                      className="w-full h-32 bg-stone-50 border-2 border-stone-50 rounded-[20px] md:rounded-[24px] p-5 pl-12 focus:outline-none focus:border-lime transition-all resize-none text-sm text-stone-900"
                    />
                  </div>

                  <button
                    disabled={address.length < 10}
                    onClick={handleNext}
                    className="w-full bg-stone-900 text-white py-6 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-lime transition-all duration-500 disabled:opacity-20 shadow-xl shadow-stone-900/10"
                  >
                    Confirm Order — Rs {cartTotal.toLocaleString('en-US')}
                  </button>
                </motion.div>
              )}

              {/* Step 2b: Payment Info (JazzCash/EasyPaisa) */}
              {step === 'payment-info' && (
                <motion.div
                  key="payment-info"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <span className="text-[9px] font-bold tracking-[0.4em] text-lime uppercase mb-3 block">TRANSFER</span>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-6 md:mb-8 italic leading-tight">Finalize your <br /> payment.</h2>
                  
                  <div className="bg-stone-50 rounded-[20px] md:rounded-[24px] p-5 md:p-6 mb-8 md:mb-10 border border-stone-50">
                    <p className="text-xs text-stone-500 mb-5 leading-relaxed">
                      Please transfer to the number below and share a screenshot for verification.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 md:p-4 bg-white rounded-2xl border border-stone-100">
                        <div>
                          <span className="text-[7px] font-bold text-stone-400 uppercase tracking-widest block mb-0.5">Account Number</span>
                          <span className="text-base md:text-lg font-bold text-stone-900">0312-3456789</span>
                        </div>
                        <button 
                          onClick={() => handleCopy('0312-3456789')}
                          className="p-2.5 bg-stone-50 text-stone-400 hover:text-lime rounded-xl transition-colors"
                        >
                          {isCopying ? <CheckCircle2 size={16} className="text-lime" /> : <Copy size={16} />}
                        </button>
                      </div>

                      <div className="flex justify-between items-center p-3 md:p-4 bg-white rounded-2xl border border-stone-100">
                        <div>
                          <span className="text-[7px] font-bold text-stone-400 uppercase tracking-widest block mb-0.5">Total Amount</span>
                          <span className="text-base md:text-lg font-bold text-lime">Rs {cartTotal.toLocaleString('en-US')}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <button
                      onClick={handleNext}
                      className="w-full bg-stone-900 text-white py-6 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-lime transition-all duration-500 shadow-xl shadow-stone-900/10 flex items-center justify-center gap-3"
                    >
                      I've sent the screenshot <Send size={16} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Success */}
              {step === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-24 h-24 bg-lime/10 rounded-full flex items-center justify-center text-lime mx-auto mb-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 10, stiffness: 100 }}
                    >
                      <CheckCircle2 size={48} />
                    </motion.div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 italic leading-tight">Order Confirmed!</h2>
                  <p className="text-stone-500 mb-8 md:mb-12 max-w-xs mx-auto leading-relaxed text-sm md:text-base">
                    Thank you for choosing Urban Village. Your fresh harvest will be on its way to you shortly.
                  </p>

                  <button
                    onClick={handleFinish}
                    className="w-full bg-stone-900 text-white py-6 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-lime transition-all duration-500 shadow-xl shadow-stone-900/10"
                  >
                    Back to Village
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
