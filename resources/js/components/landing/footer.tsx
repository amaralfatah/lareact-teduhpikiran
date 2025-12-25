import { Link } from '@inertiajs/react';
import { Facebook, Instagram, Mail, Phone, Twitter } from 'lucide-react';

/**
 * Footer Component for Landing Pages.
 * Full footer with brand info, links, and social media.
 */
export default function Footer() {
    return (
        <footer className="bg-gray-900 py-12 text-gray-300">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="grid gap-10 md:grid-cols-4">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-lg font-bold text-white">
                                TP
                            </div>
                            <span className="text-lg font-semibold text-white">TeduhPikiran</span>
                        </div>
                        <p className="mb-6 text-sm text-gray-400">
                            Digital Platform untuk belajar kesehatan mental, psikologi aplikatif,
                            dan pengembangan diri.
                        </p>

                        <h4 className="mb-3 text-sm font-medium text-white">Customer Service</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-brand" />
                                <a href="tel:+628123456789" className="hover:text-brand-light">
                                    0812-3456-789
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-brand" />
                                <a href="mailto:info@teduhpikiran.com" className="hover:text-brand-light">
                                    info@teduhpikiran.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 text-sm font-medium text-white">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/services" className="hover:text-brand-light">
                                    Livekuy
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-brand-light">
                                    Free Webinar
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-brand-light">
                                    Online Course
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-brand-light">
                                    Talkshow
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="mb-4 text-sm font-medium text-white">Follow Us</h4>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-colors hover:bg-brand hover:text-white"
                            >
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-colors hover:bg-brand hover:text-white"
                            >
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-colors hover:bg-brand hover:text-white"
                            >
                                <Twitter className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} TeduhPikiran. Semua hak dilindungi.</p>
                </div>
            </div>
        </footer>
    );
}
