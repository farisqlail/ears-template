"use client";
import Image from "next/image";
import blogImg from "../assets/images/blog.png";
import { Newspaper } from "lucide-react";

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
  return (
    <section className="space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-foreground/80">
            Blog <Newspaper className="h-3.5 w-3.5" />
          </span>
          <h2 className="text-2xl font-semibold">Explore expert insights on hearing health.</h2>
          <p className="text-foreground/70 max-w-2xl">
            Stay informed with the latest tips, research, and advice from our professionals — helping you take better care of your
            hearing every day.
          </p>
        </div>
        <a href="#" className="rounded-full bg-teal-700 text-white px-4 py-2 hover:bg-teal-800 self-start md:self-auto">See all</a>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
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
    </section>
  );
}
