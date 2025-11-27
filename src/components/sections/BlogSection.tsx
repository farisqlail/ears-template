"use client";
import Image from "next/image";
import blogImg from "../../assets/images/blog.png";
import SectionHeading from "../ui/SectionHeading";
import { useBlogPosts } from "@/context/BlogPostsContext";

export default function BlogSection() {
  const { posts, body } = useBlogPosts();
  const list = posts.map((p) => ({ id: p.id, title: p.title, date: p.date, excerpt: p.body[0] }));
  const featured = list.slice(3, 5);
  const latest = list;
  return (
    <section className="space-y-12">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Featured"
          title="Featured Articles for Better Hearing Care"
          subtitle="Stay ahead with highlighted articles from our experts — offering insights to help you protect, improve, and understand your hearing health."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {featured.map((p) => (
            <article key={p.id} className="rounded-2xl border border-border bg-white shadow-card overflow-hidden">
              <div className="relative w-full h-[220px] sm:h-[240px]">
                <Image src={blogImg} alt="" fill className="object-cover" />
              </div>
              <div className="p-4 space-y-2">
                <div className="text-sm text-foreground/60">{p.date}</div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-foreground/70">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="border-t border-border" />

      <div className="space-y-6">
        <SectionHeading
          eyebrow="Latest Post"
          title="Explore expert insights on hearing health."
          subtitle="Stay informed with the latest tips, research, and advice from our professionals — helping you take better care of your hearing every day."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((p) => (
            <article key={p.id} className="space-y-3">
              <div className="relative w-full h-[220px] sm:h-[250px] rounded-2xl overflow-hidden mx-auto">
                <Image src={blogImg} alt="" fill className="object-cover" />
              </div>
              <div className="space-y-1">
                <div className="text-sm text-foreground/60">{p.date}</div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-foreground/70">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
