type TestimonialCardProps = {
  name: string;
  quote: string;
};

export default function TestimonialCard({ name, quote }: TestimonialCardProps) {
  return (
    <article>
      <p>{quote}</p>
      <p>- {name}</p>
    </article>
  );
}
