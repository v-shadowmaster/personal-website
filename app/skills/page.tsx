import type { Metadata } from 'next';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { PageTransition } from '@/components/page-transition';
import { SocialLinks } from '@/components/social-links';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Frontend, backend, and platform toolkit, plus the core engineering principles I build by.',
};

const skillGroups = [
  {
    title: 'Frontend Development',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Docker', 'AWS', 'Vercel', 'Git', 'GitHub Actions'],
  },
];

const principles = [
  {
    title: 'First-Principles Thinking',
    description:
      'Breaking down complex problems to fundamental components, enabling innovative solutions and avoiding unnecessary complexity.',
  },
  {
    title: 'Human-AI Collaboration',
    description:
      'Leveraging AI tools to augment creativity and productivity while maintaining critical thinking and architectural decision-making.',
  },
  {
    title: 'Scalable Architecture',
    description:
      'Designing systems that grow gracefully with user needs, team size, and business requirements.',
  },
  {
    title: 'Focus on What Matters',
    description:
      'Prioritizing features and solutions that deliver real value, avoiding over-engineering and feature bloat.',
  },
];

export default function SkillsPage() {
  return (
    <PageTransition>
      <div className="relative min-h-screen px-6 py-20 sm:px-10 md:px-16 font-[family-name:var(--font-geist-sans)]">
        <ThemeToggle />
        <main className="mx-auto flex w-full max-w-4xl flex-col items-start gap-12 lg:-translate-x-8">
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="group block w-fit transition-opacity duration-300 ease-in-out hover:opacity-80 focus:opacity-80 focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <span className="text-main-heading font-bold leading-tight brand-name-spacing font-[family-name:var(--font-circularStd-Light)]">
                  VINAY KUMAR
                </span>
                <ArrowUpRight className="h-5 w-5 -translate-x-1 text-gray-600 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 dark:text-gray-400 sm:h-6 sm:w-6" />
              </div>
            </Link>
            <div className="space-y-6">
              <h1 className="text-main-heading font-bold leading-tight">
                Software Engineer - 1
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                A comprehensive toolkit built through hands-on experience and
                continuous learning, focused on creating robust, scalable
                solutions.
              </p>
            </div>
          </div>

          <div className="w-full space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {skillGroups.map((group) => (
                <div key={group.title} className="space-y-6">
                  <h2 className="text-xl font-semibold">{group.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium dark:bg-gray-800 skill-tag"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Core Principles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {principles.map((principle) => (
                  <div key={principle.title} className="space-y-4">
                    <h3 className="text-xl font-semibold">{principle.title}</h3>
                    <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <SocialLinks />
        </main>
      </div>
    </PageTransition>
  );
}
