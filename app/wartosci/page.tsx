import ValuesGrid from "../src/components/ValuesGrid";
import ValuesHero from "../src/components/ValuesHero";
import ValuesSection from "../src/components/ValuesSection";

export default function ValuesPage() {
  return (
    <main className="bg-(--surface) text-(--text)">
      <ValuesHero />
      <ValuesGrid />

      <ValuesSection
        eyebrow="Gospodarka i przedsiębiorczość"
        title="Szacunek dla pracy, inicjatywy i odpowiedzialności"
        descriptionOne="Jako przedsiębiorca dobrze wiem, jak wiele wysiłku kosztuje prowadzenie własnej działalności. Dlatego bliskie są mi rozwiązania, które upraszczają prawo, ograniczają zbędną biurokrację i pozwalają ludziom spokojnie pracować oraz rozwijać swoje firmy."
        descriptionTwo="Uważam, że państwo nie powinno przeszkadzać obywatelom w codziennym życiu i działalności zawodowej. Potrzebujemy prostszych zasad, większej przewidywalności i większego szacunku dla tych, którzy biorą odpowiedzialność za siebie, swoje rodziny i swoje miejsca pracy."
        muted
      />

      <ValuesSection
        eyebrow="Rodzina, edukacja i bezpieczeństwo"
        title="Przyszłość trzeba budować odpowiedzialnie"
        descriptionOne="Jako mama patrzę na wiele spraw z perspektywy przyszłości dzieci i rodzin. Zależy mi na świecie, w którym kolejne pokolenie może dorastać bezpiecznie, w stabilnym otoczeniu i w oparciu o wartości, które dają poczucie ładu i sensu."
        descriptionTwo="Niepokoją mnie kierunki zmian, które osłabiają bezpieczeństwo, chaos w edukacji oraz odchodzenie od zdrowego rozsądku. Wierzę, że polityka powinna odpowiadać na realne potrzeby ludzi, a nie tworzyć kolejne problemy oderwane od codziennego życia."
      />

      <ValuesSection
        eyebrow="Działalność publiczna i wspólnota"
        title="Merytoryka, odpowiedzialność i obecność blisko ludzi"
        descriptionOne="W życiu publicznym cenię konkret, uczciwość i odpowiedzialność. Uważam, że polityka nie powinna opierać się na pustych hasłach ani wizerunku, ale na realnej pracy, rozmowie z ludźmi i gotowości do podejmowania trudnych tematów."
        descriptionTwo="Ważne są dla mnie zarówno sprawy ogólnopolskie i europejskie, jak i codzienne sprawy mieszkańców. Dlatego chcę działać nie tylko na poziomie idei, ale też tam, gdzie naprawdę potrzebna jest obecność, rozmowa i zaangażowanie."
        muted
      />

    </main>
  );
}