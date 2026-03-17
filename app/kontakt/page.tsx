import ContactForm from "../src/components/ContactForm";
import ContactInfo from "../src/components/ContactInfo";
import ContactIntro from "../src/components/ContactIntro";

export default function ContactPage() {
  return (
    <main className="bg-(--surface) text-(--text)">
      <ContactIntro />
      <ContactInfo />
      <ContactForm />
    </main>
  );
}