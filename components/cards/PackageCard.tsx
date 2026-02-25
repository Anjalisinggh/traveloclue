type PackageCardProps = {
  name: string;
  price: string;
};

export default function PackageCard({ name, price }: PackageCardProps) {
  return (
    <article>
      <h3>{name}</h3>
      <p>{price}</p>
    </article>
  );
}
