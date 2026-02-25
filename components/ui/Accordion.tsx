"use client";

import { ReactNode, useState } from "react";

type AccordionProps = {
  title: string;
  children: ReactNode;
};

export default function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>{title}</button>
      {open && <div>{children}</div>}
    </div>
  );
}
