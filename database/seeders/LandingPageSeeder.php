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
                'content' => '<p><strong>"Duh dari kemarin kok, aku hanya ingin tidur terus-menerus, ya?"</strong></p>
                <p>Apakah kamu pernah merasakan hal tersebut? Lalu tiba-tiba kamu langsung membuka Google dan mengetik "tanda-tanda depresi" atau semacamnya? Kemudian kamu menemukan bahwa salah satu tanda depresi adalah kelelahan dan ingin tidur terus-menerus. Lalu kamu langsung menyimpulkan bahwa kamu mengalami depresi.</p>
                <h2>Apa Itu Self Diagnosis?</h2>
                <p><strong>Self diagnosis</strong> adalah perilaku mendiagnosis diri sendiri dengan kondisi medis atau psikologis tertentu tanpa konsultasi dengan profesional yang berkualifikasi. Fenomena ini semakin marak seiring dengan mudahnya akses informasi di internet.</p>
                <h2>Mengapa Self Diagnosis Berbahaya?</h2>
                <p>Ada beberapa alasan mengapa self diagnosis bisa menjadi "jembatan petaka" untuk diri sendiri:</p>
                <h3>1. Informasi yang Tidak Lengkap</h3>
                <p>Internet memang menyediakan banyak informasi, tetapi tidak semua informasi tersebut akurat atau lengkap. Gejala yang kamu rasakan mungkin memiliki berbagai penyebab yang berbeda, dan hanya profesional yang terlatih yang bisa membedakannya.</p>
                <h3>2. Risiko Salah Diagnosis</h3>
                <p>Ketika kita mendiagnosis diri sendiri, kita cenderung fokus pada gejala tertentu dan mengabaikan konteks yang lebih luas. Ini bisa menyebabkan kita salah mengidentifikasi masalah yang sebenarnya.</p>
                <h3>3. Penanganan yang Tidak Tepat</h3>
                <p>Jika diagnosis kita salah, maka penanganan yang kita lakukan juga akan salah. Ini bisa memperburuk kondisi kita atau menciptakan masalah baru.</p>
                <h2>Apa yang Sebaiknya Dilakukan?</h2>
                <p>Jika kamu merasa ada yang tidak beres dengan kondisi mentalmu, langkah terbaik adalah:</p>
                <ul>
                    <li>Konsultasi dengan psikolog atau psikiater profesional</li>
                    <li>Ceritakan semua yang kamu rasakan dengan jujur</li>
                    <li>Ikuti saran dan penanganan yang diberikan</li>
                </ul>
                <p>Ingat, tidak ada yang salah dengan mencari bantuan profesional. Justru itu adalah langkah yang sangat berani dan bijak!</p>',
            ],
            [
                'blog_category_id' => $mentalHealth->id,
                'title' => 'Apa Itu Toxic Positivity? Bagaimana Dampaknya Bagi Kesehatan Mental?',
                'excerpt' => 'Toxic positivity, tentu kamu sering mendengar kata-kata tersebut, baik melalui media sosial atau percakapan sehari-hari.',
                'image' => 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400',
                'read_time' => 7,
                'published_at' => '2022-02-27',
                'content' => '<p><strong>Toxic positivity</strong>, tentu kamu sering mendengar kata-kata tersebut, baik melalui media sosial atau percakapan sehari-hari. Tapi sebenarnya apa sih toxic positivity itu?</p>
                <h2>Definisi Toxic Positivity</h2>
                <p>Toxic positivity adalah sikap yang menuntut seseorang untuk selalu berpikir positif, bahkan dalam situasi yang menyakitkan atau sulit. Ini adalah bentuk ekstrem dari positivitas yang menolak mengakui emosi negatif yang valid.</p>
                <h2>Contoh Toxic Positivity</h2>
                <p>Berikut beberapa contoh kalimat yang termasuk toxic positivity:</p>
                <ul>
                    <li>"Jangan sedih, masih banyak orang yang lebih susah dari kamu"</li>
                    <li>"Semua akan baik-baik saja, kamu hanya perlu berpikir positif"</li>
                    <li>"Tersenyumlah! Hidup terlalu singkat untuk bersedih"</li>
                    <li>"Kamu seharusnya bersyukur, bukan mengeluh"</li>
                </ul>
                <h2>Dampak Toxic Positivity</h2>
                <h3>1. Menekan Emosi</h3>
                <p>Ketika kita dipaksa untuk selalu positif, kita cenderung menekan emosi negatif. Padahal, emosi negatif adalah bagian normal dari pengalaman manusia dan perlu dirasakan serta diproses.</p>
                <h3>2. Merasa Bersalah</h3>
                <p>Toxic positivity bisa membuat seseorang merasa bersalah atau malu karena merasakan emosi negatif. Ini justru memperburuk kondisi mental.</p>
                <h3>3. Menghambat Proses Healing</h3>
                <p>Untuk sembuh dari pengalaman traumatis atau menyakitkan, kita perlu mengakui dan memproses emosi kita. Toxic positivity menghambat proses ini.</p>
                <h2>Alternatif yang Lebih Sehat</h2>
                <p>Daripada toxic positivity, cobalah praktikkan <strong>validasi emosi</strong>:</p>
                <ul>
                    <li>"Wajar jika kamu merasa sedih dalam situasi ini"</li>
                    <li>"Perasaanmu valid, dan aku di sini untukmu"</li>
                    <li>"Tidak apa-apa untuk tidak baik-baik saja"</li>
                </ul>
                <p>Ingat, menerima emosi negatif bukan berarti kita menyerah pada keadaan. Ini adalah langkah pertama menuju pemulihan yang sebenarnya.</p>',
            ],
            [
                'blog_category_id' => $productivity->id,
                'title' => 'Kelelahan Bekerja? Hati-hati Mengalami Burnout',
                'excerpt' => 'Burnout adalah kondisi kelelahan emosional, fisik, dan mental yang disebabkan oleh stres berlebihan dan berkepanjangan.',
                'image' => 'https://images.unsplash.com/photo-1606011334315-025e4baab810?w=400',
                'read_time' => 6,
                'published_at' => '2022-02-26',
                'content' => '<p>Apakah kamu sering merasa kelelahan yang luar biasa meskipun sudah istirahat? Atau merasa tidak bermotivasi dan kehilangan passion terhadap pekerjaanmu? Hati-hati, bisa jadi kamu mengalami <strong>burnout</strong>!</p>
                <h2>Apa Itu Burnout?</h2>
                <p>Burnout adalah kondisi kelelahan emosional, fisik, dan mental yang disebabkan oleh stres berlebihan dan berkepanjangan. Kondisi ini terjadi ketika kamu merasa overwhelmed, terkuras secara emosional, dan tidak mampu memenuhi tuntutan yang terus-menerus.</p>
                <h2>Tanda-Tanda Burnout</h2>
                <h3>1. Kelelahan Kronis</h3>
                <p>Merasa capek sepanjang waktu, baik secara fisik maupun emosional. Tidur tidak lagi terasa cukup untuk memulihkan energi.</p>
                <h3>2. Sinisme dan Detachment</h3>
                <p>Merasa negatif atau sinis terhadap pekerjaan. Kehilangan antusiasme yang dulu kamu miliki.</p>
                <h3>3. Penurunan Produktivitas</h3>
                <p>Sulit berkonsentrasi, sering membuat kesalahan, dan merasa tidak kompeten meskipun sebenarnya mampu.</p>
                <h3>4. Masalah Fisik</h3>
                <p>Sakit kepala, gangguan tidur, perubahan nafsu makan, atau penyakit yang sering kambuh.</p>
                <h2>Cara Mengatasi Burnout</h2>
                <ul>
                    <li><strong>Tetapkan batasan:</strong> Belajar untuk mengatakan "tidak" dan menetapkan batas yang jelas antara pekerjaan dan kehidupan pribadi</li>
                    <li><strong>Istirahat yang berkualitas:</strong> Tidur cukup, ambil cuti jika memungkinkan, dan luangkan waktu untuk hobi</li>
                    <li><strong>Olahraga teratur:</strong> Aktivitas fisik dapat membantu mengurangi stres dan meningkatkan mood</li>
                    <li><strong>Cari dukungan:</strong> Berbicara dengan teman, keluarga, atau profesional tentang apa yang kamu rasakan</li>
                    <li><strong>Evaluasi prioritas:</strong> Pikirkan kembali apa yang benar-benar penting bagimu</li>
                </ul>
                <p>Jika kamu merasakan tanda-tanda burnout, jangan abaikan. Ini adalah sinyal dari tubuh dan pikiranmu bahwa ada sesuatu yang perlu diubah. Ingat, kesehatan mentalmu sama pentingnya dengan kesehatan fisik!</p>',
            ],
            [
                'blog_category_id' => $selfDev->id,
                'title' => 'Insecure: Penyebab Dan Cara Mengatasinya',
                'excerpt' => 'Insecure? Apakah kamu pernah mengalaminya, atau sedang mengalaminya? Pernah enggak merasa tidak percaya diri?',
                'image' => 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=400',
                'read_time' => 8,
                'published_at' => '2022-02-23',
                'content' => '<p>Pernahkah kamu merasa tidak cukup baik? Membandingkan diri dengan orang lain di media sosial dan merasa minder? Atau merasa cemas tentang bagaimana orang lain memandangmu? Jika iya, kamu mungkin sedang mengalami <strong>insecurity</strong>.</p>
                <h2>Apa Itu Insecure?</h2>
                <p>Insecure atau rasa tidak aman adalah perasaan ketidakpastian atau kecemasan tentang diri sendiri. Ini bisa meliputi keraguan tentang penampilan, kemampuan, atau nilai diri secara keseluruhan.</p>
                <h2>Penyebab Insecure</h2>
                <h3>1. Pengalaman Masa Kecil</h3>
                <p>Kritik yang berlebihan, bullying, atau kurangnya dukungan emosional saat kecil bisa membentuk rasa insecure yang terbawa hingga dewasa.</p>
                <h3>2. Media Sosial</h3>
                <p>Paparan konstan terhadap kehidupan "sempurna" orang lain di media sosial bisa menciptakan standar tidak realistis dan perasaan tidak cukup.</p>
                <h3>3. Kegagalan atau Penolakan</h3>
                <p>Pengalaman gagal atau ditolak, terutama dalam hal yang penting bagi kita, bisa memicu rasa insecure.</p>
                <h3>4. Perfectionism</h3>
                <p>Menetapkan standar yang terlalu tinggi untuk diri sendiri dan merasa gagal ketika tidak mencapainya.</p>
                <h2>Cara Mengatasi Insecure</h2>
                <h3>1. Sadari dan Terima</h3>
                <p>Langkah pertama adalah menyadari bahwa kamu merasa insecure. Tidak perlu malu, karena semua orang pasti pernah merasakannya.</p>
                <h3>2. Tantang Pikiran Negatif</h3>
                <p>Ketika muncul pikiran negatif tentang dirimu, tantang pikiran tersebut. Apakah benar? Apa buktinya? Apakah kamu akan berkata seperti itu kepada temanmu?</p>
                <h3>3. Kurangi Membandingkan Diri</h3>
                <p>Setiap orang memiliki perjalanan yang berbeda. Fokuslah pada kemajuanmu sendiri daripada membandingkan dengan orang lain.</p>
                <h3>4. Praktikkan Self-Compassion</h3>
                <p>Perlakukan dirimu dengan kebaikan dan pengertian, seperti kamu memperlakukan teman baik.</p>
                <h3>5. Rayakan Kemenanganmu</h3>
                <p>Sekecil apapun pencapaianmu, rayakan! Ini membantu membangun kepercayaan diri secara bertahap.</p>
                <p>Ingat, kamu tidak sendirian dalam perasaan ini. Dan dengan langkah-langkah kecil yang konsisten, kamu bisa membangun rasa percaya diri yang lebih kuat.</p>',
            ],
            [
                'blog_category_id' => $mentalHealth->id,
                'title' => 'Tips Tetap Sehat Mental Di Masa Pandemi',
                'excerpt' => 'Pentingnya tetap sehat mental di masa pandemi? Bagaimana caranya menjaga kesehatan mental kita?',
                'image' => 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=400',
                'read_time' => 5,
                'published_at' => '2022-01-21',
                'content' => '<p>Pandemi telah mengubah banyak aspek kehidupan kita. Isolasi, ketidakpastian, dan perubahan rutinitas dapat berdampak signifikan pada kesehatan mental. Berikut beberapa tips untuk tetap sehat mental di masa-masa sulit ini.</p>
                <h2>1. Jaga Rutinitas Harian</h2>
                <p>Meskipun bekerja dari rumah, cobalah untuk mempertahankan rutinitas harian. Bangun pada waktu yang sama, berpakaian rapi (meskipun tidak keluar rumah), dan tetapkan jam kerja yang jelas.</p>
                <h2>2. Batasi Konsumsi Berita</h2>
                <p>Terlalu banyak membaca berita tentang pandemi bisa meningkatkan kecemasan. Batasi waktu untuk mengikuti berita dan pilih sumber yang terpercaya.</p>
                <h2>3. Tetap Terhubung</h2>
                <p>Meskipun physical distancing, kita tetap bisa melakukan social connecting. Gunakan video call untuk berkomunikasi dengan keluarga dan teman.</p>
                <h2>4. Olahraga Teratur</h2>
                <p>Aktivitas fisik terbukti dapat mengurangi stres dan meningkatkan mood. Lakukan olahraga ringan di rumah atau berjalan-jalan di sekitar rumah dengan protokol kesehatan.</p>
                <h2>5. Praktikkan Mindfulness</h2>
                <p>Meditasi dan latihan pernapasan dapat membantu menenangkan pikiran dan mengurangi kecemasan. Cukup 10-15 menit sehari sudah bisa memberikan manfaat.</p>
                <h2>6. Jaga Pola Tidur</h2>
                <p>Tidur yang cukup dan berkualitas sangat penting untuk kesehatan mental. Hindari layar gadget satu jam sebelum tidur.</p>
                <h2>7. Beri Waktu untuk Hobi</h2>
                <p>Luangkan waktu untuk melakukan aktivitas yang kamu nikmati. Ini bisa menjadi pelarian yang sehat dari stres.</p>
                <h2>8. Jangan Ragu Mencari Bantuan</h2>
                <p>Jika kamu merasa overwhelmed, tidak apa-apa untuk mencari bantuan profesional. Banyak psikolog yang menyediakan layanan konseling online.</p>
                <p>Ingat, menjaga kesehatan mental sama pentingnya dengan menjaga kesehatan fisik. Kita semua dalam situasi ini bersama-sama, dan kita akan melewatinya bersama!</p>',
            ],
            [
                'blog_category_id' => $mentalHealth->id,
                'title' => 'Apa Itu Overthinking? Yuk Kenali Ciri dan Cara Mengatasinya',
                'excerpt' => 'Overthinking, tentu sebagian besar dari kita sering mendengar kata tersebut. Apa sebenarnya overthinking itu?',
                'image' => 'https://images.unsplash.com/photo-1474418397713-7ede21d49118?w=400',
                'read_time' => 6,
                'published_at' => '2022-01-15',
                'content' => '<p><strong>Overthinking</strong>, tentu sebagian besar dari kita sering mendengar kata tersebut. Baik dalam percakapan sehari-hari, di sosial media, di kampus, di kantor, dan di berbagai ruang-ruang diskusi. Dalam benak kita terkadang bertanya-tanya, apa itu overthinking? Apa saja ciri-cirinya? Apakah normal mengalami overthinking ini? Lalu, bagaimana cara mengatasinya?</p>
                <h2>Apa Itu Overthinking?</h2>
                <p>Overthinking adalah suatu perilaku dimana seseorang berpikir secara berlebihan mengenai suatu hal. Kamu terus-menerus menganalisis, mengkhawatirkan, dan memainkan skenario-skenario di pikiranmu tanpa henti.</p>
                <h2>Tanda-Tanda Overthinking</h2>
                <h3>1. Insomnia</h3>
                <p>Kamu sering kesulitan tidur karena pikiranmu terus aktif dan tidak bisa rileks.</p>
                <h3>2. Meragukan Diri Sendiri</h3>
                <p>Kamu selalu meragukan keputusan yang sudah kamu ambil dan terus bertanya "bagaimana kalau..."</p>
                <h3>3. Sulit Membuat Keputusan</h3>
                <p>Karena terlalu banyak menganalisis, kamu jadi sulit menentukan pilihan bahkan untuk hal-hal kecil.</p>
                <h3>4. Fokus pada Hal yang Tidak Bisa Dikontrol</h3>
                <p>Kamu menghabiskan waktu memikirkan hal-hal yang sebenarnya di luar kendalimu.</p>
                <h2>Dampak Overthinking</h2>
                <ul>
                    <li><strong>Stres:</strong> Pikiran yang terus-menerus berputar meningkatkan hormon stres</li>
                    <li><strong>Kecemasan:</strong> Overthinking yang tidak terkendali bisa memicu gangguan kecemasan</li>
                    <li><strong>Kelelahan mental:</strong> Energimu terkuras untuk berpikir yang tidak produktif</li>
                </ul>
                <h2>Cara Mengatasi Overthinking</h2>
                <h3>1. Sadari Ketika Kamu Overthinking</h3>
                <p>Langkah pertama adalah menyadari bahwa kamu sedang overthinking. Amati pikiranmu tanpa menghakimi.</p>
                <h3>2. Tantang Pikiranmu</h3>
                <p>Tanyakan pada dirimu: Apakah pikiran ini produktif? Apakah saya bisa melakukan sesuatu tentang ini sekarang?</p>
                <h3>3. Tetapkan Batas Waktu untuk Berpikir</h3>
                <p>Berikan dirimu waktu tertentu (misalnya 15 menit) untuk memikirkan suatu masalah, kemudian berhenti dan lakukan aktivitas lain.</p>
                <h3>4. Praktikkan Mindfulness</h3>
                <p>Fokus pada saat ini, bukan masa lalu atau masa depan. Latihan pernapasan bisa sangat membantu.</p>
                <h3>5. Sibukkan Diri</h3>
                <p>Lakukan aktivitas yang menyenangkan atau bermanfaat untuk mengalihkan pikiran dari loop overthinking.</p>
                <p>Ingat, berpikir adalah hal yang baik, tapi berpikir berlebihan justru kontraproduktif. Jika overthinking sudah sangat mengganggu kehidupanmu, jangan ragu untuk berkonsultasi dengan profesional.</p>',
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
                'event_date' => '2025-01-15',
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
