import { Footer, Navbar } from '@/components/landing';
import LandingLayout from '@/layouts/landing-layout';
import { Head } from '@inertiajs/react';
import {
    Calendar,
    Heart,
    MessageCircle,
    Phone,
    User,
    Users,
} from 'lucide-react';
import { useState } from 'react';

// Counseling types
const counselingTypes = [
    {
        icon: User,
        title: 'Konseling Individu',
        subtitle: '(Karir, Studi, Masalah Klinis)',
        description: 'Konseling untuk masalah pribadi, perkembangan karir, studi, dan isu klinis.',
    },
    {
        icon: Heart,
        title: 'Konseling Berpasangan',
        subtitle: '(Pra nikah & Pernikahan)',
        description: 'Konseling untuk pasangan yang sedang mempersiapkan pernikahan atau masalah rumah tangga.',
    },
    {
        icon: Users,
        title: 'Konseling Keluarga',
        subtitle: '(Khusus Offline)',
        description: 'Konseling untuk dinamika keluarga dan hubungan antar anggota keluarga.',
    },
];

// Psychologists data
const psychologists = [
    {
        name: 'Jainal Ilmi, M.Psi, Psikolog',
        title: 'Psikolog Klinis',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400',
        expertise: ['Hipnoterapi', 'Self Hypnosis', 'Mindfulness', 'Self Development', 'Komunikasi', 'Kecemasan', 'Depresi', 'Overthinking'],
    },
    {
        name: 'Syafira Putri E., M.Psi, Psikolog',
        title: 'Psikolog Klinis',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
        expertise: ['Kecemasan', 'Depresi', 'Kesepian', 'Quarter Life Crisis', 'Trauma Healing', 'Self Development'],
    },
    {
        name: 'Baiq Sopia, M.Psi, Psikolog',
        title: 'Psikolog Klinis',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400',
        expertise: ['Depresi', 'Kecemasan', 'Self Harm', 'Traumatis', 'Perkembangan Anak & Remaja', 'Parenting'],
    },
    {
        name: 'Furqan Nugraha R., M.Psi, Psikolog',
        title: 'Psikolog Klinis Remaja & Dewasa',
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400',
        expertise: ['Permasalahan Remaja', 'Konsultasi Pasangan', 'Keluarga', 'Stres', 'Kecemasan', 'Depresi'],
    },
    {
        name: 'Ria Rizki U., M.Psi, Psikolog',
        title: 'Psikolog Klinis Dewasa',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
        expertise: ['Stress', 'Cemas', 'Pengelolaan Emosi', 'Penerimaan Diri', 'Konsultasi Pasangan & Keluarga'],
    },
    {
        name: 'Mutiara Sadjad, M.Psi, Psikolog',
        title: 'Psikolog Klinis',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400',
        expertise: ['Depresi', 'Kecemasan', 'Relationship', 'Pasangan', 'Keluarga'],
    },
    {
        name: 'Suardi Ningrat, M.Psi, Psikolog',
        title: 'Psikolog Klinis',
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400',
        expertise: ['CBT', 'Logoterapi', 'Mindfulness', 'Psikolog Kreatif'],
    },
    {
        name: 'Nur Indah Agustini, M.Psi, Psikolog',
        title: 'Psikolog Klinis',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
        expertise: ['Kecemasan', 'Depresi', 'Self Development', 'Konseling Individu'],
    },
];

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
                        TC
                    </div>
                </div>

                <p className="mb-3 text-sm font-medium uppercase tracking-wider text-brand-light">
                    Konseling Psikologi
                </p>
                <h1 className="mb-4 text-2xl font-bold text-white md:text-4xl">
                    Berbagai Layanan dari Teduh Consulting
                </h1>
                <p className="mx-auto max-w-xl text-brand-100">
                    Pilih jenis konseling yang sesuai dengan kebutuhanmu
                </p>
            </div>
        </section>
    );
}

/**
 * Counseling Types Section
 */
function CounselingTypesSection() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="grid gap-6 md:grid-cols-3">
                    {counselingTypes.map((type, index) => {
                        const IconComponent = type.icon;
                        return (
                            <div
                                key={index}
                                className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
                            >
                                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand">
                                    <IconComponent className="h-7 w-7" />
                                </div>
                                <h3 className="mb-1 text-lg font-semibold text-gray-900">{type.title}</h3>
                                <p className="mb-3 text-sm text-brand">{type.subtitle}</p>
                                <p className="text-sm text-gray-600">{type.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/**
 * Psychologist Section
 */
function PsychologistSection() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                {/* Header */}
                <div className="mb-12 text-center">
                    <p className="mb-3 text-sm font-medium uppercase tracking-wider text-brand">
                        Daftar Psikolog Kami
                    </p>
                    <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
                        Agendakan Konseling dengan Psikolog Profesional
                    </h2>

                    {/* CTA Buttons */}
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href="https://bit.ly/konselingonlinecapsi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 font-medium text-white transition-all hover:bg-brand-dark hover:shadow-lg"
                        >
                            <Calendar className="h-5 w-5" />
                            Reservasi Psikolog
                        </a>
                        <a
                            href="https://wasap.at/m0RR9L"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border-2 border-brand px-6 py-3 font-medium text-brand transition-all hover:bg-brand hover:text-white hover:shadow-lg"
                        >
                            <MessageCircle className="h-5 w-5" />
                            Daftar Konseling
                        </a>
                    </div>
                </div>

                {/* Psychologist Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {psychologists.map((psych, index) => (
                        <PsychologistCard key={index} psychologist={psych} />
                    ))}
                </div>
            </div>
        </section>
    );
}

/**
 * Psychologist Card with hover effect
 */
function PsychologistCard({ psychologist }: { psychologist: typeof psychologists[0] }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Front Side */}
            <div
                className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'
                    }`}
            >
                <div className="mb-5 h-36 w-36 overflow-hidden rounded-full border-4 border-brand-50 shadow-md">
                    <img
                        src={psychologist.image}
                        alt={psychologist.name}
                        className="h-full w-full object-cover"
                    />
                </div>
                <h3 className="mb-2 text-center text-sm font-semibold leading-tight text-gray-900">
                    {psychologist.name}
                </h3>
                <p className="text-center text-xs font-medium text-brand">{psychologist.title}</p>
            </div>

            {/* Back Side (on hover) */}
            <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-brand to-brand-dark p-6 text-white transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <h3 className="mb-4 text-center text-sm font-semibold leading-tight">{psychologist.name}</h3>
                <p className="mb-4 text-center text-xs text-brand-100">Berpengalaman di bidang:</p>
                <div className="flex flex-wrap justify-center gap-2">
                    {psychologist.expertise.slice(0, 6).map((skill, idx) => (
                        <span
                            key={idx}
                            className="rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
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
                        Butuh Bantuan Profesional?
                    </h2>
                    <p className="mx-auto mb-6 max-w-xl text-brand-100">
                        Jangan ragu untuk menghubungi kami. Tim psikolog profesional kami siap
                        membantu Anda menemukan solusi terbaik.
                    </p>
                    <a
                        href="https://wasap.at/m0RR9L"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-brand transition-colors hover:bg-gray-100"
                    >
                        <Phone className="h-5 w-5" />
                        Hubungi Kami
                    </a>
                </div>
            </div>
        </section>
    );
}

/**
 * Services Page Component
 */
export default function Services() {
    return (
        <LandingLayout>
            <Head title="Services - TeduhPikiran" />

            <Navbar activePath="/services" />
            <HeroSection />
            <CounselingTypesSection />
            <PsychologistSection />
            <CTASection />
            <Footer />
        </LandingLayout>
    );
}
