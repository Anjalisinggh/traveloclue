"use client";

import Button from "../ui/Button";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";

export default function QuoteForm() {
  return (
    <form>
      <Input name="company" placeholder="Company" />
      <Input name="email" placeholder="Work Email" type="email" />
      <TextArea name="requirements" placeholder="Travel requirements" />
      <Button type="submit">Request Quote</Button>
    </form>
  );
}
