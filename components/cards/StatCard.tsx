type StatCardProps = {
  label: string;
  value: string;
};

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <article>
      <h3>{value}</h3>
      <p>{label}</p>
    </article>
  );
}
