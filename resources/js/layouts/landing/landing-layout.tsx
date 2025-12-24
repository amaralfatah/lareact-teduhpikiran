import { type ReactNode } from 'react';

interface LandingLayoutProps {
    children: ReactNode;
}

/**
 * Full screen layout template for landing pages.
 * Features smooth scroll behavior and full viewport height.
 */
export default function LandingLayoutTemplate({ children }: LandingLayoutProps) {
    return (
        <div className="min-h-screen w-full overflow-x-hidden scroll-smooth">
            {children}
        </div>
    );
}
