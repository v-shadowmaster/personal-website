import { describe, it, expect } from 'vitest';
import { blogPosts, getPostBySlug } from '@/lib/posts';

describe('blog posts', () => {
  it('has at least one post', () => {
    expect(blogPosts.length).toBeGreaterThan(0);
  });

  it('has unique slugs', () => {
    const slugs = blogPosts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('every post has required fields', () => {
    for (const post of blogPosts) {
      expect(post.title).toBeTruthy();
      expect(post.excerpt).toBeTruthy();
      expect(post.content.trim().length).toBeGreaterThan(0);
      expect(post.categories.length).toBeGreaterThan(0);
    }
  });

  it('getPostBySlug returns the matching post', () => {
    expect(getPostBySlug('scalable-react-typescript')?.title).toContain(
      'Scalable React'
    );
  });

  it('getPostBySlug returns undefined for an unknown slug', () => {
    expect(getPostBySlug('does-not-exist')).toBeUndefined();
  });
});
