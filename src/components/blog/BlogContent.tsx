import Image from "next/image";
import Link from "next/link";
import parse, {
  type DOMNode,
  type HTMLReactParserOptions,
  Element,
  domToReact,
} from "html-react-parser";

interface BlogContentProps {
  html: string;
}

const BLOG_IMAGE_WIDTH = 800;
const BLOG_IMAGE_HEIGHT = 450;

function isAppRelativeHref(href: string): boolean {
  return href.startsWith("/") && !href.startsWith("//");
}

const parseOptions: HTMLReactParserOptions = {
  replace(domNode) {
    if (!(domNode instanceof Element)) return;

    if (domNode.name === "img") {
      const { src, alt = "", title, class: cls } = domNode.attribs;
      if (!src) return;

      return (
        <Image
          src={src}
          alt={alt}
          title={title}
          width={BLOG_IMAGE_WIDTH}
          height={BLOG_IMAGE_HEIGHT}
          sizes="(max-width: 768px) 100vw, 680px"
          className={cls ?? "blog-img"}
          style={{ width: "100%", height: "auto" }}
        />
      );
    }

    if (domNode.name === "a") {
      const { href, class: className, title, id } = domNode.attribs;
      if (!href || !isAppRelativeHref(href)) return;

      return (
        <Link href={href} className={className} title={title} id={id}>
          {domToReact(domNode.children as DOMNode[], parseOptions)}
        </Link>
      );
    }
  },
};

export default function BlogContent({ html }: BlogContentProps) {
  return (
    <div className="blog-content">{parse(html, parseOptions)}</div>
  );
}
