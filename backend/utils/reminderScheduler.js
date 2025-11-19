import cron from "node-cron";
import Order from "../models/Order.js";
import nodemailer from "nodemailer";
import User from "../models/User.js";

export const startReminderService = () => {
  console.log("📅 Reminder Scheduler Started...");

  // Runs every hour
  cron.schedule("*/30 * * * * *", async () => {

    console.log("🔍 Checking for upcoming offline orders...");

    try {
      const now = new Date();
      const next24h = new Date(now.getTime() + 24 * 60 * 60 * 1000);

      // Find offline orders with appointmentDate exactly 24 hours away
      const orders = await Order.find({
        orderType: "offline",
        appointmentDate: {
          $gte: now,
          $lte: next24h,
        },
      });

      if (!orders.length) {
        console.log("ℹ️ No reminders to send.");
        return;
      }

      // Setup mailer
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.OTP_EMAIL,
          pass: process.env.OTP_PASS,
        },
      });

      for (let order of orders) {
        const user = await User.findById(order.user);

        if (!user || !user.email) continue;

        const appointmentTime = new Date(order.appointmentDate).toLocaleString();

        const mailOptions = {
          from: process.env.OTP_EMAIL,
          to: user.email,
          subject: "📅 Reminder: Your Offline Order Appointment",
          text: `Hi ${user.name},\n\nThis is a reminder for your offline order appointment scheduled at:\n\n${appointmentTime}\n\nThank you for choosing Vanity!`,
        };

        await transporter.sendMail(mailOptions);

        console.log(`📨 Reminder sent to ${user.email}`);
      }

    } catch (error) {
      console.error("❌ Reminder Scheduler Error:", error);
    }
  });
};
