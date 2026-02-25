export function generateSlug(text: string) {
  return text.toLowerCase().replace(/\s+/g, "-");
}
