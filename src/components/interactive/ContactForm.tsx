import { useState } from 'react';
import type { FormEvent } from 'react';
import './ContactForm.css';
import { lineOrderUrl } from '../../data/navigation';

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface Props {
  lang?: 'en' | 'th';
}

const copy = {
  en: {
    lineCta: 'Chat on LINE for the fastest reply',
    divider: 'or send a message',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    submit: 'Send message',
    submitting: 'Sending…',
    success: "Thanks! We've received your message and will reply by email shortly.",
    genericError: 'Something went wrong.',
  },
  th: {
    lineCta: 'แชททาง LINE เพื่อการตอบกลับที่เร็วที่สุด',
    divider: 'หรือส่งข้อความ',
    name: 'ชื่อ',
    email: 'อีเมล',
    message: 'ข้อความ',
    submit: 'ส่งข้อความ',
    submitting: 'กำลังส่ง…',
    success: 'ขอบคุณ! เราได้รับข้อความของคุณแล้วและจะตอบกลับทางอีเมลเร็วๆ นี้',
    genericError: 'เกิดข้อผิดพลาด',
  },
};

export default function ContactForm({ lang = 'en' }: Props) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const t = copy[lang];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
        }),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg(t.genericError);
      }
    } catch {
      setStatus('error');
      setErrorMsg(t.genericError);
    }
  }

  return (
    <div className="bk-contact-form">
      <a href={lineOrderUrl} target="_blank" rel="noopener" className="bk-btn bk-btn--line">
        {t.lineCta}
      </a>
      <p className="bk-contact-divider">{t.divider}</p>
      {status === 'success' ? (
        <p className="bk-contact-success">{t.success}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            {t.name}
            <input type="text" name="name" required />
          </label>
          <label>
            {t.email}
            <input type="email" name="email" required />
          </label>
          <label>
            {t.message}
            <textarea name="message" rows={5} required />
          </label>
          {status === 'error' && <p className="bk-contact-error">{errorMsg}</p>}
          <button type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? t.submitting : t.submit}
          </button>
        </form>
      )}
    </div>
  );
}
