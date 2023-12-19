import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <head>
                <link
                    href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
                    rel='stylesheet'
                />
            </head>
            <body className={`${inter.className} flex flex-col min-h-screen`}>
                <Header />
                <div className='flex-grow'>
                    <div className='mx-auto max-w-2xl py-8'>{children}</div>
                </div>
                <Footer />
            </body>
        </html>
    );
}