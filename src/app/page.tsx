import type React from 'react';
import { links, site as t } from '@/content/site';
import { projects } from '@/content/projects';
import WorksFilter from '@/components/WorksFilter';
import ThemeToggle from '@/components/ThemeToggle';
import Reveal from '@/components/Reveal';
import PageRail from '@/components/PageRail';
import SideIndex from '@/components/SideIndex';
import { BehanceIcon, CheckIcon, DownloadIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from '@/components/Icons';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipLink}
      </a>
      <div className="shell">
        {/* ───────────── Sidebar ───────────── */}
        <aside className="sidebar">
          <div className="id-row">
            <div className="id">
              <div className="avatar">
                <img src="/media/avatar.webp" alt={t.photoAlt} width={60} height={60} />
              </div>
              <div>
                <div className="id-name">{t.name}</div>
                <div className="id-role">{t.role}</div>
              </div>
            </div>
            <div className="icon-row">
              <a className="icon-btn" href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a className="icon-btn" href={links.behance} target="_blank" rel="noopener noreferrer" aria-label="Behance">
                <BehanceIcon />
              </a>
            </div>
          </div>
          <SideIndex title={t.railTitle} label={t.navAria} items={t.nav} />

          <h1 className="headline">
            {t.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="intro">{t.intro}</p>

          <div className="cta-row">
            <a className="btn btn-primary" href={links.whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              {t.ctaWhatsapp}
            </a>
            <a className="btn btn-secondary" href={links.cv} download="Mayar_Anas_CV.pdf">
              <DownloadIcon />
              {t.ctaCv}
            </a>
          </div>

          <ul className="proof">
            {t.proof.map((p) => (
              <li key={p}>
                <CheckIcon />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="sidebar-foot">
            <ThemeToggle toDark={t.themeToDark} toLight={t.themeToLight} />
          </div>
        </aside>

        {/* ───────────── Content ───────────── */}
        <main id="main" className="content">
          <div className="content-inner">
            <section id="works" className="section" data-reveal>
              <header className="section-head">
                <span className="eyebrow">{t.worksEyebrow}</span>
                <h2 className="h2">{t.worksTitle}</h2>
                <p className="sub">{t.worksSub}</p>
              </header>
              <WorksFilter projects={projects} labels={{ all: t.filterAll, aria: t.filterAria, view: t.viewProject }} />
            </section>

            <section id="about" className="section about" data-reveal>
              <div className="about-side">
                <header className="section-head">
                  <span className="eyebrow">{t.aboutEyebrow}</span>
                  <h2 className="h2">{t.aboutTitle}</h2>
                </header>
                <figure className="about-photo">
                  <img src="/media/paris.webp" alt={t.parisAlt} width={536} height={960} loading="lazy" />
                  <figcaption>{t.parisCaption}</figcaption>
                </figure>
              </div>
              <div className="about-text">
                {t.about.map((p) => (
                  <p key={p.slice(0, 20)}>{p}</p>
                ))}
              </div>
            </section>

            <section className="section" data-reveal>
              <header className="section-head">
                <span className="eyebrow">{t.expertiseEyebrow}</span>
                <h2 className="h2">{t.expertiseTitle}</h2>
              </header>
              <div className="tiles tiles-4">
                {t.expertise.map((e, i) => (
                  <div key={e.title} className="tile">
                    <span className="tile-n">{String(i + 1).padStart(2, '0')}</span>
                    <span className="tile-title">{e.title}</span>
                    <span className="tile-body">{e.body}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="process" className="section" data-reveal>
              <header className="section-head">
                <span className="eyebrow">{t.processEyebrow}</span>
                <h2 className="h2">{t.processTitle}</h2>
              </header>
              <ol className="steps">
                {t.process.map((s) => (
                  <li key={s.n} className="step">
                    <span className="step-n">{s.n}</span>
                    <span className="step-title">{s.title}</span>
                    <span className="step-body">{s.body}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section id="experience" className="section" data-reveal>
              <header className="section-head">
                <span className="eyebrow">{t.expEyebrow}</span>
                <h2 className="h2">{t.expTitle}</h2>
              </header>
              <ol className="tl" data-reveal style={{ '--n': t.exp.length } as React.CSSProperties}>
                {t.exp.map((x, i) => (
                  <li key={x.org} className={x.now ? 'tl-item is-now' : 'tl-item'} style={{ '--i': t.exp.length - 1 - i } as React.CSSProperties}>
                    <span className="tl-when">
                      {x.when}
                      {x.now ? <span className="tl-now">{t.nowTag}</span> : null}
                    </span>
                    <span className="tl-title">{x.role}</span>
                    <span className="tl-org">{x.org}</span>
                    <span className="tl-body">{x.body}</span>
                    <span className="tl-tags">
                      {x.tags.map((g) => (
                        <span key={g} className="tag">
                          {g}
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ol>
              <div className="software">
                <span className="software-title">{t.softwareTitle}</span>
                {t.software.map((s) => (
                  <span key={s} className="software-chip">
                    {s}
                  </span>
                ))}
              </div>
            </section>

            <section id="contact" className="contact" data-reveal>
              <h2>{t.contactTitle}</h2>
              <div className="cta-row">
                <a className="btn btn-primary" href={links.whatsapp} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  {t.ctaWhatsapp}
                </a>
                <a className="btn btn-ghost-inverse" href={`mailto:${links.email}`}>
                  <MailIcon />
                  {links.email}
                </a>
                <a className="btn btn-ghost-inverse" href={links.cv} download="Mayar_Anas_CV.pdf">
                  <DownloadIcon />
                  {t.ctaCv}
                </a>
              </div>
            </section>

            <Reveal />
            <footer className="footer">
              <span>{t.footer}</span>
              <a href="#main">{t.backTop}</a>
            </footer>
          </div>
        </main>
      </div>
      <PageRail
        items={t.nav}
        labels={{ aria: t.navAria, open: t.railOpen, close: t.railClose, title: t.railTitle }}
        footer={<ThemeToggle toDark={t.themeToDark} toLight={t.themeToLight} />}
      />
    </>
  );
}
