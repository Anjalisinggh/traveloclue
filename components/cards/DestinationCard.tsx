type DestinationCardProps = {
  name: string;
  description: string;
};

export default function DestinationCard({ name, description }: DestinationCardProps) {
  return (
    <article>
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  );
}
