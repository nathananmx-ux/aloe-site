import Image from "next/image";
import {
  PortableText,
  type PortableTextComponents
} from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { urlForImage } from "@/lib/sanity.image";

type PortablePostBodyProps = {
  value: PortableTextBlock[];
};

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mt-6 text-base leading-8 text-graphite/80 md:text-lg">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-14 font-serif text-3xl font-semibold leading-tight text-ink md:text-4xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 font-serif text-2xl font-semibold leading-tight text-ink md:text-3xl">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-10 border-l-2 border-bronze pl-6 font-serif text-2xl leading-relaxed text-ink">
        {children}
      </blockquote>
    )
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-6 list-disc space-y-3 pl-6 text-base leading-8 text-graphite/80 md:text-lg">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-6 list-decimal space-y-3 pl-6 text-base leading-8 text-graphite/80 md:text-lg">
        {children}
      </ol>
    )
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const external = href.startsWith("http");

      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className="font-semibold text-moss underline decoration-bronze/60 underline-offset-4"
        >
          {children}
        </a>
      );
    }
  },
  types: {
    image: ({ value }) => {
      const imageUrl = urlForImage(value)
        ?.width(1400)
        .height(900)
        .fit("max")
        .url();

      if (!imageUrl) return null;

      return (
        <figure className="my-12">
          <div className="relative aspect-[14/9] overflow-hidden bg-paper">
            <Image
              src={imageUrl}
              alt={value.alt || ""}
              fill
              sizes="(min-width: 768px) 760px, 100vw"
              className="object-cover"
            />
          </div>
          {value.alt ? (
            <figcaption className="mt-3 text-sm text-graphite/60">
              {value.alt}
            </figcaption>
          ) : null}
        </figure>
      );
    }
  }
};

export function PortablePostBody({ value }: PortablePostBodyProps) {
  return <PortableText value={value} components={components} />;
}
