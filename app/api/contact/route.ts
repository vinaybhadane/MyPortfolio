import { NextRequest, NextResponse } from 'next/server';
import Mailjet from 'node-mailjet';

const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY!,
  process.env.MAILJET_SECRET_KEY!
);

// Rate limit tracker (in-memory)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_MAX = 2;
const RATE_LIMIT_WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // 1. Rate Limiting Check
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    let timestamps = rateLimitMap.get(ip) || [];
    
    // Filter out requests older than 24 hours
    timestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
    
    if (timestamps.length >= RATE_LIMIT_MAX) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. You can only send 2 messages per 24 hours.' },
        { status: 429 }
      );
    }

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // Update rate limit map only if validation passes
    timestamps.push(now);
    rateLimitMap.set(ip, timestamps);

    // Build beautiful HTML email body
    const htmlBody = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Portfolio Contact</title>
      </head>
      <body style="margin:0;padding:0;background:#020408;font-family:'Segoe UI',Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#020408;padding:40px 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#070d14;border:1px solid rgba(0,245,255,0.15);border-radius:16px;overflow:hidden;max-width:600px;width:100%;">

                <!-- Header -->
                <tr>
                  <td style="background:linear-gradient(135deg,#00f5ff15,#8b00ff15);padding:32px;border-bottom:1px solid rgba(0,245,255,0.1);text-align:center;">
                    <div style="width:56px;height:56px;background:linear-gradient(135deg,#00f5ff,#8b00ff);border-radius:14px;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;">
                      <span style="font-family:Arial,sans-serif;font-weight:900;font-size:26px;color:#020408;line-height:56px;display:block;">V</span>
                    </div>
                    <h1 style="margin:0;color:#00f5ff;font-size:22px;font-weight:800;letter-spacing:2px;text-transform:uppercase;">New Portfolio Message</h1>
                    <p style="margin:8px 0 0;color:rgba(255,255,255,0.4);font-size:12px;letter-spacing:1px;font-family:monospace;">vinaybhadane.dev — Contact Form</p>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding:32px;">
                    <!-- Sender info -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                      <tr>
                        <td width="50%" style="padding:0 8px 0 0;">
                          <div style="background:rgba(0,245,255,0.05);border:1px solid rgba(0,245,255,0.12);border-radius:10px;padding:16px;">
                            <p style="margin:0 0 6px;color:rgba(0,245,255,0.6);font-size:10px;letter-spacing:2px;text-transform:uppercase;font-family:monospace;">FROM</p>
                            <p style="margin:0;color:#e2e8f0;font-size:15px;font-weight:600;">${name}</p>
                          </div>
                        </td>
                        <td width="50%" style="padding:0 0 0 8px;">
                          <div style="background:rgba(139,0,255,0.05);border:1px solid rgba(139,0,255,0.12);border-radius:10px;padding:16px;">
                            <p style="margin:0 0 6px;color:rgba(139,0,255,0.7);font-size:10px;letter-spacing:2px;text-transform:uppercase;font-family:monospace;">EMAIL</p>
                            <p style="margin:0;color:#e2e8f0;font-size:13px;font-weight:500;word-break:break-all;">${email}</p>
                          </div>
                        </td>
                      </tr>
                    </table>

                    <!-- Message -->
                    <div style="background:rgba(0,245,255,0.03);border:1px solid rgba(0,245,255,0.1);border-radius:12px;padding:24px;margin-bottom:28px;">
                      <p style="margin:0 0 12px;color:rgba(0,245,255,0.6);font-size:10px;letter-spacing:2px;text-transform:uppercase;font-family:monospace;">MESSAGE</p>
                      <p style="margin:0;color:#e2e8f0;font-size:14px;line-height:1.8;white-space:pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
                    </div>

                    <!-- CTA -->
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center">
                          <a href="mailto:${email}?subject=Re: Your message to Vinay Bhadane"
                             style="display:inline-block;padding:14px 32px;background:linear-gradient(135deg,#00f5ff,#8b00ff);color:#020408;font-weight:700;font-size:12px;letter-spacing:2px;text-transform:uppercase;text-decoration:none;border-radius:10px;font-family:monospace;">
                            ↩ REPLY TO ${name.split(' ')[0].toUpperCase()}
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background:rgba(0,0,0,0.3);padding:20px 32px;border-top:1px solid rgba(255,255,255,0.05);text-align:center;">
                    <p style="margin:0;color:rgba(255,255,255,0.25);font-size:11px;font-family:monospace;letter-spacing:1px;">
                      Received via vinaybhadane.dev portfolio contact form<br/>
                      <span style="color:rgba(0,245,255,0.4);">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</span>
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const textBody = `
New message from your portfolio contact form!

FROM: ${name}
EMAIL: ${email}
TIME: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST

MESSAGE:
${message}

---
Reply directly to: ${email}
    `.trim();

    // Send to both email addresses
    const recipients = [
      { Email: process.env.CONTACT_EMAIL_1!, Name: 'Vinay Bhadane' },
      { Email: process.env.CONTACT_EMAIL_2!, Name: 'Vinay Bhadane' },
    ];

    await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: process.env.CONTACT_EMAIL_1!,
            Name: 'Vinay Portfolio',
          },
          To: recipients,
          ReplyTo: {
            Email: email,
            Name: name,
          },
          Subject: `🚀 New Contact from ${name} — Portfolio`,
          TextPart: textBody,
          HTMLPart: htmlBody,
        },
      ],
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: any) {
    console.error('[Contact API Error]', err?.response?.data ?? err?.message ?? err);
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
  }
}
