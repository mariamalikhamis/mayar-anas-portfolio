import type { Project } from '@/content/projects';

export default function ProjectCard({ project, eager, ctaLabel }: { project: Project; eager?: boolean; ctaLabel: string }) {
  const href = project.page ? `/work/${project.slug}` : undefined;
  const inner = (
    <>
      <div className="card-media" style={{ aspectRatio: `${project.coverSize[0]} / ${project.coverSize[1]}` }}>
        <img src={project.cover} alt={project.coverAlt} width={project.coverSize[0]} height={project.coverSize[1]} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      </div>
      <div className="card-body">
        <div className="tags">
          <span className="tag tag-market">{project.type}</span>
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
        <h3 className="card-title">{project.title}</h3>
        <p className="card-q">{project.desc}</p>
        {href ? (
          <span className="card-cta">
            {ctaLabel}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        ) : null}
      </div>
    </>
  );
  return (
    <article className={href ? 'card is-link' : 'card'}>
      {href ? (
        <a className="card-link" href={href}>
          {inner}
        </a>
      ) : (
        inner
      )}
    </article>
  );
}
