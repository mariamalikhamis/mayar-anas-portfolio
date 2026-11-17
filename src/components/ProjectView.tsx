import type React from 'react';
import { img, type Project, type Shot } from '@/content/projects';
import { site } from '@/content/site';

function Figure({ s }: { s: Shot }) {
  // Justified layout: each figure grows in proportion to its aspect ratio,
  // so images in the same row share one height and are never cropped or letterboxed.
  const r = s.w / s.h;
  return (
    <figure className={s.wide ? 'pv-fig is-wide' : 'pv-fig'} style={{ ['--r' as string]: r.toFixed(4) } as React.CSSProperties}>
      <img src={img(s.src)} alt={s.alt} width={s.w} height={s.h} loading="lazy" decoding="async" />
      {s.caption ? <figcaption>{s.caption}</figcaption> : null}
    </figure>
  );
}

/** A full project page, built from the `page` data in content/projects.ts */
export default function ProjectView({ project, next }: { project: Project; next?: Project }) {
  const p = project.page!;
  return (
    <main id="main" className="pv">
      {/* Hero */}
      <section className="pv-hero" data-reveal>
        <div className="tags">
          {p.tags.map((t, i) => (
            <span key={t} className={i === 0 ? 'tag tag-market' : 'tag'}>
              {t}
            </span>
          ))}
        </div>
        <h1 className="pv-title">{project.title}</h1>
        <p className="pv-lead">{p.lead}</p>
        <dl className="pv-facts">
          {p.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
        <img className="pv-cover" src={img(project.cover)} alt={project.coverAlt} width={project.coverSize[0]} height={project.coverSize[1]} />
      </section>

      {/* Role */}
      {p.role ? (
        <section id="role" className="pv-role" data-reveal>
          <div className="pv-role-head">
            <span className="eyebrow">My role</span>
            <span className="pv-role-title">{p.role.title}</span>
          </div>
          <div className="pv-role-body">
            <p>{p.role.text}</p>
            <div className="pv-chips">
              {p.role.chips.map((c) => (
                <span key={c} className="pv-chip">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Sections */}
      {p.sections.map((s, idx) => {
        const head = (
          <header className="section-head pv-head">
            <span className="eyebrow">{s.eyebrow}</span>
            <h2 className="h2">{s.title}</h2>
            {s.text ? <p className="sub">{s.text}</p> : null}
            {s.chips ? (
              <div className="pv-chips">
                {s.chips.map((c) => (
                  <span key={c} className="pv-chip">
                    {c}
                  </span>
                ))}
              </div>
            ) : null}
          </header>
        );
        const shots = s.shots?.length ? (
          <div className={s.shots.length === 1 ? 'pv-grid is-single' : 'pv-grid'}>
            {s.shots.map((sh) => (
              <Figure key={sh.src} s={sh} />
            ))}
          </div>
        ) : null;
        return (
          <section key={s.eyebrow} id={`sec-${idx + 1}`} className={s.layout === 'split' ? 'pv-section is-split' : 'pv-section'} data-reveal>
            {head}
            {shots}
            {s.cards ? (
              <div className="pv-cards">
                {s.cards.map((c) => (
                  <div key={c.title} className="tile">
                    <span className="tile-title">{c.title}</span>
                    <span className="tile-body">{c.body}</span>
                  </div>
                ))}
              </div>
            ) : null}
            {s.lists ? (
              <div className="pv-lists">
                {(() => {
                  let n = 0;
                  return s.lists.map((l) => (
                    <div key={l.title} className="pv-list">
                      <span className="pv-list-title">{l.title}</span>
                      <ol>
                        {l.items.map((it) => {
                          n += 1;
                          return (
                            <li key={it.title}>
                              <span className="pv-n">{String(n).padStart(2, '0')}</span>
                              <span>
                                <span className="pv-item-title">{it.title}</span>
                                <span className="pv-item-body">{it.body}</span>
                              </span>
                            </li>
                          );
                        })}
                      </ol>
                    </div>
                  ));
                })()}
              </div>
            ) : null}
          </section>
        );
      })}

      {/* Numbers */}
      <section className="pv-numbers" data-reveal style={{ gridTemplateColumns: `repeat(${p.numbers.length}, minmax(0, 1fr))` }}>
        {p.numbers.map((n) => (
          <div key={n.label}>
            <span className="pv-num">{n.value}</span>
            <span className="pv-num-label">{n.label}</span>
          </div>
        ))}
      </section>

      {next ? (
        <a className="pv-next" href={`/work/${next.slug}`}>
          <span>
            <span className="pv-next-label">{site.nextProject}</span>
            <span className="pv-next-title">{next.title}</span>
          </span>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      ) : null}
    </main>
  );
}
