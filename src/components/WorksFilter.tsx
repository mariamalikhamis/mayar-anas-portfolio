'use client';

import { useMemo, useState } from 'react';
import type React from 'react';
import { categories, type Category, type Project } from '@/content/projects';
import ProjectCard from './ProjectCard';

/** Category tabs above the project grid. Only categories that have projects are shown. */
export default function WorksFilter({ projects, labels }: { projects: Project[]; labels: { all: string; aria: string; view: string } }) {
  const [filter, setFilter] = useState<'all' | Category>('all');
  const options = useMemo(
    () => (Object.keys(categories) as Category[]).map((c) => [c, projects.filter((p) => p.cat === c).length] as const).filter(([, n]) => n > 0),
    [projects],
  );
  const shown = filter === 'all' ? projects : projects.filter((p) => p.cat === filter);

  return (
    <div className="works-wrap">
      <div className="filters" role="group" aria-label={labels.aria}>
        <button type="button" className="filter" aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
          {labels.all}
          <span className="filter-n">{projects.length}</span>
        </button>
        {options.map(([c, n]) => (
          <button key={c} type="button" className="filter" aria-pressed={filter === c} onClick={() => setFilter(c)}>
            {categories[c]}
            <span className="filter-n">{n}</span>
          </button>
        ))}
      </div>
      <div className="works" key={filter}>
        {shown.map((p, i) => (
          <div key={p.slug} className="work-item" style={{ animationDelay: `${Math.min(i, 6) * 50}ms`, ['--r' as string]: (p.coverSize[0] / p.coverSize[1]).toFixed(4) } as React.CSSProperties}>
            <ProjectCard project={p} eager={i < 2} ctaLabel={labels.view} />
          </div>
        ))}
      </div>
    </div>
  );
}
