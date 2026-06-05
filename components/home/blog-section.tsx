import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const blogs = [
  {
    title: "Printing Service",
    description:
      "We deliver premium custom products at prices everyone can afford. From T-shirts, hoodies, banners, yard signt.",
    image: "/images/blogs/blog-1.png",
    href: "#",
  },
  {
    title: "Digital Scaning",
    description:
      "We deliver premium custom products at prices everyone can afford. From T-shirts, hoodies, banners, yard signt.",
    image: "/images/blogs/blog-2.png",
    href: "#",
  },
  {
    title: "Brand Strategy",
    description:
      "We deliver premium custom products at prices everyone can afford. From T-shirts, hoodies, banners, yard signt.",
    image: "/images/blogs/blog-3.png",
    href: "#",
  },
];

export function BlogSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black mb-10 md:mb-14"
        style={{ fontFamily: "serif" }} // Inline style for serif font to match the image, alternatively remove if custom fonts are handled globally
      >
        Blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="flex flex-col group">
            <div className="relative w-full aspect-[1.3] md:aspect-[1.4] rounded-2xl overflow-hidden mb-5">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="font-bold text-lg md:text-xl text-black mb-2">
              {blog.title}
            </h3>
            <p className="text-gray-500 text-sm md:text-base mb-4 leading-relaxed">
              {blog.description}
            </p>
            <Link
              href={blog.href}
              className="text-black font-semibold text-sm md:text-base flex items-center mt-auto hover:underline w-fit"
            >
              Read More <ChevronRight className="w-4 h-4 ml-0.5" strokeWidth={3} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
