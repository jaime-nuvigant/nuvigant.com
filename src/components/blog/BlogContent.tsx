import Image from "next/image";
import parse, { type HTMLReactParserOptions, Element, domToReact } from "html-react-parser";

interface BlogContentProps {
  html: string;
}

const BLOG_IMAGE_WIDTH = 800;
const BLOG_IMAGE_HEIGHT = 450;

const parseOptions: HTMLReactParserOptions = {
  replace(domNode) {
    if (!(domNode instanceof Element) || domNode.name !== "img") return;

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
  },
};

export default function BlogContent({ html }: BlogContentProps) {
  return (
    <div className="blog-content">{parse(html, parseOptions)}</div>
  );
}
