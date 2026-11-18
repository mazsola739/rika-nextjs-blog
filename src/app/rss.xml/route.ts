import { SITE_URL } from '@/constants/site';
import { getPosts } from '@/services/posts';
import { capitalize } from '@/utils/helpers';

/** The feed is written to a static `rss.xml` file at build time (required by the static export). */
export const dynamic = 'force-static';

const XML_ENTITIES: Record<string, string> = { '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' };
const escapeXml = (text: string) => text.replace(/[<>&'"]/g, (char) => XML_ENTITIES[char]);

/** RSS 2.0 feed of all posts (`/rss.xml`), linked from the footer. */
export async function GET() {
  const posts = await getPosts();

  const items = posts
    .map(
      (post) => `
    <item>
      <title>${escapeXml(capitalize(post.title))}</title>
      <link>${SITE_URL}/posts/${post.id}/</link>
      <guid>${SITE_URL}/posts/${post.id}/</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`
    )
    .join('');

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Rika's Blog</title>
    <link>${SITE_URL}/</link>
    <description>A simple, responsive blog built with Next.js, React and SCSS.</description>${items}
  </channel>
</rss>`;

  return new Response(feed, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
