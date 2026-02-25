import { ReactNode } from "react";

type SlideUpProps = {
  children: ReactNode;
};

export default function SlideUp({ children }: SlideUpProps) {
  return <div>{children}</div>;
}
