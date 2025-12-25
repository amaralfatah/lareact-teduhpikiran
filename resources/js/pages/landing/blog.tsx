import { Footer, Navbar } from '@/components/landing';
import LandingLayout from '@/layouts/landing-layout';
import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    Calendar,
    ChevronRight,
    Clock,
    Download,
    Search,
    Tag,
    User,
} from 'lucide-react';
import { useState } from 'react';



// Types
interface BlogCategory {
    name: string;
    slug: string;
    count: number;
}

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    author: string;
}

interface BlogProps {
    categories?: BlogCategory[];
    articles?: BlogPost[];
}

// Default fallback data removed




/**
 * Hero Section with Featured Article
 */
/**
 * Hero Section with Featured Article
 */
function HeroSection({ featured }: { featured?: BlogPost }) {
    if (!featured) return null;

    return (
        <section className="bg-brand pt-20">
            <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
                <div className="grid items-center gap-8 md:grid-cols-2">
                    {/* Content */}
                    <div className="text-white">
                        <span className="mb-3 inline-block rounded-full bg-brand px-3 py-1 text-sm font-medium">
                            {featured.category}
                        </span>
                        <h1 className="mb-4 text-2xl font-bold md:text-4xl">
                            {featured.title}
                        </h1>
                        <p className="mb-4 text-brand-100">{featured.excerpt}</p>
                        <p className="mb-6 text-sm text-brand-light">Baca selengkapnya artikel ini untuk wawasan lebih dalam.</p>
                        <a
                            href={featured.id ? `/blog/${featured.id}` : '#'}
                            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 font-medium text-brand transition-colors hover:bg-gray-100"
                        >
                            <Download className="h-4 w-4" />
                            Baca Artikel
                        </a>
                    </div>

                    {/* Image */}
                    <div className="hidden md:block">
                        <img
                            src={featured.image}
                            alt={featured.title}
                            className="rounded-xl shadow-lg w-full h-80 object-cover"
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
function SearchCategoriesSection({ categories, onSearch }: { categories: BlogCategory[], onSearch: (query: string) => void }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

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
                            onChange={handleSearch}
                            className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                        />
                    </div>

                    {/* Categories Pills */}
                    <div className="flex flex-wrap gap-2">
                        <button className="rounded-full bg-brand px-4 py-1.5 text-sm font-medium text-white">
                            Semua
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat.slug}
                                className="rounded-full border border-gray-200 px-4 py-1.5 text-sm text-gray-600 transition-colors hover:border-brand hover:text-brand"
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
function ArticlesSection({ articles }: { articles: BlogPost[] }) {
    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900 md:text-2xl">Artikel Terbaru</h2>
                    {/* <a
                        href="#"
                        className="flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-dark"
                    >
                        Lihat Semua
                        <ArrowRight className="h-4 w-4" />
                    </a> */}
                </div>

                {articles.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {articles.map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 text-gray-500">
                        Tidak ada artikel ditemukan.
                    </div>
                )}

                {/* Pagination - Simplified for V1 */}
                {/* <div className="mt-10 flex justify-center">
                    <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((page) => (
                            <button
                                key={page}
                                className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-colors ${page === 1
                                    ? 'bg-brand text-white'
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
                </div> */}
            </div>
        </section>
    );
}

/**
 * Article Card Component
 */
function ArticleCard({ article }: { article: BlogPost }) {
    return (
        <article className="group overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
                    {article.category}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="mb-2 font-semibold text-gray-900 line-clamp-2 group-hover:text-brand">
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
function CategoriesSection({ categories }: { categories: BlogCategory[] }) {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <h2 className="mb-8 text-xl font-bold text-gray-900 md:text-2xl">Jelajahi Kategori</h2>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((cat) => (
                        <a
                            key={cat.slug}
                            href="#"
                            className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-5 transition-colors hover:border-brand hover:bg-brand-50"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand">
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
                <div className="rounded-xl bg-brand p-8 text-center md:p-12">
                    <h2 className="mb-4 text-xl font-bold text-white md:text-2xl">
                        Dapatkan Artikel Terbaru
                    </h2>
                    <p className="mx-auto mb-6 max-w-xl text-brand-100">
                        Daftar newsletter kami untuk mendapatkan update artikel, tips, dan informasi
                        seputar kesehatan mental langsung ke email Anda.
                    </p>
                    <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                        <input
                            type="email"
                            placeholder="Masukkan email Anda"
                            className="flex-1 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-light"
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
 * Blog Page Component
 */
export default function Blog({ categories = [], articles = [] }: BlogProps) {
    // Client-side search filtering
    const [filteredArticles, setFilteredArticles] = useState(articles);
    const featured = filteredArticles[0]; // Use first filtered result as featured, or maybe keep static featured? better to use first of all articles
    const displayArticles = filteredArticles.slice(1); // Show rest in grid

    const handleSearch = (query: string) => {
        if (!query) {
            setFilteredArticles(articles);
            return;
        }
        const lower = query.toLowerCase();
        const filtered = articles.filter(a =>
            a.title.toLowerCase().includes(lower) ||
            a.excerpt.toLowerCase().includes(lower) ||
            a.category.toLowerCase().includes(lower)
        );
        setFilteredArticles(filtered);
    };

    return (
        <LandingLayout>
            <Head title="Blog - TeduhPikiran" />

            <Navbar activePath="/blog" />
            <HeroSection featured={articles[0]} />
            <SearchCategoriesSection categories={categories} onSearch={handleSearch} />
            <ArticlesSection articles={filteredArticles} />
            <CategoriesSection categories={categories} />
            <NewsletterSection />
            <Footer />
        </LandingLayout>
    );
}
