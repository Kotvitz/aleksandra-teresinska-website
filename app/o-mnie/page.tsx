import AboutHero from "../src/components/AboutHero";
import AboutSplitSection from "../src/components/AboutSplitSection";

export default function AboutPage() {
  return (
    <main className="bg-(--surface) text-(--text)">
      <AboutHero />

      <AboutSplitSection
        eyebrow="Moja droga"
        title="Od osobistego doświadczenia do działania"
        imageSrc="/images/about-story.webp"
        imageAlt="Aleksandra Teresińska podczas spotkania"
        imageSide="left"
        muted
      >
        <p>
          Moja droga do aktywności politycznej zaczęła się od bardzo osobistego
          momentu. Przed wyborami parlamentarnymi w 2023 roku, będąc w zaawansowanej
          ciąży, stałam pod sceną na wiecu i słuchałam, co mają do powiedzenia
          przedstawiciele Nowej Nadziei.
        </p>

        <p>
          Interesowało mnie przede wszystkim to, co to środowisko ma do
          zaoferowania przedsiębiorcom takim jak ja - osobom, które na co dzień
          biorą odpowiedzialność za swoją pracę, firmę i rodzinę.
        </p>

        <p>
          To był moment, w którym poczułam, że nie chcę już tylko słuchać i
          obserwować. Chciałam stać się częścią środowiska ludzi, którzy chcą
          mieć realny wpływ na kierunek zmian i nie zgadzają się na bierność.
        </p>
      </AboutSplitSection>

      <AboutSplitSection
        eyebrow="Codzienność"
        title="Perspektywa mamy i przedsiębiorcy"
        imageSrc="/images/about-perspective.webp"
        imageAlt="Aleksandra Teresińska w codziennej działalności"
        imageSide="right"
      >
        <p>
          Na co dzień łączę życie rodzinne z prowadzeniem firmy w branży
          medycznej. To rzeczywistość, która wymaga dobrej organizacji,
          odpowiedzialności i gotowości do działania praktycznie przez całą
          dobę.
        </p>

        <p>
          Jako mama dwóch małych chłopców patrzę na wiele spraw inaczej - przez
          pryzmat bezpieczeństwa, edukacji i przyszłości kolejnego pokolenia.
        </p>

        <p>
          Zależy mi na świecie, w którym dzieci mogą dorastać spokojnie,
          odważnie i bez lęku o to, co przyniesie przyszłość.
        </p>
      </AboutSplitSection>

      <AboutSplitSection
        eyebrow="Działalność w regionie"
        title="Pyrzyce i budowanie lokalnego środowiska"
        imageSrc="/images/about-local.webp"
        imageAlt="Aleksandra Teresińska podczas działalności lokalnej"
        imageSide="left"
        muted
      >
        <p>
          W październiku oficjalnie otworzyłam pyrzycki oddział Nowej Nadziei i
          zostałam jego przewodniczącą. To ważna inicjatywa, z której jestem
          naprawdę dumna.
        </p>

        <p>
          Bardzo doceniam wszystkich, którzy zaangażowali się w jej tworzenie.
          Wierzę, że realna zmiana zaczyna się również lokalnie - od ludzi,
          którzy chcą rozmawiać, organizować się i brać odpowiedzialność za
          swoje otoczenie.
        </p>

        <p>
          Zależy mi na obecności blisko mieszkańców i na budowaniu środowiska,
          które nie ogranicza się do komentarzy, ale potrafi działać.
        </p>
      </AboutSplitSection>
    </main>
  );
}