import { Metadata } from "next";

type DestinationPageProps = {
  params: { slug: string };
};

export function generateMetadata({ params }: DestinationPageProps): Metadata {
  const title = `${params.slug} | Traveloclue`;
  return {
    title,
    description: `Explore ${params.slug} with Traveloclue.`,
  };
}

export default function DestinationSlugPage({ params }: DestinationPageProps) {
  return (
    <main>
      <h1>Destination: {params.slug}</h1>
    </main>
  );
}
