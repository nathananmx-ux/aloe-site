import { Star } from "lucide-react";
import { ButtonLink } from "./ButtonLink";

const googleReviewsUrl =
  "https://www.google.com/search?q=aloe+condominios&rlz=1C1AJCO_pt-BRBR1200BR1201&oq=aloe+condominios&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MggIARAAGBYYHjIHCAIQABjvBTIHCAMQABjvBTIHCAQQABjvBTIKCAUQABiABBiiBDIGCAYQRRg80gEIMjQ2OWowajeoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8#sv=CAwShQIKBmxjbF9wdhI7CgNwdnESNENnMHZaeTh4TVhOb016QTFYMk15SWhZS0VHRnNiMlVnWTI5dVpHOXRhVzVwYjNNUUFoZ0QSfwoDbHFpEnhDaEJoYkc5bElHTnZibVJ2YldsdWFXOXpTT0w2aTdDOHVJQ0FDRm9hRUFBUUFSZ0FHQUVpRUdGc2IyVWdZMjl1Wkc5dGFXNXBiM09TQVI5aWRYTnBibVZ6YzE5aFpHMXBibWx6ZEhKaGRHbHZibDl6WlhKMmFXTmwSEgoDdGJzEgtscmY6ITNzSUFFPRIVCgFxEhBhbG9lIGNvbmRvbWluaW9zGhJsb2NhbC1wbGFjZS12aWV3ZXIYCiCI9pOuBA";

export function TestimonialsSection() {
  return (
    <section className="bg-porcelain py-20 md:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow">Depoimentos</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Relatos de quem acompanha a rotina do condomínio de perto.
          </h2>
          <p className="mt-6 text-lg leading-8 text-graphite/75">
            Veja o que clientes e moradores dizem sobre a experiência com a
            Aloe.
          </p>
        </div>

        <article className="rounded-lg border border-moss/10 bg-white p-7 shadow-soft">
          <span className="rounded-md bg-bronze/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.08em] text-bronze">
            Avaliação no Google
          </span>
          <div
            className="mt-6 flex items-center gap-2 text-bronze"
            aria-label="5,0 estrelas"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                aria-hidden="true"
                size={24}
                fill="currentColor"
              />
            ))}
          </div>
          <h3 className="mt-5 font-serif text-4xl font-semibold text-ink">
            5,0 estrelas
          </h3>
          <p className="mt-3 text-sm font-semibold leading-6 text-graphite/70">
            Serviços administrativos
          </p>
          <div className="mt-8">
            <ButtonLink
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver avaliações no Google
            </ButtonLink>
          </div>
        </article>
      </div>
    </section>
  );
}
