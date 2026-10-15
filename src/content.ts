export type Language = 'en' | 'ja'
export type LocalizedText = Record<Language, string>

export interface LearningItem extends LocalizedText {
  logo?: string
  symbol?: string
}

export interface PortfolioProject {
  title: LocalizedText
  description: LocalizedText
  status: 'live' | 'in-progress' | 'completed'
  technologies: string[]
  contribution: LocalizedText
  repositoryUrl?: string
  liveUrl?: string
}

export interface PortfolioCertificate {
  title: LocalizedText
  earned: LocalizedText
  file: string
}

export const portfolio = {
  name: 'Thaw',
  location: 'Kobe, Japan',
  school: 'Kobe Denshi Senmon Gakkou',
  graduationYear: 2029,
  learning: [
    { en: 'C', ja: 'C言語', logo: 'c' },
    { en: 'Python', ja: 'Python', logo: 'python' },
    { en: 'Git', ja: 'Git', logo: 'git' },
    { en: 'GitHub', ja: 'GitHub', logo: 'github' },
    { en: 'HTML', ja: 'HTML', logo: 'html5' },
    { en: 'CSS', ja: 'CSS', logo: 'css3' },
    { en: 'JavaScript', ja: 'JavaScript', logo: 'javascript' },
    { en: 'React', ja: 'React', logo: 'react' },
    { en: 'TypeScript', ja: 'TypeScript', logo: 'typescript' },
  ] as LearningItem[],
  email: 'thawshinesittt@gmail.com',
  githubUrl: 'https://github.com/yuuno-dev',
} as const

export const copy = {
  en: {
    brandName: 'SHINE',
    documentTitle: 'Thaw — IT student in Kobe, Japan',
    metaDescription: 'Thaw is an IT student in Kobe, Japan, building programming skills through coursework and independent study while preparing for software development internships.',
    skip: 'Skip to content',
    home: 'SHINE, home',
    navLabel: 'Main navigation',
    navAbout: 'About', navLearning: 'Learning', navProjects: 'Projects', navCertificates: 'Certificates', navContact: 'Contact',
    languageLabel: 'Choose language',
    themeDay: 'Switch to day theme', themeNight: 'Switch to night theme',
    eyebrow: 'IT student · Kobe, Japan',
    headlineFirst: 'Learning to build',
    headlineSecond: 'useful software.',
    introduction: 'I’m Thaw, a first-year IT student at Kobe Denshi Senmon Gakkou. I’m building my programming skills through coursework and independent study as I prepare for software development internships.',
    actionContact: 'Get in touch', actionProjects: 'Explore projects',
    opportunityNote: 'Open to software development internships in Japan.',
    portraitAlt: 'Thaw wearing glasses and a dark hoodie, photographed outdoors.',
    portraitCaption: 'Portrait · Kobe, Japan',
    index: '01 — KOBE, JAPAN',
    storySection: 'My story',
    storyTitle: 'A beginning, built one concept at a time.',
    storyParagraphs: [
      'I’m a first-year IT Specialist student at Kobe Denshi Senmon Gakkou, graduating in 2029. I’m building my programming skills through coursework and independent study.',
      'I’m interested in building useful apps and websites. I’m practicing consistently and looking for opportunities to learn from real development work.',
    ],
    learningSection: 'Learning',
    learningTitle: 'What I’m learning',
    learningNote: 'Coursework and independent study. These are all currently in progress.',
    learningStatus: 'Learning',
    projectsSection: 'Projects',
    projectsTitle: 'Selected work',
    projectsNote: 'A study resource and my portfolio.',
    projectEmptyTitle: 'Projects in progress',
    projectEmptyNote: 'Finished work will appear here with its purpose, status, technologies, and my contribution.',
    live: 'Live', completed: 'Completed', inProgress: 'In progress',
    technologies: 'Technologies', contribution: 'My contribution', repository: 'Repository', liveSite: 'Live site',
    profileSection: 'Profile', profileTitle: 'Where I’m studying',
    education: 'Education', program: 'IT Specialist student',
    expectedGraduation: 'Expected graduation', qualifications: 'Language qualifications',
    certificatesSection: 'Certificates', certificatesTitle: 'Certifications earned', earnedDate: 'Earned', viewCertificate: 'View certificate',
    japanese: 'Japanese', english: 'English', burmese: 'Burmese', native: 'Native',
    nextChapter: 'Next chapter', contactEyebrow: 'Open to a conversation',
    contactTitleFirst: 'Let’s make', contactTitleSecond: 'something useful.',
    contactNote: 'I’m looking for a software development internship in Japan while I build a strong foundation in programming.',
    github: 'GitHub profile', signoff: 'Thank you for taking a look.',
    footerProgram: 'IT student', backToTop: 'Back to top',
  },
  ja: {
    brandName: 'シャイン',
    documentTitle: 'Thaw — 神戸でITを学ぶ学生',
    metaDescription: '神戸電子専門学校でITを学ぶThawのポートフォリオ。授業と自主学習を通じてプログラミングスキルを身につけながら、ソフトウェア開発のインターンシップを目指しています。',
    skip: '本文へスキップ',
    home: 'シャイン — ホーム',
    navLabel: 'メインナビゲーション',
    navAbout: 'プロフィール', navLearning: '学習中', navProjects: 'プロジェクト', navCertificates: '資格', navContact: '連絡先',
    languageLabel: '表示言語を選択',
    themeDay: 'ライトテーマに切り替え', themeNight: 'ナイトテーマに切り替え',
    eyebrow: 'IT学生 · 神戸、日本',
    headlineFirst: '役立つソフトウェアを',
    headlineSecond: 'つくるために学ぶ。',
    introduction: 'Thawです。神戸電子専門学校のITスペシャリスト学科1年生です。授業と自主学習を通じてプログラミングスキルを身につけながら、ソフトウェア開発のインターンシップを目指しています。',
    actionContact: '連絡する', actionProjects: 'プロジェクトを見る',
    opportunityNote: '日本でソフトウェア開発のインターンシップを希望しています。',
    portraitAlt: '屋外で撮影した、眼鏡と黒いパーカーを着たThawの写真。',
    portraitCaption: 'プロフィール写真 · 神戸、日本',
    index: '01 — 神戸、日本',
    storySection: '私について',
    storyTitle: '一つずつ、学びを積み重ねる。',
    storyParagraphs: [
      '神戸電子専門学校のITスペシャリスト学科1年生で、2029年に卒業予定です。授業と自主学習を通じて、プログラミングスキルを身につけています。',
      '役立つアプリやWebサイトをつくることに関心があります。基礎を一つずつ身につけながら、実際の開発現場で学ぶ機会を探しています。',
    ],
    learningSection: '学習中',
    learningTitle: '現在学んでいること',
    learningNote: '授業と自主学習の内容です。すべて現在学習中です。',
    learningStatus: '学習中',
    projectsSection: 'プロジェクト',
    projectsTitle: '制作・学習の記録',
    projectsNote: '学習サイトとポートフォリオを掲載しています。',
    projectEmptyTitle: 'プロジェクトを準備中',
    projectEmptyNote: '完成した作品は、目的・状況・使用技術・担当内容とあわせてここに掲載します。',
    live: '公開中', completed: '完成', inProgress: '制作中',
    technologies: '使用技術', contribution: '担当内容', repository: 'リポジトリ', liveSite: '公開サイト',
    profileSection: 'プロフィール', profileTitle: '学んでいる場所',
    education: '学校', program: 'ITスペシャリスト学科 1年',
    expectedGraduation: '卒業予定', qualifications: '語学資格',
    certificatesSection: '資格', certificatesTitle: '取得した資格', earnedDate: '取得日', viewCertificate: '証明書を見る',
    japanese: '日本語', english: '英語', burmese: 'ミャンマー語', native: '母語',
    nextChapter: 'これから', contactEyebrow: 'お気軽にご連絡ください',
    contactTitleFirst: '役立つものを', contactTitleSecond: '一緒につくりたい。',
    contactNote: 'プログラミングの基礎を身につけながら、日本でソフトウェア開発のインターンシップを探しています。',
    github: 'GitHubプロフィール', signoff: 'ご覧いただき、ありがとうございます。',
    footerProgram: 'IT学生', backToTop: 'ページ上部へ',
  },
} as const

export const projects: PortfolioProject[] = [
  {
    title: { en: 'Personal Portfolio', ja: '個人ポートフォリオ' },
    description: {
      en: 'A bilingual portfolio for sharing my background, studies, and projects with internship recruiters. It includes English and Japanese content and day and night themes.',
      ja: 'インターンシップ応募に向けて、プロフィールや学習内容、プロジェクトを紹介する日英バイリンガルのポートフォリオです。ライト・ナイトテーマを切り替えられます。',
    },
    status: 'live',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Vite'],
    contribution: {
      en: 'Planned the content and visual direction, then developed the site with AI-assisted coding.',
      ja: '掲載内容とデザインの方向性を考え、AIを活用したコーディングでサイトを制作。',
    },
  },
  {
    title: { en: 'Yuno Study Space', ja: 'Yuno Study Space' },
    description: {
      en: 'A live study-resource website featuring C programming notes in English and Burmese, with Japanese technical terms.',
      ja: 'C言語の学習リソースを公開しているWebサイトです。日本語の専門用語を交えた英語・ビルマ語の学習ノートを掲載しています。',
    },
    status: 'live',
    technologies: [],
    contribution: {
      en: 'Prepared C programming notes in English and Burmese, including Japanese technical terms.',
      ja: '日本語の専門用語を交えた、英語・ビルマ語のC言語学習ノートを作成。',
    },
    liveUrl: 'https://yunostudyhub.netlify.app/',
  },
]

export const certificates: PortfolioCertificate[] = [
  {
    title: { en: 'C Programming Ability Certification, Grade 3 (2026)', ja: 'C言語プログラミング能力認定試験 3級（2026年度）' },
    earned: { en: 'September 18, 2026', ja: '2026年9月18日' },
    file: '/certificates/c-programming-level-3-2026.pdf',
  },
  {
    title: { en: 'Information Processing Skills Certification, Grade 3 (2026)', ja: '情報処理技術者能力認定試験 3級（2026年度）' },
    earned: { en: 'October 9, 2026', ja: '2026年10月9日' },
    file: '/certificates/information-processing-level-3-2026.pdf',
  },
]

