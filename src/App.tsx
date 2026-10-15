import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { certificates, copy, portfolio, projects, type Language } from './content'
import { motionTokens } from './motion-tokens'

type Theme = 'day' | 'night'

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'day'
    try {
      const saved = window.localStorage.getItem('portfolio-theme')
      if (saved === 'day' || saved === 'night') return saved
    } catch { /* Use the system preference when storage is unavailable. */ }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
  })
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en'
    try {
      const saved = window.localStorage.getItem('portfolio-language')
      if (saved === 'en' || saved === 'ja' || saved === 'my') return saved
    } catch { /* English remains the default for this visit. */ }
    return 'en'
  })
  const [themeTransition, setThemeTransition] = useState<{ from: Theme; to: Theme } | null>(null)
  const text = copy[language]
  const prefersReducedMotion = useReducedMotion() ?? false

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.lang = language
    document.title = text.documentTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', text.metaDescription)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', text.documentTitle)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', text.metaDescription)
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', language === 'ja' ? 'ja_JP' : language === 'my' ? 'my_MM' : 'en_US')
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', text.documentTitle)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', text.metaDescription)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'night' ? '#272923' : '#f4f0e8')
  }, [language, text.documentTitle, text.metaDescription, theme])

  const toggleTheme = () => {
    const next = theme === 'day' ? 'night' : 'day'
    if (!prefersReducedMotion) {
      setThemeTransition({ from: theme, to: next })
      window.setTimeout(() => setThemeTransition(null), motionTokens.duration.dayNight * 1000)
    }
    setTheme(next)
    try { window.localStorage.setItem('portfolio-theme', next) } catch { /* Keep the selection for this visit. */ }
  }
  const chooseLanguage = (next: Language) => {
    setLanguage(next)
    try { window.localStorage.setItem('portfolio-language', next) } catch { /* Keep the selection for this visit. */ }
  }

  const reveal = prefersReducedMotion
    ? { initial: false, whileInView: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: motionTokens.distance.sm }, whileInView: { opacity: 1, y: 0 } }

  return (
    <>
    <div className="site-shell" data-theme={theme}>
      <a className="skip-link" href="#main">{text.skip}</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={text.home}>{portfolio.name}<span>.</span></a>
        <nav className="main-nav" aria-label={text.navLabel}>
          <a href="#about">{text.navAbout}</a><a href="#learning">{text.navLearning}</a><a href="#projects">{text.navProjects}</a><a href="#certificates">{text.navCertificates}</a><a href="#contact">{text.navContact}</a>
        </nav>
        <div className="header-controls">
          <div className="language-switch" role="group" aria-label={text.languageLabel}>
            <button type="button" onClick={() => chooseLanguage('en')} aria-pressed={language === 'en'} lang="en">EN</button>
            <span aria-hidden="true">/</span>
            <button type="button" onClick={() => chooseLanguage('ja')} aria-pressed={language === 'ja'} lang="ja">日本語</button>
            <span aria-hidden="true">/</span>
            <button type="button" onClick={() => chooseLanguage('my')} aria-pressed={language === 'my'} lang="my">မြန်မာ</button>
          </div>
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={theme === 'day' ? text.themeNight : text.themeDay} aria-pressed={theme === 'night'} disabled={Boolean(themeTransition)}>
            <span className="theme-icon" aria-hidden="true"><AnimatePresence mode="wait" initial={false}><motion.svg key={theme} viewBox="0 0 24 24" initial={prefersReducedMotion ? false : { opacity: 0, rotate: -35, scale: 0.72 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: 35, scale: 0.72 }} transition={{ duration: prefersReducedMotion ? motionTokens.duration.fast : motionTokens.duration.normal, ease: motionTokens.easing.smooth }}>{theme === 'day' ? <><circle cx="12" cy="12" r="4" fill="currentColor" /><path d="M12 1.75v2.1m0 16.3v2.1m10.25-10.25h-2.1m-16.3 0h-2.1m17.5-7.25-1.49 1.49M6.24 17.76l-1.49 1.49m14.5 0-1.49-1.49M6.24 6.24 4.75 4.75" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></> : <path d="M20.2 15.2A8.6 8.6 0 0 1 8.8 3.8 8.8 8.8 0 1 0 20.2 15.2Z" fill="currentColor" />}</motion.svg></AnimatePresence></span><span>{theme === 'day' ? (language === 'ja' ? '夜' : language === 'my' ? 'ည' : 'Night') : (language === 'ja' ? '昼' : language === 'my' ? 'နေ့' : 'Day')}</span>
          </button>
        </div>
      </header>

      <main id="main">
        <section className="intro section-wrap" id="top" aria-labelledby="intro-title">
          <motion.div className="intro-copy" initial={prefersReducedMotion ? false : { opacity: 0, y: motionTokens.distance.md }} animate={{ opacity: 1, y: 0 }} transition={{ duration: motionTokens.duration.normal, ease: motionTokens.easing.smooth }}>
            <p className="eyebrow"><span className="eyebrow-rule" /> {text.eyebrow}</p>
            <h1 id="intro-title">{text.headlineFirst}<br /><em>{text.headlineSecond}</em></h1>
            <p className="intro-lede">{text.introduction}</p>
            <div className="intro-actions"><a className="button button-primary" href="#contact">{text.actionContact}<span aria-hidden="true">↗</span></a><a className="underlined-link" href="#projects">{text.actionProjects}<span aria-hidden="true">↓</span></a></div>
            <p className="intro-note">{text.opportunityNote}</p>
          </motion.div>
          <figure className="portrait-frame">
            <div className="portrait-art"><img className="portrait-image" src="/images/thaw-profile.jpg" alt={text.portraitAlt} width="1080" height="1080" fetchPriority="high" decoding="async" /></div>
            <figcaption className="portrait-caption"><span>{text.portraitCaption}</span></figcaption>
          </figure>
          <span className="intro-index" aria-hidden="true">{text.index}</span>
        </section>

        <motion.section className="story section-wrap section-rule" id="about" aria-labelledby="about-title" {...reveal} viewport={{ once: true, margin: '-70px' }} transition={{ duration: motionTokens.duration.normal, ease: motionTokens.easing.smooth }}>
          <div className="section-label"><span>01</span><span>{text.storySection}</span></div>
          <div className="story-content"><h2 id="about-title">{text.storyTitle}</h2><div className="story-copy">{text.storyParagraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></div>
        </motion.section>

        <motion.section className="learning section-wrap section-rule" id="learning" aria-labelledby="learning-title" {...reveal} viewport={{ once: true, margin: '-70px' }} transition={{ duration: motionTokens.duration.normal, ease: motionTokens.easing.smooth }}>
          <div className="section-label"><span>02</span><span>{text.learningSection}</span></div>
          <div className="learning-content"><div className="learning-heading"><h2 id="learning-title">{text.learningTitle}</h2><p>{text.learningNote}</p></div>
            <ul className="learning-list">{portfolio.learning.map(item => <li key={item.en}><span className="learning-icon" aria-hidden="true">{item.logo ? <img src={`/icons/${item.logo}.svg`} alt="" /> : item.symbol}</span><span className="learning-name">{item[language]}</span></li>)}</ul>
          </div>
        </motion.section>

        <motion.section className="projects section-wrap section-rule" id="projects" aria-labelledby="projects-title" {...reveal} viewport={{ once: true, margin: '-70px' }} transition={{ duration: motionTokens.duration.normal, ease: motionTokens.easing.smooth }}>
          <div className="section-label"><span>03</span><span>{text.projectsSection}</span></div>
          <div className="projects-content"><div className="learning-heading"><h2 id="projects-title">{text.projectsTitle}</h2><p>{text.projectsNote}</p></div>
            {projects.length > 0 ? <div className="project-list">{projects.map(project => <article className="project-item" key={project.liveUrl ?? project.title.en}>
              <div className="project-item-heading"><h3>{project.title[language]}</h3><span className={`project-status project-status-${project.status}`}>{project.status === 'live' ? text.live : project.status === 'completed' ? text.completed : text.inProgress}</span></div><p>{project.description[language]}</p>
              {project.technologies.length > 0 && <p className="project-meta"><strong>{text.technologies}:</strong> {project.technologies.join(' · ')}</p>}
              {project.contribution && <p className="project-meta"><strong>{text.contribution}:</strong> {project.contribution[language]}</p>}
              <div className="project-links">{project.repositoryUrl && <a href={project.repositoryUrl}>{text.repository}<span aria-hidden="true">↗</span></a>}{project.liveUrl && <a href={project.liveUrl}>{text.liveSite}<span aria-hidden="true">↗</span></a>}</div>
            </article>)}</div> : <div className="project-empty"><span className="empty-mark" aria-hidden="true">＋</span><div><h3>{text.projectEmptyTitle}</h3><p>{text.projectEmptyNote}</p></div></div>}
          </div>
        </motion.section>

        <motion.section className="profile section-wrap section-rule" aria-labelledby="profile-title" {...reveal} viewport={{ once: true, margin: '-70px' }} transition={{ duration: motionTokens.duration.normal, ease: motionTokens.easing.smooth }}>
          <div className="section-label"><span>04</span><span>{text.profileSection}</span></div>
          <div className="profile-content"><h2 id="profile-title">{text.profileTitle}</h2><div className="profile-grid">
            <article className="profile-block"><p className="profile-kicker">{text.education}</p><h3>{language === 'ja' ? '神戸電子専門学校' : language === 'my' ? 'Kobe Denshi Senmon Gakkou' : portfolio.school}</h3><p>{text.program}</p><p className="profile-detail">{text.expectedGraduation}<strong>{portfolio.graduationYear}</strong></p></article>
            <article className="profile-block"><p className="profile-kicker">{text.qualifications}</p><div className="qualification"><span>{text.japanese}</span><strong>JLPT N2</strong></div><div className="qualification"><span>{text.english}</span><strong>TOEIC 850</strong></div></article>
          </div></div>
        </motion.section>

        <motion.section className="certificates section-wrap section-rule" id="certificates" aria-labelledby="certificates-title" {...reveal} viewport={{ once: true, margin: '-70px' }} transition={{ duration: motionTokens.duration.normal, ease: motionTokens.easing.smooth }}>
          <div className="section-label"><span>05</span><span>{text.certificatesSection}</span></div>
          <div className="certificates-content"><h2 id="certificates-title">{text.certificatesTitle}</h2><div className="certificate-list">{certificates.map(certificate => <article className="certificate-item" key={certificate.file}>
            <div><h3>{certificate.title[language]}</h3><p>{text.earnedDate} · {certificate.earned[language]}</p></div>
            <a href={certificate.file} target="_blank" rel="noreferrer">{text.viewCertificate}<span aria-hidden="true">↗</span></a>
          </article>)}</div></div>
        </motion.section>

        <section className="contact section-wrap" id="contact" aria-labelledby="contact-title">
          <div className="section-label"><span>06</span><span>{text.nextChapter}</span></div>
          <div className="contact-content"><div><p className="eyebrow">{text.contactEyebrow}</p><h2 id="contact-title">{text.contactTitleFirst}<br /><em>{text.contactTitleSecond}</em></h2></div>
            <div className="contact-aside"><p>{text.contactNote}</p><a className="contact-email" href={`mailto:${portfolio.email}`}>{portfolio.email}<span aria-hidden="true">↗</span></a>{portfolio.githubUrl && <a className="github-link" href={portfolio.githubUrl} target="_blank" rel="noreferrer">{text.github}<span aria-hidden="true">↗</span></a>}</div>
          </div><p className="contact-signoff">{text.signoff}</p>
        </section>
      </main>
      <footer className="site-footer section-wrap"><a className="footer-name" href="#top">{portfolio.name}<span>.</span></a><span>{text.footerProgram} · {language === 'ja' ? '神戸、日本' : language === 'my' ? 'Kobe၊ ဂျပန်' : portfolio.location}</span><span>© {new Date().getFullYear()}</span></footer>
    </div>
    <AnimatePresence>
      {themeTransition && !prefersReducedMotion && <motion.div className="celestial-transition" key={`${themeTransition.from}-${themeTransition.to}`} aria-hidden="true" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: motionTokens.duration.fast }}>
        <div className="celestial-horizon" />
        <motion.svg className="celestial-sun" viewBox="0 0 100 100" initial={{ y: themeTransition.to === 'night' ? '-70vh' : '70vh', x: '-8vw', rotate: -24, scale: 0.74, opacity: 0 }} animate={{ y: themeTransition.to === 'night' ? '70vh' : '-70vh', x: '8vw', rotate: 24, scale: 1, opacity: [0, 1, 1, 0] }} transition={{ duration: motionTokens.duration.dayNight, ease: motionTokens.easing.smooth, times: [0, 0.14, 0.78, 1] }}>
          <g stroke="currentColor" strokeWidth="5" strokeLinecap="round"><path d="M50 3v15m0 64v15M3 50h15m64 0h15M16.8 16.8l10.6 10.6m45.2 45.2 10.6 10.6m0-66.4L72.6 27.4m-45.2 45.2L16.8 83.2" /></g><circle cx="50" cy="50" r="25" fill="currentColor" />
        </motion.svg>
        <motion.svg className="celestial-moon" viewBox="0 0 80 80" initial={{ y: themeTransition.to === 'night' ? '70vh' : '-70vh', x: '8vw', rotate: 24, scale: 0.74, opacity: 0 }} animate={{ y: themeTransition.to === 'night' ? '-70vh' : '70vh', x: '-8vw', rotate: -24, scale: 1, opacity: [0, 1, 1, 0] }} transition={{ duration: motionTokens.duration.dayNight, ease: motionTokens.easing.smooth, times: [0, 0.14, 0.78, 1] }}>
          <path d="M67 52A31 31 0 0 1 28 13a31 31 0 1 0 39 39Z" fill="currentColor" />
        </motion.svg>
      </motion.div>}
    </AnimatePresence>
    </>
  )
}

export default App

