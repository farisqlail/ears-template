"use client";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import blogImg from "@/assets/images/blog.png";
import { Instagram, Facebook, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { UnderlineInput, UnderlineTextarea } from "@/components/ui/UnderlineInput";
import RelatedPostCard from "@/components/RelatedPostCard";
import { useBlogPosts } from "@/context/BlogPostsContext";
import PageLayout from "@/components/PageLayout";

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const { posts, body } = useBlogPosts();
  const post = posts.find((p) => p.id === params.id) ?? posts[0];

  return (
    <PageLayout header={<PageHeader title={post.title} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]} /> }>
        <div className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-card">
          <Image src={blogImg} alt="" fill className="object-cover" />
        </div>

        <article className="space-y-6 text-foreground">
          {post.body.map((para, i) => (
            <p key={i} className="leading-relaxed text-base sm:text-lg">
              {para}
            </p>
          ))}
        </article>

        <hr className="border-t border-border" />

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="inline-block h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-muted ring-2 ring-teal-200" />
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="inline-grid place-items-center h-9 w-9 rounded-full bg-white border border-border text-teal-700 shadow-card">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="X" className="inline-grid place-items-center h-9 w-9 rounded-full bg-white border border-border text-teal-700 shadow-card">
                <X className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="inline-grid place-items-center h-9 w-9 rounded-full bg-white border border-border text-teal-700 shadow-card">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <UnderlineTextarea rows={4} placeholder="Write your comment here..." />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <UnderlineInput placeholder="Phone Number" />
            <UnderlineInput type="email" placeholder="Email" />
          </div>

          <div>
            <Button className="rounded-full px-5" variant="primary" size="md">Post Comment</Button>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-foreground/80">Related Post</span>
            <a href="/blog" className="rounded-full bg-teal-700 text-white px-4 py-2 hover:bg-teal-800">See all</a>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Continue Reading</h3>
            <p className="text-foreground/70">Discover more helpful articles to deepen your understanding of hearing health and make informed decisions for your well‑being.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {(posts.filter((p) => p.id !== post.id).slice(0, 3)).map((rp) => (
              <RelatedPostCard
                key={rp.id}
                href={`/blog/${rp.id}`}
                image={blogImg}
                date={rp.date}
                title={rp.title}
                excerpt={`${body[0].slice(0, 120)}...`}
              />
            ))}
          </div>
        </section>
    </PageLayout>
  );
}
