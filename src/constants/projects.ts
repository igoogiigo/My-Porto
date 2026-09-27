import { Project, VibeStep } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'arttrea-interior',
    title: 'Arttrea Interior',
    tagline: 'Web Portal & Interactive Showcase Furniture & Interior Ekspor Luxury',
    description: 'Website portal showcase perusahaan manufaktur furniture & interior bespoke ekspor dengan sertifikasi kayu SVLK, katalog produk, proyek mewah resort, serta sistem pengelolaan konten.',
    problem: 'Arttrea Interior membutuhkan media digital yang mencerminkan kesan kemewahan dan standar ekspor internasional untuk memamerkan proyek resort mewah (Maldives & Ubud), sertifikasi SVLK resmi, serta layanan perkayuan bespoke.',
    solution: 'Membangun platform web responsif dengan tipografi elegan, galeri visual proyek bernilai tinggi, halaman sertifikasi kayu SVLK resmi, serta dasbor manajemen konten internal.',
    features: [
      'Showcase galeri proyek resort internasional (Maldives, Ubud, dll)',
      'Halaman edukasi & verifikasi sertifikasi kayu resmi SVLK (Wood Certification)',
      'Sistem katalog produk perkayuan bespoke & layanan contract furniture',
      'Admin Dashboard internal untuk manajemen proyek, klien, dan konten layanan'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vite', 'Lucide Icons'],
    role: 'Frontend Developer & Database Designer',
    category: 'Client Project',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jamf-indonesia',
    title: 'Jamf Indonesia Portal',
    tagline: 'Platform Solusi Apple Enterprise Management & Security',
    description: 'Platform katalog produk, modul pengajuan katalog/penawaran, layanan Apple management, dan dashboard manajemen admin Jamf Indonesia.',
    problem: 'Klien membutuhkan platform edukasi dan penjualan solusi enterprise Apple Management (Jamf Pro & Jamf Protect) yang terintegrasi dengan permintaan katalog dan manajemen admin secara efisien.',
    solution: 'Membangun web portal komprehensif dengan katalog produk Apple Enterprise, form pengajuan penawaran/katalog interaktif, serta Admin Management Dashboard yang dinamis.',
    features: [
      'Katalog produk & solusi Apple Management Enterprise (MDM, Security, Identity)',
      'Fitur pengajuan katalog & permintaan penawaran harga (Catalog Request)',
      'Halaman koleksi produk & integrasi artikel/blog teknologi Apple',
      'Comprehensive Admin View untuk pengawasan request & manajemen konten'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Gemini AI', 'Lucide Icons'],
    role: 'Full-stack Developer',
    category: 'Client Project',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'labbaik',
    title: 'Labbaik - Islamic Assistant PWA',
    tagline: 'Aplikasi PWA Pendamping Ibadah & Kompas Qibla Berbasis AI',
    description: 'Aplikasi Progressive Web App (PWA) pendamping ibadah harian dengan kalkulasi waktu sholat akurat, kompas kiblat interaktif, serta asisten AI.',
    problem: 'Pengguna menginginkan aplikasi pengingat waktu ibadah yang ringan tanpa iklan mengganggu, bisa diakses offline via PWA, serta dilengkapi kompas kiblat yang presisi.',
    solution: 'Membangun aplikasi PWA modern mengintegrasikan library Adhan JS untuk jadwal sholat real-time lokasi, fitur Kompas Kiblat sensoris, serta Asisten AI Gemini.',
    features: [
      'Kalkulasi jadwal waktu sholat otomatis berbasis lokasi real-time (Adhan JS)',
      'Kompas Kiblat interaktif berbasis sensor perangkat',
      'Integrasi Asisten AI (Google Gemini) untuk tanya-jawab seputar ibadah',
      'Dukungan Progressive Web App (PWA) agar bisa di-install langsung di HP'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Adhan JS', 'PWA', 'Google Gemini AI', 'Motion'],
    role: 'Solo Developer',
    category: 'Personal Project',
    imageUrl: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fintrack',
    title: 'FinTrack',
    tagline: 'Dashboard Keuangan Personal Modular & Mandiri',
    description: 'Aplikasi pencatatan keuangan personal dengan grafik visualisasi dinamis dan manajemen anggaran modular.',
    problem: 'Pencatatan keuangan manual menggunakan spreadsheet terasa kaku, tidak bersahabat di HP, dan sulit menghasilkan visualisasi tren pengeluaran bulanan secara instan.',
    solution: 'Fintrack menyediakan platform personal finance modern dengan visualisasi data interaktif, pengelompokan kategori pintar, serta ekspor laporan. Proyek ini dijual dengan model jual putus kepada klien personal.',
    features: [
      'Visualisasi pengeluaran dengan grafik interaktif (Pie & Bar chart)',
      'Manajemen anggaran bulanan per kategori dengan indikator batas aman',
      'Pencatatan transaksi cepat dengan shortcut ramah pengguna mobile',
      'Export data keuangan ke format Excel/CSV secara instan'
    ],
    techStack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Recharts'],
    role: 'Solo Full-stack Developer',
    category: 'Personal Project',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    projectUrl: 'https://fintrack.shibghotul.web.id/'
  },
  {
    id: 'cctv-investigation',
    title: 'Ticketing System',
    tagline: 'Sistem Tiket Investigasi Internal Berbasis Approval Berjenjang',
    description: 'Sistem pengajuan investigasi CCTV internal untuk meningkatkan keamanan dan akurasi pelacakan barang hilang.',
    problem: 'Pengajuan cek CCTV oleh tim operasional Sentral Cargo sebelumnya dilakukan via chat WhatsApp manual, yang menyebabkan penumpukan antrean, hilangnya riwayat bukti, dan lambatnya respon tim sekuriti.',
    solution: 'Membangun ticketing system terstruktur dengan tracking status real-time, approval berjenjang dari kepala cabang, role-based access control (RBAC), serta log investigasi otomatis.',
    features: [
      'Sistem pembuatan tiket dengan lampiran detail nomor resi dan estimasi jam kejadian',
      'Dashboard approval khusus Kepala Cabang dan Tim Sekuriti/IT',
      'Pemberitahuan status tiket real-time via dashboard & integrasi pesan',
      'Ekspor log investigasi untuk kebutuhan audit operasional logistik'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Supabase'],
    role: 'Lead Frontend & Database Designer',
    category: 'Internal Perusahaan',
    imageUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'global-inspire',
    title: 'Global Inspire Platform',
    tagline: 'Ekosistem Digital 3-in-1 (Web, CMS, dan CRM) Skala Besar',
    description: 'Mega-project yang mengintegrasikan portal publik, manajemen konten internal, serta manajemen klien dalam satu ekosistem.',
    problem: 'Klien mengelola operasional bisnisnya menggunakan 3 platform terpisah yang berbayar dan kaku, menyebabkan duplikasi data dan biaya operasional membengkak.',
    solution: 'Membangun kesatuan ekosistem digital modular dengan total kode mencapai lebih dari 42.700 baris, memadukan frontend responsif, CMS admin, dan modul CRM pemantau leads dalam satu database Supabase.',
    features: [
      'Portal web publik ultra-cepat dengan optimasi SEO tingkat lanjut',
      'Custom Content Management System (CMS) drag-and-drop untuk manajemen artikel dan layanan',
      'Customer Relationship Management (CRM) dengan funneling penjualan terintegrasi',
      'Keamanan tingkat tinggi dengan Row Level Security (RLS) Supabase yang ketat'
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'Supabase', 'Tailwind CSS', 'PostgreSQL'],
    role: 'Freelance Full-stack Developer',
    category: 'Client Project',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    projectUrl: 'https://globalinspire.id/'
  },
  {
    id: 'sdit-darunnajah',
    title: 'SD IT Darunnajah Seluma',
    tagline: 'Redesign Website Sekolah & Portal Cek Status PPDB Real-time',
    description: 'Website resmi sekolah dasar Islam terpadu dengan desain ceria, ramah anak, dan fitur portal PPDB mandiri.',
    problem: 'Website sekolah lama terlihat kaku, tidak informatif, dan orang tua calon siswa baru kesulitan memantau kelulusan berkas pendaftaran (PPDB) tanpa harus datang ke sekolah.',
    solution: 'Mendesain ulang total visual web sekolah agar representatif dan interaktif, lalu mengimplementasikan fitur cek status PPDB berbasis Nomor Pendaftaran secara mandiri.',
    features: [
      'Desain modern, playful, dan ramah anak dengan transisi animasi halus',
      'Fitur pencarian data status verifikasi berkas PPDB secara real-time',
      'Galeri kegiatan interaktif dan modul artikel berita sekolah yang mudah diperbarui',
      'Integrasi formulir pendaftaran digital langsung ke database admin'
    ],
    techStack: ['React', 'Vite', 'Supabase', 'Tailwind CSS', 'Framer Motion'],
    role: 'UI/UX Designer & Frontend Developer',
    category: 'Client Project',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    projectUrl: 'https://sditdarunnajahseluma.vercel.app/'
  },
  {
    id: 'receipt-scanner',
    title: 'Receipt Scanner App',
    tagline: 'Pemindai Struk Perjalanan Dinas Cerdas Berbasis AI',
    description: 'Aplikasi pembaca struk otomatis untuk klaim pengeluaran perjalanan dinas tanpa ketik manual.',
    problem: 'Staff lapangan logistik harus menginput rincian struk pengeluaran (bensin, tol, makan) satu per satu secara manual ke sistem reimbursement, memakan waktu lama dan rentan kesalahan input angka.',
    solution: 'Membangun aplikasi web mobile-friendly yang menggunakan OCR untuk membaca teks dari kamera, lalu diproses oleh Anthropic Claude API untuk mengekstrak nominal, tanggal, dan nama toko secara instan ke Supabase.',
    features: [
      'Akses kamera langsung dengan auto-crop pemindaian struk pengeluaran',
      'Ekstraksi teks berbasis AI (Claude API) dengan akurasi pengenalan angka tinggi',
      'Kategorisasi otomatis (BBM, Konsumsi, Tol, Parkir, Penginapan)',
      'Sinkronisasi instan ke database reimbursements admin dengan status draft'
    ],
    techStack: ['Next.js', 'Supabase', 'Anthropic Claude API', 'Tailwind CSS', 'Tesseract.js'],
    role: 'Solo Developer',
    category: 'Personal Project',
    imageUrl: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'muthia-living',
    title: 'Muthia Living Portal',
    tagline: 'Landing Page Estetik Properti & CMS Dashboard Agensi',
    description: 'Website katalog properti modern bergaya scandinavian yang dilengkapi dashboard admin kelola listing.',
    problem: 'Muthia Living kesulitan menjual katalog unit rumah mereka secara online karena postingan Instagram yang acak dan tidak terarsip rapi, sementara untuk menyewa developer agensi besar biayanya sangat tinggi.',
    solution: 'Mendesain website showcase minimalis estetik, lengkap dengan filter lokasi dan harga, serta CMS admin sederhana bagi agen untuk mengunggah dan mengarsipkan katalog unit rumah secara mandiri.',
    features: [
      'Landing page minimalis premium dengan galeri foto properti resolusi tinggi',
      'Sistem manajemen katalog (CMS) bagi agen dengan kompresi gambar otomatis',
      'Integrasi tombol reservasi survei langsung terhubung ke WhatsApp Agen terkait'
    ],
    techStack: ['React', 'Vite', 'Supabase Storage & Database', 'Tailwind CSS', 'Cloudinary'],
    role: 'Solo Developer',
    category: 'Client Project',
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
    projectUrl: 'https://www.muthialiving.com/'
  },
  {
    id: 'labbaik',
    title: 'Labbaik',
    tagline: 'Pendamping Digital Perjalanan Spiritual Umroh',
    description: 'Aplikasi pendamping ibadah umroh yang menemani jamaah dari fase persiapan (Pra Umroh), pelaksanaan manasik (Saat Umroh), hingga menjaga istiqamah sepulangnya (Pasca Umroh).',
    problem: 'Jamaah calon umroh sering kesulitan mengakses panduan manasik, bacaan doa, dan tracker ibadah harian dalam satu tempat yang praktis, apalagi saat sedang di perjalanan atau di tanah suci dengan koneksi terbatas.',
    solution: 'Membangun aplikasi berbasis fase perjalanan (Pra, Saat, Pasca Umroh) dengan countdown keberangkatan, jadwal sholat berbasis GPS, tasbih digital, checklist ibadah harian, hingga pusat belajar (Asmaul Husna, Hadits Arbain, Quran Tracker).',
    features: [
      'Dashboard countdown keberangkatan & jadwal sholat presisi berbasis lokasi (GPS)',
      'Tasbih digital dengan target hitungan dan mode ketuk di mana saja',
      'Checklist amalan harian (wajib & sunnah) dengan progress tracking streak',
      'Quran Tracker dengan 3 metode: khatam by tanggal, target harian, atau free tracking',
      'Pusat belajar berisi Asmaul Husna, Hadits Arbain, dan koleksi doa'
    ],
    techStack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    role: 'Solo Full-stack Developer',
    category: 'Personal Project',
    imageUrl: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80',
    projectUrl: 'https://labbaik-id.vercel.app/'
  },
  {
    id: 'itam-sentralcargo',
    title: 'IT Asset Management',
    tagline: 'Pelacakan Aset Perangkat Kantor Terpusat',
    description: 'Sistem internal untuk mencatat dan melacak perangkat kerja kantor (laptop & handphone), dikembangkan berkolaborasi dengan tim General Affair.',
    problem: 'Data aset perangkat kantor tersebar dan tidak terpusat, menyulitkan pelacakan kepemilikan, kondisi, dan riwayat perpindahan perangkat antar karyawan.',
    solution: 'Membangun sistem pencatatan aset ringkas yang memudahkan tim GA & IT memantau status dan riwayat perangkat secara terpusat.',
    features: [
      'Pencatatan data aset (laptop & handphone) beserta status dan pemegangnya',
      'Kolaborasi lintas tim antara IT dan General Affair',
      'Riwayat perpindahan/serah-terima perangkat'
    ],
    techStack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    role: 'Developer',
    category: 'Internal Perusahaan',
    imageUrl: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80',
    projectUrl: 'https://itam-sentralcargo.vercel.app/'
  },
  {
    id: 'freelance-pro',
    title: 'Freelance Pro',
    tagline: 'Manajemen Proyek Freelance dari Penawaran hingga Serah Terima',
    description: 'Aplikasi manajemen proyek pribadi untuk mengelola alur kerja freelance, mulai dari kalkulasi harga hingga serah terima proyek ke klien.',
    problem: 'Mengelola banyak proyek freelance sekaligus secara manual (proposal, penawaran harga, status pengerjaan, serah terima) membuat progres sulit dipantau dan rawan miskomunikasi dengan klien.',
    solution: 'Membangun sistem tracking end-to-end mulai dari kalkulator proposal, status penawaran, progres pengerjaan, hingga checklist serah terima proyek.',
    features: [
      'Kalkulator proposal untuk estimasi harga proyek',
      'Tracking status proyek dari penawaran hingga serah terima',
      'Dashboard ringkas untuk memantau semua proyek berjalan sekaligus'
    ],
    techStack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    role: 'Solo Developer',
    category: 'Personal Project',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    projectUrl: 'https://freelance-pro-gamma.vercel.app/'
  },
  {
    id: 'inteli-gen',
    title: 'Inteli-Gen',
    tagline: 'Sistem Self Check-In Berbasis Barcode untuk Acara Fammi.ly',
    description: 'Sistem absensi mandiri berbasis scan barcode untuk peserta acara, lengkap dengan dashboard pelaporan bagi Liaison Officer (LO).',
    problem: 'Absensi manual peserta acara dari berbagai sekolah memakan waktu lama di lokasi dan sulit direkap secara real-time oleh panitia/LO.',
    solution: 'Membangun alur self check-in: peserta scan barcode panitia, memilih sekolah asal, mencari nama, lalu absen mandiri. Panitia (LO) mendapat dashboard khusus untuk memantau dan mengekspor laporan kehadiran.',
    features: [
      'Self check-in mandiri via scan barcode tanpa antre di meja panitia',
      'Pencarian nama peserta berdasarkan sekolah asal',
      'Dashboard LO untuk memantau kehadiran real-time',
      'Laporan rekap absensi yang bisa diekspor panitia'
    ],
    techStack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    role: 'Solo Developer',
    category: 'Client Project',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    projectUrl: 'https://inteli-gen.vercel.app/'
  }
];

export const VIBE_STEPS_DATA: VibeStep[] = [
  {
    step: 1,
    title: 'Ideation & Requirements Gathering',
    subtitle: 'Ngobrol Santai & Gali Kebutuhan',
    description: 'Kita petakan dulu apa masalah utama bisnismu dan solusi apa yang paling efektif. Tanpa ribet bahasa corporate yang kaku, kita bicara fungsionalitas riil yang kamu butuhkan untuk mempermudah operasional atau jualan.',
    emoji: '💬',
    tech: 'Mindmap & Kopi Susu',
    colorClass: 'from-amber-400 to-orange-500'
  },
  {
    step: 2,
    title: 'Base Code Generation with Google AI Studio',
    subtitle: 'Vibe-Coding at Speed',
    description: 'Menggunakan Google AI Studio dengan model Gemini terbaru untuk mempercepat pembuatan pondasi kode web (boilerplate, routing, layout). Ini memotong waktu setup awal hingga 80%, memberikan fleksibilitas tinggi.',
    emoji: '⚡',
    tech: 'Google AI Studio (Gemini)',
    colorClass: 'from-blue-500 to-indigo-600'
  },
  {
    step: 3,
    title: 'Audit & Precision Debugging with Claude AI',
    subtitle: 'Surgical Refinement & Security Review',
    description: 'Pondasi kode yang dibuat AI di-audit baris demi baris menggunakan Claude AI. Di sini saya menulis custom logic, merapikan types, meninjau performa, dan memastikan tidak ada kerentanan keamanan sebelum lanjut ke database.',
    emoji: '🔍',
    tech: 'Anthropic Claude AI',
    colorClass: 'from-purple-500 to-pink-500'
  },
  {
    step: 4,
    title: 'Database & Backend Configuration via Supabase',
    subtitle: 'Bulletproof Database in Minutes',
    description: 'Untuk urusan backend, kita pasang database PostgreSQL dari Supabase. Fitur instan seperti Authentication, Row Level Security (RLS) untuk keamanan user, dan Storage untuk upload aset kita configure di sini.',
    emoji: '⚡',
    tech: 'Supabase (PostgreSQL, Auth, RLS)',
    colorClass: 'from-emerald-400 to-teal-600'
  },
  {
    step: 5,
    title: 'Production Deployment to Vercel / Cloud Run',
    subtitle: 'Instant Speed & Auto CI/CD',
    description: 'Aplikasi siap tayang di-deploy ke Vercel atau Cloud Run dengan integrasi Git otomatis. Setiap perubahan kode akan teruji otomatis dan website kamu langsung online dengan kecepatan loading super kencang di seluruh dunia.',
    emoji: '🚀',
    tech: 'Vercel / Cloud Run',
    colorClass: 'from-cyan-500 to-blue-600'
  }
];
