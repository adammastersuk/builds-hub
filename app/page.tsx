import { BuildCard } from '@/components/BuildCard';

const MAIN_WEBSITE_URL = process.env.NEXT_PUBLIC_MAIN_WEBSITE_URL ?? 'https://adammasters.co.uk';

type Build = {
  title: string;
  description: string;
  href: string;
  type: string;
  status: string;
  platform: string;
  ctaLabel?: string;
};

const builds: Build[] = [
  {
    title: 'Aim Trainer',
    description:
      'A fast browser-based aim test focused on accuracy, reaction time, and consistency over a 30-second run.',
    href: '/aim-trainer',
    type: 'Game',
    status: 'Live',
    platform: 'Desktop + Mobile',
    ctaLabel: 'Play now'
  },
  {
    title: 'Reaction Speed Test',
    description:
      'A focused reaction challenge designed to help you benchmark response time in a few quick rounds.',
    href: '/reaction-speed-test',
    type: 'Tool',
    status: 'Live',
    platform: 'Desktop + Mobile',
    ctaLabel: 'Play now'
  },
  {
    title: 'Snake',
    description: 'A refined take on the classic arcade game, complete with persistent leaderboard scoring.',
    href: '/snake',
    type: 'Game',
    status: 'Live',
    platform: 'Desktop + Mobile',
    ctaLabel: 'Play now'
  },
  {
    title: 'Bulk Image Resizer',
    description:
      'A practical ecommerce image tool for fast batch resizing with presets, crop/fill modes, and export controls. Built to speed up repetitive product image preparation workflows.',
    href: 'https://bulk-image-resizer-mu.vercel.app/',
    type: 'Tool',
    status: 'Live',
    platform: 'Desktop + Mobile',
    ctaLabel: 'Open tool'
  }
];

export default function HomePage() {
  return (
    <main className="container">
      <a className="back-link" href={MAIN_WEBSITE_URL}>
        ← Back to main site
      </a>

      <header className="header">
        <p className="eyebrow">Builds Hub</p>
        <h1>Small projects, thoughtfully built.</h1>
        <p>
          A curated home for my interactive experiments and practical mini-builds. Every project is
          intentionally scoped, continuously improved, and quick to jump into.
        </p>
      </header>

      <section className="section-heading" aria-label="Builds overview">
        <h2>Explore builds</h2>
        <p>{builds.length} live projects</p>
      </section>

      <section className="build-grid" aria-label="Available builds">
        {builds.map((build) => (
          <BuildCard key={build.href} {...build} />
        ))}
      </section>
    </main>
  );
}
