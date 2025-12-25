<?php

namespace Database\Seeders;

use App\Models\BlogArticle;
use App\Models\BlogCategory;
use App\Models\Event;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\Psychologist;
use App\Models\TeamMember;
use Illuminate\Database\Seeder;

class LandingPageSeeder extends Seeder
{
    public function run(): void
    {
        $this->seedPsychologists();
        $this->seedProducts();
        $this->seedBlogArticles();
        $this->seedEvents();
        $this->seedTeamMembers();
    }

    private function seedPsychologists(): void
    {
        $psychologists = [
            [
                'name' => 'Jainal Ilmi, M.Psi, Psikolog',
                'title' => 'Psikolog Klinis',
                'image' => 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400',
                'expertise' => ['Hipnoterapi', 'Self Hypnosis', 'Mindfulness', 'Self Development', 'Komunikasi', 'Kecemasan', 'Depresi', 'Overthinking'],
                'sort_order' => 1,
            ],
            [
                'name' => 'Syafira Putri E., M.Psi, Psikolog',
                'title' => 'Psikolog Klinis',
                'image' => 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
                'expertise' => ['Kecemasan', 'Depresi', 'Kesepian', 'Quarter Life Crisis', 'Trauma Healing', 'Self Development'],
                'sort_order' => 2,
            ],
            [
                'name' => 'Baiq Sopia, M.Psi, Psikolog',
                'title' => 'Psikolog Klinis',
                'image' => 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400',
                'expertise' => ['Depresi', 'Kecemasan', 'Self Harm', 'Traumatis', 'Perkembangan Anak & Remaja', 'Parenting'],
                'sort_order' => 3,
            ],
            [
                'name' => 'Furqan Nugraha R., M.Psi, Psikolog',
                'title' => 'Psikolog Klinis Remaja & Dewasa',
                'image' => 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400',
                'expertise' => ['Permasalahan Remaja', 'Konsultasi Pasangan', 'Keluarga', 'Stres', 'Kecemasan', 'Depresi'],
                'sort_order' => 4,
            ],
            [
                'name' => 'Ria Rizki U., M.Psi, Psikolog',
                'title' => 'Psikolog Klinis Dewasa',
                'image' => 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
                'expertise' => ['Stress', 'Cemas', 'Pengelolaan Emosi', 'Penerimaan Diri', 'Konsultasi Pasangan & Keluarga'],
                'sort_order' => 5,
            ],
            [
                'name' => 'Mutiara Sadjad, M.Psi, Psikolog',
                'title' => 'Psikolog Klinis',
                'image' => 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400',
                'expertise' => ['Depresi', 'Kecemasan', 'Relationship', 'Pasangan', 'Keluarga'],
                'sort_order' => 6,
            ],
            [
                'name' => 'Suardi Ningrat, M.Psi, Psikolog',
                'title' => 'Psikolog Klinis',
                'image' => 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400',
                'expertise' => ['CBT', 'Logoterapi', 'Mindfulness', 'Psikolog Kreatif'],
                'sort_order' => 7,
            ],
            [
                'name' => 'Nur Indah Agustini, M.Psi, Psikolog',
                'title' => 'Psikolog Klinis',
                'image' => 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
                'expertise' => ['Kecemasan', 'Depresi', 'Self Development', 'Konseling Individu'],
                'sort_order' => 8,
            ],
        ];

        foreach ($psychologists as $data) {
            Psychologist::create($data);
        }
    }

    private function seedProducts(): void
    {
        // Create categories
        $freeCategory = ProductCategory::create(['name' => 'E-book Gratis', 'slug' => 'ebook-gratis']);
        $premiumCategory = ProductCategory::create(['name' => 'E-book Premium', 'slug' => 'ebook-premium']);
        $courseCategory = ProductCategory::create(['name' => 'Online Course', 'slug' => 'online-course']);

        // Free E-books
        Product::create([
            'product_category_id' => $freeCategory->id,
            'title' => '5 Manfaat NLP untuk Kehidupan',
            'image' => 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400',
            'description' => [
                'Apakah kamu seorang praktisi Psikologi/konselor/coach dan ingin menambah wawasan tentang ilmu komunikasi yang persuasif?',
                'Ingin memahami lebih luas bagaimana cara kerja manusia berpikir, merasa dan berperilaku',
                'Mau menambah referensi dibidang pengembangan diri?',
            ],
            'contents' => [
                'Definisi Neuro Linguistik Programming (NLP)',
                'Landasan Berpikir Para Pembelajar NLP',
                'Manfaat #1: Mengontrol Diri dengan Baik',
                'Manfaat #2: Menjalin Komunikasi yang Efektif',
                'Manfaat #3: Mengenal Diri lebih dalam',
                'Manfaat #4: Membangun Kedekatan dengan Orang Lain',
                'Manfaat #5: Mempercepat Goal Tercapai',
            ],
            'download_url' => 'https://bit.ly/freee-booknlp',
            'sort_order' => 1,
        ]);

        Product::create([
            'product_category_id' => $freeCategory->id,
            'title' => 'Self Confidence Formula: Resep Rahasia Percaya Diri Berkomunikasi dan Publik Speaking',
            'image' => 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400',
            'description' => [
                'Apakah kamu akhir-akhir ini merasa minder atau gugup ketika publik speaking?',
                'Sering takut dan cemas kalau diminta berbicara didepan orang banyak?',
                'Ingin belajar percaya diri publik speaking secara gratis?',
            ],
            'contents' => [
                'Menemukan Self Confidence (Cerita Pengalaman Penulis)',
                'Resep Rahasia Self Confidence',
                'Tiga Bumbu Utama Self Confidence Berkomunikasi dan Publik Speaking',
            ],
            'download_url' => 'https://bit.ly/freeebookselfconfidence',
            'sort_order' => 2,
        ]);

        // Premium E-books
        Product::create([
            'product_category_id' => $premiumCategory->id,
            'title' => 'Mini E-book Self Compassion: Sebuah Seni Mencintai Diri Sendiri untuk Mengatasi Masalah Mental',
            'image' => 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400',
            'description' => [
                'Apakah kamu pernah merasa selalu ga cukup dengan dirimu yang sekarang?',
                'Selalu saja menemukan kekurangan yang bisa kamu kritik kepada diri sendiri?',
                'Sering banget merasa bersalah entah apa sebab spesifiknya?',
            ],
            'contents' => [
                'Apa itu Self Compassion',
                'Apa Manfaat Self Compassion',
                '3 Ciri Self Compassion',
                'Perbedaan Self Compassion, Gangguan Kepribadian Narsisme dan Egois',
                '11 Tips Membangun Self Compassion',
                'Worksheet: Surat Cinta Diri sendiri',
                'Worksheet: Mantra Self Compassion',
                'Worksheet: 30 Hari Tantangan Self Compassion',
            ],
            'download_url' => 'https://wasap.at/yKKM7s',
            'sort_order' => 1,
        ]);

        Product::create([
            'product_category_id' => $premiumCategory->id,
            'title' => 'Mini E-book Self Control: Mengelola Overthinking Agar Berubah Menjadi Positif Thinking',
            'image' => 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400',
            'description' => [
                'Apakah kamu akhir-akhir ini merasa sering overthinking?',
                'Sering dikuasai rasa marah yang sulit dikendalikan?',
                'Hingga akhirnya bikin kamu jadi susah tidur alias insomnia?',
            ],
            'contents' => [
                'Apa itu Self Control?',
                'Manfaat Punya Self Control yang Baik',
                'Faktor yang Mempengaruhi Overthinking dan Emosi Tidak Sehat',
                'Berbagai Macam Pikiran Negatif dan Emosi Tidak Sehat',
                '12 Tips Mengelola Overthinking dan Regulasi Emosi',
                'Worksheet: Membangun Ulang Pikiran dengan Tehnik 3 Kolom',
                'Worksheet: Mindfulness For Better Emotion',
            ],
            'download_url' => 'https://wasap.at/i5oj8t',
            'sort_order' => 2,
        ]);

        // Online Courses
        Product::create([
            'product_category_id' => $courseCategory->id,
            'title' => 'E-course Self Knowledge: Panduan Super Lengkap Mengenali Diri',
            'image' => 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
            'description' => [
                'Ingin mengetahui siapa diri kamu sebenarnya?',
                'Mau menemukan potensi terbaik yang ada dalam diri?',
                'Ingin punya arah hidup yang jelas dan terarah?',
            ],
            'contents' => [
                'Modul 1: Mengenal Diri Sendiri',
                'Modul 2: Menemukan Kekuatan dan Kelemahan',
                'Modul 3: Membangun Kepercayaan Diri',
                'Modul 4: Menetapkan Tujuan Hidup',
                'Modul 5: Aksi Nyata Menuju Versi Terbaik',
            ],
            'download_url' => 'https://tribeversity.com/course/detail/fhxgrl2n?source=chief',
            'sort_order' => 1,
        ]);
    }

    private function seedBlogArticles(): void
    {
        // Create categories
        $mentalHealth = BlogCategory::create(['name' => 'Kesehatan Mental', 'slug' => 'kesehatan-mental']);
        $productivity = BlogCategory::create(['name' => 'Produktivitas', 'slug' => 'produktivitas']);
        $relationship = BlogCategory::create(['name' => 'Relationship', 'slug' => 'relationship']);
        $selfDev = BlogCategory::create(['name' => 'Self Development', 'slug' => 'self-development']);

        $articles = [
            [
                'blog_category_id' => $mentalHealth->id,
                'title' => 'Self Diagnosis, Sebuah Jembatan Petaka Untuk Diri',
                'excerpt' => '"Duh dari kemarin kok, aku hanya ingin tidur terus-menerus, ya?" Apakah ini tanda depresi?',
                'image' => 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400',
                'read_time' => 5,
                'published_at' => '2022-03-27',
            ],
            [
                'blog_category_id' => $mentalHealth->id,
                'title' => 'Apa Itu Toxic Positivity? Bagaimana Dampaknya Bagi Kesehatan Mental?',
                'excerpt' => 'Toxic positivity, tentu kamu sering mendengar kata-kata tersebut, baik melalui media sosial atau percakapan sehari-hari.',
                'image' => 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400',
                'read_time' => 7,
                'published_at' => '2022-02-27',
            ],
            [
                'blog_category_id' => $productivity->id,
                'title' => 'Kelelahan Bekerja? Hati-hati Mengalami Burnout',
                'excerpt' => 'Burnout adalah kondisi kelelahan emosional, fisik, dan mental yang disebabkan oleh stres berlebihan dan berkepanjangan.',
                'image' => 'https://images.unsplash.com/photo-1606011334315-025e4baab810?w=400',
                'read_time' => 6,
                'published_at' => '2022-02-26',
            ],
            [
                'blog_category_id' => $selfDev->id,
                'title' => 'Insecure: Penyebab Dan Cara Mengatasinya',
                'excerpt' => 'Insecure? Apakah kamu pernah mengalaminya, atau sedang mengalaminya? Pernah enggak merasa tidak percaya diri?',
                'image' => 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=400',
                'read_time' => 8,
                'published_at' => '2022-02-23',
            ],
            [
                'blog_category_id' => $mentalHealth->id,
                'title' => 'Tips Tetap Sehat Mental Di Masa Pandemi',
                'excerpt' => 'Pentingnya tetap sehat mental di masa pandemi? Bagaimana caranya menjaga kesehatan mental kita?',
                'image' => 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=400',
                'read_time' => 5,
                'published_at' => '2022-01-21',
            ],
            [
                'blog_category_id' => $mentalHealth->id,
                'title' => 'Apa Itu Overthinking? Yuk Kenali Ciri dan Cara Mengatasinya',
                'excerpt' => 'Overthinking, tentu sebagian besar dari kita sering mendengar kata tersebut. Apa sebenarnya overthinking itu?',
                'image' => 'https://images.unsplash.com/photo-1474418397713-7ede21d49118?w=400',
                'read_time' => 6,
                'published_at' => '2022-01-15',
            ],
        ];

        foreach ($articles as $data) {
            $data['is_published'] = true;
            $data['author'] = 'TeduhPikiran';
            BlogArticle::create($data);
        }
    }

    private function seedEvents(): void
    {
        $events = [
            [
                'title' => 'Seminar Kesehatan Mental Universitas Pertamina',
                'image' => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
                'event_date' => '2023-12-15',
            ],
            [
                'title' => 'Workshop Self Love untuk Remaja',
                'image' => 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400',
                'event_date' => '2023-11-20',
            ],
            [
                'title' => 'Training Public Speaking untuk Korporat',
                'image' => 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400',
                'event_date' => '2023-10-10',
            ],
            [
                'title' => 'Webinar Mengatasi Quarter Life Crisis',
                'image' => 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400',
                'event_date' => '2023-09-05',
            ],
        ];

        foreach ($events as $data) {
            Event::create($data);
        }
    }

    private function seedTeamMembers(): void
    {
        $members = [
            [
                'name' => 'Jainal Ilmi',
                'role' => 'Psikolog & Chief Executive Officer',
                'image' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
                'sort_order' => 1,
            ],
            [
                'name' => 'Baiq Sopia',
                'role' => 'Psikolog & Chief Financial Officer',
                'image' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
                'sort_order' => 2,
            ],
            [
                'name' => 'Dimas Fachri',
                'role' => 'Chief Technology Officer',
                'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
                'sort_order' => 3,
            ],
            [
                'name' => 'Rina Putri',
                'role' => 'Chief Marketing Officer',
                'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300',
                'sort_order' => 4,
            ],
        ];

        foreach ($members as $data) {
            TeamMember::create($data);
        }
    }
}
