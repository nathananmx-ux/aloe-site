import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BlogPostCard } from "@/components/BlogPostCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getBlogPosts } from "@/lib/blog";
import { urlForImage } from "@/lib/sanity.image";

export const metadata: Metadata = {
  title: "Blog Aloe | Gestão e rotina condominial",
  description:
    "Conteúdos da Aloe Condomínios sobre administração, implantação e organização da rotina condominial.",
  alternates: { canonical: "/blog" }
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const featured = posts.find((post) => post.featured) || posts[0];
  const remainingPosts = posts.filter((post) => post._id !== featured?._id);
  const featuredImage = featured?.mainImage
    ? urlForImage(featured.mainImage)
        ?.width(1400)
        .height(900)
        .fit("crop")
        .url()
    : null;

  return (
    <>
      <Header />
      <main className="bg-porcelain">
        <section className="border-b border-moss/15 bg-paper py-20 md:py-28">
          <div className="section-shell">
            <p className="eyebrow">Conteúdo Aloe</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-[0.98] text-ink sm:text-5xl md:text-6xl">
              Blog Aloe
            </h1>
            <p className="mt-7 max-w-[54rem] border-t border-moss/20 pt-6 text-base leading-8 text-graphite/75 md:text-lg">
              Conteúdos criados para ajudar síndicos, conselhos e moradores a
              entender melhor a rotina condominial, com orientações práticas
              sobre gestão, finanças, regularização e convivência.
            </p>
          </div>
        </section>

        {featured ? (
          <section className="py-16 md:py-24">
            <div className="section-shell grid overflow-hidden border border-moss/20 bg-paper lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[22rem] bg-brandSolid lg:min-h-[34rem]">
                {featuredImage ? (
                  <Image
                    src={featuredImage}
                    alt={featured.mainImage?.alt || ""}
                    fill
                    priority
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full min-h-[22rem] items-end justify-between p-8 text-white md:p-12 lg:min-h-[34rem]">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-bronze">
                        Em destaque
                      </p>
                      <p className="mt-3 max-w-sm font-serif text-3xl leading-tight md:text-4xl">
                        Informação clara para uma gestão mais organizada.
                      </p>
                    </div>
                    <span className="font-serif text-7xl text-white/20">01</span>
                  </div>
                )}
              </div>

              <article className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
                <p className="eyebrow">{featured.category}</p>
                <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink md:text-5xl">
                  {featured.title}
                </h2>
                <p className="mt-6 text-base leading-8 text-graphite/75">
                  {featured.excerpt}
                </p>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="mt-8 inline-flex w-fit items-center border-b border-bronze pb-1 text-sm font-bold text-moss"
                >
                  Ler artigo
                </Link>
              </article>
            </div>
          </section>
        ) : null}

        <section className="border-t border-moss/15 py-16 md:py-24">
          <div className="section-shell">
            <div className="max-w-3xl">
              <p className="eyebrow">Artigos</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-ink sm:text-4xl">
                Orientações para a rotina condominial.
              </h2>
            </div>

            {remainingPosts.length ? (
              <div className="mt-10 grid gap-px overflow-hidden border border-moss/20 bg-moss/20 md:grid-cols-2 lg:grid-cols-3">
                {remainingPosts.map((post, index) => (
                  <BlogPostCard key={post._id} post={post} number={index + 2} />
                ))}
              </div>
            ) : (
              <p className="mt-10 border-t border-moss/20 pt-8 text-graphite/70">
                Novos conteúdos serão publicados em breve.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
