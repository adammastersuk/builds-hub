import Link from 'next/link';

type BuildCardProps = {
  title: string;
  description: string;
  href: string;
};

export function BuildCard({ title, description, href }: BuildCardProps) {
  return (
    <Link className="build-card" href={href}>
      <h2>{title}</h2>
      <p>{description}</p>
      <span aria-hidden="true">Open →</span>
    </Link>
  );
}
