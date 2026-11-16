import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProject, pagedProjects } from '@/content/projects';
import { site } from '@/content/site';
import ProjectView from '@/components/ProjectView';
import ThemeToggle from '@/components/ThemeToggle';
import Reveal from '@/components/Reveal';

export function generateStaticParams() {
  return pagedProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p?.page) return {};
  return { title: `${p.title} · ${site.name}`, description: p.page.lead, openGraph: { images: [p.cover] } };
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.page) notFound();
  const i = pagedProjects.findIndex((p) => p.slug === slug);
  const next = pagedProjects.length > 1 ? pagedProjects[(i + 1) % pagedProjects.length] : undefined;

  return (
    <>
      <a className="skip-link" href="#main">
        {site.skipLink}
      </a>
      <header className="pv-bar">
        <div className="pv-bar-inner">
          <a href="/#works" className="pv-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
            {site.allWork}
          </a>
          <ThemeToggle toDark={site.themeToDark} toLight={site.themeToLight} />
        </div>
      </header>
      <ProjectView project={project} next={next} />
      <Reveal />
    </>
  );
}
