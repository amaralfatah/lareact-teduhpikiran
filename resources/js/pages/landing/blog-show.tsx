import { Footer, Navbar } from '@/components/landing';
import LandingLayout from '@/layouts/landing-layout';
import { Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    Calendar,
    Clock,
    Facebook,
    MessageCircle,
    Share2,
    Twitter,
    User,
} from 'lucide-react';

// Types
interface Article {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    categorySlug: string;
    date: string;
    readTime: string;
    image: string | null;
    author: string;
}

interface RelatedArticle {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    image: string | null;
}

interface BlogShowProps {
    article: Article;
    relatedArticles: RelatedArticle[];
}

/**
 * Hero Section with Article Image
 */
function HeroSection({ article }: { article: Article }) {
    return (
        <section className="relative bg-brand pt-20">
            {/* Background Image */}
            {article.image && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand/90 to-brand" />
                </div>
            )}

            <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 md:px-6">
                {/* Back Button */}
                <div className="mb-6">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Kembali ke Blog
                    </Link>
                </div>

                {/* Category Badge */}
                <div className="mb-4">
                    <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                        {article.category}
                    </span>
                </div>

                {/* Title */}
                <h1 className="mb-6 text-2xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
                    {article.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
                    <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}


/**
 * Share Buttons Section
 */
function ShareButtons({ article }: { article: Article }) {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareText = encodeURIComponent(article.title);

    const shareLinks = [
        {
            name: 'Facebook',
            icon: Facebook,
            url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
            color: 'bg-blue-600 hover:bg-blue-700',
        },
        {
            name: 'Twitter',
            icon: Twitter,
            url: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,
            color: 'bg-sky-500 hover:bg-sky-600',
        },
        {
            name: 'WhatsApp',
            icon: MessageCircle,
            url: `https://wa.me/?text=${shareText}%20${shareUrl}`,
            color: 'bg-green-500 hover:bg-green-600',
        },
    ];

    return (
        <div className="flex items-center gap-4 border-b border-gray-200 pb-6 mb-8">
            <span className="flex items-center gap-2 text-sm text-gray-600">
                <Share2 className="h-4 w-4" />
                Bagikan artikel ini:
            </span>
            <div className="flex gap-2">
                {shareLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors ${link.color}`}
                            title={`Share on ${link.name}`}
                        >
                            <IconComponent className="h-4 w-4" />
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

/**
 * Article Content Section
 */
function ContentSection({ article }: { article: Article }) {
    return (
        <section className="bg-white py-12">
            <div className="mx-auto max-w-3xl px-4 md:px-6">
                {/* Share Buttons */}
                <ShareButtons article={article} />

                {/* Featured Image */}
                {article.image && (
                    <div className="mb-8 overflow-hidden rounded-xl">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                )}

                {/* Article Content */}
                <article
                    className="article-content"
                    dangerouslySetInnerHTML={{ __html: article.content || '<p>Konten artikel tidak tersedia.</p>' }}
                />
            </div>
        </section>
    );
}


/**
 * Related Articles Section
 */
function RelatedArticlesSection({ articles }: { articles: RelatedArticle[] }) {
    if (articles.length === 0) return null;

    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <h2 className="mb-8 text-2xl font-bold text-gray-900">Artikel Terkait</h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <Link
                            key={article.id}
                            href={`/blog/${article.id}`}
                            className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-lg"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                {article.image ? (
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center bg-brand-100">
                                        <span className="text-4xl text-brand">📄</span>
                                    </div>
                                )}
                                <div className="absolute top-3 left-3 rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
                                    {article.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-brand line-clamp-2">
                                    {article.title}
                                </h3>
                                <p className="mb-3 text-sm text-gray-600 line-clamp-2">
                                    {article.excerpt}
                                </p>
                                <span className="text-xs text-gray-500">{article.date}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

/**
 * Blog Article Detail Page
 */
export default function BlogShow({ article, relatedArticles }: BlogShowProps) {
    return (
        <LandingLayout>
            <Head title={`${article.title} - TeduhPikiran`} />

            <Navbar activePath="/blog" />
            <HeroSection article={article} />
            <ContentSection article={article} />
            <RelatedArticlesSection articles={relatedArticles} />
            <Footer />
        </LandingLayout>
    );
}
