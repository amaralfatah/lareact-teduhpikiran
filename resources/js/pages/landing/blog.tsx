import LandingLayout from '@/layouts/landing-layout';
import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    Calendar,
    ChevronRight,
    Clock,
    Download,
    Menu,
    Search,
    Tag,
    User,
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

// Categories
const categories = [
    { name: 'Kesehatan Mental', slug: 'kesehatan-mental', count: 15 },
    { name: 'Produktivitas', slug: 'produktivitas', count: 8 },
    { name: 'Relationship', slug: 'relationship', count: 12 },
    { name: 'Self Development', slug: 'self-development', count: 10 },
];

// Blog articles
const articles = [
    {
        id: 1,
        title: 'Self Diagnosis, Sebuah Jembatan Petaka Untuk Diri',
        excerpt: '"Duh dari kemarin kok, aku hanya ingin tidur terus-menerus, ya?" Apakah ini tanda depresi?',
        category: 'Kesehatan Mental',
        date: '27 Mar 2022',
        readTime: '5 min',
        image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400',
        author: 'TeduhPikiran',
    },
    {
        id: 2,
        title: 'Apa Itu Toxic Positivity? Bagaimana Dampaknya Bagi Kesehatan Mental?',
        excerpt: 'Toxic positivity, tentu kamu sering mendengar kata-kata tersebut, baik melalui media sosial atau percakapan sehari-hari.',
        category: 'Kesehatan Mental',
        date: '27 Feb 2022',
        readTime: '7 min',
        image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400',
        author: 'TeduhPikiran',
    },
    {
        id: 3,
        title: 'Kelelahan Bekerja? Hati-hati Mengalami Burnout',
        excerpt: 'Burnout adalah kondisi kelelahan emosional, fisik, dan mental yang disebabkan oleh stres berlebihan dan berkepanjangan.',
        category: 'Produktivitas',
        date: '26 Feb 2022',
        readTime: '6 min',
        image: 'https://images.unsplash.com/photo-1606011334315-025e4baab810?w=400',
        author: 'TeduhPikiran',
    },
    {
        id: 4,
        title: 'Insecure: Penyebab Dan Cara Mengatasinya',
        excerpt: 'Insecure? Apakah kamu pernah mengalaminya, atau sedang mengalaminya? Pernah enggak merasa tidak percaya diri?',
        category: 'Self Development',
        date: '23 Feb 2022',
        readTime: '8 min',
        image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=400',
        author: 'TeduhPikiran',
    },
    {
        id: 5,
        title: 'Tips Tetap Sehat Mental Di Masa Pandemi',
        excerpt: 'Pentingnya tetap sehat mental di masa pandemi? Bagaimana caranya menjaga kesehatan mental kita?',
        category: 'Kesehatan Mental',
        date: '21 Jan 2022',
        readTime: '5 min',
        image: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=400',
        author: 'TeduhPikiran',
    },
    {
        id: 6,
        title: 'Apa Itu Overthinking? Yuk Kenali Ciri dan Cara Mengatasinya',
        excerpt: 'Overthinking, tentu sebagian besar dari kita sering mendengar kata tersebut. Apa sebenarnya overthinking itu?',
        category: 'Kesehatan Mental',
        date: '15 Jan 2022',
        readTime: '6 min',
        image: 'https://images.unsplash.com/photo-1474418397713-7ede21d49118?w=400',
        author: 'TeduhPikiran',
    },
];

// Featured article
const featuredArticle = {
    title: 'Cara Menghilangkan Stres Berkepanjangan',
    excerpt: 'Ketika seseorang mengalami stres, maka hormon kortisol dan adrenalin akan meningkat di dalam tubuh dan memicu penyakit jantung, gangguan pencernaan, bahkan depresi.',
    category: 'Kesehatan Mental',
    ctaText: 'Download e-book tips dan trik managemen stress di sini.',
    ctaLink: 'https://docs.google.com/forms',
};

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
                            className={`text-sm transition-colors hover:text-teal-600 ${link.href === '/blog' ? 'font-medium text-teal-600' : 'text-gray-600'
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
                                className={`rounded-lg px-3 py-2.5 transition-colors hover:bg-gray-50 ${link.href === '/blog' ? 'font-medium text-teal-600' : 'text-gray-600'
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
 * Hero Section with Featured Article
 */
function HeroSection() {
    return (
        <section className="bg-teal-600 pt-20">
            <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
                <div className="grid items-center gap-8 md:grid-cols-2">
                    {/* Content */}
                    <div className="text-white">
                        <span className="mb-3 inline-block rounded-full bg-teal-500 px-3 py-1 text-sm font-medium">
                            {featuredArticle.category}
                        </span>
                        <h1 className="mb-4 text-2xl font-bold md:text-4xl">
                            {featuredArticle.title}
                        </h1>
                        <p className="mb-4 text-teal-100">{featuredArticle.excerpt}</p>
                        <p className="mb-6 text-sm text-teal-200">{featuredArticle.ctaText}</p>
                        <a
                            href={featuredArticle.ctaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 font-medium text-teal-600 transition-colors hover:bg-gray-100"
                        >
                            <Download className="h-4 w-4" />
                            Download Sekarang
                        </a>
                    </div>

                    {/* Image */}
                    <div className="hidden md:block">
                        <img
                            src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=500"
                            alt="Mental Health"
                            className="rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/**
 * Search and Categories Section
 */
function SearchCategoriesSection() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <section className="border-b border-gray-100 bg-white py-6">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    {/* Search */}
                    <div className="relative max-w-md flex-1">
                        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Cari artikel..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                        />
                    </div>

                    {/* Categories Pills */}
                    <div className="flex flex-wrap gap-2">
                        <button className="rounded-full bg-teal-600 px-4 py-1.5 text-sm font-medium text-white">
                            Semua
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat.slug}
                                className="rounded-full border border-gray-200 px-4 py-1.5 text-sm text-gray-600 transition-colors hover:border-teal-500 hover:text-teal-600"
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/**
 * Articles Grid Section
 */
function ArticlesSection() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900 md:text-2xl">Artikel Terbaru</h2>
                    <a
                        href="#"
                        className="flex items-center gap-1 text-sm font-medium text-teal-600 hover:text-teal-700"
                    >
                        Lihat Semua
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-10 flex justify-center">
                    <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((page) => (
                            <button
                                key={page}
                                className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-colors ${page === 1
                                    ? 'bg-teal-600 text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                        <button className="flex h-10 items-center justify-center gap-1 rounded-lg bg-white px-4 text-sm font-medium text-gray-600 hover:bg-gray-100">
                            Next
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

/**
 * Article Card Component
 */
function ArticleCard({ article }: { article: typeof articles[0] }) {
    return (
        <article className="group overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-teal-600 px-3 py-1 text-xs font-medium text-white">
                    {article.category}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="mb-2 font-semibold text-gray-900 line-clamp-2 group-hover:text-teal-600">
                    <a href="#">{article.title}</a>
                </h3>
                <p className="mb-4 text-sm text-gray-600 line-clamp-2">{article.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {article.readTime}
                        </span>
                    </div>
                    <span className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5" />
                        {article.author}
                    </span>
                </div>
            </div>
        </article>
    );
}

/**
 * Categories Section
 */
function CategoriesSection() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <h2 className="mb-8 text-xl font-bold text-gray-900 md:text-2xl">Jelajahi Kategori</h2>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((cat) => (
                        <a
                            key={cat.slug}
                            href="#"
                            className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-5 transition-colors hover:border-teal-500 hover:bg-teal-50"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-teal-600">
                                    <Tag className="h-5 w-5" />
                                </div>
                                <span className="font-medium text-gray-900">{cat.name}</span>
                            </div>
                            <span className="text-sm text-gray-500">{cat.count} artikel</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

/**
 * Newsletter Section
 */
function NewsletterSection() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="rounded-xl bg-teal-600 p-8 text-center md:p-12">
                    <h2 className="mb-4 text-xl font-bold text-white md:text-2xl">
                        Dapatkan Artikel Terbaru
                    </h2>
                    <p className="mx-auto mb-6 max-w-xl text-teal-100">
                        Daftar newsletter kami untuk mendapatkan update artikel, tips, dan informasi
                        seputar kesehatan mental langsung ke email Anda.
                    </p>
                    <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                        <input
                            type="email"
                            placeholder="Masukkan email Anda"
                            className="flex-1 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
                        />
                        <button className="rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                            Berlangganan
                        </button>
                    </div>
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
 * Blog Page Component
 */
export default function Blog() {
    return (
        <LandingLayout>
            <Head title="Blog - TeduhPikiran" />

            <Navbar />
            <HeroSection />
            <SearchCategoriesSection />
            <ArticlesSection />
            <CategoriesSection />
            <NewsletterSection />
            <Footer />
        </LandingLayout>
    );
}
