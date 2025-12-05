"use client";
import PageHeader from "@/components/layout/PageHeader";
import blogImg from "@/assets/images/blog.png";
import SectionHeading from "@/components/ui/SectionHeading";
import RelatedPostCard from "@/components/cards/RelatedPostCard";
import FeaturedPostCard from "@/components/cards/FeaturedPostCard";
import { useBlogPosts } from "@/context/BlogPostsContext";
import PageLayout from "@/components/layout/PageLayout";

type ListPost = { id: string; title: string; excerpt: string; date: string };

export default function BlogPage() {
  const { posts, body } = useBlogPosts();
  const listPosts: ListPost[] = posts.map((p) => ({ id: p.id, title: p.title, date: p.date, excerpt: `${p.body[0]}` }));
  const featured = listPosts.slice(3, 5);
  const latest = listPosts;
  return (
    <PageLayout header={<PageHeader title="Blog" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]} /> }>
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Featured"
            title="Featured Articles for Better Hearing Care"
            subtitle="Stay ahead with highlighted articles from our experts — offering insights to help you protect, improve, and understand your hearing health."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {featured.map((p) => (
              <FeaturedPostCard key={p.id} href={`/blog/${p.id}`} image={blogImg} date={p.date} title={p.title} excerpt={p.excerpt} />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeading
            eyebrow="Latest Post"
            title="Explore expert insights on hearing health."
            subtitle="Stay informed with the latest tips, research, and advice from our professionals — helping you take better care of your hearing every day."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((p) => (
              <RelatedPostCard key={p.id} href={`/blog/${p.id}`} image={blogImg} date={p.date} title={p.title} excerpt={p.excerpt} />
            ))}
          </div>
        </section>
    </PageLayout>
  );
}
