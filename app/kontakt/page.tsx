import { client } from "@/sanity/lib/client";
import ContactForm from "../src/components/ContactForm";
import ContactInfo from "../src/components/ContactInfo";
import ContactIntro from "../src/components/ContactIntro";
import { CONTACT_PAGE_QUERY } from "@/sanity/lib/queries";
import type { ContactPage } from "@/sanity/lib/types";

export default async function ContactPage() {
  const data = await client.fetch<ContactPage>(CONTACT_PAGE_QUERY);

  if (!data) {
    throw new Error("Brak dokumentu 'contactPage' w Sanity.");
  }
  
  return (
    <main className="bg-(--surface) text-(--text)">
      <ContactIntro
        eyebrow={data.introEyebrow}
        title={data.introTitle}
        description={data.introDescription}
      />
      <ContactInfo
        emailLabel={data.infoEmailLabel}
        email={data.infoEmail}
        addressLabel={data.infoAddressLabel}
        address={data.infoAddress}
      />
      <ContactForm
        title={data.formTitle}
        namePlaceholder={data.formNamePlaceholder}
        emailPlaceholder={data.formEmailPlaceholder}
        subjectPlaceholder={data.formSubjectPlaceholder}
        messagePlaceholder={data.formMessagePlaceholder}
        consentText={data.formConsentText}
        requiredFieldsText={data.formRequiredFieldsText}
        submitText={data.formSubmitText}
        submittingText={data.formSubmittingText}
        successMessage={data.formSuccessMessage}
        errorMessage={data.formErrorMessage}
      />
    </main>
  );
}