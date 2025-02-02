'use client'
import { QRCodeCanvas } from 'qrcode.react';


export default function Home() {
  const baseUrl= process.env.NEXT_PUBLIC_BASE_URL
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div  className='mt-96'>
      <QRCodeCanvas size={250}value={`${baseUrl}/details`} />,
      </div>
    </div>
  );
}
