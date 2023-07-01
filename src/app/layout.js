import './globals.css';
import { Inter } from 'next/font/google';

import { DarkModeProvider } from './contexts/themeContext';
import { FontProvider } from './contexts/fontContext';

import Favicon from '../../public/images/favicon-32x32.png';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Dictionary Web App',
    description: 'Solution to the Dictionary Web App challenge from Frontend Mentor',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <DarkModeProvider>
                    <FontProvider>{children}</FontProvider>
                </DarkModeProvider>
            </body>
        </html>
    );
}
