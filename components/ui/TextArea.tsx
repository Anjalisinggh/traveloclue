import { TextareaHTMLAttributes } from "react";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextArea(props: TextAreaProps) {
  return <textarea {...props} className={props.className} />;
}
