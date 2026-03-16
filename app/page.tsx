import Header from "./src/components/Header";
import Hero from "./src/components/Hero";
import SectionIntro from "./src/components/SectionIntro";
import { User, Compass, Mail } from "lucide-react";


export default function Home() {
  return (
    <main className="bg-(--surface) text-(--text)">
      <Header />
      <Hero />

      <SectionIntro
        id="o-mnie"
        label="O mnie"
        title="Kim jestem?"
        description="Wierzę, że Polska może być krajem wolnych i odpowiedzialnych ludzi. Dlatego angażuję się w działalność publiczną i wspieram rozwiązania, które dają obywatelom więcej wolności, mniej biurokracji i większy wpływ na własne życie."
        buttonText="Więcej"
        href="/o-mnie"
        icon={<User size={22} strokeWidth={2} />}
        muted
      />

      <SectionIntro
        id="wartosci"
        label="Wartości"
        title="Wolność, odpowiedzialność, rozwój"
        description="W centrum mojej działalności jest wolność obywateli i silna gospodarka oparta na przedsiębiorczości. Popieram niższe podatki, prostsze prawo i państwo, które nie przeszkadza ludziom w pracy i realizowaniu własnych pomysłów."
        buttonText="Więcej"
        icon={<Compass size={22} strokeWidth={2} />}
        href="/wartosci"
      />

      <SectionIntro
        id="kontakt"
        label="Kontakt"
        title="Pozostańmy w kontakcie!"
        description="Masz pytanie, propozycję współpracy lub chcesz podzielić się swoją opinią? Skontaktuj się bezpośrednio."
        buttonText="Więcej"
        icon={<Mail size={22} strokeWidth={2} />}
        href="/kontakt"
      />
    </main>
  );
}