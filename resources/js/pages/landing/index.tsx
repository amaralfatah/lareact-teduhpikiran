import { Footer, Navbar } from '@/components/landing';
import LandingLayout from '@/layouts/landing-layout';
import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    Brain,
    Check,
    Download,
    MessageCircle,
    Mic,
    Smartphone,
} from 'lucide-react';

// Types
interface BlogPost {
    title: string;
    date: string;
    image: string;
    href: string;
}

interface LandingProps {
    blogPosts?: BlogPost[];
}


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

// Default fallback data removed


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
                        <span className="text-brand">Gratis</span>
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
                            className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 font-medium text-white transition-colors hover:bg-brand-dark"
                        >
                            <MessageCircle className="h-5 w-5" />
                            Gabung Komunitas
                        </a>
                        <Link
                            href="/about"
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
        </section >
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
                            <div className="mb-1 text-2xl font-bold text-brand">{stat.value}</div>
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
                        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-brand">
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
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand">
                                    <IconComponent className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">{service.title}</h3>
                                <p className="mb-4 text-sm text-gray-600">{service.subtitle}</p>
                                <ul className="space-y-2">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
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
                <div className="overflow-hidden rounded-xl bg-brand">
                    <div className="flex flex-col items-center gap-6 p-8 md:flex-row md:p-10">
                        <div className="flex-1">
                            <h2 className="mb-4 text-xl font-semibold text-white md:text-2xl">
                                Seberapa besar rasa cinta kamu terhadap diri sendiri?
                            </h2>
                            <p className="mb-6 text-brand-100">
                                Ketahui jawabannya dengan mengikuti tes self love kami.
                            </p>
                            <a
                                href="/test-self-love"
                                className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-white px-5 py-2.5 font-medium text-brand transition-colors hover:bg-brand-50"
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
                            className="inline-flex items-center gap-2 rounded-lg border-2 border-brand px-5 py-2.5 font-medium text-brand transition-colors hover:bg-brand hover:text-white"
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
                            href="/products"
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
function BlogSection({ blogPosts }: { blogPosts: BlogPost[] }) {
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
                        className="inline-flex items-center gap-2 rounded-lg border-2 border-brand px-5 py-2.5 font-medium text-brand transition-colors hover:bg-brand hover:text-white"
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
 * Landing Page Component
 */
export default function Landing({ blogPosts = [] }: LandingProps) {
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
            <BlogSection blogPosts={blogPosts} />
            <Footer />
        </LandingLayout>
    );
}
