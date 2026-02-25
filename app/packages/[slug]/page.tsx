import { Metadata } from "next";

type PackagePageProps = {
  params: { slug: string };
};

export function generateMetadata({ params }: PackagePageProps): Metadata {
  const title = `${params.slug} Package | Traveloclue`;
  return {
    title,
    description: `Discover the ${params.slug} travel package with Traveloclue.`,
  };
}

export default function PackageSlugPage({ params }: PackagePageProps) {
  return (
    <main>
      <h1>Package: {params.slug}</h1>
    </main>
  );
}
