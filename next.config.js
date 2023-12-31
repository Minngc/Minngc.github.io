import nextMdx from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";

const withMdx = nextMdx({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    //...
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [],
  },
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default withMdx(nextConfig);
