import { Router, Request, Response } from "express";
import Razorpay from "razorpay";
import crypto from "crypto";
import { sql } from "../lib/db";

const router = Router();

// ─── POST /api/create-order ───────────────────────────────────────────────
router.post("/create-order", async (req: Request, res: Response) => {
  try {
    const { amount, currency, receipt } = req.body;

    if (amount === undefined || amount === null) {
      res.status(400).json({ error: "Amount is required." });
      return;
    }

    if (amount < 100) {
      res.status(400).json({ error: "Amount must be at least 100 paise." });
      return;
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      console.error("Razorpay API credentials are missing.");
      res.status(401).json({ error: "Razorpay credentials are not configured on the server." });
      return;
    }

    const instance = new Razorpay({ key_id: keyId, key_secret: keySecret });

    const options = {
      amount: Math.round(amount),
      currency: currency || "INR",
      receipt: receipt || `receipt_${Date.now()}`,
    };

    const order = await instance.orders.create(options);

    res.json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error: any) {
    console.error("Razorpay Order Creation Failed:", error);
    res.status(500).json({ error: error.message || "Failed to create Razorpay order." });
  }
});

// ─── POST /api/verify-payment ─────────────────────────────────────────────
router.post("/verify-payment", async (req: Request, res: Response) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      res.status(400).json({ error: "Missing required payment fields." });
      return;
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) {
      res.status(401).json({ error: "Razorpay credentials are not configured on the server." });
      return;
    }

    const text = razorpay_order_id + "|" + razorpay_payment_id;
    const generatedSignature = crypto
      .createHmac("sha256", keySecret)
      .update(text)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      res.status(400).json({ error: "Payment verification failed. Signature mismatch." });
      return;
    }

    if (userId) {
      await sql`UPDATE users SET is_premium = true WHERE id = ${userId}`;
    }

    res.json({ success: true, message: "Payment verified successfully." });
  } catch (error: any) {
    console.error("Razorpay Payment Verification Failed:", error);
    res.status(500).json({ error: error.message || "Failed to verify payment." });
  }
});

export default router;
