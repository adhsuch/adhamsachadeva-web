// Semua konten portofolio dikumpulkan di sini agar mudah diubah.

export const profile = {
  name: 'Adham Sachadeva Purwadi',
  role: 'Mahasiswa Institut Teknologi Bandung',
  detail: 'Sistem dan Teknologi Informasi · Semester 4',
  tagline:
    'Mahasiswa Sistem dan Teknologi Informasi yang menyukai pemrograman, pengembangan produk, dan eksplorasi AI / prompt engineering.',
  // Foto profil ada di public/profile.jpg
  photo: './profile.jpg',
}

export const about = [
  'Saya Adham Sachadeva Purwadi, mahasiswa Sistem dan Teknologi Informasi di Institut Teknologi Bandung. Saya tertarik membangun perangkat lunak yang berguna — mulai dari algoritma, aplikasi desktop, hingga platform web.',
  'Selain ngoding, saya aktif berorganisasi di kampus dan senang belajar hal baru, terutama pemanfaatan AI dan prompt engineering untuk menyelesaikan masalah nyata.',
]

export const skills = [
  {
    category: 'Programming',
    items: ['C', 'Java', 'Python', 'React'],
  },
  {
    category: 'Database',
    items: ['MySQL', 'PostgreSQL'],
  },
  {
    category: 'AI',
    items: ['Prompt Engineering'],
  },
]

export const education = [
  {
    school: 'Institut Teknologi Bandung',
    detail: 'Sistem dan Teknologi Informasi · Semester 4',
    period: 'Sekarang',
    current: true,
  },
  {
    school: 'MAN 2 Kota Malang',
    detail: 'Madrasah Aliyah Negeri',
    period: '',
  },
  {
    school: 'SMPI Baitul Izzah Nganjuk',
    detail: 'Sekolah Menengah Pertama Islam',
    period: '',
  },
  {
    school: 'SD Aisyiyah 1 Nganjuk',
    detail: 'Sekolah Dasar',
    period: '',
  },
]

export const projects = [
  {
    name: 'Tubes Algoritma Pemrograman',
    description:
      'Tugas Besar Algoritma Pemrograman 1 — implementasi program berbasis bahasa C.',
    tags: ['C', 'Algoritma'],
    link: 'https://github.com/adhsuch/Tubes-Algoritma-Pemrograman-1-2026',
  },
  {
    name: 'CIVITASK',
    description:
      'Platform freelancer khusus mahasiswa untuk menghubungkan pemberi tugas dengan mahasiswa yang menawarkan jasa.',
    tags: ['Web', 'Platform'],
    link: '',
  },
  {
    name: 'Weekly Calories & Shopping Planner',
    description:
      'Aplikasi Windows untuk merencanakan kebutuhan kalori mingguan sekaligus daftar belanja.',
    tags: ['Windows App', 'Desktop'],
    link: '',
  },
]

export const organizations = [
  {
    role: 'Staff Divisi Career Development',
    org: 'HMIF ITB',
    period: '2026 / 2027',
  },
  {
    role: 'Divisi Sponsorship',
    org: 'Wisuda HMIF',
    period: '2025',
  },
  {
    role: 'Staff Logistik',
    org: 'IMPACT STEI-K',
    period: '2025',
  },
]

export const contacts = [
  { label: 'Email', value: 'adsa02.asp@gmail.com', href: 'mailto:adsa02.asp@gmail.com' },
  { label: 'WhatsApp', value: '+62 857-3920-7913', href: 'https://wa.me/6285739207913' },
  { label: 'Instagram', value: '@adhamsachadeva', href: 'https://instagram.com/adhamsachadeva' },
  { label: 'GitHub', value: 'github.com/adhsuch', href: 'https://github.com/adhsuch' },
  {
    label: 'LinkedIn',
    value: 'in/adhamsachadevap',
    href: 'https://www.linkedin.com/in/adhamsachadevap/',
  },
]
