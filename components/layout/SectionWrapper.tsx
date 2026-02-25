import { ReactNode } from "react";

type SectionWrapperProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function SectionWrapper({
  id,
  className,
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
