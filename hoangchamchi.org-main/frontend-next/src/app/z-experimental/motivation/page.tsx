// 'use client';

// pages/index.js

import Head from 'next/head';
import MotivationForm from '@/components/MotivationForm';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bảng điều khiển học tiếng Nhật</title>
      </Head>

      <main>
        <MotivationForm />
      </main>
    </div>
  );
}

// ----------------------------- //






