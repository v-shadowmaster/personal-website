export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string; // ISO (YYYY-MM-DD)
  readTime: string;
  slug: string;
  categories: string[];
  content: string; // HTML, rendered with `prose`
}

// Single source of truth for the blog index, article pages, and static generation.
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Scalable React Applications with TypeScript',
    excerpt:
      'A deep dive into architecting React applications that can grow with your team and requirements, leveraging TypeScript for better developer experience.',
    date: '2024-01-15',
    readTime: '8 min read',
    slug: 'scalable-react-typescript',
    categories: ['React', 'TypeScript', 'Architecture'],
    content: `
      <p>Scaling a React application is less about raw performance and more about keeping change cheap. As a codebase grows, the cost of every new feature is determined by how confidently you can reason about the code you already have. TypeScript, used deliberately, is one of the highest-leverage tools for keeping that cost low.</p>

      <h2>Make boundaries type-safe first</h2>
      <p>The most valuable types live at the edges of your system: API responses, form payloads, and the props of widely-reused components. Type those precisely and let inference do the rest internally. A single well-described <code>User</code> type flowing through the app catches an entire class of bugs before they ever reach the browser.</p>

      <h2>Compose, don't configure</h2>
      <p>Large components accumulate boolean props until no one can predict what a given combination renders. Prefer composition: small pieces that each do one thing, assembled at the call site. The result reads like the UI it produces and stays easy to change.</p>
      <ul>
        <li>Keep components focused on a single responsibility.</li>
        <li>Lift shared logic into hooks, not into ever-growing prop lists.</li>
        <li>Let the type system describe the shape, not a wall of optional flags.</li>
      </ul>

      <h2>Choose the smallest state that works</h2>
      <p>Not everything needs global state. Server data belongs in a data-fetching layer, URL state belongs in the URL, and only genuinely shared client state needs a store. Matching each piece of state to the right home keeps re-renders predictable and the mental model small.</p>

      <h2>Conclusion</h2>
      <p>Scalability is the sum of many small decisions that keep change cheap. Type your boundaries, compose your UI, and put state where it belongs — and the application stays approachable long after the first thousand commits.</p>
    `,
  },
  {
    id: 2,
    title: 'First-Principles Problem Solving in Software Engineering',
    excerpt:
      'How breaking down complex problems to their fundamental components leads to more elegant and maintainable solutions.',
    date: '2024-01-08',
    readTime: '12 min read',
    slug: 'first-principles-problem-solving',
    categories: ['Engineering', 'Problem Solving'],
    content: `
      <p>First-principles thinking means reducing a problem to the things you know are true, then reasoning up from there — rather than reasoning by analogy to whatever solution happens to be nearby. In engineering, it's the difference between "how do other people do this?" and "what is actually required here?".</p>

      <h2>Strip the problem to its constraints</h2>
      <p>Before reaching for a framework or a pattern, write down what the system genuinely must do and what it must never do. Most accidental complexity comes from solving requirements that were assumed rather than stated.</p>

      <h2>Reason up, not across</h2>
      <p>Analogy is fast but inherits the assumptions of the thing you copied. First principles is slower but produces solutions sized to <em>your</em> constraints. The goal isn't to reinvent everything — it's to know which borrowed pieces actually fit.</p>

      <h2>A worked example</h2>
      <p>Faced with "we need a queue," the analogy answer is to add a message broker. The first-principles question is: how many events, how durable, how soon must they be processed? Often the honest answer is a database table and a cron job — less to operate, and easier to reason about.</p>

      <h2>Conclusion</h2>
      <p>First principles is a discipline, not a flourish. Done consistently it produces systems that are smaller, more correct, and easier to change, because every part of them exists for a reason you can name.</p>
    `,
  },
  {
    id: 3,
    title: 'Human-AI Collaboration in Modern Development',
    excerpt:
      'Exploring how AI tools can augment human creativity and problem-solving capabilities without replacing the critical thinking process.',
    date: '2024-01-01',
    readTime: '10 min read',
    slug: 'human-ai-collaboration',
    categories: ['AI', 'Workflow', 'Productivity'],
    content: `
      <p>AI coding tools are most useful when treated as an amplifier of judgment, not a replacement for it. They expand how much you can attempt in an afternoon, but the responsibility for whether the result is correct, secure, and maintainable stays firmly with the engineer.</p>

      <h2>Delegate the mechanical, keep the architectural</h2>
      <p>Boilerplate, test scaffolding, and one-off scripts are perfect candidates for delegation. The decisions that shape a system — its boundaries, data model, and failure modes — are where human judgment earns its keep.</p>

      <h2>Verify, then trust</h2>
      <p>A confident answer is not a correct one. The habit that makes AI collaboration safe is the same one that makes any collaboration safe: read the diff, run it, and check it against the constraints you actually care about.</p>
      <ul>
        <li>Use AI to explore options quickly, then choose deliberately.</li>
        <li>Keep the feedback loop tight — small steps you can verify.</li>
        <li>Treat generated code as a draft from a fast, eager junior engineer.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The engineers who get the most from these tools aren't the ones who hand over the most — they're the ones who stay in the loop, ask sharper questions, and keep ownership of the decisions that matter.</p>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
