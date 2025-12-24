import LandingLayoutTemplate from '@/layouts/landing/landing-layout';
import { type ReactNode } from 'react';

interface LandingLayoutProps {
    children: ReactNode;
}

/**
 * Main landing layout wrapper component.
 * Import and use this layout for all landing/public pages.
 */
export default function LandingLayout({ children, ...props }: LandingLayoutProps) {
    return (
        <LandingLayoutTemplate {...props}>
            {children}
        </LandingLayoutTemplate>
    );
}
