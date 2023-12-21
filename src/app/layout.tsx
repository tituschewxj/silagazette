import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Noto_Serif } from 'next/font/google';

export const metadata: Metadata = {
    title: 'Singapore International Law Gazette',
    description: 'A website by SMU-ILA Student Chapter',
};

const font = Noto_Serif({ subsets: ['latin'] });

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
            <body className={`${font.className} flex min-h-screen flex-col`}>
                <Header />
                {/* TODO: Nav Bar */}
                <div className='flex-grow'>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
