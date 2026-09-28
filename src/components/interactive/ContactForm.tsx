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

  async function handleSubmit(e: For