"use client";
import { createContext, useContext } from "react";

export type Post = { id: string; title: string; date: string; body: string[] };

const body: string[] = [
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

type BlogPostsData = { posts: Post[]; body: string[] };

const BlogPostsContext = createContext<BlogPostsData>({ posts, body });

export function BlogPostsProvider({ children }: { children: React.ReactNode }) {
  return <BlogPostsContext.Provider value={{ posts, body }}>{children}</BlogPostsContext.Provider>;
}

export function useBlogPosts() {
  return useContext(BlogPostsContext);
}

