"use client";
import Image from "next/image";
import blogImg from "../assets/images/blog.png";
import { Newspaper } from "lucide-react";
import SectionHeading from "./SectionHeading";

type Post = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
};

const posts: Post[] = [
  {
    id: "p1",
    title: "Balance Disorders: When to Seek Help",
    excerpt: "Understand how your ears affect your balance and when to take action.",
    date: "December 12, 2023",
  },
  {
    id: "p2",
    title: "Managing Tinnitus: Tips That Can Help",
    excerpt: "Find out what causes ringing in the ears and explore ways to reduce its impact.",
    date: "December 12, 2023",
  },
  {
    id: "p3",
    title: "Protecting Your Hearing in a Noisy World",
    excerpt: "From concerts to construction — learn practical ways to protect your ears daily.",
    date: "December 12, 2023",
  },
  {
    id: "p4",
    title: "How to Recognize Early Signs of Hearing Loss",
    excerpt: "Learn the common symptoms and when it’s time to get a professional assessment.",
    date: "December 12, 2023",
  },
  {
    id: "p5",
    title: "Choosing the Right Hearing Aid for Your Lifestyle",
    excerpt: "Discover the different types of hearing aids and which one best suits your daily needs.",
    date: "December 12, 2023",
  },
  {
    id: "p6",
    title: "Is Earwax Harmful? What You Need to Know",
    excerpt: "Uncover the myths and facts about earwax, and when to consider professional removal.",
    date: "December 12, 2023",
  },
];

export default function BlogSection() {
  const featured = posts.slice(3, 5);
  const latest = posts;
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
