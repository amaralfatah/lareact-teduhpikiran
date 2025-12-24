import LandingLayout from '@/layouts/landing-layout';
import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    BookOpen,
    ChevronRight,
    Download,
    GraduationCap,
    Menu,
    Star,
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

// Product categories
const categories = [
    { id: 'ebook-gratis', label: 'E-book Gratis' },
    { id: 'ebook-premium', label: 'E-book Premium' },
    { id: 'online-course', label: 'Online Course' },
];

// Free E-books data
const freeEbooks = [
    {
        id: 1,
        title: '5 Manfaat NLP untuk Kehidupan',
        category: 'E-book Gratis',
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400',
        description: [
            'Apakah kamu seorang praktisi Psikologi/konselor/coach dan ingin menambah wawasan tentang ilmu komunikasi yang persuasif?',
            'Ingin memahami lebih luas bagaimana cara kerja manusia berpikir, merasa dan berperilaku',
            'Mau menambah referensi dibidang pengembangan diri?',
        ],
        contents: [
            'Definisi Neuro Linguistik Programming (NLP)',
            'Landasan Berpikir Para Pembelajar NLP',
            'Manfaat #1: Mengontrol Diri dengan Baik',
            'Manfaat #2: Menjalin Komunikasi yang Efektif',
            'Manfaat #3: Mengenal Diri lebih dalam',
            'Manfaat #4: Membangun Kedekatan dengan Orang Lain',
            'Manfaat #5: Mempercepat Goal Tercapai',
        ],
        downloadUrl: 'https://bit.ly/freee-booknlp',
    },
    {
        id: 2,
        title: 'Self Confidence Formula: Resep Rahasia Percaya Diri Berkomunikasi dan Publik Speaking',
        category: 'E-book Gratis',
        image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400',
        description: [
            'Apakah kamu akhir-akhir ini merasa minder atau gugup ketika publik speaking?',
            'Sering takut dan cemas kalau diminta berbicara didepan orang banyak?',
            'Ingin belajar percaya diri publik speaking secara gratis?',
        ],
        contents: [
            'Menemukan Self Confidence (Cerita Pengalaman Penulis)',
            'Resep Rahasia Self Confidence',
            'Tiga Bumbu Utama Self Confidence Berkomunikasi dan Publik Speaking',
        ],
        downloadUrl: 'https://bit.ly/freeebookselfconfidence',
    },
];

// Premium E-books data
const premiumEbooks = [
    {
        id: 3,
        title: 'Mini E-book Self Compassion: Sebuah Seni Mencintai Diri Sendiri untuk Mengatasi Masalah Mental',
        category: 'E-book Premium',
        image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400',
        description: [
            'Apakah kamu pernah merasa selalu ga cukup dengan dirimu yang sekarang?',
            'Selalu saja menemukan kekurangan yang bisa kamu kritik kepada diri sendiri?',
            'Sering banget merasa bersalah entah apa sebab spesifiknya?',
        ],
        contents: [
            'Apa itu Self Compassion',
            'Apa Manfaat Self Compassion',
            '3 Ciri Self Compassion',
            'Perbedaan Self Compassion, Gangguan Kepribadian Narsisme dan Egois',
            '11 Tips Membangun Self Compassion',
            'Worksheet: Surat Cinta Diri sendiri',
            'Worksheet: Mantra Self Compassion',
            'Worksheet: 30 Hari Tantangan Self Compassion',
        ],
        downloadUrl: 'https://wasap.at/yKKM7s',
    },
    {
        id: 4,
        title: 'Mini E-book Self Control: Mengelola Overthinking Agar Berubah Menjadi Positif Thinking',
        category: 'E-book Premium',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400',
        description: [
            'Apakah kamu akhir-akhir ini merasa sering overthinking?',
            'Sering dikuasai rasa marah yang sulit dikendalikan?',
            'Hingga akhirnya bikin kamu jadi susah tidur alias insomnia?',
        ],
        contents: [
            'Apa itu Self Control?',
            'Manfaat Punya Self Control yang Baik',
            'Faktor yang Mempengaruhi Overthinking dan Emosi Tidak Sehat',
            'Berbagai Macam Pikiran Negatif dan Emosi Tidak Sehat',
            '12 Tips Mengelola Overthinking dan Regulasi Emosi',
            'Worksheet: Membangun Ulang Pikiran dengan Tehnik 3 Kolom',
            'Worksheet: Mindfulness For Better Emotion',
        ],
        downloadUrl: 'https://wasap.at/i5oj8t',
    },
];

// Online Courses data
const onlineCourses = [
    {
        id: 5,
        title: 'E-course Self Knowledge: Panduan Super Lengkap Mengenali Diri',
        category: 'Online Course',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
        description: [
            'Ingin mengetahui siapa diri kamu sebenarnya?',
            'Mau menemukan potensi terbaik yang ada dalam diri?',
            'Ingin punya arah hidup yang jelas dan terarah?',
        ],
        contents: [
            'Modul 1: Mengenal Diri Sendiri',
            'Modul 2: Menemukan Kekuatan dan Kelemahan',
            'Modul 3: Membangun Kepercayaan Diri',
            'Modul 4: Menetapkan Tujuan Hidup',
            'Modul 5: Aksi Nyata Menuju Versi Terbaik',
        ],
        downloadUrl: 'https://tribeversity.com/course/detail/fhxgrl2n?source=chief',
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
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600 text-lg font-bold text-white">
                        TP
                    </div>
                    <span className="text-lg font-semibold text-gray-900">TeduhPikiran</span>
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm transition-colors hover:text-teal-600 ${link.href === '/produk' ? 'font-medium text-teal-600' : 'text-gray-600'
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
                    className="hidden items-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-700 md:inline-flex"
                >
                    <Users className="h-4 w-4" />
                    Gabung Komunitas
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
                                className={`rounded-lg px-3 py-2.5 transition-colors hover:bg-gray-50 ${link.href === '/produk' ? 'font-medium text-teal-600' : 'text-gray-600'
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
        <section className="bg-gray-50 pt-20">
            <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
                {/* Breadcrumb */}
                <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
                    <Link href="/" className="hover:text-teal-600">
                        Beranda
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-gray-900">Produk</span>
                </nav>

                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                    <div>
                        <h1 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                            Produk TeduhPikiran
                        </h1>
                        <p className="max-w-xl text-gray-600">
                            Tersedia berbagai macam e-course dan e-book yang bisa membuat kamu menjadi
                            lebih sehat mental dan berkembang jauh lebih hebat lagi.
                        </p>
                    </div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-teal-600 text-2xl font-bold text-white">
                        TP
                    </div>
                </div>
            </div>
        </section>
    );
}

/**
 * Category Navigation (Sticky)
 */
function CategoryNav({ activeCategory, setActiveCategory }: {
    activeCategory: string;
    setActiveCategory: (id: string) => void;
}) {
    return (
        <div className="sticky top-[73px] z-40 border-b border-gray-100 bg-white">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <nav className="flex gap-6 overflow-x-auto py-4">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors ${activeCategory === category.id
                                    ? 'bg-teal-600 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
}

/**
 * Product Card Component
 */
function ProductCard({
    product,
    isPremium = false,
    isCourse = false,
}: {
    product: typeof freeEbooks[0];
    isPremium?: boolean;
    isCourse?: boolean;
}) {
    return (
        <div className="grid gap-8 rounded-xl bg-white p-6 shadow-sm md:grid-cols-2">
            {/* Image */}
            <div className="flex justify-center">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-64 w-auto rounded-xl object-cover shadow-md md:h-80"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col">
                {/* Badge */}
                <div className="mb-3 flex items-center gap-2">
                    {isPremium ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                            <Star className="h-3 w-3" />
                            Premium
                        </span>
                    ) : isCourse ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                            <GraduationCap className="h-3 w-3" />
                            Online Course
                        </span>
                    ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                            <BookOpen className="h-3 w-3" />
                            Gratis
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3 className="mb-4 text-lg font-semibold text-gray-900">{product.title}</h3>

                {/* Description */}
                <ul className="mb-4 space-y-2">
                    {product.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
                            {desc}
                        </li>
                    ))}
                </ul>

                {/* Table of Contents */}
                <div className="mb-6">
                    <p className="mb-2 text-sm font-medium text-gray-900">Daftar Isi:</p>
                    <ol className="list-inside list-decimal space-y-1 text-sm text-gray-600">
                        {product.contents.slice(0, 5).map((content, idx) => (
                            <li key={idx}>{content}</li>
                        ))}
                        {product.contents.length > 5 && (
                            <li className="text-gray-400">...dan {product.contents.length - 5} lainnya</li>
                        )}
                    </ol>
                </div>

                {/* Button */}
                <div className="mt-auto">
                    <a
                        href={product.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-teal-700"
                    >
                        <Download className="h-4 w-4" />
                        {isPremium || isCourse ? 'Pesan Sekarang' : 'Download Gratis'}
                    </a>
                </div>
            </div>
        </div>
    );
}

/**
 * Products Section
 */
function ProductsSection({ activeCategory }: { activeCategory: string }) {
    return (
        <section className="bg-gray-50 py-12">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                {/* Free E-books */}
                {activeCategory === 'ebook-gratis' && (
                    <div className="space-y-8">
                        <h2 className="text-xl font-bold text-gray-900">E-book Gratis</h2>
                        {freeEbooks.map((ebook) => (
                            <ProductCard key={ebook.id} product={ebook} />
                        ))}
                    </div>
                )}

                {/* Premium E-books */}
                {activeCategory === 'ebook-premium' && (
                    <div className="space-y-8">
                        <h2 className="text-xl font-bold text-gray-900">E-book Premium</h2>
                        {premiumEbooks.map((ebook) => (
                            <ProductCard key={ebook.id} product={ebook} isPremium />
                        ))}
                    </div>
                )}

                {/* Online Courses */}
                {activeCategory === 'online-course' && (
                    <div className="space-y-8">
                        <h2 className="text-xl font-bold text-gray-900">Online Course</h2>
                        {onlineCourses.map((course) => (
                            <ProductCard key={course.id} product={course} isCourse />
                        ))}
                    </div>
                )}
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
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600 text-lg font-bold text-white">
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
 * Product Page Component
 */
export default function Produk() {
    const [activeCategory, setActiveCategory] = useState('ebook-gratis');

    return (
        <LandingLayout>
            <Head title="Produk - TeduhPikiran" />

            <Navbar />
            <HeroSection />
            <CategoryNav activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <ProductsSection activeCategory={activeCategory} />
            <Footer />
        </LandingLayout>
    );
}
