import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(request: Request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON request body." },
        { status: 400 }
      );
    }

    const { amount, currency, receipt } = body;

    // Validate amount >= 100 paise (1 INR)
    if (amount === undefined || amount === null) {
      return NextResponse.json(
        { error: "Amount is required." },
        { status: 400 }
      );
    }

    if (amount < 100) {
      return NextResponse.json(
        { error: "Amount must be at least 100 paise." },
        { status: 400 }
      );
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      console.error("Razorpay API credentials are missing.");
      return NextResponse.json(
        { error: "Razorpay credentials are not configured on the server." },
        { status: 401 }
      );
    }

    const instance = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const options = {
      amount: Math.round(amount), // in paise
      currency: currency || "INR",
      receipt: receipt || `receipt_${Date.now()}`,
    };

    const order = await instance.orders.create(options);

    return NextResponse.json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error: any) {
    console.error("Razorpay Order Creation Failed:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create Razorpay order." },
      { status: 500 }
    );
  }
}
