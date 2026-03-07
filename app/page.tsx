import { BuildCard } from '@/components/BuildCard';

const builds = [
  {
    title: 'Snake',
    description: 'Classic snake game with leaderboard',
    href: '/snake'
  },
  {
    title: 'Reaction Speed Test',
    description: 'Measure your reaction time',
    href: '/reaction-speed-test'
  }
];

export default function HomePage() {
  return (
    <main className="container">
      <header className="header">
        <h1>Builds</h1>
        <p>
          A central place for experimental micro-builds. Each project runs as its own deployment
          while staying discoverable from one consistent URL.
        </p>
      </header>

      <section className="build-grid" aria-label="Available builds">
        {builds.map((build) => (
          <BuildCard
            key={build.href}
            title={build.title}
            description={build.description}
            href={build.href}
          />
        ))}
      </section>
    </main>
  );
}
