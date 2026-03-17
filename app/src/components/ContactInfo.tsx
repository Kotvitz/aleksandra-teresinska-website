import { Mail, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="border-b border-(--border) bg-(--surface-muted)">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          
          <div className="rounded-2xl border border-(--border) bg-(--surface) p-6 shadow-sm">
            <div className="flex items-center gap-3 text-(--brand-primary)">
              <Mail size={20} />
              <h2 className="text-lg font-semibold">E-mail:</h2>
            </div>

            <p className="mt-4 text-(--text-muted)">
              info@aleksandra-teresinska.com.pl
            </p>
          </div>

          <div className="rounded-2xl border border-(--border) bg-(--surface) p-6 shadow-sm">
            <div className="flex items-center gap-3 text-(--brand-primary)">
              <MapPin size={20} />
              <h2 className="text-lg font-semibold">Adres korespondencyjny: </h2>
            </div>

            <p className="mt-4 text-(--text-muted)">
              „Ofi-Med” ul. Księcia Bogusława X nr 23 , 74-200 Pyrzyce
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}