(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_c91c72._.js", {

"[project]/src/components/RazorpayModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RazorpayModal": (()=>RazorpayModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/context/AppContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.mjs [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/landmark.mjs [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/wallet.mjs [app-client] (ecmascript) <export default as Wallet>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const API_URL = ("TURBOPACK compile-time value", "http://localhost:5000") || "http://localhost:5000";
const loadRazorpayScript = ()=>{
    return new Promise((resolve)=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        if (window.Razorpay) {
            resolve(true);
            return;
        }
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = ()=>resolve(true);
        script.onerror = ()=>resolve(false);
        document.body.appendChild(script);
    });
};
const RazorpayModal = ({ isOpen, onClose, price = 299, planName = "Codeplace Premium (1 Year)" })=>{
    _s();
    const { user, purchasePremium } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const [coupon, setCoupon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [discount, setDiscount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [couponError, setCouponError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [couponSuccess, setCouponSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedMethod, setSelectedMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("card");
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDone, setIsDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const basePrice = price;
    const gst = Math.round(basePrice * 0.18);
    const finalPrice = Math.max(0, basePrice + gst - discount);
    const applyCoupon = ()=>{
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
    const handlePayment = async ()=>{
        setIsProcessing(true);
        if (finalPrice <= 0) {
            // 100% discount, bypass checkout
            purchasePremium();
            setIsProcessing(false);
            setIsDone(true);
            setTimeout(()=>{
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
            const res = await fetch(`${API_URL}/api/create-order`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    amount: finalPrice * 100,
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
                key: ("TURBOPACK compile-time value", "rzp_test_TO9EeHYXIBatt0") || "rzp_test_TO9EeHYXIBatt0",
                amount: orderData.amount,
                currency: orderData.currency,
                name: "Codeplace",
                description: planName,
                order_id: orderData.order_id,
                handler: async function(response) {
                    try {
                        setIsProcessing(true);
                        const verifyRes = await fetch(`${API_URL}/api/verify-payment`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
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
                            setTimeout(()=>{
                                onClose();
                                setIsDone(false);
                            }, 2000);
                        } else {
                            alert(`Payment verification failed: ${verifyData.error || "Invalid Signature"}`);
                        }
                    } catch (verifyErr) {
                        console.error("Verification error:", verifyErr);
                        alert("An error occurred during verification. Please contact support.");
                    } finally{
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
                    ondismiss: function() {
                        setIsProcessing(false);
                    }
                }
            };
            const rzp = new window.Razorpay(options);
            rzp.on("payment.failed", function(response) {
                alert(`Payment failed: ${response.error.description || "Unknown error"}`);
                setIsProcessing(false);
            });
            rzp.open();
        } catch (err) {
            console.error("Payment setup error:", err);
            alert("An unexpected error occurred. Please try again.");
            setIsProcessing(false);
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-lg glass-panel-glow border border-brand-purple-500/30 rounded-2xl overflow-hidden shadow-glass-glow flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-brand-purple-950/40 to-transparent",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center font-bold text-white text-xs",
                                    children: "R"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RazorpayModal.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-white tracking-tight",
                                    children: "Razorpay Checkout"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RazorpayModal.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RazorpayModal.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-400 hover:text-white transition",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RazorpayModal.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/RazorpayModal.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RazorpayModal.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this),
                !isDone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-6 overflow-y-auto max-h-[80vh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-xl bg-white/5 border border-white/10 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400",
                                            children: planName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RazorpayModal.tsx",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-white",
                                            children: [
                                                "₹",
                                                basePrice
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RazorpayModal.tsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RazorpayModal.tsx",
                                    lineNumber: 198,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400",
                                            children: "GST (18%)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RazorpayModal.tsx",
                                            lineNumber: 203,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-300",
                                            children: [
                                                "+₹",
                                                gst
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RazorpayModal.tsx",
                                            lineNumber: 204,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RazorpayModal.tsx",
                                    lineNumber: 202,
                                    columnNumber: 15
                                }, this),
                                discount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center text-sm text-emerald-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Coupon Discount"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RazorpayModal.tsx",
                                            lineNumber: 208,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "-₹",
                                                discount
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RazorpayModal.tsx",
                                            lineNumber: 209,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RazorpayModal.tsx",
                                    lineNumber: 207,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-white/10 pt-2 flex justify-between items-center font-semibold text-white text-base",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Total Amount Due"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RazorpayModal.tsx",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-brand-cyan-400",
                                            children: [
                                                "₹",
                                                finalPrice
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RazorpayModal.tsx",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RazorpayModal.tsx",
                                    lineNumber: 212,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RazorpayModal.tsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-semibold text-gray-400 uppercase tracking-wider block",
                                    children: "Promo Coupon Code"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RazorpayModal.tsx",
                                    lineNumber: 220,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "e.g. DISCOUNT50",
                                            value: coupon,
                                            onChange: (e)=>setCoupon(e.target.value),
                                            className: "flex-1 px-3 py-2 text-sm rounded-lg glass-input text-white focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RazorpayModal.tsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: applyCoupon,
                                            className: "px-4 py-2 bg-white/10 hover:bg-white/15 text-white rounded-lg text-sm font-semibold transition",
                                            children: "Apply"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RazorpayModal.tsx",
                                            lineNumber: 229,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RazorpayModal.tsx",
                                    lineNumber: 221,
                                    columnNumber: 15
                                }, this),
                                couponError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-brand-rose-500 flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RazorpayModal.tsx",
                                            lineNumber: 237,
                                            columnNumber: 98
                                        }, this),
                                        " ",
                                        couponError
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RazorpayModal.tsx",
                                    lineNumber: 237,
                                    columnNumber: 31
                                }, this),
                                couponSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-emerald-400 flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RazorpayModal.tsx",
                                            lineNumber: 238,
                                            columnNumber: 97
                                        }, this),
                                        " ",
                                        couponSuccess
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RazorpayModal.tsx",
                                    lineNumber: 238,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RazorpayModal.tsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-semibold text-gray-400 uppercase tracking-wider block",
                                    children: "Select Payment Method"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RazorpayModal.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        {
                                            id: "card",
                                            label: "Cards",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"]
                                        },
                                        {
                                            id: "upi",
                                            label: "UPI Apps",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
                                        },
                                        {
                                            id: "net",
                                            label: "NetBanking",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"]
                                        },
                                        {
                                            id: "wallet",
                                            label: "Wallets",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"]
                                        }
                                    ].map((method)=>{
                                        const Icon = method.icon;
                                        const isSelected = selectedMethod === method.id;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setSelectedMethod(method.id),
                                            className: `flex items-center gap-3 p-3.5 rounded-xl border text-sm font-medium transition ${isSelected ? "bg-brand-purple-950/20 border-brand-purple-500 text-white" : "border-white/10 text-gray-400 hover:text-white hover:bg-white/5"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: `w-4 h-4 ${isSelected ? "text-brand-purple-400" : "text-gray-400"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RazorpayModal.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 23
                                                }, this),
                                                method.label
                                            ]
                                        }, method.id, true, {
                                            fileName: "[project]/src/components/RazorpayModal.tsx",
                                            lineNumber: 254,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RazorpayModal.tsx",
                                    lineNumber: 244,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RazorpayModal.tsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handlePayment,
                            disabled: isProcessing,
                            className: "w-full py-3 bg-brand-purple-600 hover:bg-brand-purple-700 disabled:bg-brand-purple-800 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition",
                            children: isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RazorpayModal.tsx",
                                        lineNumber: 280,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Processing secure transaction..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RazorpayModal.tsx",
                                        lineNumber: 281,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Pay ₹",
                                    finalPrice,
                                    " & Access Premium"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RazorpayModal.tsx",
                                lineNumber: 284,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/RazorpayModal.tsx",
                            lineNumber: 273,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RazorpayModal.tsx",
                    lineNumber: 195,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8 flex flex-col items-center justify-center text-center space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 rounded-full bg-emerald-500/25 border border-emerald-500/40 flex items-center justify-center text-3xl text-emerald-400",
                            children: "✓"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RazorpayModal.tsx",
                            lineNumber: 290,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-white",
                            children: "Payment Successful"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RazorpayModal.tsx",
                            lineNumber: 293,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-400",
                            children: [
                                "Congratulations! Your ",
                                planName,
                                " has been activated."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RazorpayModal.tsx",
                            lineNumber: 294,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RazorpayModal.tsx",
                    lineNumber: 289,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RazorpayModal.tsx",
            lineNumber: 181,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/RazorpayModal.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
};
_s(RazorpayModal, "2fDWmspvU8vKfU4DDw0+qtgNkD0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = RazorpayModal;
var _c;
__turbopack_refresh__.register(_c, "RazorpayModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Header": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/context/AppContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RazorpayModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/RazorpayModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.mjs [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/bell.mjs [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/user.mjs [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/log-out.mjs [app-client] (ecmascript) <export default as LogOut>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
const Header = ()=>{
    _s();
    const { user, logout, theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [showNotifications, setShowNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showProfileMenu, setShowProfileMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPromo, setShowPromo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isRazorpayOpen, setIsRazorpayOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const notifications = [
        {
            id: 1,
            text: "🔥 Daily Challenge: Two Sum II is live!",
            time: "2 hrs ago"
        },
        {
            id: 2,
            text: "🏆 Weekly Contest 128 starts in 3 hours",
            time: "3 hrs ago"
        },
        {
            id: 3,
            text: "🪙 Earned +10 Codecoins for validating stack!",
            time: "1 day ago"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col z-40 sticky top-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showPromo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        height: 0,
                        opacity: 0
                    },
                    animate: {
                        height: "auto",
                        opacity: 1
                    },
                    exit: {
                        height: 0,
                        opacity: 0
                    },
                    className: "w-full bg-gradient-to-r from-red-950 via-[#330f11] to-[#170002] border-b border-red-500/20 py-2 px-4 flex items-center justify-between text-xs text-white relative select-none z-50 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowPromo(false),
                            className: "text-gray-400 hover:text-white transition p-1 absolute left-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 40,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-grow flex items-center justify-center gap-2 font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"], {
                                    className: "w-4 h-4 text-orange-400 fill-orange-400/20 animate-bounce shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-white tracking-wide",
                                            children: "Discount Unlocked!"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 46,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-zinc-300 text-[11px] sm:text-xs",
                                            children: "Limited time discount for you"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-bold text-orange-400 bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full text-[11px] animate-pulse absolute right-4 hidden md:block",
                            children: "30% OFF on PRO"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-bold text-orange-400 bg-orange-500/10 border border-orange-500/30 px-2 py-0.5 rounded-full text-[10px] animate-pulse md:hidden",
                            children: "30% OFF"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 30,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "w-full bg-white dark:bg-[#0a0a0c] border-b border-zinc-200 dark:border-white/5 py-4 px-6 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2.5 select-none group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex items-center justify-center p-1.5 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/15 border border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.15)] group-hover:border-orange-500/50 transition-all duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        className: "w-5.5 h-5.5 text-orange-400 group-hover:scale-110 transition-transform duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6 18h12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 2c-3 0-5 2.24-5 5c0 1.25.5 2.13 1.5 2.76c-1.5.58-2.5 1.74-2.5 3.24c0 2.5 3.5 3 8 3s8-.5 8-3c0-1.5-1-2.66-2.5-3.24c1-.63 1.5-1.51 1.5-2.76c0-2.76-2-5-5-5Z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg font-black tracking-wider text-zinc-900 dark:text-white uppercase font-sans",
                                    children: [
                                        "CODE",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-orange-400",
                                            children: "PLACE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex items-center gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/roadmaps",
                                        className: `text-[13px] font-bold transition-all duration-200 select-none flex items-center gap-1 ${pathname.startsWith("/roadmaps") ? "text-orange-400" : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"}`,
                                        children: [
                                            "Courses",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-[#0e0e11] border border-white/10 rounded-2xl p-2 shadow-[0_10px_35px_rgba(0,0,0,0.8)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-3 py-1.5 text-[10px] font-bold text-gray-500 uppercase tracking-wider border-b border-white/5 mb-1.5",
                                                children: "Courses"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, this),
                                            [
                                                {
                                                    label: "🐍 Python Basics",
                                                    href: "/courses/python-basics",
                                                    badge: "New"
                                                },
                                                {
                                                    label: "☕ Java Basics",
                                                    href: "/courses/java-basics",
                                                    badge: "New"
                                                },
                                                {
                                                    label: "🗄️ SQL Basics",
                                                    href: "/courses/sql-basics",
                                                    badge: "New"
                                                },
                                                {
                                                    label: "⚙️ C Programming",
                                                    href: "/courses/c-programming",
                                                    badge: "New"
                                                }
                                            ].map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: sub.href,
                                                    className: "flex items-center justify-between px-4 py-2 text-[12px] font-semibold text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition text-left",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: sub.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 19
                                                        }, this),
                                                        sub.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-white px-1.5 py-0.5 rounded-full uppercase tracking-wider",
                                                            children: sub.badge
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, sub.label, true, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 17
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-t border-white/5 mt-1.5 pt-1.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/courses",
                                                    className: "flex items-center justify-center gap-1.5 px-4 py-2 text-[11px] font-bold text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-xl transition",
                                                    children: "View All Courses →"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/problems",
                                className: `text-[13px] font-bold transition-all duration-200 select-none ${pathname === "/problems" ? "text-orange-400" : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"}`,
                                children: "Practice"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/companies",
                                className: `text-[13px] font-bold transition-all duration-200 select-none flex items-center gap-1 ${pathname.startsWith("/companies") ? "text-orange-400" : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"}`,
                                children: [
                                    "Company Questions",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] font-extrabold bg-gradient-to-r from-orange-500 to-red-500 text-white px-1.5 py-0.5 rounded-full uppercase tracking-wider scale-90 origin-left animate-pulse",
                                        children: "New"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleTheme,
                                className: "p-2 rounded-full text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all duration-200",
                                title: theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
                                children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 160,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 160,
                                    columnNumber: 63
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsRazorpayOpen(true),
                                className: "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-4 py-1.5 rounded-lg text-xs flex items-center gap-1 transition-all shadow-[0_4px_14px_rgba(249,115,22,0.2)]",
                                children: [
                                    "Buy Now",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                        className: "w-3.5 h-3.5 fill-current text-white animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setShowNotifications(!showNotifications);
                                                    setShowProfileMenu(false);
                                                },
                                                className: "p-2 rounded-full text-zinc-400 hover:text-white transition",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full animate-ping"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                children: showNotifications && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 10
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        y: 10
                                                    },
                                                    className: "absolute right-0 mt-3 w-80 rounded-xl bg-[#0e0e11] border border-white/10 p-4 text-sm z-50 shadow-2xl",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center pb-2 border-b border-white/10 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-white",
                                                                    children: "Notifications"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Header.tsx",
                                                                    lineNumber: 196,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-orange-400 cursor-pointer hover:underline",
                                                                    children: "Mark all read"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Header.tsx",
                                                                    lineNumber: 197,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3",
                                                            children: notifications.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-2 rounded hover:bg-white/5 transition duration-150",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-200 text-xs",
                                                                            children: n.text
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Header.tsx",
                                                                            lineNumber: 202,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-gray-500",
                                                                            children: n.time
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Header.tsx",
                                                                            lineNumber: 203,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, n.id, true, {
                                                                    fileName: "[project]/src/components/Header.tsx",
                                                                    lineNumber: 201,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setShowProfileMenu(!showProfileMenu);
                                                    setShowNotifications(false);
                                                },
                                                className: "flex items-center gap-1.5 p-1 rounded-full border border-white/10 hover:border-orange-500/40 transition select-none outline-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-900 border border-white/15 flex items-center justify-center font-bold text-white text-xs select-none",
                                                                children: user.name.charAt(0).toUpperCase()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Header.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute -bottom-1 -left-1 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full p-0.5 border border-zinc-950 shadow-md",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "currentColor",
                                                                    className: "w-2.5 h-2.5 text-zinc-950",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M12 2c-3 0-5 2.24-5 5c0 1.25.5 2.13 1.5 2.76c-1.5.58-2.5 1.74-2.5 3.24c0 2.5 3.5 3 8 3s8-.5 8-3c0-1.5-1-2.66-2.5-3.24c1-.63 1.5-1.51 1.5-2.76c0-2.76-2-5-5-5Z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Header.tsx",
                                                                        lineNumber: 228,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Header.tsx",
                                                                    lineNumber: 227,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Header.tsx",
                                                                lineNumber: 226,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: "w-3 h-3 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                children: showProfileMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 10
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        y: 10
                                                    },
                                                    className: "absolute right-0 mt-3 w-56 rounded-xl bg-[#0e0e11] border border-white/10 p-2 z-50 text-sm shadow-2xl",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-3 py-2 border-b border-white/10 mb-1 space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-semibold text-white truncate",
                                                                    children: user.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Header.tsx",
                                                                    lineNumber: 244,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-400 truncate",
                                                                    children: user.email
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Header.tsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-orange-400 font-bold",
                                                                            children: [
                                                                                "Level ",
                                                                                user.level
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/Header.tsx",
                                                                            lineNumber: 247,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-gray-500",
                                                                            children: [
                                                                                "(",
                                                                                user.xp,
                                                                                " XP)"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/Header.tsx",
                                                                            lineNumber: 248,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/Header.tsx",
                                                                    lineNumber: 246,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col gap-1 text-[11px] text-zinc-400 pt-1.5 border-t border-white/5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "🔥 Daily Streak:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/Header.tsx",
                                                                                    lineNumber: 252,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-bold text-orange-400",
                                                                                    children: [
                                                                                        user.streak,
                                                                                        " Days"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/Header.tsx",
                                                                                    lineNumber: 253,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/Header.tsx",
                                                                            lineNumber: 251,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "🪙 Codecoins:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/Header.tsx",
                                                                                    lineNumber: 256,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-bold text-yellow-400",
                                                                                    children: [
                                                                                        user.coins,
                                                                                        " CC"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/Header.tsx",
                                                                                    lineNumber: 257,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/Header.tsx",
                                                                            lineNumber: 255,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "🏆 Status:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/Header.tsx",
                                                                                    lineNumber: 260,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `font-bold ${user.isPremium ? "text-orange-400" : "text-zinc-500"}`,
                                                                                    children: user.isPremium ? "PRO Member" : "Free Tier"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/Header.tsx",
                                                                                    lineNumber: 261,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/Header.tsx",
                                                                            lineNumber: 259,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/Header.tsx",
                                                                    lineNumber: 250,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/profile",
                                                            onClick: ()=>setShowProfileMenu(false),
                                                            className: "flex items-center gap-2 w-full px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                    className: "w-4 h-4 text-orange-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Header.tsx",
                                                                    lineNumber: 272,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "My Profile"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 267,
                                                            columnNumber: 24
                                                        }, this),
                                                        user.role === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/admin",
                                                            onClick: ()=>setShowProfileMenu(false),
                                                            className: "flex items-center gap-2 w-full px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                                    className: "w-4 h-4 text-brand-purple-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Header.tsx",
                                                                    lineNumber: 281,
                                                                    columnNumber: 27
                                                                }, this),
                                                                "Admin Panel"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setShowProfileMenu(false);
                                                                logout();
                                                            },
                                                            className: "flex items-center gap-2 w-full px-3 py-2 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-950/20 transition text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Header.tsx",
                                                                    lineNumber: 292,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Log out"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/auth",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    className: "bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-1.5 rounded-lg shadow-glass text-xs",
                                    children: "Sign In"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 302,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RazorpayModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RazorpayModal"], {
                isOpen: isRazorpayOpen,
                onClose: ()=>setIsRazorpayOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
};
_s(Header, "29SNhgKN9WkUsbbySKoQUedHfHM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_refresh__.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Footer": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.mjs [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/send.mjs [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const Footer = ()=>{
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [subscribed, setSubscribed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubscribe = (e)=>{
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
            setEmail("");
            setTimeout(()=>setSubscribed(false), 3500);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "w-full bg-slate-950/80 backdrop-blur-md border-t border-white/10 mt-auto pt-12 pb-8 px-4 sm:px-6 lg:px-8 text-gray-400",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "inline-flex items-center gap-2.5 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-purple-600 via-brand-purple-500 to-brand-cyan-400 flex items-center justify-center font-black text-white shadow-lg shadow-brand-purple-500/20 group-hover:scale-105 transition-transform",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-100 to-brand-purple-300 bg-clip-text text-transparent",
                                        children: "Codeplace"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs sm:text-sm text-gray-400 leading-relaxed",
                                children: "The next-generation AI-powered developer platform. Master algorithms, practice real-world challenges, build ATS-ready resumes, and unlock tech roles."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 pt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://github.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-brand-purple-500/40 transition",
                                        "aria-label": "GitHub",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 fill-current",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://twitter.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-cyan-400 hover:bg-white/10 hover:border-brand-cyan-500/40 transition",
                                        "aria-label": "Twitter",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 fill-current",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 66,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://linkedin.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-cyan-400 hover:bg-white/10 hover:border-brand-cyan-500/40 transition",
                                        "aria-label": "LinkedIn",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 fill-current",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:support@codeplace.dev",
                                        className: "w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-purple-400 hover:bg-white/10 hover:border-brand-purple-500/40 transition",
                                        "aria-label": "Email",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-bold text-white uppercase tracking-wider mb-4",
                                children: "Platform"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2.5 text-xs sm:text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/problems",
                                            className: "hover:text-brand-cyan-400 transition",
                                            children: "Problem Sets"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/companies",
                                            className: "hover:text-brand-cyan-400 transition",
                                            children: "Company Questions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/roadmaps",
                                            className: "hover:text-brand-cyan-400 transition",
                                            children: "Learning Roadmaps"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contests",
                                            className: "hover:text-brand-cyan-400 transition",
                                            children: "Live Contests"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/community",
                                            className: "hover:text-brand-cyan-400 transition",
                                            children: "Community Hub"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-bold text-white uppercase tracking-wider mb-4",
                                children: "Solutions"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2.5 text-xs sm:text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/resume",
                                            className: "hover:text-brand-cyan-400 transition",
                                            children: "ATS Resume Auditor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/recruiter",
                                            className: "hover:text-brand-cyan-400 transition",
                                            children: "For Recruiters"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/pricing",
                                            className: "hover:text-brand-cyan-400 transition",
                                            children: "Pro Membership"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 108,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/admin",
                                            className: "hover:text-brand-cyan-400 transition",
                                            children: "Platform Metrics"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/auth",
                                            className: "hover:text-brand-cyan-400 transition",
                                            children: "Get Started"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-bold text-white uppercase tracking-wider",
                                children: "Stay Ahead"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400 leading-relaxed",
                                children: "Get weekly DSA cheat sheets, system design updates, and contest alerts."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubscribe,
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                placeholder: "you@domain.com",
                                                value: email,
                                                onChange: (e)=>setEmail(e.target.value),
                                                className: "w-full min-w-0 px-3.5 py-2 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple-500/50 focus:ring-1 focus:ring-brand-purple-500/50 transition",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                "aria-label": "Subscribe to newsletter",
                                                className: "px-3.5 py-2 bg-gradient-to-r from-brand-purple-600 to-brand-purple-500 hover:from-brand-purple-500 hover:to-brand-purple-400 text-white rounded-xl font-medium transition shadow-md shadow-brand-purple-500/20 shrink-0 flex items-center justify-center",
                                                children: subscribed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "w-4 h-4 text-emerald-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 31
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 80
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 131,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    subscribed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-emerald-400 flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, this),
                                            " Subscribed successfully!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-1 flex items-center gap-1.5 text-[11px] text-brand-purple-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-3.5 h-3.5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Pro plan starting at ₹299/year"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4 text-center sm:text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 flex-wrap justify-center sm:justify-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " Codeplace Inc. All rights reserved."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: [
                                    "Built with ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        className: "w-3 h-3 text-red-500 fill-red-500 inline"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 159,
                                        columnNumber: 24
                                    }, this),
                                    " for developers"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-center gap-4 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/pricing",
                                className: "hover:text-gray-300 transition",
                                children: "Privacy Policy"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/pricing",
                                className: "hover:text-gray-300 transition",
                                children: "Terms of Service"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/pricing",
                                className: "hover:text-gray-300 transition",
                                children: "Sitemap"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
};
_s(Footer, "2kf5dLo9meeHAWEPe84oujxMnjM=");
_c = Footer;
var _c;
__turbopack_refresh__.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/courses/javaCourse.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "JAVA_COURSE": (()=>JAVA_COURSE)
});
const JAVA_COURSE = {
    id: "java-basics",
    title: "Java Basics",
    level: "Beginner",
    description: "Learn Java from the ground up — classes, OOP, collections, exception handling, and interfaces.",
    icon: "☕",
    color: "orange",
    totalHours: "~5 Hours",
    modules: [
        {
            id: "module-1",
            number: 1,
            title: "Java Fundamentals",
            subtitle: "Variables, data types, input, and operators",
            icon: "☕",
            estimatedTime: "55 min",
            topics: [
                "What is Java?",
                "JVM & JDK",
                "Hello World",
                "Variables",
                "Data Types",
                "Scanner Input",
                "Type Casting",
                "Operators"
            ],
            content: [
                {
                    type: "heading",
                    title: "What is Java?"
                },
                {
                    type: "paragraph",
                    text: "Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It was created by James Gosling at Sun Microsystems in 1995. Java programs are compiled into bytecode that runs on the Java Virtual Machine (JVM), making them platform-independent — 'Write Once, Run Anywhere'."
                },
                {
                    type: "list",
                    title: "Key components:",
                    items: [
                        "JDK (Java Development Kit) — everything you need to develop Java programs (compiler, JRE, libraries)",
                        "JRE (Java Runtime Environment) — runs compiled Java programs (includes JVM)",
                        "JVM (Java Virtual Machine) — executes Java bytecode on any OS"
                    ]
                },
                {
                    type: "heading",
                    title: "Your First Java Program"
                },
                {
                    type: "paragraph",
                    text: "Every Java program starts with a class definition and a main method. The class name must match the filename."
                },
                {
                    type: "code",
                    language: "java",
                    code: `// File: HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");   // prints with newline
        System.out.print("No newline here");   // prints without newline
    }
}`
                },
                {
                    type: "heading",
                    title: "Variables and Data Types"
                },
                {
                    type: "paragraph",
                    text: "Java is statically typed — you must declare a variable's type before using it. Java has 8 primitive types and also supports objects like String."
                },
                {
                    type: "code",
                    language: "java",
                    code: `public class DataTypes {
    public static void main(String[] args) {
        // Integer types
        int age = 25;              // 32-bit integer
        long population = 8000000000L;  // 64-bit integer

        // Floating point
        double pi = 3.14159;      // 64-bit decimal
        float price = 9.99f;      // 32-bit decimal

        // Character and Boolean
        char grade = 'A';         // single character (single quotes)
        boolean isActive = true;  // true or false

        // String (not a primitive — it's an object)
        String name = "Alice";

        // Constants (cannot be changed)
        final int MAX_SCORE = 100;

        System.out.println("Name: " + name + ", Age: " + age);
        System.out.println("Pi is approximately " + pi);
    }
}`
                },
                {
                    type: "heading",
                    title: "Reading User Input with Scanner"
                },
                {
                    type: "code",
                    language: "java",
                    code: `import java.util.Scanner;  // must import Scanner

public class InputExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = scanner.nextLine();   // reads a full line

        System.out.print("Enter your age: ");
        int age = scanner.nextInt();        // reads an integer

        System.out.print("Enter your GPA: ");
        double gpa = scanner.nextDouble();  // reads a decimal

        System.out.println("Hello, " + name + "!");
        System.out.println("Age: " + age + ", GPA: " + gpa);

        scanner.close();  // good practice to close the scanner
    }
}`
                },
                {
                    type: "heading",
                    title: "Type Casting"
                },
                {
                    type: "code",
                    language: "java",
                    code: `public class TypeCasting {
    public static void main(String[] args) {
        // Widening (implicit) — no data loss, happens automatically
        int intVal = 42;
        double doubleVal = intVal;    // int → double (safe)
        System.out.println(doubleVal); // 42.0

        // Narrowing (explicit) — possible data loss, must cast manually
        double pi = 3.99;
        int truncated = (int) pi;     // double → int (drops decimal)
        System.out.println(truncated); // 3

        // String conversions
        String numStr = "123";
        int parsed = Integer.parseInt(numStr);     // String → int
        double parsedD = Double.parseDouble("3.14"); // String → double
        String back = String.valueOf(parsed);      // int → String
    }
}`
                },
                {
                    type: "heading",
                    title: "Arithmetic and Comparison Operators"
                },
                {
                    type: "code",
                    language: "java",
                    code: `public class Operators {
    public static void main(String[] args) {
        int a = 10, b = 3;

        // Arithmetic
        System.out.println(a + b);   // 13
        System.out.println(a - b);   // 7
        System.out.println(a * b);   // 30
        System.out.println(a / b);   // 3  (integer division!)
        System.out.println(a % b);   // 1  (remainder/modulo)

        // Increment / decrement
        int x = 5;
        x++;     // x is now 6
        x--;     // x is now 5

        // Compound assignment
        x += 10; // x = x + 10
        x *= 2;  // x = x * 2

        // Comparison (return boolean)
        System.out.println(a > b);   // true
        System.out.println(a == b);  // false
        System.out.println(a != b);  // true

        // Logical
        System.out.println(a > 5 && b < 5);  // true (AND)
        System.out.println(a > 20 || b < 5); // true (OR)
        System.out.println(!(a > 5));         // false (NOT)
    }
}`
                },
                {
                    type: "tip",
                    text: "Integer division in Java always truncates (not rounds). So 7 / 2 = 3, not 3.5. To get a decimal result, at least one operand must be a double: 7.0 / 2 = 3.5."
                }
            ],
            quiz: [
                {
                    id: "java-m1-q1",
                    question: "What does JVM stand for?",
                    options: [
                        "Java Virtual Machine",
                        "Java Verified Module",
                        "Java Variable Manager",
                        "Java Version Manager"
                    ],
                    correctIndex: 0,
                    explanation: "JVM stands for Java Virtual Machine. It executes Java bytecode and is what makes Java platform-independent."
                },
                {
                    id: "java-m1-q2",
                    question: "What is the correct data type to store a decimal number with high precision in Java?",
                    options: [
                        "float",
                        "int",
                        "double",
                        "char"
                    ],
                    correctIndex: 2,
                    explanation: "double is a 64-bit floating point type and provides more precision than float (32-bit). It is the default for decimal literals in Java."
                },
                {
                    id: "java-m1-q3",
                    question: "What is the result of `int result = 7 / 2;` in Java?",
                    options: [
                        "3.5",
                        "3",
                        "4",
                        "3.0"
                    ],
                    correctIndex: 1,
                    explanation: "When both operands are integers, Java performs integer division and truncates the decimal. 7 / 2 = 3 (not 3.5)."
                },
                {
                    id: "java-m1-q4",
                    question: "Which keyword is used to declare a constant variable in Java?",
                    options: [
                        "static",
                        "const",
                        "final",
                        "fixed"
                    ],
                    correctIndex: 2,
                    explanation: "The `final` keyword makes a variable constant in Java. Once assigned, its value cannot be changed."
                },
                {
                    id: "java-m1-q5",
                    question: "Which Scanner method reads an entire line of text?",
                    options: [
                        "scanner.next()",
                        "scanner.nextLine()",
                        "scanner.readLine()",
                        "scanner.nextString()"
                    ],
                    correctIndex: 1,
                    explanation: "scanner.nextLine() reads a complete line including spaces. scanner.next() only reads until the next whitespace."
                }
            ]
        },
        {
            id: "module-2",
            number: 2,
            title: "Control Flow",
            subtitle: "if/else, switch, loops, break and continue",
            icon: "🔀",
            estimatedTime: "50 min",
            topics: [
                "if / else if / else",
                "switch statement",
                "for loop",
                "while loop",
                "do-while loop",
                "break",
                "continue"
            ],
            content: [
                {
                    type: "heading",
                    title: "if / else if / else"
                },
                {
                    type: "code",
                    language: "java",
                    code: `public class IfElse {
    public static void main(String[] args) {
        int score = 75;

        if (score >= 90) {
            System.out.println("Grade: A");
        } else if (score >= 80) {
            System.out.println("Grade: B");
        } else if (score >= 70) {
            System.out.println("Grade: C");
        } else if (score >= 60) {
            System.out.println("Grade: D");
        } else {
            System.out.println("Grade: F");
        }
        // Output: Grade: C
    }
}`
                },
                {
                    type: "heading",
                    title: "switch Statement"
                },
                {
                    type: "code",
                    language: "java",
                    code: `public class SwitchDemo {
    public static void main(String[] args) {
        int day = 3;
        String dayName;

        switch (day) {
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            case 4:
                dayName = "Thursday";
                break;
            case 5:
                dayName = "Friday";
                break;
            default:
                dayName = "Weekend";
                break;
        }
        System.out.println(dayName); // Wednesday

        // Modern switch expression (Java 14+)
        String result = switch (day) {
            case 1 -> "Monday";
            case 2 -> "Tuesday";
            case 3 -> "Wednesday";
            default -> "Other";
        };
    }
}`
                },
                {
                    type: "heading",
                    title: "for Loop"
                },
                {
                    type: "code",
                    language: "java",
                    code: `public class ForLoop {
    public static void main(String[] args) {
        // Basic for loop: init; condition; update
        for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
        }

        // Counting down
        for (int i = 10; i >= 1; i--) {
            System.out.print(i + " ");
        }

        // Nested loops (multiplication table)
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                System.out.print(i * j + " ");
            }
            System.out.println();
        }
        // Output:
        // 1 2 3
        // 2 4 6
        // 3 6 9
    }
}`
                },
                {
                    type: "heading",
                    title: "while and do-while Loops"
                },
                {
                    type: "code",
                    language: "java",
                    code: `public class WhileLoops {
    public static void main(String[] args) {
        // while: checks condition BEFORE executing
        int count = 1;
        while (count <= 5) {
            System.out.print(count + " ");
            count++;
        }
        System.out.println(); // 1 2 3 4 5

        // do-while: executes ONCE then checks condition
        // Useful when you always want at least one iteration
        int num = 10;
        do {
            System.out.println("num = " + num);
            num--;
        } while (num > 10); // condition is false but still ran once!
        // Output: num = 10
    }
}`
                },
                {
                    type: "heading",
                    title: "break and continue"
                },
                {
                    type: "code",
                    language: "java",
                    code: `public class BreakContinue {
    public static void main(String[] args) {
        // break: exits the loop immediately
        for (int i = 1; i <= 10; i++) {
            if (i == 5) break;
            System.out.print(i + " "); // 1 2 3 4
        }
        System.out.println();

        // continue: skips the rest of the current iteration
        for (int i = 1; i <= 10; i++) {
            if (i % 2 == 0) continue; // skip even numbers
            System.out.print(i + " "); // 1 3 5 7 9
        }
        System.out.println();

        // Finding a number in a range
        int target = 7;
        for (int i = 1; i <= 20; i++) {
            if (i == target) {
                System.out.println("Found " + target + " at index " + i);
                break;
            }
        }
    }
}`
                },
                {
                    type: "tip",
                    text: "Always ensure your loop has a way to terminate! A while(true) loop without a break will run forever (infinite loop) and crash your program with high CPU usage."
                }
            ],
            quiz: [
                {
                    id: "java-m2-q1",
                    question: "How many times does `for (int i = 0; i < 5; i++)` execute its body?",
                    options: [
                        "4",
                        "5",
                        "6",
                        "0"
                    ],
                    correctIndex: 1,
                    explanation: "i starts at 0 and loops while i < 5 (0,1,2,3,4), so the body executes 5 times."
                },
                {
                    id: "java-m2-q2",
                    question: "What is unique about a do-while loop compared to a while loop?",
                    options: [
                        "It runs faster",
                        "It always executes the body at least once",
                        "It can only use integer conditions",
                        "It doesn't need a condition"
                    ],
                    correctIndex: 1,
                    explanation: "A do-while loop executes its body first, then checks the condition. This guarantees at least one execution regardless of the condition."
                },
                {
                    id: "java-m2-q3",
                    question: "What does the `continue` statement do inside a loop?",
                    options: [
                        "Exits the loop entirely",
                        "Restarts the program",
                        "Skips the rest of the current iteration and goes to the next",
                        "Pauses execution"
                    ],
                    correctIndex: 2,
                    explanation: "continue skips the remaining code in the current iteration and jumps to the loop's update expression (for-loop) or re-evaluates the condition."
                },
                {
                    id: "java-m2-q4",
                    question: "In a switch statement, what happens if you omit the `break` statement?",
                    options: [
                        "Compilation error",
                        "The program crashes",
                        "Execution falls through to the next case",
                        "Nothing changes"
                    ],
                    correctIndex: 2,
                    explanation: "Without break, Java 'falls through' and executes the next case's code, even if it doesn't match. This is a common bug source."
                },
                {
                    id: "java-m2-q5",
                    question: "Which statement correctly starts a for loop that prints numbers 1 to 10?",
                    options: [
                        "for (int i = 1; i < 10; i++)",
                        "for (int i = 1; i <= 10; i++)",
                        "for (int i = 0; i < 10; i++)",
                        "for (int i = 1; i < 11; i--)"
                    ],
                    correctIndex: 1,
                    explanation: "for (int i = 1; i <= 10; i++) starts at 1 and runs while i is less than or equal to 10, printing 1 through 10."
                }
            ]
        },
        {
            id: "module-3",
            number: 3,
            title: "Object-Oriented Programming",
            subtitle: "Classes, objects, inheritance and encapsulation",
            icon: "🧩",
            estimatedTime: "60 min",
            topics: [
                "Classes & Objects",
                "Constructors",
                "this Keyword",
                "Inheritance",
                "Method Overriding",
                "Encapsulation",
                "Access Modifiers"
            ],
            content: [
                {
                    type: "heading",
                    title: "Classes and Objects"
                },
                {
                    type: "paragraph",
                    text: "A class is a blueprint for creating objects. It defines fields (data) and methods (behavior). An object is a specific instance of a class."
                },
                {
                    type: "code",
                    language: "java",
                    code: `public class Car {
    // Fields (instance variables)
    String brand;
    String model;
    int year;
    double price;

    // Method
    public void displayInfo() {
        System.out.println(year + " " + brand + " " + model);
        System.out.println("Price: $" + price);
    }

    public void start() {
        System.out.println(brand + " engine started!");
    }
}

// Usage in another class or main
public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();  // creates an object (instance)
        myCar.brand = "Toyota";
        myCar.model = "Camry";
        myCar.year = 2023;
        myCar.price = 25000.0;

        myCar.displayInfo();  // 2023 Toyota Camry
        myCar.start();        // Toyota engine started!
    }
}`
                },
                {
                    type: "heading",
                    title: "Constructors"
                },
                {
                    type: "paragraph",
                    text: "A constructor is a special method called when an object is created. It has the same name as the class and no return type."
                },
                {
                    type: "code",
                    language: "java",
                    code: `public class Person {
    String name;
    int age;

    // No-arg constructor (default)
    public Person() {
        name = "Unknown";
        age = 0;
    }

    // Parameterized constructor
    public Person(String name, int age) {
        this.name = name;  // 'this' refers to the current object
        this.age = age;
    }

    // Constructor overloading
    public Person(String name) {
        this.name = name;
        this.age = 18;  // default age
    }

    public void introduce() {
        System.out.println("Hi, I'm " + name + " and I'm " + age);
    }
}

// Usage
Person p1 = new Person();              // calls no-arg constructor
Person p2 = new Person("Alice", 30);  // calls parameterized
Person p3 = new Person("Bob");        // calls name-only constructor`
                },
                {
                    type: "heading",
                    title: "Inheritance with extends"
                },
                {
                    type: "code",
                    language: "java",
                    code: `// Parent class (superclass)
public class Animal {
    String name;
    int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void eat() {
        System.out.println(name + " is eating.");
    }

    public void sleep() {
        System.out.println(name + " is sleeping.");
    }

    public String describe() {
        return name + " (age: " + age + ")";
    }
}

// Child class (subclass)
public class Dog extends Animal {
    String breed;

    public Dog(String name, int age, String breed) {
        super(name, age);  // calls Animal's constructor
        this.breed = breed;
    }

    // Method specific to Dog
    public void bark() {
        System.out.println(name + " says: Woof!");
    }

    // Override parent's describe method
    @Override
    public String describe() {
        return super.describe() + " | Breed: " + breed;
    }
}

// Usage
Dog dog = new Dog("Rex", 3, "Labrador");
dog.eat();       // inherited from Animal
dog.bark();      // Dog's own method
System.out.println(dog.describe()); // Rex (age: 3) | Breed: Labrador`
                },
                {
                    type: "heading",
                    title: "Encapsulation (private + getters/setters)"
                },
                {
                    type: "code",
                    language: "java",
                    code: `public class BankAccount {
    private String owner;   // private: only accessible inside class
    private double balance;

    public BankAccount(String owner, double initialBalance) {
        this.owner = owner;
        this.balance = initialBalance;
    }

    // Getter — controlled read access
    public double getBalance() {
        return balance;
    }

    public String getOwner() {
        return owner;
    }

    // Method with validation
    public void deposit(double amount) {
        if (amount <= 0) {
            System.out.println("Invalid deposit amount!");
            return;
        }
        balance += amount;
        System.out.println("Deposited $" + amount + ". New balance: $" + balance);
    }

    public void withdraw(double amount) {
        if (amount > balance) {
            System.out.println("Insufficient funds!");
        } else {
            balance -= amount;
            System.out.println("Withdrew $" + amount + ". Remaining: $" + balance);
        }
    }
}

// Usage
BankAccount account = new BankAccount("Alice", 1000.0);
account.deposit(500);    // valid
account.withdraw(2000);  // Insufficient funds!
System.out.println(account.getBalance()); // 1500.0
// account.balance = 999999; // ERROR — balance is private!`
                },
                {
                    type: "tip",
                    text: "Always use private for fields and provide public getters/setters. This protects the internal state of your objects from being changed in unexpected ways — a core principle of OOP called encapsulation."
                }
            ],
            quiz: [
                {
                    id: "java-m3-q1",
                    question: "What is a constructor in Java?",
                    options: [
                        "A method that returns an object",
                        "A special method called when an object is created, with the same name as the class",
                        "A static method that initializes a class",
                        "A method that destroys an object"
                    ],
                    correctIndex: 1,
                    explanation: "A constructor has the same name as the class, no return type, and is called automatically when you use `new` to create an object."
                },
                {
                    id: "java-m3-q2",
                    question: "What does the `extends` keyword do in Java?",
                    options: [
                        "Implements an interface",
                        "Creates a method",
                        "Establishes an inheritance relationship between classes",
                        "Declares a constant"
                    ],
                    correctIndex: 2,
                    explanation: "`extends` creates an inheritance (IS-A) relationship. The child class inherits all non-private fields and methods from the parent class."
                },
                {
                    id: "java-m3-q3",
                    question: "What does `this` refer to inside a Java class method?",
                    options: [
                        "The parent class",
                        "The current object instance",
                        "The main method",
                        "A static reference"
                    ],
                    correctIndex: 1,
                    explanation: "`this` refers to the current object instance. It's commonly used to distinguish between instance variables and constructor/method parameters with the same name."
                },
                {
                    id: "java-m3-q4",
                    question: "What is encapsulation in OOP?",
                    options: [
                        "Splitting code into many files",
                        "Making all variables public",
                        "Hiding internal state using private fields and providing controlled access via getters/setters",
                        "Using only static methods"
                    ],
                    correctIndex: 2,
                    explanation: "Encapsulation is the practice of hiding an object's internal data (using private) and exposing only controlled access through public getters and setters."
                },
                {
                    id: "java-m3-q5",
                    question: "What annotation should you use when overriding a parent class method?",
                    options: [
                        "@Inherited",
                        "@Override",
                        "@Super",
                        "@Extends"
                    ],
                    correctIndex: 1,
                    explanation: "@Override tells the compiler you're intentionally overriding a parent method. If the method signature doesn't match the parent, the compiler will catch the error."
                }
            ]
        },
        {
            id: "module-4",
            number: 4,
            title: "Arrays, Strings & Collections",
            subtitle: "Working with data structures built into Java",
            icon: "📦",
            estimatedTime: "55 min",
            topics: [
                "Arrays",
                "2D Arrays",
                "String Methods",
                "StringBuilder",
                "ArrayList",
                "HashMap"
            ],
            content: [
                {
                    type: "heading",
                    title: "Arrays"
                },
                {
                    type: "code",
                    language: "java",
                    code: `public class Arrays {
    public static void main(String[] args) {
        // Declaration and initialization
        int[] scores = {95, 87, 76, 92, 88};
        String[] names = new String[3]; // array of 3 nulls

        names[0] = "Alice";
        names[1] = "Bob";
        names[2] = "Charlie";

        System.out.println(scores.length);  // 5 (number of elements)
        System.out.println(scores[0]);      // 95 (first element)
        System.out.println(scores[4]);      // 88 (last element)

        // Iterating with for loop
        for (int i = 0; i < scores.length; i++) {
            System.out.print(scores[i] + " ");
        }

        // Enhanced for-each loop
        for (int score : scores) {
            System.out.print(score + " ");
        }

        // Finding max
        int max = scores[0];
        for (int score : scores) {
            if (score > max) max = score;
        }
        System.out.println("Max: " + max); // Max: 95
    }
}`
                },
                {
                    type: "heading",
                    title: "2D Arrays"
                },
                {
                    type: "code",
                    language: "java",
                    code: `public class TwoDArrays {
    public static void main(String[] args) {
        // 3x3 grid
        int[][] grid = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        System.out.println(grid[1][2]); // Row 1, Col 2 → 6

        // Nested loop to print all elements
        for (int row = 0; row < grid.length; row++) {
            for (int col = 0; col < grid[row].length; col++) {
                System.out.print(grid[row][col] + " ");
            }
            System.out.println();
        }
        // 1 2 3
        // 4 5 6
        // 7 8 9
    }
}`
                },
                {
                    type: "heading",
                    title: "String Methods"
                },
                {
                    type: "code",
                    language: "java",
                    code: `public class StringMethods {
    public static void main(String[] args) {
        String s = "Hello, World!";

        System.out.println(s.length());           // 13
        System.out.println(s.toUpperCase());      // HELLO, WORLD!
        System.out.println(s.toLowerCase());      // hello, world!
        System.out.println(s.contains("World")); // true
        System.out.println(s.replace("World", "Java")); // Hello, Java!
        System.out.println(s.substring(7));      // World!
        System.out.println(s.substring(7, 12));  // World
        System.out.println(s.indexOf("o"));      // 4
        System.out.println(s.startsWith("Hello")); // true
        System.out.println(s.trim());             // removes leading/trailing spaces

        // Splitting
        String csv = "Alice,Bob,Charlie";
        String[] parts = csv.split(",");
        System.out.println(parts[1]); // Bob

        // String comparison — always use .equals() not ==
        String a = "hello";
        String b = "hello";
        System.out.println(a.equals(b));           // true
        System.out.println(a.equalsIgnoreCase("HELLO")); // true
    }
}`
                },
                {
                    type: "heading",
                    title: "ArrayList — Dynamic Lists"
                },
                {
                    type: "code",
                    language: "java",
                    code: `import java.util.ArrayList;

public class ArrayListDemo {
    public static void main(String[] args) {
        ArrayList<String> fruits = new ArrayList<>();

        // Adding elements
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");
        fruits.add(1, "Blueberry"); // insert at index 1

        System.out.println(fruits);        // [Apple, Blueberry, Banana, Cherry]
        System.out.println(fruits.size()); // 4
        System.out.println(fruits.get(2)); // Banana

        // Removing elements
        fruits.remove("Banana");   // by value
        fruits.remove(0);          // by index → removes Apple

        // Checking
        System.out.println(fruits.contains("Cherry")); // true

        // Iterating
        for (String fruit : fruits) {
            System.out.println(fruit);
        }

        // Sorting
        java.util.Collections.sort(fruits);
    }
}`
                },
                {
                    type: "heading",
                    title: "HashMap — Key-Value Pairs"
                },
                {
                    type: "code",
                    language: "java",
                    code: `import java.util.HashMap;

public class HashMapDemo {
    public static void main(String[] args) {
        HashMap<String, Integer> scores = new HashMap<>();

        // Adding entries
        scores.put("Alice", 95);
        scores.put("Bob", 87);
        scores.put("Charlie", 92);

        System.out.println(scores.get("Alice"));      // 95
        System.out.println(scores.containsKey("Bob")); // true
        System.out.println(scores.size());             // 3

        // Update a value
        scores.put("Alice", 98);  // overwrites existing

        // Remove an entry
        scores.remove("Bob");

        // Iterating over all entries
        for (String name : scores.keySet()) {
            System.out.println(name + ": " + scores.get(name));
        }

        // getOrDefault — safe retrieval
        int score = scores.getOrDefault("David", 0);  // 0 if not found
    }
}`
                },
                {
                    type: "tip",
                    text: "Use ArrayList when you need an ordered, resizable list. Use HashMap when you need fast key-based lookup. Never use == to compare Strings — always use .equals() because == checks object identity, not content."
                }
            ],
            quiz: [
                {
                    id: "java-m4-q1",
                    question: "How do you get the number of elements in a Java array called `arr`?",
                    options: [
                        "arr.size()",
                        "arr.length",
                        "arr.count()",
                        "len(arr)"
                    ],
                    correctIndex: 1,
                    explanation: "Arrays use `.length` (a field, not a method). Note: ArrayList uses `.size()` (a method). Don't confuse the two!"
                },
                {
                    id: "java-m4-q2",
                    question: "What is the correct way to compare two String values in Java?",
                    options: [
                        'str1 == str2',
                        'str1.equals(str2)',
                        'str1.compare(str2)',
                        'str1 === str2'
                    ],
                    correctIndex: 1,
                    explanation: "Use .equals() to compare String contents. The == operator checks if two references point to the same object in memory, not whether the strings have the same characters."
                },
                {
                    id: "java-m4-q3",
                    question: "What does `ArrayList.get(0)` return?",
                    options: [
                        "The size",
                        "The last element",
                        "The first element",
                        "null"
                    ],
                    correctIndex: 2,
                    explanation: "ArrayList is 0-indexed. get(0) retrieves the first element. get(size()-1) retrieves the last."
                },
                {
                    id: "java-m4-q4",
                    question: "Which data structure is best for storing key-value pairs (e.g., name → score)?",
                    options: [
                        "int[]",
                        "ArrayList",
                        "HashMap",
                        "String"
                    ],
                    correctIndex: 2,
                    explanation: "HashMap stores key-value pairs and provides O(1) average-time lookup by key using put(key, value) and get(key)."
                },
                {
                    id: "java-m4-q5",
                    question: "What is the index of the last element in an array of size 8?",
                    options: [
                        "8",
                        "7",
                        "0",
                        "9"
                    ],
                    correctIndex: 1,
                    explanation: "Arrays are 0-indexed. An array of size 8 has valid indices 0–7. The last index is always size - 1."
                }
            ]
        },
        {
            id: "module-5",
            number: 5,
            title: "Exceptions, Interfaces & Abstract Classes",
            subtitle: "Error handling, contracts, and abstraction in Java",
            icon: "🛡️",
            estimatedTime: "55 min",
            topics: [
                "try / catch / finally",
                "Common Exceptions",
                "throw & throws",
                "Interfaces",
                "Abstract Classes"
            ],
            content: [
                {
                    type: "heading",
                    title: "try / catch / finally"
                },
                {
                    type: "paragraph",
                    text: "Exception handling allows your program to recover from errors gracefully instead of crashing. Java uses try, catch, and finally blocks."
                },
                {
                    type: "code",
                    language: "java",
                    code: `public class ExceptionHandling {
    public static void main(String[] args) {
        // Basic try-catch
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[5]); // ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: " + e.getMessage());
        }

        // Multiple catch blocks
        try {
            String s = null;
            System.out.println(s.length()); // NullPointerException
        } catch (NullPointerException e) {
            System.out.println("Null reference: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("General error: " + e.getMessage());
        } finally {
            System.out.println("This ALWAYS runs (cleanup here)");
        }

        // try-with-resources (auto-closes)
        try {
            int result = 10 / 0;  // ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero!");
        }
    }
}`
                },
                {
                    type: "list",
                    title: "Common Java Exceptions:",
                    items: [
                        "NullPointerException — calling a method on a null object reference",
                        "ArrayIndexOutOfBoundsException — accessing an index outside array bounds",
                        "ArithmeticException — division by zero",
                        "NumberFormatException — parsing invalid string as number (Integer.parseInt(\"abc\"))",
                        "ClassCastException — illegal type casting",
                        "StackOverflowError — infinite recursion depth exceeded"
                    ]
                },
                {
                    type: "heading",
                    title: "throw and throws"
                },
                {
                    type: "code",
                    language: "java",
                    code: `// Custom exception
public class InsufficientFundsException extends Exception {
    public InsufficientFundsException(String message) {
        super(message);
    }
}

public class BankAccount {
    private double balance;

    public BankAccount(double balance) {
        this.balance = balance;
    }

    // 'throws' declares this method might throw the exception
    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException(
                "Cannot withdraw $" + amount + " from $" + balance
            );
        }
        balance -= amount;
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount(100.0);
        try {
            acc.withdraw(200.0);  // will throw
        } catch (InsufficientFundsException e) {
            System.out.println("Caught: " + e.getMessage());
        }
    }
}`
                },
                {
                    type: "heading",
                    title: "Interfaces"
                },
                {
                    type: "code",
                    language: "java",
                    code: `// Interface: defines a contract (what, not how)
public interface Shape {
    double getArea();       // abstract — no body
    double getPerimeter();  // abstract — no body

    // Default method (Java 8+) — has a body
    default void display() {
        System.out.println("Area: " + getArea() + ", Perimeter: " + getPerimeter());
    }
}

// Class implements the interface
public class Circle implements Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }

    @Override
    public double getPerimeter() {
        return 2 * Math.PI * radius;
    }
}

public class Rectangle implements Shape {
    private double width, height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    @Override
    public double getArea() { return width * height; }

    @Override
    public double getPerimeter() { return 2 * (width + height); }
}

// Usage
Shape circle = new Circle(5);
Shape rect = new Rectangle(4, 6);
circle.display();  // Area: 78.54, Perimeter: 31.42
rect.display();    // Area: 24.0, Perimeter: 20.0`
                },
                {
                    type: "heading",
                    title: "Abstract Classes"
                },
                {
                    type: "code",
                    language: "java",
                    code: `// Abstract class: can have both abstract and concrete methods
// Cannot be instantiated directly
public abstract class Vehicle {
    protected String brand;
    protected int year;

    public Vehicle(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }

    // Abstract method — subclass MUST implement
    public abstract void fuelType();

    // Concrete method — inherited as-is
    public void startEngine() {
        System.out.println(brand + " engine started.");
    }

    public String getInfo() {
        return year + " " + brand;
    }
}

public class ElectricCar extends Vehicle {
    public ElectricCar(String brand, int year) {
        super(brand, year);
    }

    @Override
    public void fuelType() {
        System.out.println(brand + " uses electricity.");
    }
}

public class GasCar extends Vehicle {
    public GasCar(String brand, int year) {
        super(brand, year);
    }

    @Override
    public void fuelType() {
        System.out.println(brand + " uses gasoline.");
    }
}

// Vehicle v = new Vehicle(...); // ERROR — cannot instantiate abstract class
ElectricCar tesla = new ElectricCar("Tesla", 2024);
tesla.fuelType();    // Tesla uses electricity.
tesla.startEngine(); // Tesla engine started.`
                },
                {
                    type: "tip",
                    text: "Use an interface when you want to define a capability contract (multiple classes can implement it). Use an abstract class when you want to share common code among related classes but also enforce that subclasses implement certain methods."
                }
            ],
            quiz: [
                {
                    id: "java-m5-q1",
                    question: "What does the `finally` block in Java do?",
                    options: [
                        "Only runs when an exception is caught",
                        "Only runs when no exception occurs",
                        "Always runs regardless of whether an exception occurred",
                        "Replaces the catch block"
                    ],
                    correctIndex: 2,
                    explanation: "The finally block always executes — whether an exception was thrown and caught, thrown and not caught, or no exception occurred. It's used for cleanup (closing files, connections)."
                },
                {
                    id: "java-m5-q2",
                    question: "Which exception is thrown when you divide by zero in Java?",
                    options: [
                        "NullPointerException",
                        "DivisionException",
                        "ArithmeticException",
                        "IllegalArgumentException"
                    ],
                    correctIndex: 2,
                    explanation: "Java throws ArithmeticException: / by zero when you perform integer division by zero. Note: floating-point division by zero returns Infinity, not an exception."
                },
                {
                    id: "java-m5-q3",
                    question: "What keyword does a class use to implement an interface?",
                    options: [
                        "extends",
                        "uses",
                        "implements",
                        "inherits"
                    ],
                    correctIndex: 2,
                    explanation: "A class uses `implements` to fulfill an interface contract. A class can implement multiple interfaces (unlike inheritance with extends, which is single)."
                },
                {
                    id: "java-m5-q4",
                    question: "What is an abstract class?",
                    options: [
                        "A class with only private methods",
                        "A class that cannot have any methods",
                        "A class that cannot be instantiated and may have abstract methods",
                        "A class defined inside another class"
                    ],
                    correctIndex: 2,
                    explanation: "An abstract class cannot be instantiated with `new`. It may have abstract methods (no body) that subclasses must implement, and concrete methods that subclasses inherit."
                },
                {
                    id: "java-m5-q5",
                    question: "What does `throw new IllegalArgumentException(\"message\")` do?",
                    options: [
                        "Catches an exception",
                        "Declares that a method might throw an exception",
                        "Manually creates and throws an exception",
                        "Creates a new class"
                    ],
                    correctIndex: 2,
                    explanation: "The `throw` keyword manually throws an exception object. This stops normal execution and transfers control to the nearest matching catch block."
                }
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/courses/sqlCourse.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SQL_COURSE": (()=>SQL_COURSE)
});
const SQL_COURSE = {
    id: "sql-basics",
    title: "SQL Basics",
    level: "Beginner",
    description: "Master SQL from scratch — querying, filtering, joins, aggregations, and data manipulation.",
    icon: "🗄️",
    color: "emerald",
    totalHours: "~4 Hours",
    modules: [
        {
            id: "module-1",
            number: 1,
            title: "Introduction to SQL",
            subtitle: "Databases, tables, SELECT and WHERE",
            icon: "🗄️",
            estimatedTime: "45 min",
            topics: [
                "What is SQL?",
                "RDBMS",
                "CREATE TABLE",
                "Data Types",
                "INSERT INTO",
                "SELECT",
                "WHERE"
            ],
            content: [
                {
                    type: "heading",
                    title: "What is SQL?"
                },
                {
                    type: "paragraph",
                    text: "SQL (Structured Query Language) is the standard language for managing and manipulating relational databases. It is used by virtually every major database system — MySQL, PostgreSQL, SQLite, SQL Server, and Oracle. SQL lets you create, read, update, and delete data (CRUD) using simple English-like commands."
                },
                {
                    type: "list",
                    title: "Key SQL categories:",
                    items: [
                        "DDL (Data Definition Language) — CREATE, ALTER, DROP (structure)",
                        "DML (Data Manipulation Language) — INSERT, UPDATE, DELETE (data)",
                        "DQL (Data Query Language) — SELECT (reading data)",
                        "DCL (Data Control Language) — GRANT, REVOKE (permissions)"
                    ]
                },
                {
                    type: "heading",
                    title: "Creating a Database and Table"
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- Create a new database
CREATE DATABASE school;

-- Use the database
USE school;

-- Create a table with columns and data types
CREATE TABLE students (
    id          INT PRIMARY KEY AUTO_INCREMENT,
    name        VARCHAR(100) NOT NULL,
    age         INT,
    email       VARCHAR(150) UNIQUE,
    gpa         DECIMAL(3, 2),
    enrolled_at DATE,
    is_active   BOOLEAN DEFAULT TRUE
);

-- Common data types:
-- INT, BIGINT       → whole numbers
-- VARCHAR(n)        → variable-length text up to n chars
-- TEXT              → long text
-- DECIMAL(p, s)     → exact decimal (p=precision, s=scale)
-- FLOAT / DOUBLE    → approximate decimal
-- DATE              → YYYY-MM-DD
-- DATETIME          → YYYY-MM-DD HH:MM:SS
-- BOOLEAN           → TRUE / FALSE`
                },
                {
                    type: "heading",
                    title: "INSERT INTO — Adding Rows"
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- Insert a single row
INSERT INTO students (name, age, email, gpa)
VALUES ('Alice Johnson', 20, 'alice@example.com', 3.85);

-- Insert multiple rows at once
INSERT INTO students (name, age, email, gpa)
VALUES
    ('Bob Smith', 22, 'bob@example.com', 3.40),
    ('Charlie Davis', 19, 'charlie@example.com', 3.70),
    ('Diana Lee', 21, 'diana@example.com', 3.95),
    ('Ethan Brown', 23, 'ethan@example.com', 2.90);

-- If AUTO_INCREMENT is set, you don't need to specify 'id'`
                },
                {
                    type: "heading",
                    title: "SELECT — Querying Data"
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- Select ALL columns from a table
SELECT * FROM students;

-- Select specific columns only
SELECT name, age, gpa FROM students;

-- Give columns a display alias
SELECT name AS student_name, gpa AS grade_point
FROM students;

-- Select distinct (unique) values
SELECT DISTINCT age FROM students;

-- Limit the number of results
SELECT * FROM students LIMIT 3;

-- Offset + Limit (pagination)
SELECT * FROM students LIMIT 3 OFFSET 3; -- rows 4,5,6`
                },
                {
                    type: "heading",
                    title: "WHERE — Filtering Rows"
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- Basic comparison
SELECT * FROM students WHERE age = 21;
SELECT * FROM students WHERE gpa > 3.5;
SELECT * FROM students WHERE gpa >= 3.0;
SELECT * FROM students WHERE age != 20;   -- or <> 20

-- Comparing text
SELECT * FROM students WHERE name = 'Alice Johnson';

-- Multiple conditions
SELECT * FROM students WHERE age >= 20 AND gpa >= 3.5;
SELECT * FROM students WHERE age < 20 OR gpa > 3.9;

-- Negation
SELECT * FROM students WHERE NOT age = 22;

-- NULL checks
SELECT * FROM students WHERE email IS NULL;
SELECT * FROM students WHERE email IS NOT NULL;`
                },
                {
                    type: "tip",
                    text: "SQL is case-insensitive for keywords (SELECT, FROM, WHERE can also be written select, from, where). However, string comparisons ARE case-sensitive in most databases. Always use IS NULL / IS NOT NULL — never = NULL."
                }
            ],
            quiz: [
                {
                    id: "sql-m1-q1",
                    question: "Which SQL command is used to retrieve data from a table?",
                    options: [
                        "GET",
                        "FETCH",
                        "SELECT",
                        "RETRIEVE"
                    ],
                    correctIndex: 2,
                    explanation: "SELECT is the SQL command used to query and retrieve data from one or more tables. It is the most frequently used SQL statement."
                },
                {
                    id: "sql-m1-q2",
                    question: "What does `SELECT * FROM employees` return?",
                    options: [
                        "Only the first column",
                        "All columns and all rows from the employees table",
                        "The number of rows in employees",
                        "Only distinct rows"
                    ],
                    correctIndex: 1,
                    explanation: "The * (asterisk) is a wildcard meaning 'all columns'. This query returns every column and every row from the employees table."
                },
                {
                    id: "sql-m1-q3",
                    question: "Which clause filters rows based on a condition?",
                    options: [
                        "FILTER",
                        "WHERE",
                        "HAVING",
                        "CASE"
                    ],
                    correctIndex: 1,
                    explanation: "The WHERE clause filters rows based on a condition. Only rows matching the condition are included in the result."
                },
                {
                    id: "sql-m1-q4",
                    question: "Which SQL command adds a new row to a table?",
                    options: [
                        "ADD ROW",
                        "INSERT INTO",
                        "APPEND",
                        "CREATE ROW"
                    ],
                    correctIndex: 1,
                    explanation: "INSERT INTO is used to add new rows to a table. You specify the table name, columns, and VALUES to insert."
                },
                {
                    id: "sql-m1-q5",
                    question: "How do you check if a column value is NULL in SQL?",
                    options: [
                        "WHERE col = NULL",
                        "WHERE col == NULL",
                        "WHERE col IS NULL",
                        "WHERE col.isNull()"
                    ],
                    correctIndex: 2,
                    explanation: "You must use IS NULL (or IS NOT NULL) because NULL represents absence of a value — comparing with = NULL always returns false/unknown in SQL."
                }
            ]
        },
        {
            id: "module-2",
            number: 2,
            title: "Filtering and Sorting",
            subtitle: "LIKE, IN, BETWEEN, ORDER BY and LIMIT",
            icon: "🔍",
            estimatedTime: "45 min",
            topics: [
                "AND / OR / NOT",
                "LIKE & Wildcards",
                "IN",
                "BETWEEN",
                "IS NULL",
                "ORDER BY",
                "LIMIT"
            ],
            content: [
                {
                    type: "heading",
                    title: "LIKE — Pattern Matching"
                },
                {
                    type: "paragraph",
                    text: "LIKE is used with WHERE to search for a pattern in a column. Two wildcards: % (any sequence of characters), _ (exactly one character)."
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- Students whose name starts with 'A'
SELECT * FROM students WHERE name LIKE 'A%';

-- Students whose name ends with 'son'
SELECT * FROM students WHERE name LIKE '%son';

-- Students with 'ali' anywhere in name (case varies by DB)
SELECT * FROM students WHERE name LIKE '%ali%';

-- Exactly one character before 'ob'
SELECT * FROM students WHERE name LIKE '_ob%';
-- Matches: Bob, Rob, Job...

-- NOT LIKE
SELECT * FROM students WHERE email NOT LIKE '%gmail%';`
                },
                {
                    type: "heading",
                    title: "IN and BETWEEN"
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- IN: check if value is in a list
SELECT * FROM students WHERE age IN (19, 20, 21);
-- equivalent to: WHERE age = 19 OR age = 20 OR age = 21

-- NOT IN
SELECT * FROM students WHERE age NOT IN (19, 20);

-- BETWEEN: inclusive range check
SELECT * FROM students WHERE gpa BETWEEN 3.0 AND 3.9;
-- equivalent to: WHERE gpa >= 3.0 AND gpa <= 3.9

SELECT * FROM students WHERE age BETWEEN 18 AND 22;

-- NOT BETWEEN
SELECT * FROM students WHERE gpa NOT BETWEEN 2.0 AND 3.0;

-- BETWEEN with dates
SELECT * FROM orders
WHERE order_date BETWEEN '2024-01-01' AND '2024-12-31';`
                },
                {
                    type: "heading",
                    title: "ORDER BY — Sorting Results"
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- Sort by GPA ascending (default)
SELECT name, gpa FROM students ORDER BY gpa;

-- Sort descending (highest first)
SELECT name, gpa FROM students ORDER BY gpa DESC;

-- Sort alphabetically by name
SELECT * FROM students ORDER BY name ASC;

-- Sort by multiple columns
-- First by age (asc), then by gpa (desc) for same age
SELECT * FROM students ORDER BY age ASC, gpa DESC;

-- Sort by column alias
SELECT name, gpa AS grade_point
FROM students
ORDER BY grade_point DESC;`
                },
                {
                    type: "heading",
                    title: "LIMIT and OFFSET"
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- Get top 3 students by GPA
SELECT name, gpa
FROM students
ORDER BY gpa DESC
LIMIT 3;

-- Pagination: page 2 with 5 rows per page
SELECT *
FROM students
ORDER BY id
LIMIT 5 OFFSET 5; -- skip first 5, get next 5

-- Get the single highest GPA
SELECT name, gpa
FROM students
ORDER BY gpa DESC
LIMIT 1;

-- MySQL / PostgreSQL syntax
-- SQL Server uses: SELECT TOP 3 * FROM students ORDER BY gpa DESC`
                },
                {
                    type: "heading",
                    title: "Combining Multiple Conditions"
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- Complex WHERE with parentheses for clarity
SELECT * FROM students
WHERE (age >= 20 AND age <= 22)
  AND (gpa > 3.5 OR name LIKE 'A%')
  AND email IS NOT NULL
ORDER BY gpa DESC
LIMIT 5;

-- Practical: find active students with high GPA
SELECT name, gpa, email
FROM students
WHERE is_active = TRUE
  AND gpa >= 3.8
ORDER BY gpa DESC;`
                },
                {
                    type: "tip",
                    text: "Use parentheses when mixing AND and OR — SQL evaluates AND before OR which can lead to unexpected results. `WHERE a OR b AND c` is treated as `WHERE a OR (b AND c)`, not `(a OR b) AND c`."
                }
            ],
            quiz: [
                {
                    id: "sql-m2-q1",
                    question: "What does the `%` wildcard in a LIKE pattern represent?",
                    options: [
                        "Exactly one character",
                        "A number only",
                        "Any sequence of zero or more characters",
                        "A space character"
                    ],
                    correctIndex: 2,
                    explanation: "% matches any sequence of zero or more characters. For example, LIKE 'A%' matches 'A', 'Alice', 'Amazon', etc."
                },
                {
                    id: "sql-m2-q2",
                    question: "Which query returns students sorted by name in descending (Z to A) order?",
                    options: [
                        "SELECT * FROM students ORDER BY name ASC",
                        "SELECT * FROM students SORT BY name DESC",
                        "SELECT * FROM students ORDER BY name DESC",
                        "SELECT * FROM students WHERE name DESC"
                    ],
                    correctIndex: 2,
                    explanation: "ORDER BY name DESC sorts alphabetically in reverse order (Z to A). ASC (ascending, A to Z) is the default."
                },
                {
                    id: "sql-m2-q3",
                    question: "What does `WHERE age BETWEEN 18 AND 25` return?",
                    options: [
                        "Ages strictly between 18 and 25 (not including 18 or 25)",
                        "Ages from 18 to 25 inclusive",
                        "Ages outside 18 and 25",
                        "Only age = 18 or age = 25"
                    ],
                    correctIndex: 1,
                    explanation: "BETWEEN is inclusive on both ends. WHERE age BETWEEN 18 AND 25 is equivalent to WHERE age >= 18 AND age <= 25."
                },
                {
                    id: "sql-m2-q4",
                    question: "What does `LIMIT 5 OFFSET 10` do?",
                    options: [
                        "Returns 10 rows starting from row 5",
                        "Returns 5 rows starting from row 11 (skips first 10)",
                        "Returns 15 rows total",
                        "Limits results to 10 rows"
                    ],
                    correctIndex: 1,
                    explanation: "OFFSET 10 skips the first 10 rows, then LIMIT 5 takes the next 5. This is used for pagination (page 3 with 5 rows per page)."
                },
                {
                    id: "sql-m2-q5",
                    question: "Which query finds all products whose name contains 'phone'?",
                    options: [
                        "SELECT * FROM products WHERE name = 'phone'",
                        "SELECT * FROM products WHERE name CONTAINS 'phone'",
                        "SELECT * FROM products WHERE name LIKE '%phone%'",
                        "SELECT * FROM products WHERE name IN ('phone')"
                    ],
                    correctIndex: 2,
                    explanation: "LIKE '%phone%' matches any name containing 'phone' anywhere. The % before and after ensures it matches 'phone', 'smartphone', 'headphone', etc."
                }
            ]
        },
        {
            id: "module-3",
            number: 3,
            title: "Aggregate Functions & Grouping",
            subtitle: "COUNT, SUM, AVG, GROUP BY and HAVING",
            icon: "📊",
            estimatedTime: "50 min",
            topics: [
                "COUNT",
                "SUM",
                "AVG",
                "MIN / MAX",
                "GROUP BY",
                "HAVING",
                "DISTINCT",
                "Aliases"
            ],
            content: [
                {
                    type: "heading",
                    title: "Aggregate Functions"
                },
                {
                    type: "paragraph",
                    text: "Aggregate functions perform a calculation on a set of rows and return a single value. They are used with SELECT and optionally with GROUP BY."
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- Setup: imagine an 'orders' table
-- orders(id, customer_id, product, amount, status)

-- COUNT: count rows
SELECT COUNT(*) FROM orders;           -- total rows
SELECT COUNT(amount) FROM orders;      -- non-NULL amounts
SELECT COUNT(DISTINCT customer_id) FROM orders; -- unique customers

-- SUM: total of a column
SELECT SUM(amount) FROM orders;        -- total revenue
SELECT SUM(amount) FROM orders WHERE status = 'completed';

-- AVG: average value
SELECT AVG(amount) FROM orders;
SELECT ROUND(AVG(amount), 2) FROM orders;  -- 2 decimal places

-- MIN and MAX
SELECT MIN(amount) FROM orders;        -- cheapest order
SELECT MAX(amount) FROM orders;        -- most expensive
SELECT MIN(amount), MAX(amount), AVG(amount) FROM orders;`
                },
                {
                    type: "heading",
                    title: "GROUP BY — Aggregating per Group"
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- Count orders per status
SELECT status, COUNT(*) AS order_count
FROM orders
GROUP BY status;
-- Result:
-- completed | 150
-- pending   | 45
-- cancelled | 12

-- Total revenue per customer
SELECT customer_id,
       COUNT(*) AS num_orders,
       SUM(amount) AS total_spent
FROM orders
GROUP BY customer_id
ORDER BY total_spent DESC;

-- Multiple grouping columns
SELECT status, product, COUNT(*) AS count
FROM orders
GROUP BY status, product
ORDER BY status, count DESC;`
                },
                {
                    type: "heading",
                    title: "HAVING — Filtering Groups"
                },
                {
                    type: "paragraph",
                    text: "HAVING filters groups AFTER GROUP BY is applied. WHERE filters individual rows BEFORE grouping. They serve different purposes."
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- Customers who placed more than 3 orders
SELECT customer_id, COUNT(*) AS order_count
FROM orders
GROUP BY customer_id
HAVING COUNT(*) > 3;

-- Products with average order value above $100
SELECT product, ROUND(AVG(amount), 2) AS avg_value
FROM orders
GROUP BY product
HAVING AVG(amount) > 100
ORDER BY avg_value DESC;

-- Combined WHERE + GROUP BY + HAVING
-- Among completed orders, find customers who spent > $500
SELECT customer_id, SUM(amount) AS total
FROM orders
WHERE status = 'completed'          -- filter rows first
GROUP BY customer_id                -- then group
HAVING SUM(amount) > 500            -- then filter groups
ORDER BY total DESC;`
                },
                {
                    type: "heading",
                    title: "DISTINCT"
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- students table with city column
-- Get all unique cities
SELECT DISTINCT city FROM students;

-- Unique combinations of city and major
SELECT DISTINCT city, major FROM students;

-- Count unique values
SELECT COUNT(DISTINCT city) AS unique_cities FROM students;

-- DISTINCT vs GROUP BY (often equivalent for simple counts)
SELECT city, COUNT(*) FROM students GROUP BY city;
-- vs
SELECT DISTINCT city FROM students;  -- no count, just unique values`
                },
                {
                    type: "heading",
                    title: "Aliases with AS"
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- Column aliases
SELECT
    COUNT(*) AS total_orders,
    SUM(amount) AS total_revenue,
    ROUND(AVG(amount), 2) AS avg_order_value,
    MAX(amount) AS largest_order
FROM orders;

-- Table alias (useful in joins)
SELECT s.name, s.gpa
FROM students AS s
WHERE s.gpa > 3.5;

-- Alias can be used in ORDER BY but not in WHERE
SELECT name, gpa * 100 AS gpa_percent
FROM students
ORDER BY gpa_percent DESC;`
                },
                {
                    type: "tip",
                    text: "Key rule: WHERE filters individual rows BEFORE grouping. HAVING filters groups AFTER GROUP BY. If you need to filter on an aggregate (like COUNT(*) > 5), you must use HAVING, not WHERE."
                }
            ],
            quiz: [
                {
                    id: "sql-m3-q1",
                    question: "Which aggregate function returns the total sum of a numeric column?",
                    options: [
                        "COUNT()",
                        "TOTAL()",
                        "SUM()",
                        "ADD()"
                    ],
                    correctIndex: 2,
                    explanation: "SUM() calculates the total of all non-NULL values in a column. For example, SUM(salary) returns the total salary bill."
                },
                {
                    id: "sql-m3-q2",
                    question: "What does `GROUP BY department` do?",
                    options: [
                        "Sorts rows by department",
                        "Filters out duplicate departments",
                        "Groups rows with the same department value so aggregate functions apply per group",
                        "Deletes duplicate department rows"
                    ],
                    correctIndex: 2,
                    explanation: "GROUP BY collapses rows with the same column value into one group. Aggregate functions (COUNT, SUM, AVG) then operate on each group independently."
                },
                {
                    id: "sql-m3-q3",
                    question: "What is the difference between WHERE and HAVING?",
                    options: [
                        "WHERE works with JOINs, HAVING doesn't",
                        "WHERE filters rows before grouping; HAVING filters groups after GROUP BY",
                        "They are identical",
                        "HAVING is faster than WHERE"
                    ],
                    correctIndex: 1,
                    explanation: "WHERE filters individual rows before GROUP BY runs. HAVING filters the resulting groups after GROUP BY. You can't use aggregate functions in WHERE."
                },
                {
                    id: "sql-m3-q4",
                    question: "What does `SELECT COUNT(DISTINCT city) FROM students` return?",
                    options: [
                        "The total number of students",
                        "The number of rows with non-NULL city",
                        "The number of unique city values",
                        "All distinct cities as rows"
                    ],
                    correctIndex: 2,
                    explanation: "COUNT(DISTINCT column) counts how many unique non-NULL values exist in that column. It's useful for metrics like 'how many different cities do our customers come from?'"
                },
                {
                    id: "sql-m3-q5",
                    question: "Which query finds departments with more than 10 employees?",
                    options: [
                        "SELECT dept, COUNT(*) FROM emp WHERE COUNT(*) > 10 GROUP BY dept",
                        "SELECT dept, COUNT(*) FROM emp GROUP BY dept WHERE COUNT(*) > 10",
                        "SELECT dept, COUNT(*) FROM emp GROUP BY dept HAVING COUNT(*) > 10",
                        "SELECT dept FROM emp HAVING COUNT(*) > 10"
                    ],
                    correctIndex: 2,
                    explanation: "HAVING must be placed AFTER GROUP BY and is the correct clause for filtering on aggregate results like COUNT(*). WHERE cannot use aggregate functions."
                }
            ]
        },
        {
            id: "module-4",
            number: 4,
            title: "SQL Joins",
            subtitle: "Combining data from multiple tables",
            icon: "🔗",
            estimatedTime: "55 min",
            topics: [
                "INNER JOIN",
                "LEFT JOIN",
                "RIGHT JOIN",
                "FULL OUTER JOIN",
                "ON clause",
                "Multiple Joins"
            ],
            content: [
                {
                    type: "heading",
                    title: "Why Joins?"
                },
                {
                    type: "paragraph",
                    text: "In relational databases, data is split across multiple tables to avoid repetition (normalization). Joins let you combine rows from two or more tables based on a related column — usually a foreign key relationship."
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- Two related tables:

-- customers(id, name, email, city)
-- orders(id, customer_id, product, amount, order_date)

-- customer_id in orders is a foreign key referencing customers.id

-- Sample data:
-- customers: 1=Alice, 2=Bob, 3=Charlie, 4=Diana (no orders)
-- orders: order for id=1 (Alice), two for id=2 (Bob), one for unknown id=99`
                },
                {
                    type: "heading",
                    title: "INNER JOIN — Only Matching Rows"
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- Returns rows where there is a match in BOTH tables
SELECT
    c.name AS customer,
    o.product,
    o.amount
FROM customers c
INNER JOIN orders o ON c.id = o.customer_id;
-- Only shows customers who HAVE orders
-- Diana (no orders) is excluded
-- Order with customer_id=99 (no customer) is excluded

-- Can write just JOIN (INNER is the default)
SELECT c.name, o.product, o.amount
FROM customers c
JOIN orders o ON c.id = o.customer_id;

-- Aggregation with join
SELECT c.name, COUNT(o.id) AS num_orders, SUM(o.amount) AS total
FROM customers c
JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.name
ORDER BY total DESC;`
                },
                {
                    type: "heading",
                    title: "LEFT JOIN — All Left Rows + Matching Right"
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- Returns ALL rows from the LEFT table
-- Matching rows from right, NULL if no match
SELECT
    c.name AS customer,
    o.product,
    o.amount
FROM customers c           -- LEFT table
LEFT JOIN orders o ON c.id = o.customer_id;
-- All customers shown, including Diana
-- Diana's product and amount will be NULL

-- Find customers with NO orders (very useful!)
SELECT c.name
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
WHERE o.id IS NULL;  -- no matching order
-- Returns: Diana`
                },
                {
                    type: "heading",
                    title: "RIGHT JOIN — All Right Rows + Matching Left"
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- Returns ALL rows from the RIGHT table
-- Matching rows from left, NULL if no match
SELECT
    c.name AS customer,
    o.product,
    o.amount
FROM customers c
RIGHT JOIN orders o ON c.id = o.customer_id;
-- All orders shown, including the orphan (customer_id=99)
-- That order's customer name will be NULL

-- Note: RIGHT JOIN is less common.
-- You can always rewrite it as a LEFT JOIN by swapping tables.
SELECT c.name, o.product
FROM orders o
LEFT JOIN customers c ON c.id = o.customer_id;
-- Equivalent to the RIGHT JOIN above`
                },
                {
                    type: "heading",
                    title: "FULL OUTER JOIN"
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- Returns ALL rows from BOTH tables
-- NULL wherever there's no match on either side
SELECT
    c.name AS customer,
    o.product,
    o.amount
FROM customers c
FULL OUTER JOIN orders o ON c.id = o.customer_id;
-- Shows: Diana (no orders → NULL), orphan order (no customer → NULL)

-- Note: MySQL doesn't support FULL OUTER JOIN directly.
-- Simulate it using UNION:
SELECT c.name, o.product FROM customers c LEFT JOIN orders o ON c.id = o.customer_id
UNION
SELECT c.name, o.product FROM customers c RIGHT JOIN orders o ON c.id = o.customer_id;`
                },
                {
                    type: "heading",
                    title: "Joining Three Tables"
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- Three tables:
-- customers(id, name)
-- orders(id, customer_id, product_id, amount)
-- products(id, name, category)

SELECT
    c.name AS customer,
    p.name AS product,
    p.category,
    o.amount
FROM orders o
JOIN customers c ON o.customer_id = c.id
JOIN products p  ON o.product_id  = p.id
WHERE o.amount > 100
ORDER BY o.amount DESC;`
                },
                {
                    type: "tip",
                    text: "Visualize joins like Venn diagrams: INNER = intersection, LEFT = full left circle, RIGHT = full right circle, FULL OUTER = both circles combined. Always specify ON conditions carefully — a missing condition creates a Cartesian product (every row × every row)."
                }
            ],
            quiz: [
                {
                    id: "sql-m4-q1",
                    question: "What does INNER JOIN return?",
                    options: [
                        "All rows from the left table only",
                        "All rows from both tables including unmatched rows",
                        "Only rows where there is a match in both tables",
                        "All rows from the right table only"
                    ],
                    correctIndex: 2,
                    explanation: "INNER JOIN (or just JOIN) returns only the rows that have matching values in both tables based on the ON condition. Unmatched rows from either side are excluded."
                },
                {
                    id: "sql-m4-q2",
                    question: "You want to find all customers, including those who haven't placed any orders. Which join should you use?",
                    options: [
                        "INNER JOIN",
                        "RIGHT JOIN",
                        "LEFT JOIN (customers on left)",
                        "FULL OUTER JOIN"
                    ],
                    correctIndex: 2,
                    explanation: "LEFT JOIN returns all rows from the left table (customers) plus matching rows from orders. Customers with no orders will appear with NULL for the order columns."
                },
                {
                    id: "sql-m4-q3",
                    question: "In a LEFT JOIN, what does a NULL in the right table's columns indicate?",
                    options: [
                        "The row was deleted",
                        "There is no matching row in the right table",
                        "The column has no data type",
                        "The join condition was wrong"
                    ],
                    correctIndex: 1,
                    explanation: "When there is no matching row in the right table, all columns from that table appear as NULL in the result. This is used to find 'orphaned' records (e.g., customers with no orders)."
                },
                {
                    id: "sql-m4-q4",
                    question: "What clause specifies the join condition?",
                    options: [
                        "WHERE",
                        "MATCH",
                        "ON",
                        "USING"
                    ],
                    correctIndex: 2,
                    explanation: "The ON clause specifies which columns to match between the tables (e.g., ON customers.id = orders.customer_id). Without it, you'd get a Cartesian product."
                },
                {
                    id: "sql-m4-q5",
                    question: "What does FULL OUTER JOIN return?",
                    options: [
                        "Only rows with matches in both tables",
                        "All rows from the left table",
                        "All rows from both tables, with NULLs where there is no match on either side",
                        "All rows from the right table"
                    ],
                    correctIndex: 2,
                    explanation: "FULL OUTER JOIN returns all rows from both tables. Where there is no match, the columns from the non-matching side are NULL."
                }
            ]
        },
        {
            id: "module-5",
            number: 5,
            title: "Data Modification & Advanced SQL",
            subtitle: "UPDATE, DELETE, subqueries, views and indexes",
            icon: "⚙️",
            estimatedTime: "50 min",
            topics: [
                "UPDATE",
                "DELETE",
                "Transactions",
                "Subqueries",
                "CREATE VIEW",
                "CREATE INDEX"
            ],
            content: [
                {
                    type: "heading",
                    title: "UPDATE — Modifying Existing Data"
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- Update a single column for one row
UPDATE students
SET gpa = 3.95
WHERE id = 1;

-- Update multiple columns at once
UPDATE students
SET gpa = 4.0,
    is_active = TRUE,
    email = 'alice.new@example.com'
WHERE name = 'Alice Johnson';

-- Update based on calculation
UPDATE orders
SET amount = amount * 1.10   -- 10% price increase
WHERE status = 'pending';

-- Update using a subquery
UPDATE students
SET gpa = gpa + 0.1
WHERE id IN (
    SELECT student_id FROM honors_list
);

-- ⚠️ Without WHERE, ALL rows are updated!
-- UPDATE students SET is_active = FALSE;  -- affects everyone!`
                },
                {
                    type: "heading",
                    title: "DELETE — Removing Rows"
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- Delete specific rows
DELETE FROM students WHERE id = 5;

-- Delete based on condition
DELETE FROM orders
WHERE status = 'cancelled' AND order_date < '2023-01-01';

-- Delete using subquery
DELETE FROM students
WHERE id NOT IN (
    SELECT student_id FROM enrollments
);

-- TRUNCATE: delete ALL rows quickly (no WHERE, no rollback in most DBs)
TRUNCATE TABLE temp_data;

-- ⚠️ DELETE without WHERE removes ALL rows!
-- Always double-check your WHERE clause first with a SELECT:
SELECT * FROM orders WHERE status = 'cancelled'; -- verify first
DELETE FROM orders WHERE status = 'cancelled';   -- then delete`
                },
                {
                    type: "heading",
                    title: "Transactions"
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- Transactions ensure all operations succeed or none do (ACID)
-- Useful for bank transfers, inventory updates, etc.

START TRANSACTION;  -- or BEGIN;

-- Transfer $100 from Alice to Bob
UPDATE accounts SET balance = balance - 100 WHERE name = 'Alice';
UPDATE accounts SET balance = balance + 100 WHERE name = 'Bob';

-- If both succeed:
COMMIT;   -- make changes permanent

-- If something went wrong:
ROLLBACK; -- undo everything since START TRANSACTION

-- Practical pattern with error handling (in application code):
-- START TRANSACTION
-- try:
--     debit Alice
--     credit Bob
--     COMMIT
-- except:
--     ROLLBACK`
                },
                {
                    type: "heading",
                    title: "Subqueries"
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- Subquery in WHERE (scalar)
SELECT name, gpa
FROM students
WHERE gpa > (SELECT AVG(gpa) FROM students);
-- Returns students above average GPA

-- Subquery in WHERE with IN
SELECT name FROM students
WHERE id IN (
    SELECT student_id FROM enrollments
    WHERE course_id = 101
);

-- Subquery in FROM (derived table)
SELECT dept, avg_sal
FROM (
    SELECT department AS dept, AVG(salary) AS avg_sal
    FROM employees
    GROUP BY department
) AS dept_avg
WHERE avg_sal > 60000;

-- Correlated subquery (references outer query)
SELECT e.name, e.salary
FROM employees e
WHERE e.salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE department = e.department  -- references outer e
);`
                },
                {
                    type: "heading",
                    title: "CREATE VIEW and CREATE INDEX"
                },
                {
                    type: "code",
                    language: "sql",
                    code: `-- VIEW: a saved SELECT query treated as a virtual table
CREATE VIEW high_gpa_students AS
SELECT name, email, gpa
FROM students
WHERE gpa >= 3.8;

-- Use the view like a table
SELECT * FROM high_gpa_students ORDER BY gpa DESC;
SELECT COUNT(*) FROM high_gpa_students;

-- Drop a view
DROP VIEW high_gpa_students;

-- ─────────────────────────────────────────────────────

-- INDEX: speeds up query performance on frequently searched columns
-- Trade-off: faster reads, slightly slower writes

-- Create index on a single column
CREATE INDEX idx_students_gpa ON students(gpa);

-- Create index on multiple columns
CREATE INDEX idx_orders_status_date ON orders(status, order_date);

-- Unique index (also enforces uniqueness)
CREATE UNIQUE INDEX idx_email ON students(email);

-- View indexes (MySQL)
SHOW INDEX FROM students;

-- Drop index
DROP INDEX idx_students_gpa ON students;`
                },
                {
                    type: "tip",
                    text: "Safety tip: Before running DELETE or UPDATE, always run the equivalent SELECT first to verify which rows will be affected. A missing WHERE clause is one of the most common and costly mistakes in SQL."
                }
            ],
            quiz: [
                {
                    id: "sql-m5-q1",
                    question: "What happens if you run `DELETE FROM employees` without a WHERE clause?",
                    options: [
                        "Deletes only the first row",
                        "Does nothing",
                        "Deletes ALL rows from the employees table",
                        "Causes a syntax error"
                    ],
                    correctIndex: 2,
                    explanation: "Without WHERE, DELETE removes every row from the table. The table structure remains, but all data is gone. Always use WHERE to specify which rows to delete."
                },
                {
                    id: "sql-m5-q2",
                    question: "What does ROLLBACK do in a transaction?",
                    options: [
                        "Saves all changes permanently",
                        "Undoes all changes made since the transaction started",
                        "Creates a savepoint",
                        "Starts a new transaction"
                    ],
                    correctIndex: 1,
                    explanation: "ROLLBACK reverts all changes made during the current transaction, restoring the database to the state before the transaction began."
                },
                {
                    id: "sql-m5-q3",
                    question: "What is a SQL VIEW?",
                    options: [
                        "A copy of a table stored on disk",
                        "A saved SELECT query that acts as a virtual table",
                        "A type of index",
                        "A stored procedure"
                    ],
                    correctIndex: 1,
                    explanation: "A VIEW is a stored SELECT statement that you can query like a regular table. It doesn't store data itself — it runs the underlying query each time. Useful for hiding complexity and enforcing security."
                },
                {
                    id: "sql-m5-q4",
                    question: "What does a database index do?",
                    options: [
                        "Adds constraints to columns",
                        "Speeds up data retrieval by creating a lookup structure on columns",
                        "Automatically sorts table rows",
                        "Encrypts sensitive data"
                    ],
                    correctIndex: 1,
                    explanation: "An index creates an internal data structure that speeds up SELECT queries on indexed columns. The trade-off is slightly slower INSERT/UPDATE/DELETE since the index must also be updated."
                },
                {
                    id: "sql-m5-q5",
                    question: "Which of the following correctly uses a subquery?",
                    options: [
                        "SELECT * FROM emp WHERE salary > AVG(salary)",
                        "SELECT * FROM emp WHERE salary > (SELECT AVG(salary) FROM emp)",
                        "SELECT * FROM emp HAVING salary > AVG(salary)",
                        "SELECT AVG(salary) WHERE salary > 50000"
                    ],
                    correctIndex: 1,
                    explanation: "You cannot use aggregate functions directly in a WHERE clause. Instead, use a subquery: WHERE salary > (SELECT AVG(salary) FROM emp)."
                }
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/courses/cCourse.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "C_COURSE": (()=>C_COURSE)
});
const C_COURSE = {
    id: "c-programming",
    title: "C Programming",
    level: "Beginner",
    description: "Learn C programming from scratch — variables, control flow, functions, pointers, memory and file I/O.",
    icon: "⚙️",
    color: "cyan",
    totalHours: "~5 Hours",
    modules: [
        {
            id: "module-1",
            number: 1,
            title: "C Fundamentals",
            subtitle: "Variables, data types, input/output and operators",
            icon: "⚙️",
            estimatedTime: "55 min",
            topics: [
                "What is C?",
                "First Program",
                "Variables",
                "Data Types",
                "printf()",
                "scanf()",
                "Arithmetic Operators",
                "Type Conversion"
            ],
            content: [
                {
                    type: "heading",
                    title: "What is C?"
                },
                {
                    type: "paragraph",
                    text: "C is a general-purpose, procedural programming language created by Dennis Ritchie at Bell Labs in 1972. It is one of the most influential languages ever made — Unix, Linux, and many programming languages (including Python and Java) are written in or inspired by C. C gives you fine-grained control over memory, making it ideal for systems programming, embedded systems, and performance-critical applications."
                },
                {
                    type: "list",
                    title: "Key characteristics:",
                    items: [
                        "Compiled language — source code is compiled directly to machine code",
                        "Procedural — programs are a sequence of functions",
                        "Manual memory management — you control allocation and deallocation",
                        "Close to hardware — direct memory access via pointers",
                        "Portable — runs on virtually every platform"
                    ]
                },
                {
                    type: "heading",
                    title: "Your First C Program"
                },
                {
                    type: "code",
                    language: "c",
                    code: `#include <stdio.h>   // include Standard Input/Output library

int main() {          // entry point of every C program
    printf("Hello, World!\\n");  // print to console
    return 0;         // 0 means success
}

// Compilation (in terminal):
// gcc hello.c -o hello
// ./hello`
                },
                {
                    type: "heading",
                    title: "Variables and Data Types"
                },
                {
                    type: "code",
                    language: "c",
                    code: `#include <stdio.h>

int main() {
    // Integer types
    int age = 25;              // typically 4 bytes
    short small = 100;         // 2 bytes
    long big = 1234567890L;    // 4 or 8 bytes
    long long huge = 9876543210LL;  // 8 bytes

    // Floating point
    float price = 9.99f;       // 4 bytes (7 significant digits)
    double pi = 3.14159265358; // 8 bytes (15 significant digits)

    // Character
    char grade = 'A';          // 1 byte (stores ASCII value)
    char letter = 65;          // same as 'A' (ASCII 65)

    // Unsigned (no negative values, double positive range)
    unsigned int count = 4294967295U;

    // Constants
    const double GRAVITY = 9.81;

    printf("Age: %d\\n", age);
    printf("Price: %.2f\\n", price);
    printf("Grade: %c\\n", grade);
    printf("Pi: %lf\\n", pi);

    return 0;
}`
                },
                {
                    type: "heading",
                    title: "printf() — Formatted Output"
                },
                {
                    type: "code",
                    language: "c",
                    code: `#include <stdio.h>

int main() {
    int x = 42;
    double y = 3.14159;
    char c = 'Z';
    char name[] = "Alice";

    // Format specifiers:
    printf("%d\\n", x);        // integer
    printf("%f\\n", y);        // float/double (6 decimal places)
    printf("%.2f\\n", y);      // float with 2 decimal places → 3.14
    printf("%e\\n", y);        // scientific notation → 3.141590e+00
    printf("%c\\n", c);        // character
    printf("%s\\n", name);     // string
    printf("%p\\n", &x);       // pointer/address

    // Width and alignment
    printf("%10d\\n", x);      // right-align in 10-char field
    printf("%-10d|\\n", x);    // left-align
    printf("%05d\\n", x);      // zero-padded: 00042

    return 0;
}`
                },
                {
                    type: "heading",
                    title: "scanf() — User Input"
                },
                {
                    type: "code",
                    language: "c",
                    code: `#include <stdio.h>

int main() {
    int age;
    double salary;
    char grade;
    char name[50];  // character array for string input

    printf("Enter your age: ");
    scanf("%d", &age);      // & = address-of operator (REQUIRED)

    printf("Enter your salary: ");
    scanf("%lf", &salary);  // use %lf for double with scanf

    printf("Enter your grade: ");
    scanf(" %c", &grade);   // space before %c skips whitespace

    printf("Enter your name: ");
    scanf("%49s", name);    // reads one word (stops at space)

    printf("Name: %s, Age: %d, Salary: %.2f, Grade: %c\\n",
           name, age, salary, grade);

    return 0;
}`
                },
                {
                    type: "heading",
                    title: "Operators and Type Conversion"
                },
                {
                    type: "code",
                    language: "c",
                    code: `#include <stdio.h>

int main() {
    int a = 10, b = 3;

    printf("%d\\n", a + b);   // 13
    printf("%d\\n", a - b);   // 7
    printf("%d\\n", a * b);   // 30
    printf("%d\\n", a / b);   // 3 (integer division!)
    printf("%d\\n", a % b);   // 1 (modulo/remainder)

    // Increment / decrement
    int x = 5;
    printf("%d\\n", x++);    // 5 (post-increment: use then increment)
    printf("%d\\n", x);      // 6
    printf("%d\\n", ++x);    // 7 (pre-increment: increment then use)

    // Compound assignment
    x += 10;  // x = x + 10
    x *= 2;   // x = x * 2

    // Implicit type conversion (widening)
    int i = 5;
    double d = i;   // int promoted to double automatically

    // Explicit type conversion (casting)
    double result = (double)a / b;  // force decimal division
    printf("%.4f\\n", result);       // 3.3333

    int truncated = (int)3.99;      // 3 (drops decimal)
    printf("%d\\n", truncated);

    return 0;
}`
                },
                {
                    type: "tip",
                    text: "Always use & before variable names in scanf() (except for arrays/strings). Forgetting & is one of the most common C bugs and causes undefined behavior or crashes. Use %lf (not %f) for double in scanf."
                }
            ],
            quiz: [
                {
                    id: "c-m1-q1",
                    question: "What is the correct format specifier for printing an `int` with printf()?",
                    options: [
                        "%f",
                        "%lf",
                        "%s",
                        "%d"
                    ],
                    correctIndex: 3,
                    explanation: "%d is the format specifier for integers (int) in printf. %f is for float, %lf for double, %c for char, %s for strings."
                },
                {
                    id: "c-m1-q2",
                    question: "Which header file must be included to use printf() and scanf()?",
                    options: [
                        "<math.h>",
                        "<string.h>",
                        "<stdio.h>",
                        "<stdlib.h>"
                    ],
                    correctIndex: 2,
                    explanation: "<stdio.h> (Standard Input/Output) must be included for printf, scanf, and other I/O functions. It stands for 'standard I/O header'."
                },
                {
                    id: "c-m1-q3",
                    question: "Why must you use & before a variable name in scanf()?",
                    options: [
                        "It's a formatting requirement",
                        "It doubles the value",
                        "It passes the memory address so scanf can write the value there",
                        "It converts the type to string"
                    ],
                    correctIndex: 2,
                    explanation: "& is the address-of operator. scanf needs the memory address (&var) to write the input value into the variable. Without &, you pass the value, not the address — causing undefined behavior."
                },
                {
                    id: "c-m1-q4",
                    question: "What is the result of `int result = 7 / 2;` in C?",
                    options: [
                        "3.5",
                        "3",
                        "4",
                        "3.0"
                    ],
                    correctIndex: 1,
                    explanation: "When both operands are integers, C performs integer division and truncates the result. 7 / 2 = 3 (not 3.5). To get 3.5, cast one operand: (double)7 / 2."
                },
                {
                    id: "c-m1-q5",
                    question: "What does the `const` keyword do when applied to a variable?",
                    options: [
                        "Makes it global",
                        "Makes it unchangeable after initialization",
                        "Makes it a pointer",
                        "Allocates it on the heap"
                    ],
                    correctIndex: 1,
                    explanation: "const makes a variable a constant — its value cannot be changed after initialization. Attempting to modify it causes a compilation error."
                }
            ]
        },
        {
            id: "module-2",
            number: 2,
            title: "Control Flow",
            subtitle: "if/else, switch, for, while and do-while loops",
            icon: "🔀",
            estimatedTime: "50 min",
            topics: [
                "if / else if / else",
                "switch / case",
                "for loop",
                "while loop",
                "do-while",
                "break",
                "continue"
            ],
            content: [
                {
                    type: "heading",
                    title: "if / else if / else"
                },
                {
                    type: "code",
                    language: "c",
                    code: `#include <stdio.h>

int main() {
    int score = 78;

    if (score >= 90) {
        printf("Grade: A\\n");
    } else if (score >= 80) {
        printf("Grade: B\\n");
    } else if (score >= 70) {
        printf("Grade: C\\n");
    } else if (score >= 60) {
        printf("Grade: D\\n");
    } else {
        printf("Grade: F\\n");
    }
    // Output: Grade: C

    // Ternary operator (shorthand if-else)
    int max = (score > 75) ? score : 75;
    printf("Max: %d\\n", max);  // Max: 78

    // Logical operators
    int age = 20;
    int hasLicense = 1; // 1 = true in C
    if (age >= 18 && hasLicense) {
        printf("Can drive\\n");
    }

    return 0;
}`
                },
                {
                    type: "heading",
                    title: "switch / case"
                },
                {
                    type: "code",
                    language: "c",
                    code: `#include <stdio.h>

int main() {
    int day = 3;

    switch (day) {
        case 1:
            printf("Monday\\n");
            break;
        case 2:
            printf("Tuesday\\n");
            break;
        case 3:
            printf("Wednesday\\n");
            break;
        case 4:
        case 5:
            printf("Thursday or Friday\\n"); // fall-through to group cases
            break;
        case 6:
        case 7:
            printf("Weekend\\n");
            break;
        default:
            printf("Invalid day\\n");
    }

    // switch works with int and char (NOT float, double, or strings)
    char grade = 'B';
    switch (grade) {
        case 'A': printf("Excellent!\\n"); break;
        case 'B': printf("Good\\n"); break;
        case 'C': printf("Average\\n"); break;
        default:  printf("Below average\\n");
    }

    return 0;
}`
                },
                {
                    type: "heading",
                    title: "for Loop"
                },
                {
                    type: "code",
                    language: "c",
                    code: `#include <stdio.h>

int main() {
    // Basic for loop
    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);   // 1 2 3 4 5
    }
    printf("\\n");

    // Counting down
    for (int i = 10; i >= 1; i--) {
        printf("%d ", i);
    }
    printf("\\n");

    // Sum of 1 to 100
    int sum = 0;
    for (int i = 1; i <= 100; i++) {
        sum += i;
    }
    printf("Sum = %d\\n", sum);  // Sum = 5050

    // Nested loops — print multiplication table
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 3; j++) {
            printf("%3d", i * j);
        }
        printf("\\n");
    }
    // Output:
    //   1  2  3
    //   2  4  6
    //   3  6  9

    return 0;
}`
                },
                {
                    type: "heading",
                    title: "while and do-while Loops"
                },
                {
                    type: "code",
                    language: "c",
                    code: `#include <stdio.h>

int main() {
    // while loop: check condition FIRST
    int n = 1;
    while (n <= 5) {
        printf("%d ", n);
        n++;
    }
    printf("\\n");  // 1 2 3 4 5

    // Reading until valid input
    int input;
    printf("Enter a positive number: ");
    scanf("%d", &input);
    while (input <= 0) {
        printf("Invalid! Try again: ");
        scanf("%d", &input);
    }

    // do-while: execute FIRST, check condition after
    int count = 0;
    do {
        printf("count = %d\\n", count);
        count++;
    } while (count < 3);
    // Runs even if count starts at 3!

    return 0;
}`
                },
                {
                    type: "heading",
                    title: "break and continue"
                },
                {
                    type: "code",
                    language: "c",
                    code: `#include <stdio.h>

int main() {
    // break: exit the loop immediately
    for (int i = 1; i <= 10; i++) {
        if (i == 5) break;
        printf("%d ", i);  // 1 2 3 4
    }
    printf("\\n");

    // continue: skip rest of current iteration
    for (int i = 1; i <= 10; i++) {
        if (i % 2 == 0) continue;  // skip even numbers
        printf("%d ", i);           // 1 3 5 7 9
    }
    printf("\\n");

    // Search with break
    int target = 7;
    int found = 0;
    for (int i = 1; i <= 20; i++) {
        if (i == target) {
            found = 1;
            printf("Found %d!\\n", target);
            break;
        }
    }
    if (!found) printf("Not found.\\n");

    return 0;
}`
                },
                {
                    type: "tip",
                    text: "In C, any non-zero integer value is considered TRUE, and 0 is FALSE. C does not have a built-in bool type (before C99). In C99 and later, include <stdbool.h> to use bool, true, and false."
                }
            ],
            quiz: [
                {
                    id: "c-m2-q1",
                    question: "In C, what integer value represents FALSE in a boolean context?",
                    options: [
                        "-1",
                        "1",
                        "0",
                        "NULL"
                    ],
                    correctIndex: 2,
                    explanation: "In C, 0 is FALSE and any non-zero value is TRUE. There's no native bool type in C89/C90, though C99 added <stdbool.h> with true (1) and false (0)."
                },
                {
                    id: "c-m2-q2",
                    question: "What types can be used in a C switch statement?",
                    options: [
                        "int and char only",
                        "float, double, int, and char",
                        "Integers (int, char) and enumerated types",
                        "Strings and integers"
                    ],
                    correctIndex: 2,
                    explanation: "C switch works with integer types (int, char, long, etc.) and enums. Float, double, and strings (char*) are NOT allowed in switch expressions."
                },
                {
                    id: "c-m2-q3",
                    question: "What is a key difference between while and do-while loops?",
                    options: [
                        "while is faster than do-while",
                        "do-while always executes the body at least once",
                        "while loops can use break, do-while cannot",
                        "do-while is used only for arrays"
                    ],
                    correctIndex: 1,
                    explanation: "A do-while loop executes its body first, then checks the condition. This guarantees at least one execution. A while loop checks the condition first and may never execute the body."
                },
                {
                    id: "c-m2-q4",
                    question: "What does `continue` do in a for loop?",
                    options: [
                        "Terminates the loop",
                        "Skips the rest of the current iteration and goes to the next",
                        "Restarts the loop from i=0",
                        "Exits the program"
                    ],
                    correctIndex: 1,
                    explanation: "continue skips the remaining code in the current iteration and jumps to the loop's increment expression (i++ in for loops), then re-evaluates the condition."
                },
                {
                    id: "c-m2-q5",
                    question: "What happens if you forget to include `break` in a switch case?",
                    options: [
                        "Compilation error",
                        "The program crashes",
                        "Execution falls through to the next case",
                        "The switch exits normally"
                    ],
                    correctIndex: 2,
                    explanation: "Without break, C's switch statement 'falls through' — it continues executing the code in the next case even if it doesn't match. This is sometimes used intentionally but is often a bug."
                }
            ]
        },
        {
            id: "module-3",
            number: 3,
            title: "Functions and Arrays",
            subtitle: "Defining functions, recursion, and working with arrays",
            icon: "🔧",
            estimatedTime: "60 min",
            topics: [
                "Defining Functions",
                "Parameters & Return Values",
                "Recursion",
                "1D Arrays",
                "2D Arrays",
                "Passing Arrays to Functions"
            ],
            content: [
                {
                    type: "heading",
                    title: "Defining and Calling Functions"
                },
                {
                    type: "code",
                    language: "c",
                    code: `#include <stdio.h>

// Function declaration (prototype) — before main
int add(int a, int b);
void greet(char name[]);
double power(double base, int exp);

int main() {
    int result = add(5, 3);
    printf("5 + 3 = %d\\n", result);  // 5 + 3 = 8

    greet("Alice");  // Hello, Alice!

    printf("2^10 = %.0f\\n", power(2.0, 10));  // 2^10 = 1024

    return 0;
}

// Function definitions (after main, or in a separate file)
int add(int a, int b) {
    return a + b;
}

void greet(char name[]) {
    printf("Hello, %s!\\n", name);
    // void functions don't need return
}

double power(double base, int exp) {
    double result = 1.0;
    for (int i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}`
                },
                {
                    type: "heading",
                    title: "Recursion"
                },
                {
                    type: "paragraph",
                    text: "A recursive function calls itself. Every recursive function must have a base case (stopping condition) to prevent infinite recursion."
                },
                {
                    type: "code",
                    language: "c",
                    code: `#include <stdio.h>

// Factorial: n! = n * (n-1) * ... * 1
int factorial(int n) {
    if (n <= 1) return 1;    // base case
    return n * factorial(n - 1);  // recursive case
}

// Fibonacci: fib(n) = fib(n-1) + fib(n-2)
int fibonacci(int n) {
    if (n <= 0) return 0;    // base cases
    if (n == 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Sum of digits: e.g., 123 → 1+2+3 = 6
int sumDigits(int n) {
    if (n < 10) return n;
    return (n % 10) + sumDigits(n / 10);
}

int main() {
    printf("5! = %d\\n", factorial(5));      // 120
    printf("fib(8) = %d\\n", fibonacci(8)); // 21
    printf("sum(123) = %d\\n", sumDigits(123)); // 6
    return 0;
}`
                },
                {
                    type: "heading",
                    title: "1D Arrays"
                },
                {
                    type: "code",
                    language: "c",
                    code: `#include <stdio.h>

int main() {
    // Declaration
    int scores[5];                        // uninitialized
    int primes[] = {2, 3, 5, 7, 11};     // size inferred (5)
    double temps[3] = {36.6, 37.1, 36.8};
    int zeros[10] = {0};                  // all elements = 0

    // Accessing elements (0-indexed)
    printf("%d\\n", primes[0]);  // 2
    printf("%d\\n", primes[4]);  // 11

    primes[2] = 99;              // modify element

    // Array length
    int len = sizeof(primes) / sizeof(primes[0]);  // 5
    printf("Length: %d\\n", len);

    // Traversal
    for (int i = 0; i < 5; i++) {
        printf("%d ", primes[i]);
    }
    printf("\\n");

    // Find max element
    int max = scores[0];
    int n = sizeof(scores) / sizeof(scores[0]);
    for (int i = 1; i < n; i++) {
        if (scores[i] > max) max = scores[i];
    }

    return 0;
}`
                },
                {
                    type: "heading",
                    title: "2D Arrays"
                },
                {
                    type: "code",
                    language: "c",
                    code: `#include <stdio.h>

int main() {
    // 3 rows, 4 columns
    int matrix[3][4] = {
        {1,  2,  3,  4},
        {5,  6,  7,  8},
        {9, 10, 11, 12}
    };

    printf("%d\\n", matrix[1][2]);  // Row 1, Col 2 → 7

    // Print entire matrix
    for (int row = 0; row < 3; row++) {
        for (int col = 0; col < 4; col++) {
            printf("%3d", matrix[row][col]);
        }
        printf("\\n");
    }

    // Sum all elements
    int total = 0;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 4; j++) {
            total += matrix[i][j];
        }
    }
    printf("Total: %d\\n", total);  // 78

    return 0;
}`
                },
                {
                    type: "heading",
                    title: "Passing Arrays to Functions"
                },
                {
                    type: "code",
                    language: "c",
                    code: `#include <stdio.h>

// Array is passed as a pointer — changes affect original!
void doubleAll(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        arr[i] *= 2;  // modifies the original array
    }
}

int findMax(int arr[], int size) {
    int max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

double average(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) sum += arr[i];
    return (double)sum / size;
}

int main() {
    int nums[] = {3, 1, 4, 1, 5, 9, 2, 6};
    int n = sizeof(nums) / sizeof(nums[0]);

    printf("Max: %d\\n", findMax(nums, n));     // 9
    printf("Avg: %.2f\\n", average(nums, n));   // 3.88

    doubleAll(nums, n);
    printf("First after doubling: %d\\n", nums[0]); // 6

    return 0;
}`
                },
                {
                    type: "tip",
                    text: "In C, arrays decay to pointers when passed to functions — changes inside the function affect the original array. To prevent modifications, use the `const` keyword: `void print(const int arr[], int size)`. You must always pass the array size separately since sizeof() inside the function returns the pointer size, not the array size."
                }
            ],
            quiz: [
                {
                    id: "c-m3-q1",
                    question: "What is a function prototype (declaration) in C?",
                    options: [
                        "The first call to a function",
                        "A declaration before main that tells the compiler the function's name, return type and parameters",
                        "A function defined inside another function",
                        "A function with no return value"
                    ],
                    correctIndex: 1,
                    explanation: "A prototype (forward declaration) lets you define a function after main while calling it in main. It tells the compiler the function signature so it can type-check the call."
                },
                {
                    id: "c-m3-q2",
                    question: "What is mandatory in every recursive function to prevent infinite recursion?",
                    options: [
                        "A return type of int",
                        "A global variable",
                        "A base case (stopping condition)",
                        "A for loop"
                    ],
                    correctIndex: 2,
                    explanation: "Without a base case, a recursive function calls itself indefinitely, causing a stack overflow. The base case is the condition under which the function returns without making another recursive call."
                },
                {
                    id: "c-m3-q3",
                    question: "How do you calculate the number of elements in a C array `int arr[] = {1,2,3,4,5}`?",
                    options: [
                        "arr.length",
                        "len(arr)",
                        "sizeof(arr) / sizeof(arr[0])",
                        "arr.size()"
                    ],
                    correctIndex: 2,
                    explanation: "C arrays don't have a built-in length property. Use sizeof(arr)/sizeof(arr[0]) to get the count. Note: this only works in the same scope where the array is declared, not inside functions."
                },
                {
                    id: "c-m3-q4",
                    question: "What is the index of the first element in a C array?",
                    options: [
                        "1",
                        "-1",
                        "0",
                        "Depends on declaration"
                    ],
                    correctIndex: 2,
                    explanation: "All C arrays are 0-indexed. The first element is at index 0, and the last is at index (size-1). Accessing arr[-1] or arr[size] causes undefined behavior."
                },
                {
                    id: "c-m3-q5",
                    question: "When you pass an array to a function and modify it inside, what happens to the original array?",
                    options: [
                        "A copy is modified, original unchanged",
                        "The original array is modified",
                        "The function gets only the first element",
                        "A compilation error occurs"
                    ],
                    correctIndex: 1,
                    explanation: "In C, arrays are passed as pointers to their first element. Changes inside the function affect the original array. To prevent this, mark the parameter as const."
                }
            ]
        },
        {
            id: "module-4",
            number: 4,
            title: "Pointers and Strings",
            subtitle: "Memory addresses, pointer arithmetic, and C strings",
            icon: "🎯",
            estimatedTime: "65 min",
            topics: [
                "What are Pointers?",
                "Declaring Pointers",
                "Dereferencing",
                "Pointer Arithmetic",
                "Pointers & Arrays",
                "C Strings",
                "String Functions"
            ],
            content: [
                {
                    type: "heading",
                    title: "What are Pointers?"
                },
                {
                    type: "paragraph",
                    text: "A pointer is a variable that stores the memory address of another variable. Instead of holding a value directly, it holds the location where a value is stored. Pointers are one of the most powerful (and tricky) features of C."
                },
                {
                    type: "code",
                    language: "c",
                    code: `#include <stdio.h>

int main() {
    int x = 42;

    int *p;       // declare a pointer to int (the * is part of the type)
    p = &x;       // assign the ADDRESS of x to p  (&= address-of operator)

    printf("Value of x: %d\\n", x);     // 42
    printf("Address of x: %p\\n", &x);  // e.g., 0x7ffee4b3c
    printf("p holds: %p\\n", p);        // same address as &x
    printf("*p (value at p): %d\\n", *p); // 42  (*= dereference operator)

    // Modifying x through the pointer
    *p = 100;
    printf("x is now: %d\\n", x);  // 100 — x changed!

    // Pointer to pointer
    int **pp = &p;   // pp holds the address of p
    printf("%d\\n", **pp);  // 100 (dereference twice)

    return 0;
}`
                },
                {
                    type: "heading",
                    title: "Pointer Arithmetic"
                },
                {
                    type: "code",
                    language: "c",
                    code: `#include <stdio.h>

int main() {
    int nums[] = {10, 20, 30, 40, 50};
    int *p = nums;   // p points to first element (same as &nums[0])

    printf("%d\\n", *p);      // 10 (first element)
    printf("%d\\n", *(p+1));  // 20 (second element)
    printf("%d\\n", *(p+2));  // 30

    p++;  // advance pointer by one int (4 bytes on 32-bit)
    printf("%d\\n", *p);  // 20

    // Pointer arithmetic steps by sizeof(type)
    // If int is 4 bytes: p+1 jumps 4 bytes ahead

    // Iterating array with pointer
    int *ptr = nums;
    int n = 5;
    while (ptr < nums + n) {
        printf("%d ", *ptr);
        ptr++;
    }
    printf("\\n");  // 10 20 30 40 50

    // Difference between two pointers
    int *start = &nums[1];
    int *end   = &nums[4];
    printf("Elements between: %ld\\n", end - start);  // 3

    return 0;
}`
                },
                {
                    type: "heading",
                    title: "Strings in C"
                },
                {
                    type: "paragraph",
                    text: "C doesn't have a built-in string type. Strings are arrays of char terminated by a null character '\\0'. This null terminator marks the end of the string."
                },
                {
                    type: "code",
                    language: "c",
                    code: `#include <stdio.h>

int main() {
    // String literal — stored as char array with '\\0' at end
    char name[] = "Alice";   // {'A','l','i','c','e','\\0'}
    char city[20] = "Delhi"; // fixed size buffer

    // String pointer — points to a string literal (read-only!)
    char *msg = "Hello";     // msg is a pointer; cannot modify chars

    printf("%s\\n", name);   // Alice
    printf("%c\\n", name[0]); // A (access individual chars)

    // Manual string
    char word[6];
    word[0] = 'H';
    word[1] = 'i';
    word[2] = '\\0';  // MUST have null terminator!
    printf("%s\\n", word);  // Hi

    // strlen counts characters BEFORE \\0
    // "Alice" has 5 chars; sizeof(name) is 6 (includes \\0)

    // Reading a string
    char input[100];
    printf("Enter name: ");
    scanf("%99s", input);    // stops at whitespace
    // For full line: fgets(input, 100, stdin);

    return 0;
}`
                },
                {
                    type: "heading",
                    title: "String Functions — <string.h>"
                },
                {
                    type: "code",
                    language: "c",
                    code: `#include <stdio.h>
#include <string.h>   // for string functions

int main() {
    char s1[50] = "Hello";
    char s2[] = "World";
    char s3[100];

    // strlen — length (not counting \\0)
    printf("Length: %zu\\n", strlen(s1));  // 5

    // strcpy — copy one string to another
    strcpy(s3, s1);       // s3 = "Hello"
    printf("%s\\n", s3);   // Hello

    // strcat — concatenate (append) strings
    strcat(s1, " ");       // s1 = "Hello "
    strcat(s1, s2);        // s1 = "Hello World"
    printf("%s\\n", s1);   // Hello World

    // strcmp — compare strings (0 if equal)
    printf("%d\\n", strcmp("abc", "abc")); // 0
    printf("%d\\n", strcmp("abc", "abd")); // negative (a<b)
    printf("%d\\n", strcmp("abd", "abc")); // positive

    // strstr — find substring
    char *found = strstr(s1, "World");
    if (found) printf("Found at: %s\\n", found); // World

    // Safe versions (prevent buffer overflow)
    strncpy(s3, s2, 49);  // copy at most 49 chars
    strncat(s1, s2, 20);  // append at most 20 chars

    return 0;
}`
                },
                {
                    type: "tip",
                    text: "Never use strcpy or strcat with untrusted input — they can cause buffer overflows (a major security vulnerability). Always use the safer strncpy and strncat, specifying the buffer size. Or better yet, use snprintf() for formatting strings safely."
                }
            ],
            quiz: [
                {
                    id: "c-m4-q1",
                    question: "What does the & operator do when applied to a variable?",
                    options: [
                        "Doubles the value",
                        "Returns the value at that address",
                        "Returns the memory address of the variable",
                        "Declares a reference"
                    ],
                    correctIndex: 2,
                    explanation: "& is the address-of operator. &x returns the memory address where variable x is stored. This is used when assigning to a pointer or passing to scanf."
                },
                {
                    id: "c-m4-q2",
                    question: "What does the * operator do when applied to a pointer variable?",
                    options: [
                        "Multiplies the pointer",
                        "Declares a new pointer",
                        "Returns the memory address",
                        "Dereferences the pointer — gets the value at that address"
                    ],
                    correctIndex: 3,
                    explanation: "When used on an existing pointer, * is the dereference operator. *p reads or writes the value stored at the memory address held in p."
                },
                {
                    id: "c-m4-q3",
                    question: "How does C store strings?",
                    options: [
                        "As a special String object",
                        "As a linked list of characters",
                        "As a char array terminated by '\\0'",
                        "As a sequence of Unicode code points"
                    ],
                    correctIndex: 2,
                    explanation: "C strings are arrays of char with a null terminator ('\\0') at the end. Functions like printf and strlen rely on finding this '\\0' to know where the string ends."
                },
                {
                    id: "c-m4-q4",
                    question: "What does `strlen(\"Hello\")` return?",
                    options: [
                        "6 (including \\0)",
                        "5 (characters only)",
                        "4",
                        "0"
                    ],
                    correctIndex: 1,
                    explanation: "strlen returns the number of characters BEFORE the null terminator. 'Hello' has 5 characters (H,e,l,l,o), so strlen returns 5. sizeof would return 6 (includes '\\0')."
                },
                {
                    id: "c-m4-q5",
                    question: "Which function safely compares two C strings for equality?",
                    options: [
                        "str1 == str2",
                        "strcmp(str1, str2) == 0",
                        "strequal(str1, str2)",
                        "compare(str1, str2)"
                    ],
                    correctIndex: 1,
                    explanation: "strcmp returns 0 if the strings are equal. Using == compares pointer addresses (not contents), which gives wrong results for string comparison in C."
                }
            ]
        },
        {
            id: "module-5",
            number: 5,
            title: "Structures, Memory & File I/O",
            subtitle: "structs, dynamic memory allocation, and file operations",
            icon: "💾",
            estimatedTime: "65 min",
            topics: [
                "Structures (struct)",
                "Arrays of Structs",
                "malloc / calloc / free",
                "File I/O",
                "fopen / fclose",
                "Common C Pitfalls"
            ],
            content: [
                {
                    type: "heading",
                    title: "Structures (struct)"
                },
                {
                    type: "paragraph",
                    text: "A struct lets you group related variables of different types together into a single user-defined type — similar to a simple object in OOP languages."
                },
                {
                    type: "code",
                    language: "c",
                    code: `#include <stdio.h>
#include <string.h>

// Define a struct type
struct Student {
    char name[50];
    int age;
    double gpa;
    char email[100];
};

// typedef makes usage cleaner
typedef struct {
    double x;
    double y;
} Point;

int main() {
    // Declare and initialize
    struct Student s1;
    strcpy(s1.name, "Alice");
    s1.age = 20;
    s1.gpa = 3.85;

    // Or initialize at declaration
    struct Student s2 = {"Bob", 22, 3.40, "bob@example.com"};

    printf("Name: %s, GPA: %.2f\\n", s1.name, s1.gpa);
    printf("Name: %s, Age: %d\\n", s2.name, s2.age);

    // typedef struct
    Point p1 = {3.0, 4.0};
    printf("Point: (%.1f, %.1f)\\n", p1.x, p1.y);

    // Struct in function
    // Pass by value (copy) or by pointer (efficient for large structs)

    return 0;
}`
                },
                {
                    type: "heading",
                    title: "Arrays of Structs & Struct Pointers"
                },
                {
                    type: "code",
                    language: "c",
                    code: `#include <stdio.h>
#include <string.h>

typedef struct {
    char name[50];
    int age;
    double gpa;
} Student;

void printStudent(Student *s) {
    // Use -> to access members via pointer (instead of (*s).name)
    printf("%s | Age: %d | GPA: %.2f\\n", s->name, s->age, s->gpa);
}

int main() {
    // Array of structs
    Student class[3] = {
        {"Alice", 20, 3.85},
        {"Bob",   22, 3.40},
        {"Carol", 21, 3.95}
    };

    for (int i = 0; i < 3; i++) {
        printStudent(&class[i]);  // pass pointer to struct
    }

    // Find student with highest GPA
    Student *best = &class[0];
    for (int i = 1; i < 3; i++) {
        if (class[i].gpa > best->gpa) {
            best = &class[i];
        }
    }
    printf("Best: %s (%.2f)\\n", best->name, best->gpa);

    return 0;
}`
                },
                {
                    type: "heading",
                    title: "Dynamic Memory Allocation"
                },
                {
                    type: "code",
                    language: "c",
                    code: `#include <stdio.h>
#include <stdlib.h>   // for malloc, calloc, realloc, free

int main() {
    // malloc: allocate memory (contents undefined/garbage)
    int n = 5;
    int *arr = (int *)malloc(n * sizeof(int));

    if (arr == NULL) {   // ALWAYS check for NULL (allocation failure)
        printf("Memory allocation failed!\\n");
        return 1;
    }

    for (int i = 0; i < n; i++) arr[i] = i * 10;
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");  // 0 10 20 30 40

    // realloc: resize existing allocation
    arr = (int *)realloc(arr, 10 * sizeof(int));
    // first 5 values preserved, next 5 are uninitialized

    free(arr);  // ALWAYS free when done to prevent memory leak
    arr = NULL; // good practice: set to NULL after free

    // calloc: allocate AND zero-initialize
    double *grades = (double *)calloc(10, sizeof(double));
    // all 10 doubles initialized to 0.0
    free(grades);

    return 0;
}`
                },
                {
                    type: "heading",
                    title: "File I/O"
                },
                {
                    type: "code",
                    language: "c",
                    code: `#include <stdio.h>

int main() {
    // ── Writing to a file ──────────────────────────────────────
    FILE *fp = fopen("data.txt", "w");  // "w" = write (creates/overwrites)
    if (fp == NULL) {
        printf("Cannot open file!\\n");
        return 1;
    }

    fprintf(fp, "Alice 3.85\\n");
    fprintf(fp, "Bob 3.40\\n");
    fprintf(fp, "Charlie 3.70\\n");
    fclose(fp);  // ALWAYS close the file

    // ── Reading from a file ─────────────────────────────────────
    fp = fopen("data.txt", "r");  // "r" = read
    if (fp == NULL) {
        printf("File not found!\\n");
        return 1;
    }

    char name[50];
    double gpa;
    while (fscanf(fp, "%s %lf", name, &gpa) == 2) {
        printf("Name: %s, GPA: %.2f\\n", name, gpa);
    }
    fclose(fp);

    // ── Appending ────────────────────────────────────────────────
    fp = fopen("data.txt", "a");  // "a" = append
    fprintf(fp, "Diana 3.95\\n");
    fclose(fp);

    // ── Reading lines ────────────────────────────────────────────
    fp = fopen("data.txt", "r");
    char line[200];
    while (fgets(line, sizeof(line), fp) != NULL) {
        printf("%s", line);  // fgets includes the newline
    }
    fclose(fp);

    return 0;
}`
                },
                {
                    type: "list",
                    title: "Common C Pitfalls to avoid:",
                    items: [
                        "Forgetting & in scanf: scanf(\"%d\", num) instead of scanf(\"%d\", &num) — causes crash",
                        "Buffer overflow: writing more bytes than a char array holds",
                        "Memory leak: calling malloc without a matching free",
                        "Use after free: accessing memory after calling free on it",
                        "Null pointer dereference: calling *p when p == NULL",
                        "Integer overflow: int x = 2147483647; x++; results in undefined behavior",
                        "Off-by-one: array[5] on a size-5 array accesses beyond the end",
                        "Missing return from non-void function — undefined behavior"
                    ]
                },
                {
                    type: "tip",
                    text: "Use tools like Valgrind (Linux/Mac) to detect memory leaks and invalid memory accesses. Compile with -Wall -Wextra flags to catch many common mistakes: `gcc -Wall -Wextra program.c -o program`."
                }
            ],
            quiz: [
                {
                    id: "c-m5-q1",
                    question: "What does `malloc(n * sizeof(int))` do?",
                    options: [
                        "Creates n integer variables on the stack",
                        "Allocates n bytes on the heap",
                        "Allocates memory on the heap for n integers and returns a pointer",
                        "Frees n bytes of memory"
                    ],
                    correctIndex: 2,
                    explanation: "malloc allocates the specified number of bytes on the heap and returns a void pointer to the allocated memory. You must cast it to the appropriate type and always check if it returned NULL."
                },
                {
                    id: "c-m5-q2",
                    question: "What is a memory leak in C?",
                    options: [
                        "When a pointer is set to NULL",
                        "When allocated memory is never freed, causing it to be unavailable until the program exits",
                        "When the stack overflows",
                        "When a variable goes out of scope"
                    ],
                    correctIndex: 1,
                    explanation: "A memory leak occurs when dynamically allocated memory (malloc/calloc) is never freed. Over time, this exhausts available memory. Always call free() when you're done with allocated memory."
                },
                {
                    id: "c-m5-q3",
                    question: "How do you access a struct member through a pointer `p` to the struct?",
                    options: [
                        "p.member",
                        "*p.member",
                        "p->member",
                        "(*p)->member"
                    ],
                    correctIndex: 2,
                    explanation: "The -> operator accesses struct members through a pointer. `p->member` is shorthand for `(*p).member`. It dereferences the pointer and accesses the field in one step."
                },
                {
                    id: "c-m5-q4",
                    question: "Which function is used to open a file for reading in C?",
                    options: [
                        "openFile()",
                        "read()",
                        "fopen(filename, \"r\")",
                        "open(filename)"
                    ],
                    correctIndex: 2,
                    explanation: "fopen() opens a file and returns a FILE pointer. The second argument is the mode: \"r\" for reading, \"w\" for writing (creates/overwrites), \"a\" for appending."
                },
                {
                    id: "c-m5-q5",
                    question: "What should you always do after calling malloc() before using the returned pointer?",
                    options: [
                        "Cast it to int",
                        "Call free() immediately",
                        "Check if it is NULL (allocation might have failed)",
                        "Call realloc()"
                    ],
                    correctIndex: 2,
                    explanation: "malloc returns NULL if memory allocation fails (e.g., out of memory). Dereferencing a NULL pointer causes a segfault. Always check: if (ptr == NULL) { /* handle error */ }."
                }
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/courseRegistry.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ALL_COURSES": (()=>ALL_COURSES),
    "COURSE_REGISTRY": (()=>COURSE_REGISTRY),
    "PYTHON_META": (()=>PYTHON_META)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$javaCourse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/data/courses/javaCourse.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$sqlCourse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/data/courses/sqlCourse.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$cCourse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/data/courses/cCourse.ts [app-client] (ecmascript)");
;
;
;
const PYTHON_META = {
    id: "python-basics",
    title: "Python Basics",
    level: "Beginner",
    description: "Learn Python from scratch — variables, loops, functions, data structures, OOP, and file handling.",
    icon: "🐍",
    color: "blue",
    totalHours: "~4 Hours"
};
const COURSE_REGISTRY = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$javaCourse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JAVA_COURSE"].id]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$javaCourse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JAVA_COURSE"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$sqlCourse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SQL_COURSE"].id]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$sqlCourse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SQL_COURSE"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$cCourse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C_COURSE"].id]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$cCourse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C_COURSE"]
};
const ALL_COURSES = [
    PYTHON_META,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$javaCourse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JAVA_COURSE"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$sqlCourse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SQL_COURSE"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$cCourse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["C_COURSE"]
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/courseTypes.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// ─── Shared types and helpers for all CodePlace courses ──────────────────────
__turbopack_esm__({
    "COURSE_COLORS": (()=>COURSE_COLORS),
    "PASS_THRESHOLD": (()=>PASS_THRESHOLD),
    "createEmptyCourseProgress": (()=>createEmptyCourseProgress),
    "getCourseOverallProgress": (()=>getCourseOverallProgress),
    "getStorageKey": (()=>getStorageKey),
    "isCourseModuleUnlocked": (()=>isCourseModuleUnlocked),
    "loadCourseProgress": (()=>loadCourseProgress),
    "saveCourseProgress": (()=>saveCourseProgress)
});
const PASS_THRESHOLD = 4;
const COURSE_COLORS = {
    blue: {
        badge: "text-blue-400 bg-blue-500/10 border-blue-500/20",
        badgeText: "text-blue-400",
        border: "border-blue-500/40",
        bg: "bg-blue-500/5",
        glow: "shadow-[0_0_30px_rgba(59,130,246,0.08)]",
        btn: "from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-[0_4px_20px_rgba(99,102,241,0.3)]",
        accent: "from-blue-400 to-purple-500",
        progress: "from-blue-500 to-purple-500",
        iconBg: "bg-blue-500/10 border-blue-500/20",
        bar: "bg-blue-400"
    },
    orange: {
        badge: "text-orange-400 bg-orange-500/10 border-orange-500/20",
        badgeText: "text-orange-400",
        border: "border-orange-500/40",
        bg: "bg-orange-500/5",
        glow: "shadow-[0_0_30px_rgba(249,115,22,0.08)]",
        btn: "from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-[0_4px_20px_rgba(249,115,22,0.3)]",
        accent: "from-orange-400 to-red-500",
        progress: "from-orange-500 to-red-500",
        iconBg: "bg-orange-500/10 border-orange-500/20",
        bar: "bg-orange-400"
    },
    emerald: {
        badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        badgeText: "text-emerald-400",
        border: "border-emerald-500/40",
        bg: "bg-emerald-500/5",
        glow: "shadow-[0_0_30px_rgba(16,185,129,0.08)]",
        btn: "from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-[0_4px_20px_rgba(16,185,129,0.3)]",
        accent: "from-emerald-400 to-teal-500",
        progress: "from-emerald-500 to-teal-400",
        iconBg: "bg-emerald-500/10 border-emerald-500/20",
        bar: "bg-emerald-400"
    },
    cyan: {
        badge: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
        badgeText: "text-cyan-400",
        border: "border-cyan-500/40",
        bg: "bg-cyan-500/5",
        glow: "shadow-[0_0_30px_rgba(6,182,212,0.08)]",
        btn: "from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-[0_4px_20px_rgba(6,182,212,0.3)]",
        accent: "from-cyan-400 to-blue-500",
        progress: "from-cyan-500 to-blue-400",
        iconBg: "bg-cyan-500/10 border-cyan-500/20",
        bar: "bg-cyan-400"
    },
    purple: {
        badge: "text-purple-400 bg-purple-500/10 border-purple-500/20",
        badgeText: "text-purple-400",
        border: "border-purple-500/40",
        bg: "bg-purple-500/5",
        glow: "shadow-[0_0_30px_rgba(168,85,247,0.08)]",
        btn: "from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-[0_4px_20px_rgba(168,85,247,0.3)]",
        accent: "from-purple-400 to-pink-500",
        progress: "from-purple-500 to-pink-400",
        iconBg: "bg-purple-500/10 border-purple-500/20",
        bar: "bg-purple-400"
    },
    rose: {
        badge: "text-rose-400 bg-rose-500/10 border-rose-500/20",
        badgeText: "text-rose-400",
        border: "border-rose-500/40",
        bg: "bg-rose-500/5",
        glow: "shadow-[0_0_30px_rgba(244,63,94,0.08)]",
        btn: "from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 shadow-[0_4px_20px_rgba(244,63,94,0.3)]",
        accent: "from-rose-400 to-orange-500",
        progress: "from-rose-500 to-orange-400",
        iconBg: "bg-rose-500/10 border-rose-500/20",
        bar: "bg-rose-400"
    }
};
function getStorageKey(courseId) {
    return `codeplace_course_${courseId}_progress`;
}
function loadCourseProgress(courseId, userId, modules) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    const raw = localStorage.getItem(getStorageKey(courseId));
    if (!raw) return createEmptyCourseProgress(courseId, userId, modules);
    try {
        const parsed = JSON.parse(raw);
        if (parsed.userId !== userId) return createEmptyCourseProgress(courseId, userId, modules);
        // Ensure all module keys exist (handles adding new modules)
        for (const mod of modules){
            if (!parsed.modules[mod.id]) {
                parsed.modules[mod.id] = {
                    contentCompleted: false,
                    quizScores: [],
                    bestScore: 0,
                    passed: false
                };
            }
        }
        return parsed;
    } catch  {
        return createEmptyCourseProgress(courseId, userId, modules);
    }
}
function saveCourseProgress(courseId, progress) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    localStorage.setItem(getStorageKey(courseId), JSON.stringify(progress));
}
function createEmptyCourseProgress(courseId, userId, modules) {
    const moduleMap = {};
    for (const mod of modules){
        moduleMap[mod.id] = {
            contentCompleted: false,
            quizScores: [],
            bestScore: 0,
            passed: false
        };
    }
    return {
        userId,
        courseId,
        startedAt: new Date().toISOString(),
        modules: moduleMap,
        certificateUnlocked: false
    };
}
function isCourseModuleUnlocked(moduleIndex, progress, modules) {
    if (moduleIndex === 0) return true;
    const prevModule = modules[moduleIndex - 1];
    return progress.modules[prevModule.id]?.passed === true;
}
function getCourseOverallProgress(progress, modules) {
    const totalModules = modules.length;
    if (totalModules === 0) return 0;
    const passedModules = Object.values(progress.modules).filter((m)=>m.passed).length;
    return Math.round(passedModules / totalModules * 100);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/courses/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CoursesPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courseRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/data/courseRegistry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courseTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/data/courseTypes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/award.mjs [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
"use client";
;
;
;
;
;
;
;
;
const levelColor = {
    Beginner: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    Intermediate: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    Advanced: "text-red-400 bg-red-500/10 border-red-500/20"
};
function CoursesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-screen bg-[#030303] relative overflow-x-clip",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[5%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600/6 blur-[130px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/app/courses/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[50%] right-[-5%] w-[400px] h-[400px] rounded-full bg-purple-600/6 blur-[120px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/app/courses/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/src/app/courses/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pt-16 pb-12 px-6 border-b border-white/5 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-xs text-blue-400 font-bold uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full w-fit mx-auto mb-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/courses/page.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                "CodePlace Courses"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/courses/page.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl sm:text-5xl font-black text-white mb-4",
                            children: [
                                "Learn to Code,",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",
                                    children: "Module by Module"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/courses/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/courses/page.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-zinc-400 text-base leading-relaxed max-w-xl mx-auto",
                            children: "Structured courses with rich learning content, interactive quizzes, progress tracking and a certificate on completion."
                        }, void 0, false, {
                            fileName: "[project]/src/app/courses/page.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/courses/page.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/courses/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-6xl mx-auto px-6 py-14 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-black text-white",
                                        children: "Available Courses"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/courses/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-zinc-500 text-sm mt-0.5",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courseRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_COURSES"].length,
                                            " courses · All free"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/courses/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/courses/page.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-xs text-zinc-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-emerald-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/courses/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    "Beginner Friendly"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/courses/page.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/courses/page.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-5",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courseRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_COURSES"].map((course, i)=>{
                            const c = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courseTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COURSE_COLORS"][course.color || "blue"];
                            const modulesCount = "modules" in course ? course.modules.length : 5;
                            const href = `/courses/${course.id}`;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: i * 0.08
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: href,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `group rounded-2xl border ${c.border.replace("40", "20")} bg-white/[0.03] hover:${c.bg} hover:${c.border} transition-all duration-300 overflow-hidden cursor-pointer hover:${c.glow} p-6 h-full`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-12 h-12 rounded-2xl ${c.iconBg} border flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`,
                                                                children: course.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/courses/page.tsx",
                                                                lineNumber: 76,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-base font-black text-white",
                                                                        children: course.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/courses/page.tsx",
                                                                        lineNumber: 80,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-[10px] font-bold px-2 py-0.5 rounded-full border ${levelColor[course.level]}`,
                                                                        children: course.level
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/courses/page.tsx",
                                                                        lineNumber: 81,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/courses/page.tsx",
                                                                lineNumber: 79,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/courses/page.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex items-center gap-1 text-xs font-bold ${c.badgeText} opacity-0 group-hover:opacity-100 transition-opacity`,
                                                        children: [
                                                            "Start ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/courses/page.tsx",
                                                                lineNumber: 87,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/courses/page.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/courses/page.tsx",
                                                lineNumber: 74,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-zinc-500 text-xs leading-relaxed mb-4",
                                                children: course.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/courses/page.tsx",
                                                lineNumber: 91,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5 text-[11px] text-zinc-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                                className: `w-3.5 h-3.5 ${c.badgeText}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/courses/page.tsx",
                                                                lineNumber: 96,
                                                                columnNumber: 25
                                                            }, this),
                                                            modulesCount,
                                                            " Modules"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/courses/page.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5 text-[11px] text-zinc-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                className: "w-3.5 h-3.5 text-zinc-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/courses/page.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 25
                                                            }, this),
                                                            course.totalHours
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/courses/page.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5 text-[11px] text-zinc-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                className: "w-3.5 h-3.5 text-amber-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/courses/page.tsx",
                                                                lineNumber: 104,
                                                                columnNumber: 25
                                                            }, this),
                                                            modulesCount * 5,
                                                            " Quiz Questions"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/courses/page.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5 text-[11px] text-zinc-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                                className: "w-3.5 h-3.5 text-zinc-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/courses/page.tsx",
                                                                lineNumber: 108,
                                                                columnNumber: 25
                                                            }, this),
                                                            "Certificate"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/courses/page.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/courses/page.tsx",
                                                lineNumber: 94,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `mt-5 pt-4 border-t border-white/5 flex items-center justify-between`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: Array.from({
                                                            length: modulesCount
                                                        }).map((_, mi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-1.5 h-1.5 rounded-full ${c.bar} opacity-30`
                                                            }, mi, false, {
                                                                fileName: "[project]/src/app/courses/page.tsx",
                                                                lineNumber: 117,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/courses/page.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-xs font-bold ${c.badgeText} flex items-center gap-1`,
                                                        children: [
                                                            "View Course ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/courses/page.tsx",
                                                                lineNumber: 121,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/courses/page.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/courses/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/courses/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/courses/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, this)
                            }, course.id, false, {
                                fileName: "[project]/src/app/courses/page.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/courses/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/courses/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/src/app/courses/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/courses/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = CoursesPage;
var _c;
__turbopack_refresh__.register(_c, "CoursesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/courses/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_c91c72._.js.map