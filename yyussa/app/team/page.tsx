import type { Metadata } from 'next';
import { User } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import { TEAM } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the leadership team behind YYUSSA Group Ltd — management, finance, and operations.',
};

type DepartmentKey = keyof typeof TEAM;

const departmentDescriptions: Record<DepartmentKey, string> = {
  Management: 'Guiding YYUSSA\'s vision, strategy, and long-term growth across all business units.',
  Finance: 'Ensuring financial integrity, property administration, and operational efficiency.',
  Operations: 'Driving day-to-day execution in transport, procurement, and health & safety.',
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Our Team"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Team' }]}
      />

      <div style={{ background: 'var(--color-surface-light)' }}>
        {(Object.entries(TEAM) as [DepartmentKey, typeof TEAM[DepartmentKey]][]).map(
          ([department, members], deptIndex) => (
            <section
              key={department}
              className="py-20 md:py-24"
              style={{
                background: deptIndex % 2 === 0
                  ? 'var(--color-surface-light)'
                  : 'var(--color-surface-white)',
              }}
              aria-labelledby={`dept-${department.toLowerCase()}`}
            >
              <div className="container-xl">
                <ScrollReveal direction="up">
                  <div className="mb-12">
                    <SectionLabel>Department</SectionLabel>
                    <h2
                      id={`dept-${department.toLowerCase()}`}
                      className="text-3xl md:text-4xl font-bold mt-2 mb-3"
                      style={{ letterSpacing: '-0.03em', color: 'var(--color-text-primary)' }}
                    >
                      {department}
                    </h2>
                    <p className="text-[var(--color-text-secondary)] max-w-xl">
                      {departmentDescriptions[department]}
                    </p>
                    <div
                      className="mt-4 h-px max-w-xs"
                      style={{ background: 'var(--color-border)' }}
                      aria-hidden="true"
                    />
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {members.map((member, index) => (
                    <ScrollReveal key={member.name} direction="up" delay={index * 0.07}>
                      <div className="text-center group">
                        {/* Avatar */}
                        <div
                          className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors duration-300"
                          style={{ background: 'var(--color-surface-dark)' }}
                          aria-hidden="true"
                        >
                          <User
                            size={32}
                            className="text-[var(--color-text-muted-light)] group-hover:text-[var(--color-primary)] transition-colors"
                          />
                        </div>
                        <h3
                          className="font-bold text-sm leading-tight mb-1"
                          style={{ color: 'var(--color-text-primary)' }}
                        >
                          {member.name}
                        </h3>
                        <p className="text-xs text-[var(--color-text-secondary)] leading-tight">
                          {member.title}
                        </p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </section>
          )
        )}
      </div>
    </>
  );
}
