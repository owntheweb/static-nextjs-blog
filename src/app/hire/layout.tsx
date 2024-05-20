import React from 'react';
import '../globals.css';
import MarketingPageLayout from '@/components/MarketingPageLayout';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <MarketingPageLayout>{children}</MarketingPageLayout>;
}
