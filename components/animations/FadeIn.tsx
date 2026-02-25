import { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
};

export default function FadeIn({ children }: FadeInProps) {
  return <div>{children}</div>;
}
