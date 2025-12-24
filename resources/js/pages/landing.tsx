import LandingLayout from '@/layouts/landing-layout';
import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    Brain,
    Check,
    Download,
    Facebook,
    Instagram,
    Mail,
    Menu,
    MessageCircle,
    Mic,
    Phone,
    Smartphone,
    Twitter,
    Users,
    X,
} from 'lucide-react';
import { useState } from 'react';

// Navigation data
const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Produk', href: '/produk' },
    { name: 'Layanan', href: '/layanan' },
    { name: 'Event', href: '/event' },
    { name: 'Blog', href: '/blog' },
    { name: 'Tentang Kami', href: '/tentang-kami' },
];

// Stats data
const stats = [
    { label: 'Universitas', value: '12+' },
    { label: 'Lembaga Pelatihan', value: '10+' },
    { label: 'Company & Startup', value: '20+' },
    { label: 'Media & Platform', value: '100+' },
    { label: 'NGO & Community', value: '60+' },
];

// Partner logos
const partnerLogos = ['UI', 'ITB', 'UGM', 'IPB', 'UB', 'UMM', 'UNS', 'Polinema'];

// Services data
const services = [
    {
        icon: Smartphone,
        title: 'TeduhPikiran',
        subtitle: 'Media Psikologi terpercaya dengan berbagai program edukatif:',
        items: [
            'Livekuy: Live Instagram & QnA bersama ahli',
            'Free Webinar: Zoom interaktif 90 menit',
            'Online Course dengan e-book panduan',
            'Talkshow Curhat Santuy di coffee shop',
            'Kolaborasi konten Instagram & Reels',
        ],
    },
    {
        icon: Brain,
        title: 'Teduh Consulting',
        subtitle: 'Biro Psikologi dengan layanan profesional:',
        items: [
            'Tes Psikologi',
            'Konseling Online & Offline',
            'Mentoring berlisensi',
            'Hipnoterapi & Terapi Psikologi',
            'Training & Sertifikasi',
        ],
    },
    {
        icon: Mic,
        title: 'Teduh Speaker',
        subtitle: 'Speaker Agency dengan pembicara ahli di bidang:',
        items: [
            'Kesehatan mental',
            'Terapi psikologi',
            'Parenting & Pernikahan',
            'Motivasi',
            'Pengembangan organisasi',
        ],
    },
];

// Blog posts data
const blogPosts = [
    {
        title: 'Self Diagnosis, Sebuah Jembatan Petaka Untuk Diri',
        date: '27 Mar 2022',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400',
        href: '/blog/self-diagnosis',
    },
    {
        title: 'Apa Itu Toxic Positivity? Dampaknya Bagi Kesehatan Mental',
        date: '27 Feb 2022',
        image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400',
        href: '/blog/toxic-positivity',
    },
    {
        title: 'Kelelahan Bekerja? Hati-hati Mengalami Burnout',
        date: '26 Feb 2022',
        image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400',
        href: '/blog/burnout',
    },
    {
        title: 'Insecure: Penyebab Dan Cara Mengatasinya',
        date: '23 Feb 2022',
        image: 'https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?w=400',
        href: '/blog/insecure',
    },
];

/**
 * Navigation Component
 */
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600 text-lg font-bold text-white">
                        TP
                    </div>
                    <span className="text-lg font-semibold text-gray-900">TeduhPikiran</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm text-gray-600 transition-colors hover:text-teal-600"
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
                    className="hidden items-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-700 md:inline-flex"
                >
                    <Users className="h-4 w-4" />
                    Gabung Komunitas
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
                                className="rounded-lg px-3 py-2.5 text-gray-600 transition-colors hover:bg-gray-50"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://chat.whatsapp.com/example"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-medium text-white"
                        >
                            <Users className="h-4 w-4" />
                            Gabung Komunitas
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}

/**
 * Hero Section Component
 */
function HeroSection() {
    return (
        <section className="bg-white pt-20">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-16 md:flex-row md:px-6 lg:py-20">
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
                        Edukasi Kesehatan Mental & Psikologi{' '}
                        <span className="text-teal-600">Gratis</span>
                    </h1>

                    <p className="mb-8 text-base text-gray-600 md:text-lg">
                        Belajar Ilmu Psikologi aplikatif, kesehatan mental, self healing efektif,
                        dan pengembangan diri. Bergabung dengan komunitas WhatsApp TeduhPikiran.
                    </p>

                    <div className="flex flex-col items-center gap-4 sm:flex-row md:items-start">
                        <a
                            href="https://chat.whatsapp.com/example"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 font-medium text-white transition-colors hover:bg-teal-700"
                        >
                            <MessageCircle className="h-5 w-5" />
                            Gabung Komunitas
                        </a>
                        <Link
                            href="/tentang-kami"
                            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                        >
                            Pelajari Lebih Lanjut
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <p className="mt-6 text-sm text-gray-500">+1000 member telah bergabung</p>
                </div>

                {/* Hero Image */}
                <div className="flex-1">
                    <img
                        src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600"
                        alt="Mental Health Support"
                        className="mx-auto w-full max-w-md rounded-xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}

/**
 * Partners Section Component
 */
function PartnersSection() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="mb-10 text-center">
                    <h2 className="mb-3 text-2xl font-bold text-gray-900">Rekan Kolaborator</h2>
                    <p className="text-gray-600">Bergabung bersama puluhan kolaborator di Indonesia</p>
                </div>

                {/* Stats Grid */}
                <div className="mb-10 grid grid-cols-2 gap-3 md:grid-cols-5">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="rounded-xl bg-white p-5 text-center shadow-sm"
                        >
                            <div className="mb-1 text-2xl font-bold text-teal-600">{stat.value}</div>
                            <div className="text-xs text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Partner Logos */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {partnerLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex h-12 w-20 items-center justify-center rounded-lg bg-white text-sm font-medium text-gray-500 shadow-sm"
                        >
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/**
 * About Section Component
 */
function AboutSection() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    <div>
                        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-teal-600">
                            Tentang Kami
                        </p>
                        <h2 className="mb-5 text-2xl font-bold text-gray-900 md:text-3xl">
                            TeduhPikiran, Wadah Berbagi Ilmu untuk Sehat Mental
                        </h2>
                        <p className="text-gray-600">
                            Platform edukasi kesehatan mental, psikologi aplikatif, dan pengembangan diri.
                            Terbagi menjadi 3 fokus lini bidang usaha untuk melayani kebutuhan Anda.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <img
                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300"
                            alt="Team member"
                            className="h-40 w-full rounded-xl object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=300"
                            alt="Consultation"
                            className="h-40 w-full rounded-xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/**
 * Services Section Component
 */
function ServicesSection() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="mb-10 text-center">
                    <h2 className="mb-3 text-2xl font-bold text-gray-900">Layanan Kami</h2>
                    <p className="text-gray-600">Tiga lini bisnis untuk memenuhi kebutuhan Anda</p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={index}
                                className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                            >
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                                    <IconComponent className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">{service.title}</h3>
                                <p className="mb-4 text-sm text-gray-600">{service.subtitle}</p>
                                <ul className="space-y-2">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-600" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/**
 * Self Love Test CTA Component
 */
function SelfLoveTestCTA() {
    return (
        <section className="bg-white py-12">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="overflow-hidden rounded-xl bg-sky-500">
                    <div className="flex flex-col items-center gap-6 p-8 md:flex-row md:p-10">
                        <div className="flex-1">
                            <h2 className="mb-4 text-xl font-semibold text-white md:text-2xl">
                                Seberapa besar rasa cinta kamu terhadap diri sendiri?
                            </h2>
                            <p className="mb-6 text-sky-100">
                                Ketahui jawabannya dengan mengikuti tes self love kami.
                            </p>
                            <a
                                href="/test-self-love"
                                className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-white px-5 py-2.5 font-medium text-sky-600 transition-colors hover:bg-sky-50"
                            >
                                Tes Psikologi Sekarang
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                        <div className="flex-shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400"
                                alt="Self Love"
                                className="h-48 w-auto rounded-xl object-cover md:h-56"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/**
 * Combined CTA Section
 */
function CombinedCTASection() {
    return (
        <section className="bg-white py-12">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Community CTA Card */}
                    <div className="rounded-xl bg-gray-50 p-6">
                        <h3 className="mb-3 text-lg font-semibold text-gray-900">
                            Gabung Komunitas TeduhPikiran
                        </h3>
                        <p className="mb-5 text-sm text-gray-600">
                            Update setiap hari konten menarik seputar kesehatan mental,
                            psikologi aplikatif, dan pengembangan diri.
                        </p>
                        <a
                            href="https://chat.whatsapp.com/example"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border-2 border-teal-600 px-5 py-2.5 font-medium text-teal-600 transition-colors hover:bg-teal-600 hover:text-white"
                        >
                            <MessageCircle className="h-4 w-4" />
                            Gabung Grup WhatsApp
                        </a>
                    </div>

                    {/* E-book CTA Card */}
                    <div className="rounded-xl bg-red-600 p-6">
                        <h3 className="mb-3 text-lg font-semibold text-white">
                            Download E-book Gratis
                        </h3>
                        <p className="mb-2 text-sm text-red-100">
                            "Self Confidence: Resep Rahasia Meningkatkan Kepercayaan Diri"
                        </p>
                        <p className="mb-5 text-sm text-red-100">
                            Atasi rasa minder dan insecure dengan membaca e-book ini.
                        </p>
                        <a
                            href="/produk"
                            className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-5 py-2.5 font-medium text-white transition-colors hover:bg-white hover:text-red-600"
                        >
                            <Download className="h-4 w-4" />
                            Download Gratis
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

/**
 * Blog Section Component
 */
function BlogSection() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <h2 className="mb-2 text-2xl font-bold text-gray-900">Artikel Terbaru</h2>
                        <p className="text-gray-600">Perdalam wawasan kesehatan mental Anda</p>
                    </div>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 rounded-lg border-2 border-teal-600 px-5 py-2.5 font-medium text-teal-600 transition-colors hover:bg-teal-600 hover:text-white"
                    >
                        Lihat Semua
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {blogPosts.map((post, index) => (
                        <article
                            key={index}
                            className="overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
                        >
                            <Link href={post.href}>
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="mb-2 line-clamp-2 text-sm font-medium text-gray-900">
                                        {post.title}
                                    </h3>
                                    <time className="text-xs text-gray-500">{post.date}</time>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

/**
 * Footer Component
 */
function Footer() {
    return (
        <footer className="bg-gray-900 py-12 text-gray-300">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="grid gap-10 md:grid-cols-4">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600 text-lg font-bold text-white">
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
                                <Phone className="h-4 w-4 text-teal-500" />
                                <a href="tel:+628123456789" className="hover:text-teal-400">
                                    0812-3456-789
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-teal-500" />
                                <a href="mailto:info@teduhpikiran.com" className="hover:text-teal-400">
                                    info@teduhpikiran.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 text-sm font-medium text-white">Layanan</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/layanan" className="hover:text-teal-400">
                                    Livekuy
                                </Link>
                            </li>
                            <li>
                                <Link href="/layanan" className="hover:text-teal-400">
                                    Free Webinar
                                </Link>
                            </li>
                            <li>
                                <Link href="/layanan" className="hover:text-teal-400">
                                    Online Course
                                </Link>
                            </li>
                            <li>
                                <Link href="/layanan" className="hover:text-teal-400">
                                    Talkshow
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="mb-4 text-sm font-medium text-white">Ikuti Kami</h4>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-colors hover:bg-teal-600 hover:text-white"
                            >
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-colors hover:bg-teal-600 hover:text-white"
                            >
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-colors hover:bg-teal-600 hover:text-white"
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

/**
 * Landing Page Component
 */
export default function Landing() {
    return (
        <LandingLayout>
            <Head title="TeduhPikiran - Edukasi Kesehatan Mental & Psikologi Gratis" />

            <Navbar />
            <HeroSection />
            <PartnersSection />
            <AboutSection />
            <ServicesSection />
            <SelfLoveTestCTA />
            <CombinedCTASection />
            <BlogSection />
            <Footer />
        </LandingLayout>
    );
}
