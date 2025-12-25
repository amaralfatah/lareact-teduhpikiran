import { Footer, Navbar } from '@/components/landing';
import LandingLayout from '@/layouts/landing-layout';
import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    BookOpen,
    ChevronRight,
    Download,
    GraduationCap,
    Star,
} from 'lucide-react';
import { useState } from 'react';


// Types
interface Category {
    id: string;
    label: string;
}

interface Product {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string[];
    contents: string[];
    downloadUrl: string;
}

interface ProductsProps {
    categories?: Category[];
    products?: Record<string, Product[]>;
}

// Default fallback data removed


/**
 * Hero Section
 */
function HeroSection() {
    return (
        <section className="bg-gray-50 pt-20">
            <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
                {/* Breadcrumb */}
                <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
                    <Link href="/" className="hover:text-brand">
                        Home
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-gray-900">Products</span>
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
                    <img
                        src="/images/logo_uici.svg"
                        alt="UICI Logo"
                        className="h-16 w-auto"
                    />
                </div>
            </div>
        </section>
    );
}

/**
 * Category Navigation (Sticky)
 */
function CategoryNav({ activeCategory, setActiveCategory, categories }: {
    activeCategory: string;
    setActiveCategory: (id: string) => void;
    categories: Category[];
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
                                ? 'bg-brand text-white'
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
    product: Product;
    isPremium?: boolean;
    isCourse?: boolean;
}) {
    return (
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md">
            <div className="grid md:grid-cols-5">
                {/* Image */}
                <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:col-span-2">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="aspect-[3/4] h-auto w-full max-w-[200px] rounded-xl object-cover shadow-lg md:max-w-[240px]"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col p-6 md:col-span-3 md:p-8">
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
                    <h3 className="mb-4 text-xl font-semibold leading-tight text-gray-900">
                        {product.title}
                    </h3>

                    {/* Description */}
                    <ul className="mb-4 space-y-2">
                        {product.description.map((desc, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                                {desc}
                            </li>
                        ))}
                    </ul>

                    {/* Table of Contents */}
                    <div className="mb-6 flex-grow">
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
                    <div className="mt-auto pt-2">
                        <a
                            href={product.downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 font-medium text-white transition-colors hover:bg-brand-dark"
                        >
                            <Download className="h-4 w-4" />
                            {isPremium || isCourse ? 'Pesan Sekarang' : 'Download Gratis'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

/**
 * Products Section
 */
function ProductsSection({
    activeCategory,
    products
}: {
    activeCategory: string;
    products: Record<string, Product[]>
}) {
    const activeProducts = products[activeCategory] || [];
    const isPremium = activeCategory === 'ebook-premium';
    const isCourse = activeCategory === 'online-course';

    return (
        <section className="bg-gray-50 py-12">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="space-y-8">
                    <h2 className="text-xl font-bold text-gray-900 capitalize">
                        {activeCategory.replace('-', ' ')}
                    </h2>
                    {activeProducts.length > 0 ? (
                        activeProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                isPremium={isPremium}
                                isCourse={isCourse}
                            />
                        ))
                    ) : (
                        <div className="text-center py-12 text-gray-500">
                            Belum ada produk di kategori ini.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

/**
 * Products Page Component
 */
export default function Products({ categories = [], products = {} }: ProductsProps) {
    // Initial state set to the first category's ID if available
    const [activeCategory, setActiveCategory] = useState(categories[0]?.id || 'ebook-gratis');

    return (
        <LandingLayout>
            <Head title="Products - TeduhPikiran" />

            <Navbar activePath="/products" />
            <HeroSection />
            <CategoryNav
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                categories={categories}
            />
            <ProductsSection activeCategory={activeCategory} products={products} />
            <Footer />
        </LandingLayout>
    );
}
