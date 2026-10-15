export type Language = 'en' | 'ja' | 'my'
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
    { en: 'C', ja: 'C言語', my: 'C', logo: 'c' },
    { en: 'Python', ja: 'Python', my: 'Python', logo: 'python' },
    { en: 'Git', ja: 'Git', my: 'Git', logo: 'git' },
    { en: 'GitHub', ja: 'GitHub', my: 'GitHub', logo: 'github' },
    { en: 'HTML', ja: 'HTML', my: 'HTML', logo: 'html5' },
    { en: 'CSS', ja: 'CSS', my: 'CSS', logo: 'css3' },
    { en: 'JavaScript', ja: 'JavaScript', my: 'JavaScript', logo: 'javascript' },
    { en: 'React', ja: 'React', my: 'React', logo: 'react' },
    { en: 'TypeScript', ja: 'TypeScript', my: 'TypeScript', logo: 'typescript' },
  ] as LearningItem[],
  email: 'thawshinesittt@gmail.com',
  githubUrl: 'https://github.com/yuuno-dev',
} as const

export const copy = {
  en: {
    documentTitle: 'Thaw — IT student in Kobe, Japan',
    metaDescription: 'Thaw is an IT student in Kobe, Japan, building programming skills through coursework and independent study while preparing for software development internships.',
    skip: 'Skip to content',
    home: 'Thaw, home',
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
    japanese: 'Japanese', english: 'English',
    nextChapter: 'Next chapter', contactEyebrow: 'Open to a conversation',
    contactTitleFirst: 'Let’s make', contactTitleSecond: 'something useful.',
    contactNote: 'I’m looking for a software development internship in Japan while I build a strong foundation in programming.',
    github: 'GitHub profile', signoff: 'Thank you for taking a look.',
    footerProgram: 'IT student', backToTop: 'Back to top',
  },
  ja: {
    documentTitle: 'Thaw — 神戸でITを学ぶ学生',
    metaDescription: '神戸電子専門学校でITを学ぶThawのポートフォリオ。授業と自主学習を通じてプログラミングスキルを身につけながら、ソフトウェア開発のインターンシップを目指しています。',
    skip: '本文へスキップ',
    home: 'Thaw — ホーム',
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
    japanese: '日本語', english: '英語',
    nextChapter: 'これから', contactEyebrow: 'お気軽にご連絡ください',
    contactTitleFirst: '役立つものを', contactTitleSecond: '一緒につくりたい。',
    contactNote: 'プログラミングの基礎を身につけながら、日本でソフトウェア開発のインターンシップを探しています。',
    github: 'GitHubプロフィール', signoff: 'ご覧いただき、ありがとうございます。',
    footerProgram: 'IT学生', backToTop: 'ページ上部へ',
  },
  my: {
    documentTitle: 'Thaw — ဂျပန်နိုင်ငံ၊ Kobe မြို့မှ IT ကျောင်းသား',
    metaDescription: 'Thaw သည် ဂျပန်နိုင်ငံ၊ Kobe မြို့တွင် IT ပညာသင်ယူနေသော ကျောင်းသားတစ်ဦးဖြစ်ပြီး သင်ခန်းစာနှင့် ကိုယ်တိုင်လေ့လာမှုများမှတစ်ဆင့် programming ကျွမ်းကျင်မှုကို တိုးတက်အောင် လုပ်ဆောင်နေပါသည်။',
    skip: 'အကြောင်းအရာသို့ ကျော်သွားရန်',
    home: 'Thaw — ပင်မစာမျက်နှာ',
    navLabel: 'အဓိက လမ်းညွှန်မီနူး',
    navAbout: 'မိတ်ဆက်', navLearning: 'လေ့လာနေသည်', navProjects: 'ပရောဂျက်များ', navCertificates: 'လက်မှတ်များ', navContact: 'ဆက်သွယ်ရန်',
    languageLabel: 'ဘာသာစကား ရွေးချယ်ရန်',
    themeDay: 'ညဘက်အပြင်အဆင်သို့ ပြောင်းရန်', themeNight: 'နေ့ဘက်အပြင်အဆင်သို့ ပြောင်းရန်',
    eyebrow: 'IT ကျောင်းသား · Kobe၊ ဂျပန်',
    headlineFirst: 'အသုံးဝင်သော ဆော့ဖ်ဝဲ',
    headlineSecond: 'ဖန်တီးနိုင်ရန် လေ့လာနေသည်။',
    introduction: 'ကျွန်တော်က Thaw ဖြစ်ပြီး Kobe Denshi Senmon Gakkou တွင် IT ပညာသင်ယူနေသော ပထမနှစ်ကျောင်းသားပါ။ ဆော့ဖ်ဝဲဖွံ့ဖြိုးရေး အလုပ်သင်အခွင့်အလမ်းများအတွက် ပြင်ဆင်ရင်း သင်ခန်းစာနှင့် ကိုယ်တိုင်လေ့လာမှုများမှတစ်ဆင့် programming ကျွမ်းကျင်မှုကို တည်ဆောက်နေပါသည်။',
    actionContact: 'ဆက်သွယ်ရန်', actionProjects: 'ပရောဂျက်များ ကြည့်ရန်',
    opportunityNote: 'ဂျပန်နိုင်ငံရှိ ဆော့ဖ်ဝဲဖွံ့ဖြိုးရေး အလုပ်သင်အခွင့်အလမ်းများကို ရှာဖွေနေပါသည်။',
    portraitAlt: 'မျက်မှန်နှင့် အနက်ရောင် hoodie ဝတ်ထားသော Thaw ၏ အပြင်ဘက်တွင် ရိုက်ထားသည့် ဓာတ်ပုံ။',
    portraitCaption: 'ပုံတူဓာတ်ပုံ · Kobe၊ ဂျပန်',
    index: '01 — KOBE၊ ဂျပန်',
    storySection: 'ကျွန်တော့်အကြောင်း',
    storyTitle: 'အခြေခံမှစ၍ တစ်ဆင့်ချင်း လေ့လာနေသည်။',
    storyParagraphs: [
      'Kobe Denshi Senmon Gakkou တွင် IT Specialist ပညာသင်ယူနေသော ပထမနှစ်ကျောင်းသားဖြစ်ပြီး 2029 ခုနှစ်တွင် ဘွဲ့ရရန် မျှော်မှန်းထားပါသည်။ သင်ခန်းစာနှင့် ကိုယ်တိုင်လေ့လာမှုများမှတစ်ဆင့် programming ကျွမ်းကျင်မှုကို တိုးတက်အောင် လုပ်ဆောင်နေပါသည်။',
      'အသုံးဝင်သော app နှင့် website များ ဖန်တီးရန် စိတ်ဝင်စားပါသည်။ လက်တွေ့ဖွံ့ဖြိုးရေးလုပ်ငန်းများမှ သင်ယူနိုင်မည့် အခွင့်အလမ်းများကို ရှာဖွေနေရင်း အခြေခံများကို ပုံမှန်လေ့ကျင့်နေပါသည်။',
    ],
    learningSection: 'လေ့လာမှု',
    learningTitle: 'လက်ရှိ လေ့လာနေသောအရာများ',
    learningNote: 'ကျောင်းသင်ခန်းစာများနှင့် ကိုယ်တိုင်လေ့လာနေသော အကြောင်းအရာများဖြစ်ပြီး အားလုံးကို လက်ရှိ လေ့လာနေဆဲဖြစ်ပါသည်။',
    learningStatus: 'လေ့လာနေသည်',
    projectsSection: 'ပရောဂျက်များ',
    projectsTitle: 'ရွေးချယ်ထားသော လက်ရာများ',
    projectsNote: 'လေ့လာရေးဝက်ဘ်ဆိုက်နှင့် ကျွန်တော့် portfolio ဖြစ်ပါသည်။',
    projectEmptyTitle: 'ပရောဂျက်များ ပြင်ဆင်နေသည်',
    projectEmptyNote: 'ပြီးစီးသော လက်ရာများကို ရည်ရွယ်ချက်၊ အခြေအနေ၊ အသုံးပြုသည့် နည်းပညာများနှင့် ကိုယ်တိုင်ပါဝင်ခဲ့သည့် အပိုင်းများနှင့်အတူ ဖော်ပြပါမည်။',
    live: 'လွှင့်တင်ထားသည်', completed: 'ပြီးစီး', inProgress: 'လုပ်ဆောင်နေဆဲ',
    technologies: 'နည်းပညာများ', contribution: 'ပါဝင်လုပ်ဆောင်မှု', repository: 'Repository', liveSite: 'ဝက်ဘ်ဆိုက် ကြည့်ရန်',
    profileSection: 'ကိုယ်ရေးအချက်အလက်', profileTitle: 'ပညာသင်ယူနေသည့်နေရာ',
    education: 'ပညာရေး', program: 'IT Specialist ကျောင်းသား',
    expectedGraduation: 'ဘွဲ့ရရန် မျှော်မှန်းနှစ်', qualifications: 'ဘာသာစကား အရည်အချင်းများ',
    certificatesSection: 'လက်မှတ်များ', certificatesTitle: 'ရရှိထားသော လက်မှတ်များ', earnedDate: 'ရရှိသည့်နေ့', viewCertificate: 'လက်မှတ်ကြည့်ရန်',
    japanese: 'ဂျပန်ဘာသာ', english: 'အင်္ဂလိပ်ဘာသာ',
    nextChapter: 'နောက်တစ်ဆင့်', contactEyebrow: 'ဆက်သွယ်ပြောဆိုရန် ဖိတ်ခေါ်ပါသည်',
    contactTitleFirst: 'အသုံးဝင်သောအရာများ', contactTitleSecond: 'အတူတကွ ဖန်တီးကြရအောင်။',
    contactNote: 'Programming အခြေခံကို ခိုင်မာအောင် လေ့လာရင်း ဂျပန်နိုင်ငံတွင် ဆော့ဖ်ဝဲဖွံ့ဖြိုးရေး အလုပ်သင်အခွင့်အလမ်းများကို ရှာဖွေနေပါသည်။',
    github: 'GitHub ပရိုဖိုင်', signoff: 'လာရောက်ကြည့်ရှုပေးသည့်အတွက် ကျေးဇူးတင်ပါသည်။',
    footerProgram: 'IT ကျောင်းသား', backToTop: 'စာမျက်နှာထိပ်သို့ ပြန်သွားရန်',
  },
} as const

export const projects: PortfolioProject[] = [
  {
    title: { en: 'Personal Portfolio', ja: '個人ポートフォリオ', my: 'ကိုယ်ပိုင် Portfolio' },
    description: {
      en: 'A bilingual portfolio for sharing my background, studies, and projects with internship recruiters. It includes English and Japanese content and day and night themes.',
      ja: 'インターンシップ応募に向けて、プロフィールや学習内容、プロジェクトを紹介する日英バイリンガルのポートフォリオです。ライト・ナイトテーマを切り替えられます。',
      my: 'အလုပ်သင် လျှောက်ထားရာတွင် အသုံးပြုရန် ကိုယ်ရေးအချက်အလက်၊ လေ့လာမှုနှင့် ပရောဂျက်များကို မိတ်ဆက်ထားသော အင်္ဂလိပ်-ဂျပန် နှစ်ဘာသာပါ portfolio ဖြစ်ပါသည်။ နေ့ဘက်နှင့် ညဘက်အပြင်အဆင်ကို ပြောင်းလဲနိုင်ပါသည်။',
    },
    status: 'live',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Vite'],
    contribution: {
      en: 'Planned the content and visual direction, then developed the site with AI-assisted coding.',
      ja: '掲載内容とデザインの方向性を考え、AIを活用したコーディングでサイトを制作。',
      my: 'ဖော်ပြမည့်အကြောင်းအရာနှင့် ဒီဇိုင်းဦးတည်ချက်ကို စီစဉ်ပြီး AI အကူအညီဖြင့် ကုဒ်ရေးသားကာ ဝက်ဘ်ဆိုက်ကို တည်ဆောက်ခဲ့ပါသည်။',
    },
  },
  {
    title: { en: 'Yuno Study Space', ja: 'Yuno Study Space', my: 'Yuno Study Space' },
    description: {
      en: 'A live study-resource website featuring C programming notes in English and Burmese, with Japanese technical terms.',
      ja: 'C言語の学習リソースを公開しているWebサイトです。日本語の専門用語を交えた英語・ビルマ語の学習ノートを掲載しています。',
      my: 'C programming လေ့လာရန် အရင်းအမြစ်များပါဝင်သော ဝက်ဘ်ဆိုက်ဖြစ်ပြီး ဂျပန်နည်းပညာအသုံးအနှုန်းများနှင့်အတူ အင်္ဂလိပ်၊ မြန်မာဘာသာဖြင့် မှတ်စုများကို ဖော်ပြထားပါသည်။',
    },
    status: 'live',
    technologies: [],
    contribution: {
      en: 'Prepared C programming notes in English and Burmese, including Japanese technical terms.',
      ja: '日本語の専門用語を交えた、英語・ビルマ語のC言語学習ノートを作成。',
      my: 'ဂျပန်နည်းပညာအသုံးအနှုန်းများပါဝင်သော အင်္ဂလိပ်နှင့် မြန်မာဘာသာ C programming မှတ်စုများကို ပြင်ဆင်ရေးသားခဲ့ပါသည်။',
    },
    liveUrl: 'https://yunostudyhub.netlify.app/',
  },
]

export const certificates: PortfolioCertificate[] = [
  {
    title: { en: 'C Programming Ability Certification, Grade 3 (2026)', ja: 'C言語プログラミング能力認定試験 3級（2026年度）', my: 'C Programming စွမ်းရည် အသိအမှတ်ပြုလက်မှတ်၊ အဆင့် ၃ (2026)' },
    earned: { en: 'September 18, 2026', ja: '2026年9月18日', my: '2026 ခုနှစ် စက်တင်ဘာ 18 ရက်' },
    file: '/certificates/c-programming-level-3-2026.pdf',
  },
  {
    title: { en: 'Information Processing Skills Certification, Grade 3 (2026)', ja: '情報処理技術者能力認定試験 3級（2026年度）', my: 'သတင်းအချက်အလက် စီမံဆောင်ရွက်မှု စွမ်းရည် အသိအမှတ်ပြုလက်မှတ်၊ အဆင့် ၃ (2026)' },
    earned: { en: 'October 9, 2026', ja: '2026年10月9日', my: '2026 ခုနှစ် အောက်တိုဘာ 9 ရက်' },
    file: '/certificates/information-processing-level-3-2026.pdf',
  },
]

