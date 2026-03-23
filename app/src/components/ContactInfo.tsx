import { Mail, MapPin } from "lucide-react";

type ContactInfoProps = {
  emailLabel: string;
  email: string;
  addressLabel: string;
  address: string;
};

export default function ContactInfo({
  emailLabel,
  email,
  addressLabel,
  address,
}: ContactInfoProps) {
  return (
    <section className="border-b border-(--border) bg-(--surface-muted)">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          
          <div className="rounded-2xl border border-(--border) bg-(--surface) p-6 shadow-sm">
            <div className="flex items-center gap-3 text-(--brand-primary)">
              <Mail size={20} />
              <h2 className="text-lg font-semibold">{emailLabel} </h2>
            </div>

            <p className="mt-4 text-(--text-muted)">
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>

          <div className="rounded-2xl border border-(--border) bg-(--surface) p-6 shadow-sm">
            <div className="flex items-center gap-3 text-(--brand-primary)">
              <MapPin size={20} />
              <h2 className="text-lg font-semibold">{addressLabel} </h2>
            </div>

            <p className="mt-4 text-(--text-muted)">
              {address}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}