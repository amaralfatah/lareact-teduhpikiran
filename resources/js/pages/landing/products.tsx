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
    product: typeof freeEbooks[0];
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
 * Products Page Component
 */
export default function Products() {
    const [activeCategory, setActiveCategory] = useState('ebook-gratis');

    return (
        <LandingLayout>
            <Head title="Products - TeduhPikiran" />

            <Navbar activePath="/products" />
            <HeroSection />
            <CategoryNav activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <ProductsSection activeCategory={activeCategory} />
            <Footer />
        </LandingLayout>
    );
}
