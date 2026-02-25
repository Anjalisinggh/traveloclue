"use client";

import Button from "../ui/Button";
import Input from "../ui/Input";

export default function NewsletterForm() {
  return (
    <form>
      <Input name="email" placeholder="Enter your email" type="email" />
      <Button type="submit">Subscribe</Button>
    </form>
  );
}
