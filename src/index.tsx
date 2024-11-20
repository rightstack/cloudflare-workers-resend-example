import { Resend } from 'resend';
import { EmailTemplate } from './emails/email-template';

export default {
  async fetch(request, env, context): Promise<Response> {
    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 })
    }

    const authHeader = request.headers.get('Authorization')
  
    // 환경변수에 저정된 API Key와 비교
    if (authHeader !== env.API_KEY) {
      return new Response('Unauthorized', { status: 401 })
    }

    const resend = new Resend(`${env.RESEND_API_KEY}`);

    const data = await resend.emails.send({
      from: 'CWR <frontend@engineering.rightstack.tech>',
      to: ['yourname@yourdomain.com'],
      subject: `Cloudflare Worker 와 Resend 의 만남`,
      react: <EmailTemplate yourName="영일" />,
    });

    return Response.json(data);
  },
} satisfies ExportedHandler<Env, ExecutionContext>;