import { Footer, Navbar } from '@/components/landing';
import LandingLayout from '@/layouts/landing-layout';
import { Head, Link } from '@inertiajs/react';
import {
    Building2,
    GraduationCap,
    Handshake,
    Heart,
    Lightbulb,
    Play,
    Shield,
    Smile,
    Users,
} from 'lucide-react';



// Statistics
const statistics = [
    { icon: GraduationCap, value: 12, label: 'Universitas Ternama di Indonesia' },
    { icon: Building2, value: 10, label: 'Lembaga Keprofesian & Pelatihan' },
    { icon: Handshake, value: 20, label: 'Company & Startup' },
    { icon: Users, value: 100, label: 'Media & Platform' },
    { icon: Heart, value: 60, label: 'NGO & Community' },
];

// Core values
const coreValues = [
    {
        icon: Users,
        title: 'Kolaboratif',
        description: 'Kami di Tim TeduhPikiran mendukung kolaborasi luas untuk meningkatkan kesehatan mental menuju Indonesia Emas 2045',
    },
    {
        icon: Lightbulb,
        title: 'Inovatif',
        description: 'Layanan dan event TeduhPikiran terus diperbarui untuk mengatasi masalah seperti stres, bullying, depresi, dan lainnya',
    },
    {
        icon: Shield,
        title: 'Trust',
        description: 'Kami menjadi tempat pertama yang dipercaya untuk mendukung orang dalam menyelesaikan masalah mereka dan berbagi cerita.',
    },
    {
        icon: Smile,
        title: 'Happiness',
        description: 'TeduhPikiran hadir untuk menyebarkan kebahagiaan dan vibes positif kepada masyarakat Indonesia, khususnya anak muda.',
    },
];

// Team members
const teamMembers = [
    {
        name: 'Jainal Ilmi',
        role: 'Psikolog & Chief Executive Officer',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
    },
    {
        name: 'Baiq Sopia',
        role: 'Psikolog & Chief Financial Officer',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
    },
    {
        name: 'Dimas Fachri',
        role: 'Chief Technology Officer',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
    },
    {
        name: 'Rina Putri',
        role: 'Chief Marketing Officer',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300',
    },
];



/**
 * Hero Section
 */
function HeroSection() {
    return (
        <section className="bg-brand pt-20">
            <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
                <div className="grid items-center gap-12 md:grid-cols-2">
                    {/* Content */}
                    <div className="text-white">
                        <h1 className="mb-4 text-2xl font-bold md:text-4xl">
                            Kami ingin membantu kamu untuk lebih sehat mental dan lebih berdaya
                        </h1>
                        <p className="mb-6 text-brand-100">
                            Sejak tahun 2017, TeduhPikiran berupaya untuk membantu sebanyak-banyaknya
                            anak muda Indonesia untuk keluar dari kondisi minus alias kurang sehat mental,
                            bukan hanya menuju kondisi nol, akan tetapi menuju kondisi plus yaitu lebih
                            berdaya dengan dilengkapi skill pengembangan diri.
                        </p>
                        <a
                            href="https://www.youtube.com/watch?v=example"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 font-medium text-brand transition-colors hover:bg-gray-100"
                        >
                            <Play className="h-4 w-4" />
                            Tonton Video Profil
                        </a>
                    </div>

                    {/* Image */}
                    <div className="hidden md:block">
                        <img
                            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500"
                            alt="Happy Team"
                            className="rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/**
 * Statistics Section
 */
function StatisticsSection() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="mb-10 text-center">
                    <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
                        Rekan Kolaborator
                    </h2>
                    <p className="text-gray-600">
                        Bergabunglah bersama puluhan kolaborator kami lainnya di Indonesia
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {statistics.map((stat, idx) => {
                        const IconComponent = stat.icon;
                        return (
                            <div
                                key={idx}
                                className="rounded-xl bg-gray-50 p-6 text-center transition-shadow hover:shadow-md"
                            >
                                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand">
                                    <IconComponent className="h-6 w-6" />
                                </div>
                                <p className="mb-1 text-3xl font-bold text-brand">{stat.value}+</p>
                                <p className="text-sm text-gray-600">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/**
 * History Section
 */
function HistorySection() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="grid items-center gap-12 md:grid-cols-2">
                    {/* Content */}
                    <div>
                        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-brand">
                            Sejarah
                        </p>
                        <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                            Awal Didirikannya TeduhPikiran
                        </h2>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                <strong>TeduhPikiran</strong> awalnya hanyalah sebuah akun Instagram yang
                                dibuat pada Agustus 2017. Namun melihat banyaknya komentar positif
                                teman-teman followers dari DM Instagram, akhirnya TeduhPikiran lebih
                                diseriusin dengan merekrut beberapa teman di kampus saat itu.
                            </p>
                            <p>
                                <strong>Jainal Ilmi, M.Psi, Psikolog</strong> atau yang biasa dipanggil
                                Kang Jay adalah seorang Psikolog Klinis lulusan dari Universitas
                                Muhammadiyah Malang. Sejak 10 tahun yang lalu, Kang Jay sudah memiliki
                                ketertarikan di bidang mental health, psikologi, dan pengembangan diri.
                            </p>
                            <p>
                                Tujuan besar TeduhPikiran adalah dapat <strong>membantu sebanyak-banyaknya
                                    anak muda Indonesia untuk mampu sehat mental dan mengembangkan diri menjadi
                                    lebih berdaya</strong> agar siap menghadapi era yang serba digital.
                            </p>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400"
                            alt="Founder"
                            className="rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/**
 * Core Values Section
 */
function CoreValuesSection() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="mb-10 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Core Value Kami</h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {coreValues.map((value, idx) => {
                        const IconComponent = value.icon;
                        return (
                            <div
                                key={idx}
                                className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
                            >
                                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand">
                                    <IconComponent className="h-7 w-7" />
                                </div>
                                <h3 className="mb-2 font-semibold text-gray-900">{value.title}</h3>
                                <p className="text-sm text-gray-600">{value.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/**
 * Team Section
 */
function TeamSection() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="mb-10 text-center">
                    <p className="mb-2 text-sm font-medium uppercase tracking-wider text-brand">
                        Temui Tim Kami
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                        Di Balik Layar TeduhPikiran
                    </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map((member, idx) => (
                        <div
                            key={idx}
                            className="overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="h-64 w-full object-cover"
                            />
                            <div className="p-4 text-center">
                                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                                <p className="text-sm text-gray-600">{member.role}</p>
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
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="rounded-xl bg-brand p-8 text-center md:p-12">
                    <h2 className="mb-4 text-xl font-bold text-white md:text-2xl">
                        Ingin Berkolaborasi dengan Kami?
                    </h2>
                    <p className="mx-auto mb-6 max-w-xl text-brand-100">
                        Kami terbuka untuk kolaborasi dengan berbagai pihak. Mari bersama-sama
                        menyebarkan kesehatan mental yang positif ke seluruh Indonesia!
                    </p>
                    <a
                        href="https://wasap.at/m0RR9L"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-brand transition-colors hover:bg-gray-100"
                    >
                        <Handshake className="h-5 w-5" />
                        Hubungi Kami
                    </a>
                </div>
            </div>
        </section>
    );
}



/**
 * About Page Component
 */
export default function About() {
    return (
        <LandingLayout>
            <Head title="About - TeduhPikiran" />

            <Navbar activePath="/about" />
            <HeroSection />
            <StatisticsSection />
            <HistorySection />
            <CoreValuesSection />
            <TeamSection />
            <CTASection />
            <Footer />
        </LandingLayout>
    );
}
