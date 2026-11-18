import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Tag from '@/components/Tag/Tag';
import { ArrowLeft } from '@/components/Icons/Icons';
import { getPost, getPosts } from '@/services/posts';
import { capitalize, formatDate, formatNumber, truncate } from '@/utils/helpers';
import styles from './page.module.scss';

type PostPageProps = {
  params: Promise<{ id: string }>;
};

/** Only the ids returned by `generateStaticParams` exist; any other id is a 404. */
export const dynamicParams = false;

/** Pre-renders every post page at build time (static HTML). */
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ id: String(post.id) }));
}

/** Page title, description and social preview image for the post. */
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(Number(id));
  if (!post) return {};

  const title = capitalize(post.title);
  const description = truncate(capitalize(post.description), 160);
  return {
    title,
    description,
    openGraph: { type: 'article', title, description, publishedTime: post.date, images: [post.image] },
  };
}

/** Post detail page (`/posts/[id]`). */
export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = await getPost(Number(id));
  if (!post) notFound();

  return (
    <article className={styles.post}>
      <Link href="/" className={styles.back}>
        <ArrowLeft aria-hidden="true" /> All posts
      </Link>

      <p className={styles.meta}>
        <time dateTime={post.date}>{formatDate(post.date)}</time> • {formatNumber(post.views)} views • {post.readingTime}
      </p>

      <h2 className={styles.title}>{capitalize(post.title)}</h2>

      <Image src={post.image} alt={post.title} width={800} height={400} sizes="(min-width: 840px) 800px, 100vw" preload className={styles.image} />

      <p className={styles.body}>{capitalize(post.description)}</p>

      <ul className={styles.tags} aria-label="Tags">
        {post.tags.map((tag) => (
          <li key={tag}>
            <Tag tag={tag} />
          </li>
        ))}
      </ul>
    </article>
  );
}
