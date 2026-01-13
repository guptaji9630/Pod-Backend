import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

async function testEmail() {
  console.log('🧪 Testing Resend Email Service...\n');
  console.log('API Key:', process.env.RESEND_API_KEY ? '✅ Present' : '❌ Missing');
  console.log('Recipient:', process.env.RECIPIENT_EMAIL);
  console.log('\n📧 Sending test email...\n');

  try {
    const result = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.RECIPIENT_EMAIL || 'abhishekg9630@gmail.com',
      subject: 'Test Email - Portfolio Backend',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>✅ Email Service Test Successful</h2>
          <p>This is a test email from your portfolio backend.</p>
          <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
          <p>If you're seeing this, your Resend API integration is working correctly!</p>
        </div>
      `,
    });

    console.log('✅ Email sent successfully!');
    console.log('Message ID:', result.data?.id);
    console.log('\nFull Response:', JSON.stringify(result, null, 2));
  } catch (error: any) {
    console.error('❌ Email sending failed!');
    console.error('Error:', error.message);
    console.error('\nFull Error:', error);
  }
}

testEmail();
