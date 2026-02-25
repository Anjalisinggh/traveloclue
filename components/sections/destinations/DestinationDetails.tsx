type DestinationDetailsProps = {
  name: string;
  description: string;
};

export default function DestinationDetails({
  name,
  description,
}: DestinationDetailsProps) {
  return (
    <section>
      <h1>{name}</h1>
      <p>{description}</p>
    </section>
  );
}
