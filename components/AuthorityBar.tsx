import { authorityItems } from "@/data/home";

export function AuthorityBar() {
  return (
    <section
      className="border-y border-moss/10 bg-porcelain py-8"
      aria-label="Posicionamento institucional"
    >
      <div className="section-shell grid gap-0 overflow-hidden rounded-lg border border-moss/10 bg-paper sm:grid-cols-2 lg:grid-cols-4">
        {authorityItems.map((item) => (
          <div
            key={item.title}
            className="flex min-h-[172px] flex-col border-b border-moss/10 px-5 py-6 sm:border-r lg:border-b-0 last:border-b-0 sm:even:border-r-0 lg:even:border-r lg:last:border-r-0"
          >
            <span className="mb-3 block h-1 w-9 rounded-full bg-bronze" />
            <div className="flex min-h-[76px] items-start">
              <strong className="block font-serif text-2xl font-semibold leading-tight text-moss md:text-3xl">
                {item.title}
              </strong>
            </div>
            <span className="mt-1 block text-sm font-semibold leading-6 text-graphite/70 md:text-base">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
