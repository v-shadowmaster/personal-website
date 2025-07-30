import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

interface Props {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  return {
    title: post.title,
    description: post.description,
  }
}

// This would typically come from a database or CMS
async function getBlogPost(slug: string) {
  // Sample blog post data - using slug parameter to demonstrate usage
  console.log(`Fetching blog post for slug: ${slug}`)
  return {
    title: "Understanding React Server Components",
    description:
      "An in-depth exploration of React Server Components and how they change the way we build React applications.",
    image: "/placeholder.svg?height=600&width=1200",
    date: "June 28, 2025",
    readTime: "15 min read",
    categories: ["React", "Server Components", "Performance"],
    content: `
      <p>React Server Components represent a paradigm shift in how we build React applications. They allow components to render on the server, reducing the JavaScript sent to the client and improving performance.</p>
      
      <h2>What are Server Components?</h2>
      <p>Server Components are a new type of React component that runs only on the server. They can access server-side resources directly, such as databases or file systems, without requiring API endpoints.</p>
      
      <p>Unlike traditional React components, Server Components don't include any client-side JavaScript in the bundle. This means they don't increase your application's JavaScript footprint, leading to faster page loads and improved performance.</p>
      
      <h2>Benefits of Server Components</h2>
      <ul>
        <li>Reduced JavaScript bundle size</li>
        <li>Direct access to server-side resources</li>
        <li>Improved initial page load performance</li>
        <li>Better separation of concerns between server and client logic</li>
      </ul>
      
      <h2>How to Use Server Components</h2>
      <p>In Next.js 13 and later, all components are Server Components by default. You can use them by simply creating a component without any client-side interactivity.</p>
      
      <pre><code>
      // This is a Server Component
      async function BlogPosts() {
        const posts = await fetchBlogPosts();
        
        return (
          <ul>
            {posts.map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        );
      }
      </code></pre>
      
      <p>If you need client-side interactivity, you can mark a component as a Client Component by adding the "use client" directive at the top of the file.</p>
      
      <pre><code>
      "use client"
      
      // This is a Client Component
      import { useState } from 'react';
      
      export default function Counter() {
        const [count, setCount] = useState(0);
        
        return (
          <button onClick={() => setCount(count + 1)}>
            Count: {count}
          </button>
        );
      }
      </code></pre>
      
      <h2>Conclusion</h2>
      <p>React Server Components represent an exciting evolution in React's capabilities, allowing developers to build more performant applications with a clearer separation between server and client code. As this technology matures, it will likely become a standard part of modern React development.</p>
    `,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  return (
    <div className="container py-12 md:py-16 max-w-4xl">
      <Button variant="ghost" className="mb-8" asChild>
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all articles
        </Link>
      </Button>

      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <CalendarIcon className="mr-1 h-4 w-4" />
            {post.date}
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            {post.readTime}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.categories.map((category) => (
            <Badge key={category} variant="secondary">
              {category}
            </Badge>
          ))}
        </div>
      </div>

      <div className="relative h-[300px] md:h-[400px] w-full mb-8">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}