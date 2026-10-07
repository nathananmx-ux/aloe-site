import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { urlForImage } from "@/lib/sanity.image";

type BlogPostCardProps = {
  post: BlogPost;
  number: number;
};

const formatDate = (value?: string) => {
  if (!value) return null;

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(new Date(value));
};

export function BlogPostCard({ post, number }: BlogPostCardProps) {
  const imageUrl = post.mainImage
    ? urlForImage(post.mainImage)?.width(900).height(600).fit("crop").url()
    : null;
  const publishedAt = formatDate(post.publishedAt);

  return (
    <article className="group flex min-h-[31rem] flex-col bg-porcelain">
      <Link
        href={`/blog/${post.slug}`}
        className="relative block aspect-[3/2] overflow-hidden bg-brandSolid"
        aria-label={`Ler ${post.title}`}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.mainImage?.alt || ""}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full items-end justify-between bg-brandSolid p-7 text-white">
            <span className="text-xs font-bold uppercase tracking-[0.16em]">
              Conteúdo Aloe
            </span>
            <span className="font-serif text-5xl text-bronze">
              {String(number).padStart(2, "0")}
            </span>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col border border-t-0 border-moss/20 p-7 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-moss/15 pb-5">
          <p className="text-xs font-bold uppercase text-moss">{post.category}</p>
          {publishedAt ? (
            <time
              dateTime={post.publishedAt}
              className="text-xs text-graphite/60"
            >
              {publishedAt}
            </time>
          ) : null}
        </div>
        <h2 className="mt-6 font-serif text-2xl font-semibold leading-tight text-ink md:text-[1.7rem]">
          <Link href={`/blog/${post.slug}`} className="hover:text-moss">
            {post.title}
          </Link>
        </h2>
        <p className="mt-4 text-sm leading-7 text-graphite/75">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-auto pt-7 text-sm font-bold text-moss underline decoration-bronze/60 underline-offset-4"
        >
          Ler artigo
        </Link>
      </div>
    </article>
  );
}
