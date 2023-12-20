import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
    title: 'Singapore International Law Gazette',
    description: 'A website by SMU-ILA Student Chapter',
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
            <body className={`font-sans flex flex-col min-h-screen`}>
                <Header />
                {/* TODO: Nav Bar */}
                <div className='flex-grow'>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
