import { Link } from '@inertiajs/react';
import { Menu, Users, X } from 'lucide-react';
import { useState } from 'react';

/**
 * Navigation data for landing pages.
 */
export const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Events', href: '/events' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
];

interface NavbarProps {
    /**
     * The current active route path for highlighting.
     */
    activePath?: string;
}

/**
 * Navigation Component for Landing Pages.
 * Responsive navbar with mobile menu toggle.
 */
export default function Navbar({ activePath }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <img
                        src="/images/logo_uici.svg"
                        alt="UICI Logo"
                        className="h-10 w-auto"
                    />
                    <span className="text-lg font-semibold text-gray-900">TeduhPikiran</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm transition-colors hover:text-brand ${activePath === link.href
                                ? 'font-medium text-brand'
                                : 'text-gray-600'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <a
                    href="https://chat.whatsapp.com/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark md:inline-flex"
                >
                    <Users className="h-4 w-4" />
                    Join Community
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="border-t border-gray-100 bg-white px-4 py-4 md:hidden">
                    <nav className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`rounded-lg px-3 py-2.5 transition-colors hover:bg-gray-50 ${activePath === link.href
                                    ? 'font-medium text-brand'
                                    : 'text-gray-600'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://chat.whatsapp.com/example"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white"
                        >
                            <Users className="h-4 w-4" />
                            Join Community
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
