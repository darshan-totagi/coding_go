"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CreditCard, Landmark, Wallet, Check, AlertCircle, Sparkles } from "lucide-react";
import { useApp } from "@/context/AppContext";

interface RazorpayModalProps {
  isOpen: boolean;
  onClose: () => void;
  price?: number;
  planName?: string;
}

const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }
    if ((window as any).Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const RazorpayModal: React.FC<RazorpayModalProps> = ({ isOpen, onClose, price = 299, planName = "Codeplace Premium (1 Year)" }) => {
  const { user, purchasePremium } = useApp();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");
  const [couponSuccess, setCouponSuccess] = useState("");
  const [selectedMethod, setSelectedMethod] = useState<"card" | "upi" | "net" | "wallet">("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const basePrice = price;
  const gst = Math.round(basePrice * 0.18);
  const finalPrice = Math.max(0, basePrice + gst - discount);

  const applyCoupon = () => {
    setCouponError("");
    setCouponSuccess("");
    const cleaned = coupon.trim().toUpperCase();
    if (cleaned === "CODEPLACE50" || cleaned === "DISCOUNT50") {
      setDiscount(Math.round(basePrice * 0.5));
      setCouponSuccess("50% discount coupon applied successfully!");
    } else if (cleaned === "FREECODER") {
      setDiscount(basePrice + gst);
      setCouponSuccess("100% off coupon applied! Platform access unlocked.");
    } else {
      setCouponError("Invalid Coupon Code. Try 'DISCOUNT50' or 'FREECODER'.");
    }
  };

  const handlePayment = async () => {
    setIsProcessing(true);

    if (finalPrice <= 0) {
      // 100% discount, bypass checkout
      purchasePremium();
      setIsProcessing(false);
      setIsDone(true);
      setTimeout(() => {
        onClose();
        setIsDone(false);
      }, 2000);
      return;
    }

    try {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        alert("Failed to load Razorpay SDK. Please check your internet connection.");
        setIsProcessing(false);
        return;
      }

      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: finalPrice * 100, // paise
          currency: "INR",
          receipt: `rcpt_${Date.now()}_${Math.floor(Math.random() * 1000)}`
        })
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(`Failed to create order: ${errorData.error || "Please try again later."}`);
        setIsProcessing(false);
        return;
      }

      const orderData = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_TO9EeHYXIBatt0",
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Codeplace",
        description: planName,
        order_id: orderData.order_id,
        handler: async function (response: any) {
          try {
            setIsProcessing(true);
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                userId: user?.id
              })
            });

            const verifyData = await verifyRes.json();
            if (verifyRes.ok && verifyData.success) {
              purchasePremium();
              setIsDone(true);
              setTimeout(() => {
                onClose();
                setIsDone(false);
              }, 2000);
            } else {
              alert(`Payment verification failed: ${verifyData.error || "Invalid Signature"}`);
            }
          } catch (verifyErr: any) {
            console.error("Verification error:", verifyErr);
            alert("An error occurred during verification. Please contact support.");
          } finally {
            setIsProcessing(false);
          }
        },
        prefill: {
          name: user?.name || "Alex Coder",
          email: user?.email || "alex@codeplace.ai",
          contact: "9999999999"
        },
        notes: {
          plan: planName
        },
        theme: {
          color: "#8b5cf6"
        },
        modal: {
          ondismiss: function () {
            setIsProcessing(false);
          }
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on("payment.failed", function (response: any) {
        alert(`Payment failed: ${response.error.description || "Unknown error"}`);
        setIsProcessing(false);
      });
      rzp.open();
    } catch (err: any) {
      console.error("Payment setup error:", err);
      alert("An unexpected error occurred. Please try again.");
      setIsProcessing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg glass-panel-glow border border-brand-purple-500/30 rounded-2xl overflow-hidden shadow-glass-glow flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-brand-purple-950/40 to-transparent">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center font-bold text-white text-xs">R</span>
            <span className="font-bold text-white tracking-tight">Razorpay Checkout</span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!isDone ? (
          <div className="p-6 space-y-6 overflow-y-auto max-h-[80vh]">
            {/* Purchase Details */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">{planName}</span>
                <span className="font-semibold text-white">₹{basePrice}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">GST (18%)</span>
                <span className="text-gray-300">+₹{gst}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between items-center text-sm text-emerald-400">
                  <span>Coupon Discount</span>
                  <span>-₹{discount}</span>
                </div>
              )}
              <div className="border-t border-white/10 pt-2 flex justify-between items-center font-semibold text-white text-base">
                <span>Total Amount Due</span>
                <span className="text-brand-cyan-400">₹{finalPrice}</span>
              </div>
            </div>

            {/* Coupons */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Promo Coupon Code</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. DISCOUNT50"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="flex-1 px-3 py-2 text-sm rounded-lg glass-input text-white focus:outline-none"
                />
                <button
                  type="button"
                  onClick={applyCoupon}
                  className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white rounded-lg text-sm font-semibold transition"
                >
                  Apply
                </button>
              </div>
              {couponError && <p className="text-xs text-brand-rose-500 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {couponError}</p>}
              {couponSuccess && <p className="text-xs text-emerald-400 flex items-center gap-1"><Check className="w-3 h-3"/> {couponSuccess}</p>}
            </div>

            {/* Payment Method Select */}
            <div className="space-y-3">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Select Payment Method</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: "card", label: "Cards", icon: CreditCard },
                  { id: "upi", label: "UPI Apps", icon: Sparkles },
                  { id: "net", label: "NetBanking", icon: Landmark },
                  { id: "wallet", label: "Wallets", icon: Wallet }
                ].map((method) => {
                  const Icon = method.icon;
                  const isSelected = selectedMethod === method.id;
                  return (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setSelectedMethod(method.id as any)}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border text-sm font-medium transition ${
                        isSelected
                          ? "bg-brand-purple-950/20 border-brand-purple-500 text-white"
                          : "border-white/10 text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isSelected ? "text-brand-purple-400" : "text-gray-400"}`} />
                      {method.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Trigger Button */}
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full py-3 bg-brand-purple-600 hover:bg-brand-purple-700 disabled:bg-brand-purple-800 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition"
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing secure transaction...</span>
                </>
              ) : (
                <span>Pay ₹{finalPrice} & Access Premium</span>
              )}
            </button>
          </div>
        ) : (
          <div className="p-8 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/25 border border-emerald-500/40 flex items-center justify-center text-3xl text-emerald-400">
              ✓
            </div>
            <h3 className="text-xl font-bold text-white">Payment Successful</h3>
            <p className="text-sm text-gray-400">Congratulations! Your {planName} has been activated.</p>
          </div>
        )}
      </div>
    </div>
  );
};
