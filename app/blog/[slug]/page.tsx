import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PortablePostBody } from "@/components/PortablePostBody";
import { contact } from "@/data/home";
import { getBlogPost, getBlogPostSlugs } from "@/lib/blog";
import { urlForImage } from "@/lib/sanity.image";

type BlogArticlePageProps = {
  params: { slug: string };
};

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getBlogPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: BlogArticlePageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  if (!post) return {};

  const imageUrl = post.mainImage
    ? urlForImage(post.mainImage)?.width(1200).height(630).fit("crop").url()
    : null;

  return {
    title: `${post.title} | Blog Aloe`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: imageUrl ? [{ url: imageUrl }] : undefined
    }
  };
}

const formatDate = (value?: string) => {
  if (!value) return null;

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(new Date(value));
};

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) notFound();

  const imageUrl = post.mainImage
    ? urlForImage(post.mainImage)
        ?.width(1600)
        .height(960)
        .fit("crop")
        .url()
    : null;
  const publishedAt = formatDate(post.publishedAt);

  return (
    <>
      <Header />
      <main className="bg-porcelain">
        <article>
          <header className="border-b border-moss/15 bg-paper py-16 md:py-24">
            <div className="section-shell max-w-5xl">
              <p className="eyebrow">{post.category}</p>
              <h1 className="mt-5 max-w-4xl font-serif text-4xl font-semibold leading-[1.02] text-ink sm:text-5xl md:text-6xl">
                {post.title}
              </h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-graphite/75 md:text-lg">
                {post.excerpt}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-moss/15 pt-5 text-sm text-graphite/60">
                <span>Por {post.author}</span>
                {publishedAt ? (
                  <time dateTime={post.publishedAt}>{publishedAt}</time>
                ) : null}
              </div>
            </div>
          </header>

          {imageUrl ? (
            <div className="section-shell pt-12 md:pt-16">
              <div className="relative aspect-[5/3] overflow-hidden bg-paper">
                <Image
                  src={imageUrl}
                  alt={post.mainImage?.alt || ""}
                  fill
                  priority
                  sizes="(min-width: 1280px) 1200px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          ) : null}

          <div className="section-shell py-14 md:py-20">
            <div className="mx-auto max-w-3xl">
              {post.body?.length ? (
                <PortablePostBody value={post.body} />
              ) : (
                post.fallbackBody?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-6 text-base leading-8 text-graphite/80 first:mt-0 md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))
              )}
            </div>
          </div>
        </article>

        <section className="bg-brandSolid py-16 text-white md:py-20">
          <div className="section-shell grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-bronze">
                Fale com a Aloe
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight md:text-5xl">
                Precisa de apoio na gestão do seu condomínio?
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-white/75">
                A Aloe pode ajudar seu condomínio a organizar a rotina
                administrativa, financeira e operacional com mais clareza e
                proximidade.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/#contato">Solicitar proposta</ButtonLink>
              <ButtonLink
                href={contact.whatsappHref}
                variant="secondary"
                whatsapp
                target="_blank"
                rel="noreferrer"
              >
                Falar pelo WhatsApp
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
