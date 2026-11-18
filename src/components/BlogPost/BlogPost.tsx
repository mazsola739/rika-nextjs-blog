import Image from 'next/image';
import Link from 'next/link';
import Tag from '../Tag/Tag';
import { capitalize, formatDate, formatNumber, truncate } from '@/utils/helpers';
import { BlogPostProps } from './BlogPost.props';
import styles from './BlogPost.module.scss';
import { ArrowUpRight } from '../Icons/Icons';

/**
 * Blog post card: cover image, date and stats, title, a short excerpt
 * (first 80 characters), tags and a "Read more" link to the post page.
 */
const BlogPost = ({ post, imageSizes, preloadImage = false }: BlogPostProps) => {
  const href = `/posts/${post.id}` as const;

  return (
    <article className={styles['blog-post']}>
      <Image src={post.image} alt={post.title} width={800} height={400} sizes={imageSizes} preload={preloadImage} className={styles['blog-post-image']} />

      <div className={styles['blog-post-content']}>
        <p className={styles['blog-post-date']}>
          <time dateTime={post.date}>{formatDate(post.date)}</time> • {formatNumber(post.views)} views • {post.readingTime}
        </p>

        <h3 className={styles['blog-post-title']}>
          <Link href={href}>{capitalize(post.title)}</Link>
          <ArrowUpRight aria-hidden="true" />
        </h3>

        <p className={styles['blog-post-description']}>{truncate(post.description, 80)}</p>

        <div className={styles['blog-post-footer']}>
          <ul className={styles.tags} aria-label="Tags">
            {post.tags.map((tag) => (
              <li key={tag}>
                <Tag tag={tag} />
              </li>
            ))}
          </ul>

          <div className={styles['blog-post-meta']}>
            <Link href={href} className={styles['read-more']} aria-label={`Read more: ${capitalize(post.title)}`}>
              Read more
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
