import Link from 'next/link';

type BuildCardProps = {
  title: string;
  description: string;
  href: string;
  type: string;
  status: string;
  platform: string;
};

export function BuildCard({ title, description, href, type, status, platform }: BuildCardProps) {
  return (
    <Link className="build-card" href={href} aria-label={`Open ${title}`}>
      <div className="build-card__meta" aria-label="Project metadata">
        <span>{type}</span>
        <span>{status}</span>
        <span>{platform}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="build-card__cta" aria-hidden="true">
        Open build →
      </span>
    </Link>
  );
}
