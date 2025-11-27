import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import EarPromoSection from "@/components/EarPromoSection";
import Image from "next/image";
import blogImg from "@/assets/images/blog.png";
import { Instagram, Facebook, X } from "lucide-react";

type Post = { id: string; title: string; body: string[]; date: string };

const body = [
  "Choosing the right hearing aid is more than just a medical decision—it's a lifestyle choice. Hearing aids today are designed with a variety of features that cater to different daily routines, environments, and personal preferences. By understanding your own needs and habits, you can select a device that improves your hearing while supporting the way you live, work, and socialize.",
  "There are several types of hearing aids, each with its own advantages. Behind‑the‑ear (BTE) models are known for their power and reliability, making them ideal for people with more severe hearing loss or those who prefer a more traditional design. On the other hand, in‑the‑ear (ITE) and in‑the‑canal (ITC) styles are smaller and more discreet, offering comfort and ease for individuals who value a less noticeable option.",
  "Technology also plays a key role in choosing the right hearing aid. Many modern devices include features like Bluetooth connectivity, which allows users to connect their hearing aids to phones, TVs, and other devices for a seamless audio experience. Noise reduction and directional microphones help improve clarity in crowded or noisy environments—perfect for people who frequently attend meetings, social events, or dine out in restaurants.",
  "Your lifestyle will greatly influence which hearing aid is right for you. Active individuals may prefer water‑resistant or sweat‑resistant models, while those with limited dexterity might benefit from hearing aids with simple controls and rechargeable batteries. Taking into account whether you spend most of your time at home, outdoors, or in busy public spaces will help narrow down the best option.",
  "Ultimately, the best way to find a suitable hearing aid is by consulting a hearing care professional. They can assess your hearing needs, recommend devices based on your lifestyle, and even offer trial periods so you can experience the benefits before making a final decision. With the right hearing aid, you'll not only hear better—you'll live better, too.",
];

const posts: Post[] = [
  { id: "p1", title: "Balance Disorders: When to Seek Help", date: "January 15, 2024", body },
  { id: "p2", title: "Managing Tinnitus: Tips That Can Help", date: "September 10, 2024", body },
  { id: "p3", title: "Protecting Your Hearing in a Noisy World", date: "November 18, 2024", body },
  { id: "p4", title: "How to Recognize Early Signs of Hearing Loss", date: "February 28, 2024", body },
  { id: "p5", title: "Choosing the Right Hearing Aid for Your Lifestyle", date: "March 22, 2024", body },
  { id: "p6", title: "Is Earwax Harmful? What You Need to Know", date: "April 5, 2024", body },
];

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id) ?? posts[0];

  return (
    <div className="min-h-screen">
      <PageHeader title={post.title} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]} />

      <main className="max-w-4xl mx-auto py-16 space-y-12 px-4 sm:px-6 lg:px-0">
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
            <textarea
              rows={4}
              placeholder="Write your comment here..."
              className="w-full bg-transparent border-b border-border focus:border-teal-700 outline-none py-2 text-sm placeholder:text-foreground/60"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <input
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-border focus:border-teal-700 outline-none py-2 text-sm placeholder:text-foreground/60"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-border focus:border-teal-700 outline-none py-2 text-sm placeholder:text-foreground/60"
            />
          </div>

          <div>
            <button type="button" className="rounded-full bg-teal-700 text-white px-5 py-3 font-semibold hover:bg-teal-800">Post Comment</button>
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
              <a key={rp.id} href={`/blog/${rp.id}`} className="space-y-3 group">
                <div className="relative w-full h-[200px] sm:h-[220px] rounded-2xl overflow-hidden">
                  <Image src={blogImg} alt="" fill className="object-cover group-hover:scale-[1.02] transition-transform" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-foreground/60">{rp.date}</div>
                  <h4 className="text-lg font-semibold">{rp.title}</h4>
                  <p className="text-sm text-foreground/70">{body[0].slice(0, 120)}...</p>
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
