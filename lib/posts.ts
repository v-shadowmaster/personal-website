export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

// Single source of truth for the blog index and for static generation.
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Scalable React Applications with TypeScript',
    excerpt:
      'A deep dive into architecting React applications that can grow with your team and requirements, leveraging TypeScript for better developer experience.',
    date: '2024-01-15',
    readTime: '8 min read',
    slug: 'scalable-react-typescript',
  },
  {
    id: 2,
    title: 'First-Principles Problem Solving in Software Engineering',
    excerpt:
      'How breaking down complex problems to their fundamental components leads to more elegant and maintainable solutions.',
    date: '2024-01-08',
    readTime: '12 min read',
    slug: 'first-principles-problem-solving',
  },
  {
    id: 3,
    title: 'Human-AI Collaboration in Modern Development',
    excerpt:
      'Exploring how AI tools can augment human creativity and problem-solving capabilities without replacing the critical thinking process.',
    date: '2024-01-01',
    readTime: '10 min read',
    slug: 'human-ai-collaboration',
  },
];
