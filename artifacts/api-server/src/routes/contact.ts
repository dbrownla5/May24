import { Router, type IRouter, type Request, type Response } from "express";
import { Resend } from "resend";

const router: IRouter = Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/contact", async (req: Request, res: Response) => {
  const { name, email, phone, neighborhood, clientType, summary, situation } = req.body as {
    name?: string;
    email?: string;
    phone?: string;
    neighborhood?: string;
    clientType?: string;
    summary?: string;
    situation?: string;
  };

  if (!name || !email) {
    res.status(400).json({ ok: false, error: "Name and email are required." });
    return;
  }

  const subject = `New Inquiry — ${summary || "General"}`;
  const htmlBody = `
    <table style="font-family: sans-serif; font-size: 15px; color: #222; border-collapse: collapse; width: 100%; max-width: 560px;">
      <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Name</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td></tr>
      <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${email}</td></tr>
      <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Phone</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${phone || "—"}</td></tr>
      <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Neighborhood</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${neighborhood || "—"}</td></tr>
      <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Client type</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${clientType === "returning" ? "Returning" : "New"}</td></tr>
      <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Interest</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${summary || "—"}</td></tr>
      <tr><td style="padding: 8px 12px 8px 0; vertical-align: top;"><strong>Situation</strong></td><td style="padding: 8px 0; white-space: pre-wrap;">${situation || "—"}</td></tr>
    </table>
  `;

  try {
    const { error } = await resend.emails.send({
      from: "Dayna at The Well Lived Citizen <dayna@thewelllivedcitizen.com>",
      to: "dayna@thewelllivedcitizen.com",
      replyTo: email,
      subject,
      html: htmlBody,
    });

    if (error) {
      console.error("Resend error:", error);
      res.status(500).json({ ok: false, error: "Failed to send message. Please try again." });
      return;
    }

    res.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    res.status(500).json({ ok: false, error: "Failed to send message. Please try again." });
  }
});

export default router;
