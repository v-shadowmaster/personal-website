import { SkillsLoading } from '@/components/loading/skills-loading';

// Real Suspense boundary shown only while the segment streams in
// (near-instant for this static page — no artificial delay).
export default function Loading() {
  return <SkillsLoading />;
}
