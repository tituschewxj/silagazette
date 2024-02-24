import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Script from 'next/script';

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
            {/* <!-- Google tag (gtag.js) --> */}
            <Script
                async
                src='https://www.googletagmanager.com/gtag/js?id=G-6N2ZDYFFJV'
            />
            <Script id='google-analytics'>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-6N2ZDYFFJV');
                `}
            </Script>
            <body className={`flex min-h-screen flex-col`}>
                <Header />
                {/* TODO: Nav Bar */}
                <div className='flex-grow'>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
