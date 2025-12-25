import LandingLayout from '@/layouts/landing-layout';
import { Head, Link } from '@inertiajs/react';
import {
    Award,
    Brain,
    Briefcase,
    Calendar,
    ChevronRight,
    Menu,
    MessageCircle,
    Mic2,
    Shield,
    Users,
    X,
} from 'lucide-react';
import { useState } from 'react';

// Navigation data
const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Events', href: '/events' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
];

// Topic levels
const topicLevels = [
    {
        level: 1,
        name: 'Topik Kongkow',
        color: 'bg-brand',
        topics: [
            'Who am I? Mengenali Potensi Diri dengan Ilmu Psikologi',
            'Self Love: Seni Mencintai Diri Sendiri',
            'Overcoming Quarter Life Crisis',
            'All About Mental Health',
            'Education/ Career Planning for Better Future',
            'Stop Overthinking, Start Growing',
            'How to improve Your Self Leadership',
            'Berpikir Kritis itu Mudah',
        ],
    },
    {
        level: 2,
        name: 'Topik Santuy',
        color: 'bg-brand',
        topics: [
            'Dealing with Self Harm',
            'How to change Self Doubt to be Self Confidence',
            'Effective Communication and Public Speaking',
            '5 Love Languages for Your Couple',
            'Dari Insecure Menjadi Bersyukur',
            'How to Practice Mindfulness in Everyday',
            'Growth Mindset versus Fixed Mindset',
            'Mengenal IQ, EQ dan SQ',
            'Gagal Paham terus? Apa kamu kurang kritis?',
        ],
    },
    {
        level: 3,
        name: 'Topik Agak Mikir',
        color: 'bg-brand-dark',
        topics: [
            'Psychology Ethics dalam Memberikan Layanan Konseling',
            'Toxic Relationship, Toxic Workplace and Toxic Family',
            'Abusive Relationship / Sexual Abuse',
            'Tips Berdamai dengan Stress dan Depresi',
            'Memahami Orang dengan Bipolar Disorder',
            'Tantangan Mendidik Anak dengan Anugerah Autis',
            'Parenting Style dan Pendampingan Anak Belajar',
            'Strategi Pendidikan Kritis untuk Diri Sendiri',
        ],
    },
];

// Corporate trainings
const corporateTrainings = [
    'Manajemen Stress dan Burn Out di Tempat Kerja',
    'Kecerdasan Emosional',
    'Motivasi dan Pengembangan Diri',
    'Manajemen Konflik',
    'Work Life Balance',
    'Mindfulness di Tempat Kerja',
    'Komunikasi Afektif dan Asertif',
    'Leadership dan Pengembangan SDM',
    'Change Management',
];

// Certifications
const certifications = [
    {
        icon: Mic2,
        title: 'Pelatihan Public Speaking Basic & Advance',
    },
    {
        icon: Shield,
        title: 'Pelatihan dan Sertifikasi Human Resource Development',
    },
    {
        icon: Award,
        title: 'Pelatihan dan Sertifikasi Praktisi Hypnotherapist',
    },
    {
        icon: Brain,
        title: 'Pelatihan dan Sertifikasi Praktisi NLP',
    },
];

// Past events
const pastEvents = [
    {
        title: 'Seminar Kesehatan Mental Universitas Pertamina',
        date: 'Desember 2023',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
    },
    {
        title: 'Workshop Self Love untuk Remaja',
        date: 'November 2023',
        image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400',
    },
    {
        title: 'Training Public Speaking untuk Korporat',
        date: 'Oktober 2023',
        image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400',
    },
    {
        title: 'Webinar Mengatasi Quarter Life Crisis',
        date: 'September 2023',
        image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400',
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
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-lg font-bold text-white">
                        TP
                    </div>
                    <span className="text-lg font-semibold text-gray-900">TeduhPikiran</span>
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm transition-colors hover:text-brand ${link.href === '/events' ? 'font-medium text-brand' : 'text-gray-600'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <a
                    href="https://chat.whatsapp.com/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark md:inline-flex"
                >
                    <Users className="h-4 w-4" />
                    Join Community
                </a>

                <button
                    className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {isOpen && (
                <div className="border-t border-gray-100 bg-white px-4 py-4 md:hidden">
                    <nav className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`rounded-lg px-3 py-2.5 transition-colors hover:bg-gray-50 ${link.href === '/events' ? 'font-medium text-brand' : 'text-gray-600'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}

/**
 * Hero Section
 */
function HeroSection() {
    return (
        <section className="bg-brand pt-20">
            <div className="mx-auto max-w-7xl px-4 py-16 text-center md:px-6">
                {/* Logo */}
                <div className="mb-6 flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-3xl font-bold text-brand shadow-lg">
                        TS
                    </div>
                </div>

                <p className="mb-3 text-sm font-medium uppercase tracking-wider text-brand-light">
                    Jasa Pembicara Ahli
                </p>
                <h1 className="mb-4 text-2xl font-bold text-white md:text-4xl">
                    Kami Menyediakan Speaker / Narasumber / Trainer Ahli
                </h1>
                <p className="mx-auto max-w-2xl text-brand-100">
                    3 level jenis topik trending yang bisa kamu pilih. Topik ini dapat menyesuaikan
                    sesuai permintaan, disampaikan dengan menyenangkan, ilmiah, dan mudah dipahami.
                </p>
            </div>
        </section>
    );
}

/**
 * Topic Levels Section
 */
function TopicLevelsSection() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="grid gap-6 md:grid-cols-3">
                    {topicLevels.map((level) => (
                        <div
                            key={level.level}
                            className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="mb-4 flex items-center gap-3">
                                <span
                                    className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold text-white ${level.color}`}
                                >
                                    {level.level}
                                </span>
                                <h3 className="font-semibold text-gray-900">{level.name}</h3>
                            </div>
                            <ul className="space-y-2">
                                {level.topics.map((topic, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                                        {topic}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/**
 * In-House Training Section
 */
function InHouseTrainingSection() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="grid items-center gap-12 md:grid-cols-2">
                    {/* Image */}
                    <div className="order-2 md:order-1">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600"
                            alt="In House Training"
                            className="rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Content */}
                    <div className="order-1 md:order-2">
                        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-brand">
                            In House Training for Corporate
                        </p>
                        <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                            Tingkatkan Kualitas SDM Perusahaan Anda
                        </h2>
                        <p className="mb-6 text-gray-600">
                            Bersama Teduh Speaker, tingkatkan potensi tim Anda dengan training yang
                            disesuaikan kebutuhan perusahaan.
                        </p>

                        <h4 className="mb-3 font-semibold text-gray-900">Training Unggulan:</h4>
                        <ul className="mb-6 grid gap-2 md:grid-cols-2">
                            {corporateTrainings.map((training, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                    <Briefcase className="h-4 w-4 flex-shrink-0 text-brand" />
                                    {training}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="https://wasap.at/m0RR9L"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 font-medium text-white transition-colors hover:bg-brand-dark"
                        >
                            <MessageCircle className="h-4 w-4" />
                            Konsultasi Gratis
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

/**
 * Certifications Section
 */
function CertificationsSection() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="mb-10 text-center">
                    <p className="mb-2 text-sm font-medium uppercase tracking-wider text-brand">
                        Sertifikasi Training
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                        Dapatkan Sertifikasi & Public Training Kami
                    </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {certifications.map((cert, idx) => {
                        const IconComponent = cert.icon;
                        return (
                            <div
                                key={idx}
                                className="rounded-xl bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
                            >
                                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand">
                                    <IconComponent className="h-7 w-7" />
                                </div>
                                <h3 className="text-sm font-semibold text-gray-900">{cert.title}</h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/**
 * Past Events Section
 */
function PastEventsSection() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="mb-10 text-center">
                    <p className="mb-2 text-sm font-medium uppercase tracking-wider text-brand">
                        Event Kami
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                        Lihat Event Kami Sebelumnya
                    </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {pastEvents.map((event, idx) => (
                        <div
                            key={idx}
                            className="group overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4">
                                <div className="mb-2 flex items-center gap-2 text-xs text-gray-500">
                                    <Calendar className="h-3 w-3" />
                                    {event.date}
                                </div>
                                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                                    {event.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/**
 * CTA Section
 */
function CTASection() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="rounded-xl bg-brand p-8 text-center md:p-12">
                    <h2 className="mb-4 text-xl font-bold text-white md:text-2xl">
                        Butuh Speaker untuk Acara Anda?
                    </h2>
                    <p className="mx-auto mb-6 max-w-xl text-brand-100">
                        Hubungi kami untuk mendiskusikan kebutuhan event Anda. Kami siap menyediakan
                        narasumber yang tepat untuk acara Anda.
                    </p>
                    <a
                        href="https://wasap.at/m0RR9L"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-brand transition-colors hover:bg-gray-100"
                    >
                        <MessageCircle className="h-5 w-5" />
                        Hubungi Kami
                    </a>
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
            <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
                <div className="mb-4 flex items-center justify-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-lg font-bold text-white">
                        TP
                    </div>
                    <span className="text-lg font-semibold text-white">TeduhPikiran</span>
                </div>
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} TeduhPikiran. Semua hak dilindungi.
                </p>
            </div>
        </footer>
    );
}

/**
 * Events Page Component
 */
export default function Events() {
    return (
        <LandingLayout>
            <Head title="Events - TeduhPikiran" />

            <Navbar />
            <HeroSection />
            <TopicLevelsSection />
            <InHouseTrainingSection />
            <CertificationsSection />
            <PastEventsSection />
            <CTASection />
            <Footer />
        </LandingLayout>
    );
}
