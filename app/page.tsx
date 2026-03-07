import { BuildCard } from '@/components/BuildCard';

const MAIN_WEBSITE_URL = process.env.NEXT_PUBLIC_MAIN_WEBSITE_URL ?? 'https://adammasters.co.uk';

const builds = [
  {
    title: 'Snake',
    description: 'A refined take on the classic arcade game, complete with persistent leaderboard scoring.',
    href: '/snake',
    type: 'Game',
    status: 'Live',
    platform: 'Desktop + Mobile'
  },
  {
    title: 'Reaction Speed Test',
    description:
      'A focused reaction challenge designed to help you benchmark response time in a few quick rounds.',
    href: '/reaction-speed-test',
    type: 'Tool',
    status: 'Live',
    platform: 'Desktop + Mobile'
  }
];

export default function HomePage() {
  return (
    <main className="container">
      <a className="back-link" href={MAIN_WEBSITE_URL}>
        ← Back to main website
      </a>

      <header className="header">
        <p className="eyebrow">Builds Hub</p>
        <h1>Small projects, thoughtfully built.</h1>
        <p>
          This hub is a curated home for my interactive experiments and practical mini-builds. Each
          project is intentionally scoped, continuously improved, and easy to explore from one place.
        </p>
      </header>

      <section className="section-heading" aria-label="Builds overview">
        <h2>Explore builds</h2>
        <p>{builds.length} live projects</p>
      </section>

      <section className="build-grid" aria-label="Available builds">
        {builds.map((build) => (
          <BuildCard
            key={build.href}
            title={build.title}
            description={build.description}
            href={build.href}
            type={build.type}
            status={build.status}
            platform={build.platform}
          />
        ))}
      </section>
    </main>
  );
}
