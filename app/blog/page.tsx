import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import EarPromoSection from "@/components/EarPromoSection";
import Image from "next/image";
import blogImg from "@/assets/images/blog.png";
import SectionHeading from "@/components/SectionHeading";

type Post = { id: string; title: string; excerpt: string; date: string };

const posts: Post[] = [
  { id: "p1", title: "Balance Disorders: When to Seek Help", excerpt: "Understand how your ears affect your balance and when to take action.", date: "January 15, 2024" },
  { id: "p2", title: "Managing Tinnitus: Tips That Can Help", excerpt: "Find out what causes ringing in the ears and explore ways to reduce its impact.", date: "September 10, 2024" },
  { id: "p3", title: "Protecting Your Hearing in a Noisy World", excerpt: "From concerts to construction — learn practical ways to protect your ears daily.", date: "November 18, 2024" },
  { id: "p4", title: "How to Recognize Early Signs of Hearing Loss", excerpt: "Learn the common symptoms and when it’s time to get a professional assessment.", date: "February 28, 2024" },
  { id: "p5", title: "Choosing the Right Hearing Aid for Your Lifestyle", excerpt: "Discover the different types of hearing aids and which one best suits your daily needs.", date: "March 22, 2024" },
  { id: "p6", title: "Is Earwax Harmful? What You Need to Know", excerpt: "Uncover the myths and facts about earwax, and when to consider professional removal.", date: "April 5, 2024" },
];

export default function BlogPage() {
  const featured = posts.slice(3, 5);
  const latest = posts;
  return (
    <div className="min-h-screen">
      <PageHeader title="Blog" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

      <main className="max-w-7xl mx-auto py-20 space-y-16 px-4 sm:px-6 lg:px-0">
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Featured"
            title="Featured Articles for Better Hearing Care"
            subtitle="Stay ahead with highlighted articles from our experts — offering insights to help you protect, improve, and understand your hearing health."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {featured.map((p) => (
              <a key={p.id} href={`/blog/${p.id}`} className="grid sm:grid-cols-[280px_1fr] items-center gap-4 sm:gap-6 rounded-3xl border border-border bg-white shadow-card p-4 hover:shadow-md transition-shadow">
                <div className="relative h-[160px] sm:h-[180px] md:h-[200px] rounded-2xl overflow-hidden">
                  <Image src={blogImg} alt="" fill className="object-cover" />
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-foreground/60">{p.date}</div>
                  <h3 className="text-lg sm:text-xl font-semibold">{p.title}</h3>
                  <p className="text-sm text-foreground/70">{p.excerpt}</p>
                </div>
              </a>
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
              <a key={p.id} href={`/blog/${p.id}`} className="space-y-3 group">
                <div className="relative w-full h-[220px] sm:h-[250px] rounded-2xl overflow-hidden mx-auto">
                  <Image src={blogImg} alt="" fill className="object-cover group-hover:scale-[1.02] transition-transform" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-foreground/60">{p.date}</div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-foreground/70">{p.excerpt}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <EarPromoSection />
    </div>
  );
}
